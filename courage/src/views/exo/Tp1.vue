<template>
  <div class="bg-info-subtle">
    <div v-html="unTitre" class="text-center"></div>
    <img :src="leLien" class="text-center">
    <!-- Directive v-html pour afficher du code HTML contenu dans une variable String unTemplateLivre -->
    <p>Nom : {{ nom }}</p>
    <p>Prénom : {{ prenom }}</p>
    <p>Âge : {{ age }}</p>
    <p>Nombre Fétiche : {{ getRandomInt() }}</p>
    <p>Age + 10 : {{ agePlus10(age) }}</p>
    <input v-model="text" placeholder="J'adore le Jambon">
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';

const leLien = ref('https://picsum.photos/200/200');
const nom = ref('Zilbermann');
const prenom = ref('Lucile');
const age = ref(33);

//todo: reconstituer le template avec des p 
const unTitre = ref(`<h1>Fiche Utilisateur :</h1>`);

function getRandomInt() {
  return Math.floor(Math.random()*187);
}
function agePlus10(age){
  return age += 10;
}

</script>

<style scoped lang="css">
</style>