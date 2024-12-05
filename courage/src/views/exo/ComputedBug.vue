<!-- <template>
  <h1>Computed Bug</h1>
  <div class="bg-info-subtle">
    <button @click="diminuer()">-</button>
    <p>Le nombre : {{ nb }}</p>
    <p>Du Texte</p>
    <button @click="augmenter()">+</button>
</div>
  <div>
    <input v-model="value" />
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';
let nb = ref(40);

function augmenter(){
  nb.value ++ ;
  afficherString();
}

function diminuer(){
  nb.value --;
  afficherString();
}
function afficherString(){
  console.log('fonction qui gère le NAME éxécutée');
}


</script>

<style scoped lang="css">
</style> -->

//! partie correction de jeff:
<template>
  <div class="container">
    <h5>Computed Bug Mode  : Composition</h5>
    <div class="mb-3">
      <button v-on:click="augmenter(20)" type="button" class="btn btn-success mt-3">+</button>
      <button v-on:click.left="reduire(10)" type="button" class="btn btn-danger mt-3">-</button>
    </div>
    <div class="mb-3">
      <p>{{ afficherNameUser() }}</p>
    </div>
    <div class="mb-3">
      <p>{{ leNombre }}</p>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const leNombre = ref(0);
const nameUser = ref('');

const afficherNameUser = () => {  
  console.log('fonction qui gere le NAME exécutée');
    if(nameUser.value ===''){
        return 'test'
    }
    else{
        return 'autre Test';        
    }
  };
  
const augmenter = (nb) => {
  leNombre.value += nb;
};

const reduire = (nb) => {
  leNombre.value -= nb;
}
</script>