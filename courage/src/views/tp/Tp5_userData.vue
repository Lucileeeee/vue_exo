<template>
  <div>
  <h2>User Data</h2>
  <form  @submit.prevent="submitData">
    <input v-model="futurName" type="text" placeholder="futurName"> 
    <input v-model="futurAge" type="text" placeholder="futurAge"> 
    <button @click="console.log(futurName, futurAge)">MAJ Données</button>
  </form>
  </div>
</template>


<script setup lang='js'>
import { ref, defineProps } from 'vue';

let futurName = ref('')
let futurAge = ref('')

/* 
function capterInput(event){
  console.log(event.target.value);
  futurAge.value = ref(event.target.value) ;
}

function capterInputName(event){
  console.log(event.target.value);
  futurName.value = ref(event.target.value);
  console.log('Nouveau Name : ',futurName.value)
} */

</script>

<style scoped lang="css">
div{
  background-color: yellow;
}
</style>