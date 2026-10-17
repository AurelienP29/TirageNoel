<script setup>
import { ref, computed, onMounted } from "vue";
import {
  readMasterDoc,
  isDrawActive,
  fetchParticipants,
  saveParticipantsToFirestore,
  fetchPreviousDraw,
  savePreviousDrawToFirestore,
  resetCurrentDrawInFirestore,
  parseDrawToMap,
  solveListDraw
} from "@/drawService.js";

const emit = defineEmits(["exit-admin"]);

const isLoading = ref(true);
const isSavingLists = ref(false);
const isSavingPrevDraw = ref(false);
const isResettingDraw = ref(false);

const statusMessage = ref("");
const statusType = ref("success"); // 'success' | 'error' | 'info'

// État du tirage actuel
const currentDrawExists = ref(false);
const currentDrawMaj = ref([]);
const currentDrawMin = ref([]);
const currentDrawTimestamp = ref(null);

// État du tirage mémorisé (N-1)
const previousDraw = ref(null);
const showPrevDrawDetails = ref(false);
const showCurrentDrawDetails = ref(false);

// Listes de participants
const listMaj = ref([]);
const listMin = ref([]);
const listsSavedInDb = ref(false);

// Formulaire d'ajout de personne
const newPersonMaj = ref("");
const newPersonMin = ref("");
const mutualExclusionMode = ref(true);

// Gestion de l'ouverture du panneau d'exclusions par personne
const expandedExclusionsPerson = ref(null);

// Drag & Drop state
const draggedItem = ref(null); // { personName, fromList: 'maj' | 'min', index }
const dragOverList = ref(null); // 'maj' | 'min' | null

function notify(msg, type = "success") {
  statusMessage.value = msg;
  statusType.value = type;
  setTimeout(() => {
    if (statusMessage.value === msg) {
      statusMessage.value = "";
    }
  }, 4500);
}

const previousYearMap = computed(() => {
  return previousDraw.value?.pairs || {};
});

// Vérifie si le tirage actuel est déjà strictement identique au tirage N-1 mémorisé
const isCurrentDrawAlreadySavedAsPrev = computed(() => {
  if (!currentDrawExists.value || !previousDraw.value) return false;
  const currMap = parseDrawToMap({ maj: currentDrawMaj.value, min: currentDrawMin.value });
  const prevMap = previousYearMap.value;
  const currKeys = Object.keys(currMap);
  const prevKeys = Object.keys(prevMap);
  if (currKeys.length === 0 || currKeys.length !== prevKeys.length) return false;
  return currKeys.every(k => currMap[k] === prevMap[k]);
});

// Vérification en direct de la faisabilité mathématique du tirage pour chaque liste
const drawFeasibilityMaj = computed(() => {
  if (listMaj.value.length === 0) return { ok: true, msg: "Liste vide" };
  if (listMaj.value.length < 2) return { ok: false, msg: "Il faut au moins 2 personnes" };
  const res = solveListDraw(listMaj.value, previousYearMap.value);
  return res
    ? { ok: true, msg: "Tirage valide et possible" }
    : { ok: false, msg: "Tirage impossible avec ces exclusions !" };
});

const drawFeasibilityMin = computed(() => {
  if (listMin.value.length === 0) return { ok: true, msg: "Liste vide" };
  if (listMin.value.length < 2) return { ok: false, msg: "Il faut au moins 2 personnes" };
  const res = solveListDraw(listMin.value, previousYearMap.value);
  return res
    ? { ok: true, msg: "Tirage valide et possible" }
    : { ok: false, msg: "Tirage impossible avec ces exclusions !" };
});

async function loadAdminData() {
  isLoading.value = true;
  try {
    const masterData = await readMasterDoc();
    const [prevData, partData] = await Promise.all([
      fetchPreviousDraw(masterData),
      fetchParticipants(masterData)
    ]);

    if (isDrawActive(masterData)) {
      currentDrawMaj.value = masterData.maj || [];
      currentDrawMin.value = masterData.min || [];
      currentDrawTimestamp.value = masterData.timestamp || null;
      currentDrawExists.value = true;
    } else {
      currentDrawMaj.value = [];
      currentDrawMin.value = [];
      currentDrawTimestamp.value = null;
      currentDrawExists.value = false;
    }

    previousDraw.value = prevData;
    listMaj.value = partData.maj;
    listMin.value = partData.min;
    listsSavedInDb.value = partData.fromFirestore;
  } catch (error) {
    console.error("Erreur de chargement Admin:", error);
    notify("Erreur lors du chargement des données depuis Firebase.", "error");
  } finally {
    isLoading.value = false;
  }
}

