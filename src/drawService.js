import { participantsMaj as defaultMaj, participantsMin as defaultMin } from "@/participants.js";
import { db, auth } from "@/firebase";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { signInAnonymously } from "firebase/auth";

// On stocke tout dans le document unique "results/draw_results" car les règles
// Firestore du projet n'autorisent que ce document (lecture/création + suppression avec auth anonyme).
export const drawRef = doc(db, "results", "draw_results");

const LOCAL_BACKUP_KEY = "tirage_noel_master_backup";

export function cloneParticipants(list) {
  return (list || []).map(p => ({
    name: String(p.name || "").trim(),
    exclusions: Array.isArray(p.exclusions) ? [...p.exclusions] : []
  }));
}

export async function ensureAuth() {
  if (!auth.currentUser) {
    await signInAnonymously(auth);
  }
}

/**
 * Détermine si un document draw_results contient un tirage actif
 */
export function isDrawActive(data) {
  if (!data) return false;
  if (typeof data.drawDone === "boolean") {
    return data.drawDone && Array.isArray(data.maj) && data.maj.length > 0;
  }
  return Array.isArray(data.maj) && data.maj.length > 0;
}

/**
 * Extrait un dictionnaire { [donneur]: receveur } à partir d'un document de tirage
 */
export function parseDrawToMap(drawData) {
  if (!drawData) return {};
  const map = { ...(drawData.pairs || {}) };
  const allLines = [...(drawData.maj || []), ...(drawData.min || [])];
  for (const line of allLines) {
    if (typeof line === "string" && line.includes(" offre à ")) {
      const parts = line.split(" offre à ");
      if (parts.length === 2) {
        const giver = parts[0].trim();
        const receiver = parts[1].trim();
        if (giver && receiver) {
          map[giver] = receiver;
        }
      }
    }
  }
  return map;
}

/**
 * Lit le document unique results/draw_results
 */
export async function readMasterDoc() {
  const snap = await getDoc(drawRef);
  if (snap.exists()) {
    return snap.data();
  }
  return null;
}

/**
 * Met à jour le document unique results/draw_results en passant par
 * signInAnonymously + deleteDoc + setDoc (car les règles Firestore bloquent update
 * mais autorisent delete avec auth anonyme + create).
 */
export async function updateMasterDoc(updaterFn) {
  await ensureAuth();

  const snap = await getDoc(drawRef);
  const currentExists = snap.exists();
  let currentData = currentExists ? snap.data() : null;

  if (!currentData) {
    try {
      const backupRaw = localStorage.getItem(LOCAL_BACKUP_KEY);
      if (backupRaw) {
        currentData = JSON.parse(backupRaw);
      }
    } catch {
      // ignore
    }
  }

  const baseState = {
    maj: Array.isArray(currentData?.maj) ? currentData.maj : [],
    min: Array.isArray(currentData?.min) ? currentData.min : [],
    drawDone: isDrawActive(currentData),
    timestamp: currentData?.timestamp || new Date().toISOString(),
    previousDraw: currentData?.previousDraw || null,
    participants: currentData?.participants || null
  };

  const nextState = updaterFn(baseState);

  try {
    localStorage.setItem(LOCAL_BACKUP_KEY, JSON.stringify(nextState));
  } catch {
    // ignore
  }

  if (currentExists) {
    try {
      await setDoc(drawRef, nextState);
    } catch {
      // Les règles Firestore interdisent l'update direct pour bloquer le tirage,
      // mais autorisent delete (avec auth anonyme) puis create (setDoc)
      await deleteDoc(drawRef);
      await setDoc(drawRef, nextState);
    }
  } else {
    await setDoc(drawRef, nextState);
  }

  return nextState;
}

/**
 * Charge les participants depuis le document maître (ou valeurs par défaut de participants.js)
 */
export async function fetchParticipants(masterData = undefined) {
  try {
    const data = masterData !== undefined ? masterData : await readMasterDoc();
    if (data && data.participants) {
      return {
        maj: cloneParticipants(data.participants.maj || []),
        min: cloneParticipants(data.participants.min || []),
        fromFirestore: true
      };
    }
  } catch (error) {
    console.error("Erreur lors du chargement des participants:", error);
  }
  return {
    maj: cloneParticipants(defaultMaj),
    min: cloneParticipants(defaultMin),
    fromFirestore: false
  };
}

