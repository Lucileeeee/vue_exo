<template>
  <h1>Event Binding : </h1>
  <div class="bg-info-subtle">
    <button @click="diminuer()">-</button>
    <button @click="diminuerMaxi(33)">Maxi - </button>
    <p>Le nombre : {{ nb }}</p>
    <button @click="augmenter()">+</button>
    <button @click="augmenterMaxi(33)">Maxi + </button>
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

function augmenterMaxi(n){
  nb.value += n ;
}

function diminuerMaxi(n){
  nb.value -= n;
}

</script>

<style scoped lang="css">
</style>