async function handleSaveCurrentAsPrevious() {
  if (!currentDrawExists.value) {
    notify("Aucun tirage actuel à enregistrer.", "error");
    return;
  }

  if (
    previousDraw.value &&
    !isCurrentDrawAlreadySavedAsPrev.value &&
    !confirm(
      "Un tirage N-1 est déjà en mémoire. Voulez-vous le remplacer par le tirage actuel ?"
    )
  ) {
    return;
  }

  isSavingPrevDraw.value = true;
  try {
    const saved = await savePreviousDrawToFirestore(currentDrawMaj.value, currentDrawMin.value);
    previousDraw.value = saved;
    notify("Le tirage actuel a bien été enregistré en mémoire (Année N-1) !");
  } catch (error) {
    console.error("Erreur sauvegarde tirage N-1:", error);
    notify(`Erreur lors de la sauvegarde : ${error.message || error.code}`, "error");
  } finally {
    isSavingPrevDraw.value = false;
  }
}

async function handleResetCurrentDraw() {
  if (!currentDrawExists.value) return;

  let warningMsg = "Voulez-vous vraiment réinitialiser le tirage actuel ? Le bouton « Lancer le tirage » réapparaîtra sur le site.";
  if (!isCurrentDrawAlreadySavedAsPrev.value) {
    warningMsg =
      "⚠️ ATTENTION : Le tirage actuel n'a PAS encore été enregistré en mémoire (Année N-1).\n\n" +
      "Si vous voulez empêcher les personnes de retomber sur le tirage affiché actuellement, cliquez d'abord sur « Enregistrer le tirage actuel en mémoire ».\n\n" +
      "Voulez-vous quand même supprimer le tirage actuel sans le mémoriser ?";
  }

  if (!confirm(warningMsg)) {
    return;
  }

  isResettingDraw.value = true;
  try {
    await resetCurrentDrawInFirestore();
    currentDrawExists.value = false;
    currentDrawMaj.value = [];
    currentDrawMin.value = [];
    currentDrawTimestamp.value = null;
    notify("Le tirage actuel a été réinitialisé ! Un nouveau tirage peut être lancé.");
  } catch (error) {
    console.error("Erreur lors de la réinitialisation:", error);
    notify(`Échec de la réinitialisation : ${error.message || error.code}`, "error");
  } finally {
    isResettingDraw.value = false;
  }
}

async function persistLists(customMessage = "Modifications enregistrées !") {
  isSavingLists.value = true;
  try {
    await saveParticipantsToFirestore(listMaj.value, listMin.value);
    listsSavedInDb.value = true;
    if (customMessage) {
      notify(customMessage, "success");
    }
  } catch (error) {
    console.error("Erreur sauvegarde participants:", error);
    notify(`Erreur lors de l'enregistrement des listes : ${error.message || error.code}`, "error");
  } finally {
    isSavingLists.value = false;
  }
}

function getAllNames() {
  return [
    ...listMaj.value.map(p => p.name.toLowerCase()),
    ...listMin.value.map(p => p.name.toLowerCase())
  ];
}

async function addPerson(targetListKey) {
  const inputRef = targetListKey === "maj" ? newPersonMaj : newPersonMin;
  const rawName = inputRef.value.trim();
  if (!rawName) return;

  if (getAllNames().includes(rawName.toLowerCase())) {
    notify(`« ${rawName} » est déjà présent(e) dans une des listes.`, "error");
    return;
  }

  const targetArray = targetListKey === "maj" ? listMaj.value : listMin.value;
  targetArray.push({
    name: rawName,
    exclusions: []
  });
  inputRef.value = "";
  await persistLists(`« ${rawName} » a été ajouté(e) à la ${targetListKey === "maj" ? "Liste 1" : "Liste 2"}.`);
}

