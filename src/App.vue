<script setup>
import {participantsMaj, participantsMin} from "@/participants.js";
import {ref, onMounted} from "vue";
import {db} from "@/firebase"
import {doc, getDoc, setDoc} from "firebase/firestore";

const resultsMaj = ref([]);
const resultsMin = ref([]);
const drawDone = ref(false);
const isLoading = ref(true);

const drawRef = doc(db, "results", "draw_results");

async function loadDrawResults() {
  try {
    const docSnap = await getDoc(drawRef);
    if (docSnap.exists()) {
      // Les résultats existent, on les affiche
      const data = docSnap.data();
      resultsMaj.value = data.maj;
      resultsMin.value = data.min;
      drawDone.value = true;
      console.log("Résultats chargés depuis Firestore.");
    } else {
      // Le document n'existe pas, le tirage n'a pas été fait
      drawDone.value = false;
      console.log("Pas de résultats trouvés. Le tirage n'a pas été fait.");
    }
  } catch (error) {
    console.error("Erreur lors du chargement des résultats:", error);
    // On peut quand même permettre le tirage si le chargement échoue
    drawDone.value = false;
  } finally {
    isLoading.value = false; // Fin du chargement
  }
}

async function runDraw() {
  if (drawDone.value) {
    console.log("Le tirage est déjà fait et bloqué.");
    return;
  }

  // Le reste de votre logique de tirage (que je garde inchangée)
  const namesMaj = participantsMaj.map(p => p.name);
  const namesMin = participantsMin.map(p => p.name);
  let receiversMaj = [...namesMaj];
  let receiversMin = [...namesMin];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let successMaj = false;
  let attemptsMaj = 0;
  while (!successMaj && attemptsMaj < 1000) {
    attemptsMaj++;
    shuffle(receiversMaj);
    successMaj = namesMaj.every((name, index) => {
      const receiver = receiversMaj[index];
      if (name === receiver) return false;
      const p = participantsMaj.find(p => p.name === name);
      if (p.exclusions.includes(receiver)) return false;
      return true;
    });
  }

  if (!successMaj) {
    console.log("Tirage Majeur impossible.");
    resultsMaj.value = ["Réessayer"];
    return;
  }

  let successMin = false;
  let attemptsMin = 0;
  while (!successMin && attemptsMin < 1000) {
    attemptsMin++;
    shuffle(receiversMin);
    successMin = namesMin.every((name, index) => {
      const receiver = receiversMin[index];
      if (name === receiver) return false;
      const p = participantsMin.find(p => p.name === name);
      if (p.exclusions.includes(receiver)) return false;
      return true;
    });
  }

  if (!successMin) {
    console.log("Tirage Mineur impossible.");
    resultsMin.value = ["Réessayer"];
    return;
  }
  // Fin de la logique de tirage

  // Formatage des résultats pour l'affichage
  const finalResultsMaj = namesMaj.map((name, index) =>
      `${name} offre à ${receiversMaj[index]}`
  );
  const finalResultsMin = namesMin.map((name, index) =>
      `${name} offre à ${receiversMin[index]}`
  );

  // **NOUVEAU : Enregistrement dans Firestore**
  try {
    const drawData = {
      maj: finalResultsMaj,
      min: finalResultsMin,
      timestamp: new Date().toISOString() // Ajout d'un horodatage
    };
    await setDoc(drawRef, drawData);

    // Mise à jour de l'état local après l'enregistrement
    resultsMaj.value = finalResultsMaj;
    resultsMin.value = finalResultsMin;
    drawDone.value = true;
    console.log("Tirage enregistré et bloqué sur Firestore.");
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du tirage:", error);
    // Gérer l'erreur si l'enregistrement échoue
  }
}

// **NOUVEAU : Chargement des résultats au montage du composant**
onMounted(() => {
  loadDrawResults();
});
</script>
<template>
  <div class="page">
    <div class="card">
      <h1>Tirage au sort Noël</h1>

      <div v-if="isLoading" class="center">
        <p>Vérification du tirage en cours...</p>
      </div>

      <div v-else-if="!drawDone" class="center">
        <button @click="runDraw">Lancer le tirage</button>
      </div>

      <div v-else class="results-container">
        <div class="list-section">
          <h2>Liste 1</h2>
          <ul>
            <li v-for="line in resultsMaj" :key="line" class="result">
              {{ line }}
            </li>
          </ul>
        </div>

        <div class="divider"></div>

        <div class="list-section">
          <h2>Liste 2</h2>
          <ul>
            <li v-for="line in resultsMin" :key="line" class="result">
              {{ line }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body, html {
  min-height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  background-image: url("/src/assets/winter.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.page {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  box-sizing: border-box;
  min-height: 100vh;
  align-items: center;
}

.card {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: min(90vw, 1100px);
  max-width: 1100px;
  height: auto;
  max-height: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

h1 {
  margin: 0;
  padding-top: 6px;
  color: #d9534f;
  font-size: 28px;
}

button {
  padding: 15px 25px;
  font-size: 20px;
  cursor: pointer;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #4cae4c;
}

.center {
  display: flex;
  justify-content: center;
}


ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  columns: 3;
  column-width: 220px;
  column-gap: 28px;
}

li.result {
  display: inline-block;
  width: 100%;
  break-inside: avoid;
  background-color: #87ceeb;
  margin: 8px 0;
  padding: 12px;
  border-radius: 8px;
  font-size: 18px;
  color: black;
  box-sizing: border-box;
  text-align: center;
}

.results-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
}

.list-section {
  flex: 1;
  min-width: 300px;
  max-width: 480px;
  background: rgba(240, 248, 255, 0.8);
  border-radius: 15px;
  padding: 20px 25px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
}

.list-section:hover {
  transform: scale(1.02);
}

h2 {
  color: #2c3e50;
  font-size: 22px;
  margin-bottom: 18px;
  text-align: center;
  border-bottom: 2px solid #d9534f;
  padding-bottom: 6px;
  font-weight: 600;
}

.divider {
  width: 2px;
  background: linear-gradient(to bottom, #d9534f, transparent);
  align-self: stretch;
  opacity: 0.4;
}

@media (max-width: 700px) {
  html, body {
    overflow-x: hidden;
  }

  h1 {
    font-size: 22px;
  }

  ul {
    columns: 1;
  }

  li.result {
    font-size: 18px;
    padding: 12px;
  }

  .results-container {
    flex-direction: column;
    align-items: center;
  }

  .divider {
    display: none;
  }

  .list-section {
    width: 80%;
    max-width: 400px;
  }

  h2 {
    font-size: 20px;
  }
}

</style>
