<template>
  <h1>Function : </h1>
  <div class="bg-info-subtle"></div>
  <p> {{ renvoyerLivre() }} </p>

</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { ref } from 'vue';


let livre = ref('');

function renvoyerLivre(){
  let nb = Math.random();
  if (nb < 0.5){
    livre = 'Le Petit Prince';
  } else {
    livre = 'King Kong Théorie';
  }
  return livre
}

</script>

<style scoped lang="css">
</style>