async function removePerson(listKey, personName) {
  if (!confirm(`Supprimer « ${personName} » de la liste ?`)) return;

  if (listKey === "maj") {
    listMaj.value = listMaj.value.filter(p => p.name !== personName);
  } else {
    listMin.value = listMin.value.filter(p => p.name !== personName);
  }

  // Nettoyer le nom dans les exclusions de tout le monde
  for (const p of [...listMaj.value, ...listMin.value]) {
    p.exclusions = p.exclusions.filter(ex => ex !== personName);
  }

  if (expandedExclusionsPerson.value === personName) {
    expandedExclusionsPerson.value = null;
  }

  await persistLists(`« ${personName} » a été supprimé(e).`);
}

async function movePerson(fromKey, personName, targetIndex = null) {
  const sourceList = fromKey === "maj" ? listMaj.value : listMin.value;
  const destList = fromKey === "maj" ? listMin.value : listMaj.value;
  const idx = sourceList.findIndex(p => p.name === personName);
  if (idx === -1) return;

  const [person] = sourceList.splice(idx, 1);
  if (targetIndex !== null && targetIndex >= 0 && targetIndex <= destList.length) {
    destList.splice(targetIndex, 0, person);
  } else {
    destList.push(person);
  }

  const destLabel = fromKey === "maj" ? "Liste 2" : "Liste 1";
  await persistLists(`« ${personName} » a été déplacé(e) vers la ${destLabel}.`);
}

// Drag & Drop handlers
function onDragStart(event, fromKey, index, personName) {
  draggedItem.value = { fromKey, index, personName };
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", personName);
  }
}

function onDragOverList(event, listKey) {
  event.preventDefault();
  dragOverList.value = listKey;
}

function onDragLeaveList(listKey) {
  if (dragOverList.value === listKey) {
    dragOverList.value = null;
  }
}

async function onDropOnList(event, targetListKey, targetIndex = null) {
  event.preventDefault();
  dragOverList.value = null;
  if (!draggedItem.value) return;

  const { fromKey, index: sourceIndex, personName } = draggedItem.value;
  draggedItem.value = null;

  if (fromKey === targetListKey) {
    // Réorganisation au sein de la même liste
    if (targetIndex === null || targetIndex === sourceIndex) return;
    const list = targetListKey === "maj" ? listMaj.value : listMin.value;
    const [moved] = list.splice(sourceIndex, 1);
    const insertAt = targetIndex > sourceIndex ? targetIndex - 1 : targetIndex;
    list.splice(insertAt, 0, moved);
    await persistLists("Ordre de la liste mis à jour.");
  } else {
    await movePerson(fromKey, personName, targetIndex);
  }
}

function onDragEnd() {
  draggedItem.value = null;
  dragOverList.value = null;
}

function getExclusionCandidates(listKey, person) {
  const list = listKey === "maj" ? listMaj.value : listMin.value;
  const sameListNames = list.filter(p => p.name !== person.name).map(p => p.name);
  const extraExcluded = (person.exclusions || []).filter(
    name => name !== person.name && !sameListNames.includes(name)
  );
  return [...sameListNames, ...extraExcluded];
}

function toggleExclusionsPanel(personName) {
  if (expandedExclusionsPerson.value === personName) {
    expandedExclusionsPerson.value = null;
  } else {
    expandedExclusionsPerson.value = personName;
  }
}

async function toggleExclusion(listKey, person, otherName) {
  const list = listKey === "maj" ? listMaj.value : listMin.value;
  const hasExclusion = person.exclusions.includes(otherName);

  if (hasExclusion) {
    person.exclusions = person.exclusions.filter(n => n !== otherName);
    if (mutualExclusionMode.value) {
      const otherPerson = list.find(p => p.name === otherName);
      if (otherPerson) {
        otherPerson.exclusions = otherPerson.exclusions.filter(n => n !== person.name);
      }
    }
  } else {
    person.exclusions.push(otherName);
    if (mutualExclusionMode.value) {
      const otherPerson = list.find(p => p.name === otherName);
      if (otherPerson && !otherPerson.exclusions.includes(person.name)) {
        otherPerson.exclusions.push(person.name);
      }
    }
  }

  await persistLists("Exclusions mises à jour.");
}

function formatDate(isoStr) {
  if (!isoStr) return "";
  try {
    return new Date(isoStr).toLocaleString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return isoStr;
  }
}

onMounted(() => {
  loadAdminData();
});
</script>

