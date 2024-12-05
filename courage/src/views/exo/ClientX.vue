<template>
  <h1>KeyUp</h1>
  <div>
    <input v-on:keyup="capterInput($event)" type="text"> 
    <p>{{ futurP }} </p> 
  </div>
  <div>
  <input v-on:keyup.esc="capterInput2($event)" type="text"> 
    <p> {{ futur2p }}</p>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';
let futurP = ref('');
let futur2p = ref('')


function capterInput(event){
  console.log(event.target.value);
  futurP.value = ref(event.target.value) ;
}

function capterInput2(event){
  console.log(event.target.value);
  futur2p.value = ref(event.target.value) ;
}
</script>

<style scoped lang="css">
</style>

//todo 1 input qui affiche dans un paragraphe ce qu'on tape
//todo le deuxieme s'affiche dans un paragraphe seulement quand on clique sur esc