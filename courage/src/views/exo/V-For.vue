<template>
  <h1>Liste de film à voir</h1>
  <div>
    <input v-model="unFilm" />
    <button @:click="addFilm">Ajouter Film</button>
  </div>
  <ul>
    <li v-for="(unFilm, index) in listFilm" v-on:click="deletFilm(index)">{{ index }} - {{ unFilm }}</li>
  </ul>

</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { ref } from 'vue';

let listFilm = ref([])
let unFilm = ref('');

function addFilm(){
  listFilm.value.push(unFilm.value);
  unFilm.value = ''
}
function deletFilm(index){
  listFilm.value.splice(index, 1);
}


</script>



<style scoped lang="css">
</style>