<template>
  <div class="admin-container">
    <div class="admin-header">
      <div>
        <h1>🎄 Administration — Tirage de Noël</h1>
        <p class="subtitle">
          Gérez la mémoire de l'année dernière, réinitialisez le tirage et organisez les listes de participants.
        </p>
      </div>
      <button class="btn-secondary" @click="emit('exit-admin')">
        ← Retour à la page du tirage
      </button>
    </div>

    <!-- Bannière de notification -->
    <transition name="fade">
      <div v-if="statusMessage" :class="['status-banner', statusType]">
        {{ statusMessage }}
      </div>
    </transition>

    <div v-if="isLoading" class="loading-box">
      <p>Chargement des données d'administration...</p>
    </div>

    <template v-else>
      <!-- SECTION 1 : TIRAGE ACTUEL & MÉMOIRE N-1 -->
      <section class="admin-section">
        <h2 class="section-title">1. Gestion du Tirage & Mémoire Année N-1</h2>

        <div class="draw-cards-grid">
          <!-- Carte Tirage Actuel -->
          <div class="info-card">
            <div class="info-card-header">
              <h3>🎁 Tirage affiché sur le site</h3>
              <span :class="['badge', currentDrawExists ? 'badge-active' : 'badge-empty']">
                {{ currentDrawExists ? "Tirage en cours" : "Aucun tirage actif" }}
              </span>
            </div>

            <div v-if="currentDrawExists" class="info-card-body">
              <p class="meta-text">
                Effectué le : <strong>{{ formatDate(currentDrawTimestamp) || "Date inconnue" }}</strong>
                ({{ currentDrawMaj.length + currentDrawMin.length }} personnes)
              </p>

              <div
                :class="[
                  'memory-sync-status',
                  isCurrentDrawAlreadySavedAsPrev ? 'synced' : 'not-synced'
                ]"
              >
                <span v-if="isCurrentDrawAlreadySavedAsPrev">
                  ✅ Ce tirage est actuellement enregistré en mémoire (Année N-1).
                </span>
                <span v-else>
                  ⚠️ Ce tirage n'est pas encore enregistré comme mémoire N-1.
                </span>
              </div>

              <div class="action-buttons-stack">
                <button
                  class="btn-primary"
                  :disabled="isSavingPrevDraw || isCurrentDrawAlreadySavedAsPrev"
                  @click="handleSaveCurrentAsPrevious"
                >
                  {{
                    isSavingPrevDraw
                      ? "Enregistrement..."
                      : isCurrentDrawAlreadySavedAsPrev
                      ? "✓ Déjà mémorisé en N-1"
                      : "💾 Enregistrer ce tirage en mémoire (Année N-1)"
                  }}
                </button>

                <button
                  class="btn-danger"
                  :disabled="isResettingDraw"
                  @click="handleResetCurrentDraw"
                >
                  {{ isResettingDraw ? "Réinitialisation..." : "🗑️ Réinitialiser le tirage actuel" }}
                </button>
              </div>

              <button
                class="btn-link"
                @click="showCurrentDrawDetails = !showCurrentDrawDetails"
              >
                {{ showCurrentDrawDetails ? "▲ Masquer le détail du tirage actuel" : "▼ Voir le détail du tirage actuel" }}
              </button>

              <div v-if="showCurrentDrawDetails" class="mini-results">
                <div>
                  <strong>Liste 1 :</strong>
                  <ul class="compact-list">
                    <li v-for="line in currentDrawMaj" :key="line">{{ line }}</li>
                  </ul>
                </div>
                <div>
                  <strong>Liste 2 :</strong>
                  <ul class="compact-list">
                    <li v-for="line in currentDrawMin" :key="line">{{ line }}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div v-else class="info-card-body empty-state">
              <p>
                Le tirage est actuellement réinitialisé. Les visiteurs voient le bouton
                <strong>« Lancer le tirage »</strong> sur la page d'accueil.
              </p>
            </div>
          </div>

          <!-- Carte Mémoire Année N-1 -->
          <div class="info-card">
            <div class="info-card-header">
              <h3>🧠 Tirage mémorisé (Année N-1)</h3>
              <span
                :class="[
                  'badge',
                  Object.keys(previousYearMap).length > 0 ? 'badge-memory' : 'badge-empty'
                ]"
              >
                {{
                  Object.keys(previousYearMap).length > 0
                    ? `${Object.keys(previousYearMap).length} paires mémorisées`
                    : "Aucune mémoire"
                }}
              </span>
            </div>

            <div v-if="Object.keys(previousYearMap).length > 0" class="info-card-body">
              <p class="meta-text">
                Mémorisé le : <strong>{{ formatDate(previousDraw?.timestamp) || "—" }}</strong>
              </p>
              <p class="help-text">
                Lors du prochain tirage, <strong>personne ne pourra retomber</strong> sur la personne qu'il ou elle a tirée dans cette mémoire N-1.
              </p>

              <button
                class="btn-link"
                @click="showPrevDrawDetails = !showPrevDrawDetails"
              >
                {{
                  showPrevDrawDetails
                    ? "▲ Masquer les paires mémorisées (N-1)"
                    : "▼ Voir les paires mémorisées (N-1)"
                }}
              </button>

              <div v-if="showPrevDrawDetails" class="pairs-grid">
                <div
                  v-for="(receiver, giver) in previousYearMap"
                  :key="giver"
                  class="pair-chip"
                >
                  <strong>{{ giver }}</strong> ➔ {{ receiver }}
                </div>
              </div>
            </div>

            <div v-else class="info-card-body empty-state">
              <p>
                Aucun tirage N-1 n'est encore enregistré en mémoire.
                <span v-if="currentDrawExists">
                  Cliquez sur <strong>« Enregistrer ce tirage en mémoire (Année N-1) »</strong> à gauche pour sauvegarder le tirage de l'année dernière !
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2 : GESTION DES LISTES ET PARTICIPANTS -->
      <section class="admin-section">
        <div class="section-header-row">
          <div>
            <h2 class="section-title">2. Organisation des Listes & Participants</h2>
            <p class="section-desc">
              Glissez-déposez les personnes d'une liste à l'autre (ou utilisez les flèches ⇄), ajoutez de nouveaux participants et configurez leurs exclusions.
            </p>
          </div>
          <div class="save-indicator-box">
            <label class="checkbox-label">
              <input v-model="mutualExclusionMode" type="checkbox" />
              Exclusions réciproques automatiques
            </label>
            <button
              class="btn-primary btn-small"
              :disabled="isSavingLists"
              @click="persistLists('Listes enregistrées dans Firebase !')"
            >
              {{ isSavingLists ? "Enregistrement..." : "💾 Enregistrer les listes" }}
            </button>
          </div>
        </div>

        <div class="lists-editor-grid">
          <!-- LISTE 1 (MAJ) -->
          <div
            :class="['list-column', { 'drag-over': dragOverList === 'maj' }]"
            @dragover="onDragOverList($event, 'maj')"
            @dragleave="onDragLeaveList('maj')"
            @drop="onDropOnList($event, 'maj')"
          >
            <div class="list-column-header">
              <h3>Liste 1 ({{ listMaj.length }})</h3>
              <span :class="['feasibility-badge', drawFeasibilityMaj.ok ? 'ok' : 'err']">
                {{ drawFeasibilityMaj.ok ? "✓ " : "⚠️ " }}{{ drawFeasibilityMaj.msg }}
              </span>
            </div>

            <!-- Formulaire d'ajout Liste 1 -->
            <form class="add-person-form" @submit.prevent="addPerson('maj')">
              <input
                v-model="newPersonMaj"
                type="text"
                placeholder="Ajouter un prénom dans la Liste 1..."
                class="text-input"
              />
              <button type="submit" class="btn-add" :disabled="!newPersonMaj.trim()">
                + Ajouter
              </button>
            </form>

            <!-- Liste des personnes Liste 1 -->
            <div class="participants-stack">
              <div
                v-for="(person, index) in listMaj"
                :key="person.name"
                class="participant-item"
                draggable="true"
                @dragstart="onDragStart($event, 'maj', index, person.name)"
                @dragend="onDragEnd"
                @dragover.prevent
                @drop.stop="onDropOnList($event, 'maj', index)"
              >
                <div class="participant-main-row">
                  <div class="participant-left">
                    <span class="drag-handle" title="Glisser pour déplacer">⠿</span>
                    <div class="participant-info">
                      <span class="participant-name">{{ person.name }}</span>
                      <div class="participant-badges">
                        <span
                          v-if="previousYearMap[person.name]"
                          class="tag-n1"
                          :title="`Avait tiré ${previousYearMap[person.name]} l'année dernière (exclu automatiquement)`"
                        >
                          🔒 N-1 : {{ previousYearMap[person.name] }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="participant-actions">
                    <button
                      type="button"
                      :class="[
                        'btn-chip',
                        { active: expandedExclusionsPerson === person.name }
                      ]"
                      @click="toggleExclusionsPanel(person.name)"
                      title="Gérer les exclusions de cette personne"
                    >
                      🚫 Exclusions ({{ person.exclusions.length }})
                    </button>

                    <button
                      type="button"
                      class="btn-move"
                      title="Envoyer dans la Liste 2"
                      @click="movePerson('maj', person.name)"
                    >
                      Liste 2 ➔
                    </button>

                    <button
                      type="button"
                      class="btn-delete"
                      title="Supprimer cette personne"
                      @click="removePerson('maj', person.name)"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                <!-- Résumé rapide des exclusions quand fermé -->
                <div
                  v-if="person.exclusions.length > 0 && expandedExclusionsPerson !== person.name"
                  class="exclusions-preview"
                >
                  Ne peut pas tirer : {{ person.exclusions.join(", ") }}
                </div>

                <!-- Panneau d'édition des exclusions -->
                <div
                  v-if="expandedExclusionsPerson === person.name"
                  class="exclusions-panel"
                >
                  <p class="exclusions-panel-title">
                    Qui <strong>{{ person.name }}</strong> ne peut-il/elle PAS tirer ?
                    <span class="exclusions-hint">(Cliquez sur un prénom pour l'exclure / l'autoriser)</span>
                  </p>
                  <div class="exclusions-chips">
                    <button
                      v-for="otherName in getExclusionCandidates('maj', person)"
                      :key="otherName"
                      type="button"
                      :class="[
                        'excl-toggle-chip',
                        { excluded: person.exclusions.includes(otherName) }
                      ]"
                      @click="toggleExclusion('maj', person, otherName)"
                    >
                      {{ person.exclusions.includes(otherName) ? "✕ " : "+ " }}{{ otherName }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- LISTE 2 (MIN) -->
          <div
            :class="['list-column', { 'drag-over': dragOverList === 'min' }]"
            @dragover="onDragOverList($event, 'min')"
            @dragleave="onDragLeaveList('min')"
            @drop="onDropOnList($event, 'min')"
          >
            <div class="list-column-header">
              <h3>Liste 2 ({{ listMin.length }})</h3>
              <span :class="['feasibility-badge', drawFeasibilityMin.ok ? 'ok' : 'err']">
                {{ drawFeasibilityMin.ok ? "✓ " : "⚠️ " }}{{ drawFeasibilityMin.msg }}
              </span>
            </div>

            <!-- Formulaire d'ajout Liste 2 -->
            <form class="add-person-form" @submit.prevent="addPerson('min')">
              <input
                v-model="newPersonMin"
                type="text"
                placeholder="Ajouter un prénom dans la Liste 2..."
                class="text-input"
              />
              <button type="submit" class="btn-add" :disabled="!newPersonMin.trim()">
                + Ajouter
              </button>
            </form>

            <!-- Liste des personnes Liste 2 -->
            <div class="participants-stack">
              <div
                v-for="(person, index) in listMin"
                :key="person.name"
                class="participant-item"
                draggable="true"
                @dragstart="onDragStart($event, 'min', index, person.name)"
                @dragend="onDragEnd"
                @dragover.prevent
                @drop.stop="onDropOnList($event, 'min', index)"
              >
                <div class="participant-main-row">
                  <div class="participant-left">
                    <span class="drag-handle" title="Glisser pour déplacer">⠿</span>
                    <div class="participant-info">
                      <span class="participant-name">{{ person.name }}</span>
                      <div class="participant-badges">
                        <span
                          v-if="previousYearMap[person.name]"
                          class="tag-n1"
                          :title="`Avait tiré ${previousYearMap[person.name]} l'année dernière (exclu automatiquement)`"
                        >
                          🔒 N-1 : {{ previousYearMap[person.name] }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="participant-actions">
                    <button
                      type="button"
                      class="btn-move"
                      title="Envoyer dans la Liste 1"
                      @click="movePerson('min', person.name)"
                    >
                      ⬅ Liste 1
                    </button>

                    <button
                      type="button"
                      :class="[
                        'btn-chip',
                        { active: expandedExclusionsPerson === person.name }
                      ]"
                      @click="toggleExclusionsPanel(person.name)"
                      title="Gérer les exclusions de cette personne"
                    >
                      🚫 Exclusions ({{ person.exclusions.length }})
                    </button>

                    <button
                      type="button"
                      class="btn-delete"
                      title="Supprimer cette personne"
                      @click="removePerson('min', person.name)"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                <!-- Résumé rapide des exclusions quand fermé -->
                <div
                  v-if="person.exclusions.length > 0 && expandedExclusionsPerson !== person.name"
                  class="exclusions-preview"
                >
                  Ne peut pas tirer : {{ person.exclusions.join(", ") }}
                </div>

                <!-- Panneau d'édition des exclusions -->
                <div
                  v-if="expandedExclusionsPerson === person.name"
                  class="exclusions-panel"
                >
                  <p class="exclusions-panel-title">
                    Qui <strong>{{ person.name }}</strong> ne peut-il/elle PAS tirer ?
                    <span class="exclusions-hint">(Cliquez sur un prénom pour l'exclure / l'autoriser)</span>
                  </p>
                  <div class="exclusions-chips">
                    <button
                      v-for="otherName in getExclusionCandidates('min', person)"
                      :key="otherName"
                      type="button"
                      :class="[
                        'excl-toggle-chip',
                        { excluded: person.exclusions.includes(otherName) }
                      ]"
                      @click="toggleExclusion('min', person, otherName)"
                    >
                      {{ person.exclusions.includes(otherName) ? "✕ " : "+ " }}{{ otherName }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped>
.admin-container {
  width: min(95vw, 1220px);
  max-width: 1220px;
  background-color: rgba(255, 255, 255, 0.96);
  padding: 28px 32px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  color: #2c3e50;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  border-bottom: 2px solid #eee;
  padding-bottom: 16px;
}

.admin-header h1 {
  margin: 0;
  font-size: 26px;
  color: #c0392b;
  padding: 0;
}

.subtitle {
  margin: 6px 0 0 0;
  color: #555;
  font-size: 14px;
}

.status-banner {
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
}

.status-banner.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.status-banner.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.loading-box {
  text-align: center;
  padding: 40px;
  font-size: 18px;
}

.admin-section {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 20px 24px;
}

.section-title {
  margin: 0 0 14px 0;
  font-size: 20px;
  color: #1e293b;
  border-bottom: none;
  text-align: left;
  padding: 0;
}

.section-desc {
  margin: -8px 0 0 0;
  font-size: 14px;
  color: #64748b;
}

.section-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 18px;
}

