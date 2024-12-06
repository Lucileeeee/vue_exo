<template>
  <h1>Tp2: Le nombre Mystère</h1>
  <div class="container">
  <div class="mb-3">
    <button v-on:click="leNombre++" type="button" class="btn btn-success">+</button>
    <button v-on:click="leNombre+=5" type="button" class="btn btn-success">+ 5</button>
    <p>{{ leNombre }}</p>
    <p>{{ resultat }}</p>
  </div>
</div>
</template>

<script setup lang='js'>
import { ref, watch } from 'vue';

// Déclarez votre variable réactive
const leNombre = ref(0);
const leNombreMystere = 7;
const resultat = ref('');

watch(leNombre, (newValue) => {
  if (newValue === leNombreMystere) {
    resultat.value = 'Bravo Vous Avez Trouvé Le Nombre Mystère';
  } else if (newValue < leNombreMystere){
    resultat.value = 'Essaie Encore';
  }else if (newValue > leNombreMystere){
    resultat.value = 'Tu as dépassé Le Nombre Mystère';
    if (newValue === 30){
      console.log('On est à 30');
      setTimeout(()=> {
        console.log('setTimeOut');
        leNombre.value = 0;
        }, 1000);
      
    } 
  }
});

</script>

<style scoped lang="css">
</style>