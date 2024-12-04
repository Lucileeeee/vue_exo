<template>
  <div>
    <input v-on:input="capterInput($event)" type="text">  
    <h3 class="mx-3">{{uneString}}</h3>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';

const uneString = ref('Hello');

function capterInput(event){
  console.log(event);
  uneString.value = event.target.value;
}
</script>

<style scoped lang="css">
</style>