.save-indicator-box {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #334155;
  cursor: pointer;
  user-select: none;
}

.draw-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

.info-card {
  background: white;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.info-card-header h3 {
  margin: 0;
  font-size: 17px;
  color: #0f172a;
}

.badge {
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
}

.badge-active {
  background: #dcfce7;
  color: #166534;
}

.badge-memory {
  background: #dbeafe;
  color: #1e40af;
}

.badge-empty {
  background: #f1f5f9;
  color: #64748b;
}

.meta-text {
  margin: 0;
  font-size: 13px;
  color: #475569;
}

.help-text {
  margin: 4px 0;
  font-size: 13.5px;
  color: #334155;
  line-height: 1.45;
}

.memory-sync-status {
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 13.5px;
  font-weight: 600;
}

.memory-sync-status.synced {
  background: #ecfdf5;
  color: #065f46;
  border: 1px solid #a7f3d0;
}

.memory-sync-status.not-synced {
  background: #fffbeb;
  color: #92400e;
  border: 1px solid #fde68a;
}

.action-buttons-stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 6px;
}

button.btn-primary {
  background-color: #2563eb;
  color: white;
  font-size: 15px;
  padding: 11px 16px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

button.btn-primary:hover:not(:disabled) {
  background-color: #1d4ed8;
}

button.btn-primary:disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
}

