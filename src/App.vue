<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import AdminView from "@/AdminView.vue";
import {
  readMasterDoc,
  updateMasterDoc,
  isDrawActive,
  fetchParticipants,
  fetchPreviousDraw,
  solveListDraw
} from "@/drawService.js";

const resultsMaj = ref([]);
const resultsMin = ref([]);
const drawDone = ref(false);
const isLoading = ref(true);
const drawError = ref("");

const isAdminPage = ref(false);

function detectAdminRoute() {
  const path = window.location.pathname.replace(/\/+$/, "");
  const hash = window.location.hash;
  const searchParams = new URLSearchParams(window.location.search);

  isAdminPage.value =
    path.endsWith("/admin") ||
    hash === "#/admin" ||
    hash === "#admin" ||
    searchParams.has("admin");
}

function exitAdmin() {
  const baseUrl = import.meta.env.BASE_URL || "/";
  window.history.pushState({}, document.title, baseUrl);
  isAdminPage.value = false;
  loadDrawResults();
}

async function loadDrawResults() {
  isLoading.value = true;
  drawError.value = "";
  try {
    const data = await readMasterDoc();
    if (isDrawActive(data)) {
      resultsMaj.value = data.maj || [];
      resultsMin.value = data.min || [];
      drawDone.value = true;
    } else {
      resultsMaj.value = [];
      resultsMin.value = [];
      drawDone.value = false;
    }
  } catch (error) {
    console.error("Erreur lors du chargement des résultats:", error);
    drawDone.value = false;
  } finally {
    isLoading.value = false;
  }
}

async function runDraw() {
  if (drawDone.value) {
    return;
  }
  drawError.value = "";

  try {
    const masterData = await readMasterDoc();
    const [participantsData, prevDrawData] = await Promise.all([
      fetchParticipants(masterData),
      fetchPreviousDraw(masterData)
    ]);

    const listMaj = participantsData.maj;
    const listMin = participantsData.min;
    const prevPairs = prevDrawData?.pairs || {};

    const finalResultsMaj = solveListDraw(listMaj, prevPairs);
    if (!finalResultsMaj) {
      drawError.value =
        "Tirage impossible pour la Liste 1 (trop d'exclusions). Vérifiez la configuration dans la page admin.";
      return;
    }

    const finalResultsMin = solveListDraw(listMin, prevPairs);
    if (!finalResultsMin) {
      drawError.value =
        "Tirage impossible pour la Liste 2 (trop d'exclusions). Vérifiez la configuration dans la page admin.";
      return;
    }

    await updateMasterDoc(state => ({
      ...state,
      maj: finalResultsMaj,
      min: finalResultsMin,
      drawDone: true,
      timestamp: new Date().toISOString()
    }));

    resultsMaj.value = finalResultsMaj;
    resultsMin.value = finalResultsMin;
    drawDone.value = true;
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du tirage:", error);
    drawError.value = "Une erreur est survenue lors de l'enregistrement du tirage.";
  }
}

onMounted(async () => {
  detectAdminRoute();
  window.addEventListener("popstate", detectAdminRoute);
  window.addEventListener("hashchange", detectAdminRoute);

  if (!isAdminPage.value) {
    await loadDrawResults();
  } else {
    isLoading.value = false;
  }
});

onUnmounted(() => {
  window.removeEventListener("popstate", detectAdminRoute);
  window.removeEventListener("hashchange", detectAdminRoute);
});
</script>

<template>
  <div class="page">
    <!-- SOUS-PAGE ADMIN (accessible uniquement via le lien caché) -->
    <AdminView v-if="isAdminPage" @exit-admin="exitAdmin" />

    <!-- PAGE PUBLIQUE DU TIRAGE -->
    <div v-else class="card">
      <h1>Tirage au sort Noël</h1>

      <div v-if="isLoading" class="center">
        <p>Vérification du tirage en cours...</p>
      </div>

      <div v-else-if="!drawDone" class="center draw-action-col">
        <button @click="runDraw">Lancer le tirage</button>
        <p v-if="drawError" class="error-text">{{ drawError }}</p>
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
  background-image: url("/winter.jpg");
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

.draw-action-col {
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.error-text {
  color: #d9534f;
  font-weight: bold;
  margin: 0;
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
