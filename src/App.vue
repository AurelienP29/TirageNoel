<script setup>
import {participants} from "@/participants.js";
import {ref} from "vue";

const results = ref([])
const drawDone = ref(false)

function runDraw() {
  const names = participants.map(p => p.name)
  let receivers = [...names]

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  let success = false
  let attempts = 0

  while (!success && attempts < 1000) {
    attempts++
    shuffle(receivers)
    success = names.every((name, index) => {
      const receiver = receivers[index]
      if (name === receiver) return false
      const p = participants.find(p => p.name === name)
      if (p.exclusions.includes(receiver)) return false
      return true
    })
  }

  if (!success) {
    results.value = ["Réessayer"]
    return
  }

  results.value = names.map((name, index) =>
      `${name} offre à ${receivers[index]}`)
  drawDone.value = true
}

</script>

<template>
  <div class="page">
    <div class="card">
      <h1>Tirage au sort Noël</h1>

      <div v-if="!drawDone" class="center">
        <button @click="runDraw">Lancer le tirage</button>
      </div>

      <div v-else class="center">
        <ul>
          <li v-for="line in results" :key="line" class="result">
            {{ line }}
          </li>
        </ul>
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
  columns:  3;
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

@media (max-width: 700px) {
  h1{
    font-size: 22px;
  }
  ul{
    columns: 1;
  }
  li.result {
    font-size: 18px;
    padding: 12px;
  }
}

</style>