button.btn-danger {
  background-color: #dc2626;
  color: white;
  font-size: 15px;
  padding: 11px 16px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

button.btn-danger:hover:not(:disabled) {
  background-color: #b91c1c;
}

button.btn-secondary {
  background-color: #475569;
  color: white;
  font-size: 14px;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
}

button.btn-secondary:hover {
  background-color: #334155;
}

button.btn-small {
  padding: 8px 14px;
  font-size: 14px;
}

button.btn-link {
  background: none;
  color: #2563eb;
  font-size: 13px;
  padding: 4px 0;
  text-align: left;
  font-weight: 600;
}

button.btn-link:hover {
  background: none;
  text-decoration: underline;
}

.mini-results {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  background: #f8fafc;
  padding: 10px;
  border-radius: 8px;
  font-size: 13px;
}

.compact-list {
  columns: 1 !important;
  margin: 6px 0 0 0;
  padding-left: 16px;
  list-style: disc;
}

.compact-list li {
  margin: 3px 0;
}

.pairs-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
  max-height: 210px;
  overflow-y: auto;
}

.pair-chip {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 12.5px;
}

.empty-state {
  color: #64748b;
  font-size: 14px;
}

/* ÉDITEUR DE LISTES */
.lists-editor-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}

.list-column {
  background: white;
  border: 2px solid #cbd5e1;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: border-color 0.2s, background-color 0.2s;
}

