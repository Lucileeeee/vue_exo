<style scoped lang="css">
</style>
<template>
  <h1>Watchers</h1>
  <div class="container">
    <div class="mb-3">
      <button v-on:click="leNombre++" type="button" class="btn btn-success">+</button>
      <p>{{ leNombre }}</p>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref, watch } from 'vue';

// Déclarez votre variable réactive
const leNombre = ref(0);

// Utilisez `watch` pour surveiller les changements de `leNombre`
// on donne une variable temporaire 'newValue' pour modifier leNombre
// à l'intérieur de la fonction wath
watch(leNombre, (newValue) => {
  if (newValue === 7) {
    leNombre.value = 0;
  }
});
</script>