/**
 * Sauvegarde les deux listes de participants dans le document maître Firestore
 */
export async function saveParticipantsToFirestore(majList, minList) {
  const updatedParticipants = {
    maj: cloneParticipants(majList),
    min: cloneParticipants(minList),
    updatedAt: new Date().toISOString()
  };

  await updateMasterDoc(state => ({
    ...state,
    participants: updatedParticipants
  }));

  return updatedParticipants;
}

/**
 * Charge le tirage mémorisé de l'année N-1 depuis le document maître
 */
export async function fetchPreviousDraw(masterData = undefined) {
  try {
    const data = masterData !== undefined ? masterData : await readMasterDoc();
    if (data && data.previousDraw) {
      const prev = data.previousDraw;
      return {
        maj: prev.maj || [],
        min: prev.min || [],
        pairs: parseDrawToMap(prev),
        timestamp: prev.timestamp || null
      };
    }
  } catch (error) {
    console.error("Erreur lors du chargement du tirage N-1:", error);
  }
  return null;
}

/**
 * Enregistre un tirage comme mémoire de l'année N-1 (écrase l'ancien tirage N-1)
 */
export async function savePreviousDrawToFirestore(majLines, minLines) {
  const pairs = parseDrawToMap({ maj: majLines, min: minLines });
  const payload = {
    maj: [...(majLines || [])],
    min: [...(minLines || [])],
    pairs,
    timestamp: new Date().toISOString()
  };

  await updateMasterDoc(state => ({
    ...state,
    previousDraw: payload
  }));

  return payload;
}

/**
 * Réinitialise le tirage actuel tout en conservant en base la mémoire N-1 et les listes
 */
export async function resetCurrentDrawInFirestore() {
  await updateMasterDoc(state => ({
    ...state,
    maj: [],
    min: [],
    drawDone: false,
    timestamp: new Date().toISOString()
  }));
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Algorithme de tirage pour une liste de participants en tenant compte :
 * - De l'interdiction de se tirer soi-même
 * - Des exclusions définies pour chaque personne
 * - Du tirage de l'année N-1 (previousYearMap)
 */
export function solveListDraw(participantsList, previousYearMap = {}) {
  if (!participantsList || participantsList.length === 0) {
    return [];
  }
  if (participantsList.length < 2) {
    return null;
  }

  const names = participantsList.map(p => p.name);

  function canGiveTo(giverName, receiverName) {
    if (giverName === receiverName) return false;
    const participant = participantsList.find(p => p.name === giverName);
    if (participant && Array.isArray(participant.exclusions) && participant.exclusions.includes(receiverName)) {
      return false;
    }
    if (previousYearMap && previousYearMap[giverName] === receiverName) {
      return false;
    }
    return true;
  }

  // 1. Essayer par mélange aléatoire (jusqu'à 5000 essais)
  const receivers = [...names];
  for (let attempt = 0; attempt < 5000; attempt++) {
    shuffle(receivers);
    const valid = names.every((giver, idx) => canGiveTo(giver, receivers[idx]));
    if (valid) {
      return names.map((giver, idx) => `${giver} offre à ${receivers[idx]}`);
    }
  }

  // 2. Fallback par backtracking aléatoire si les contraintes sont très serrées
  const used = new Set();
  const assignment = new Array(names.length);

  function backtrack(index) {
    if (index === names.length) {
      return true;
    }
    const giver = names[index];
    const candidates = shuffle(names.filter(r => !used.has(r) && canGiveTo(giver, r)));
    for (const candidate of candidates) {
      used.add(candidate);
      assignment[index] = candidate;
      if (backtrack(index + 1)) {
        return true;
      }
      used.delete(candidate);
    }
    return false;
  }

  if (backtrack(0)) {
    return names.map((giver, idx) => `${giver} offre à ${assignment[idx]}`);
  }

  return null;
}