.list-column.drag-over {
  border-color: #2563eb;
  background-color: #eff6ff;
}

.list-column-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.list-column-header h3 {
  margin: 0;
  font-size: 18px;
  color: #1e293b;
}

.feasibility-badge {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 9px;
  border-radius: 999px;
}

.feasibility-badge.ok {
  background: #dcfce7;
  color: #166534;
}

.feasibility-badge.err {
  background: #fee2e2;
  color: #991b1b;
}

.add-person-form {
  display: flex;
  gap: 8px;
}

.text-input {
  flex: 1;
  padding: 9px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
}

.text-input:focus {
  outline: 2px solid #2563eb;
  border-color: transparent;
}

button.btn-add {
  background-color: #16a34a;
  color: white;
  font-size: 14px;
  padding: 9px 14px;
  border-radius: 8px;
  font-weight: 600;
}

button.btn-add:hover:not(:disabled) {
  background-color: #15803d;
}

button.btn-add:disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
}

.participants-stack {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 120px;
}

.participant-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px 12px;
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s;
}

.participant-item:hover {
  border-color: #94a3b8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

.participant-main-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.participant-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.drag-handle {
  color: #94a3b8;
  font-size: 18px;
  cursor: grab;
  user-select: none;
}

.participant-info {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.participant-name {
  font-weight: 700;
  font-size: 15.5px;
  color: #0f172a;
}

.tag-n1 {
  font-size: 11.5px;
  background: #e0e7ff;
  color: #3730a3;
  padding: 2px 7px;
  border-radius: 6px;
  font-weight: 600;
}

.participant-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

button.btn-chip {
  background: #e2e8f0;
  color: #334155;
  font-size: 12.5px;
  padding: 5px 9px;
  border-radius: 6px;
  font-weight: 600;
}

button.btn-chip.active,
button.btn-chip:hover {
  background: #334155;
  color: white;
}

button.btn-move {
  background: #dbeafe;
  color: #1e40af;
  font-size: 12.5px;
  padding: 5px 9px;
  border-radius: 6px;
  font-weight: 600;
}

button.btn-move:hover {
  background: #bfdbfe;
}

button.btn-delete {
  background: #fee2e2;
  color: #b91c1c;
  font-size: 13px;
  padding: 5px 8px;
  border-radius: 6px;
  font-weight: 700;
}

button.btn-delete:hover {
  background: #fecaca;
}

.exclusions-preview {
  margin-top: 6px;
  font-size: 12px;
  color: #64748b;
  padding-left: 24px;
}

.exclusions-panel {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed #cbd5e1;
}

.exclusions-panel-title {
  margin: 0 0 8px 0;
  font-size: 13px;
  color: #334155;
}

.exclusions-hint {
  font-size: 11.5px;
  color: #64748b;
  margin-left: 4px;
}

.exclusions-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

button.excl-toggle-chip {
  background: white;
  color: #334155;
  border: 1px solid #cbd5e1;
  font-size: 12.5px;
  padding: 4px 10px;
  border-radius: 999px;
}

button.excl-toggle-chip.excluded {
  background: #dc2626;
  color: white;
  border-color: #dc2626;
  font-weight: 600;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 850px) {
  .admin-container {
    padding: 18px 14px;
  }

  .lists-editor-grid {
    grid-template-columns: 1fr;
  }

  .mini-results {
    grid-template-columns: 1fr;
  }
}
</style>
