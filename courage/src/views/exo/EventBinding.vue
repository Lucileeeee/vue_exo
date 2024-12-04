<template>
  <div class="bg-info-subtle">
    <button @click="diminuer()">-</button>
    <button @click="diminuer33()">Maxi - </button>
   <p>Le nombre : {{ nb }}</p>
  <button @click="augmenter()">+</button>
  <button @click="augmenter33()">Maxi + </button>
</div>
</template>

<script setup lang='js'>
import { ref } from 'vue';

let nb = ref(40);

function augmenter(){
  nb.value ++ ;
}

function diminuer(){
  nb.value --;
}

function augmenter33(){
  nb.value += 33 ;
}

function diminuer33(){
  nb.value -= 33;
}

</script>

<style scoped lang="css">
</style>