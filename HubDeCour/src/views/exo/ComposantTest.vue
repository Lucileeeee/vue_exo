<template>
  <div class="bg-warning-subtle">
    <p>Anniversaire : {{ anniversaire }}</p>
    <p>Lieu de Naissance : {{ naissance }}</p>
    <p>Tableau avec les deux d'avant: {{ tableau }}</p>
    <p>Iban: {{ iban }}</p>
    <p>Object: {{ object }}</p>
    <p>Object Valeur de la deuxieme Clé: {{ object.cleDeTreize }}</p>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { ref } from 'vue';
//? variables:
const anniversaire = ref('7 août');
const naissance = ref('Argenteil');
const tableau = ref([anniversaire, naissance]);
const iban = ref(54679097542);
const object = ref({cleDeDouze : 12, cleDeTreize : 678});

</script>

<style scoped lang="css">
</style>