<template>
  <div>
    <h1>Liste de course</h1>
  <input v-model="uneCourse">
  <button @:click="addCourse">Ajouter un truc à acheter</button>
  <ul>
    <li v-for="(uneCourse, index) in listeCourse" v-on:click="deletCourse(index)" :style="{display: visible ? 'inline':'none' }">{{ index }} - {{ uneCourse }}</li>
  </ul>
  <button  @:click="masquerBouton">{{ messageList }}</button>
</div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { ref } from 'vue';

let uneCourse = ref('');
let listeCourse = ref([]);
let visible = ref(true);
let messageList = ref('Masquer la Liste');

function addCourse(){
  listeCourse.value.push(uneCourse.value);
  uneCourse.value = ''
}
function deletCourse(index){
  listeCourse.value.splice(index, 1);
}
function masquerBouton(){
  visible.value = !visible.value;
  messageList.value ='Afficher la liste';
}


</script>

<style scoped lang="css">
div,  ul{
  display: flex;
  flex-direction: column;
}
</style>