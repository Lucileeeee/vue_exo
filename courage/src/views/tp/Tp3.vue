<template>
  <h1>Tp3 Style</h1>
  <input type="text"  v-on:keyup="capterInput($event)" :style="{display: visible ? 'inline':'none' }" :class="{maClassHello : hello, wordClass : word}" >
  <p>bliabluhz</p>                                                   
  <input type="text"v-on:keyup="capterInput2($event)">
  <p :style="{backgroundColor: couleurDeuxiemeP}">blabla</p>
  <button @click="changerVisibilite">Afficher ou pas 1er Input</button>
</template>

<script setup lang='js'>
import { ref, watch } from 'vue'
let couleurDeuxiemeP = ref('');
let visible = ref(true);
let hello = ref(false);
let word = ref(false);
function changerVisibilite(){
  visible.value = !visible.value;
}

function capterInput(event){
  if(event.target.value == 'hello'){
    hello.value = !hello.value
  } else if (event.target.value == 'word'){
    word.value = !word.value
  }
}

function capterInput2(event){
  couleurDeuxiemeP.value  = event.target.value;
  console.log( couleurDeuxiemeP.value);
}

/* Partie Jeff des conditions:

// Propriété calculée
const classDynamique = computed(() => ({
  maClasseHello: nomClasse.value === 'hello',
  //! le return : maClasseHello:
  //! la condition : nomClasse.value === 'hello'
  maClasseWorld: nomClasse.value === 'world',
  maClasseHidden: !visible.value,
  maClasseVisible: visible.value,
}));


//Equivalent en if classique:
const classDynamique = computed(() => {
  const classes = {};
  if (nomClasse.value === 'hello') {
    classes.maClasseHello = true;
  }
  if (nomClasse.value === 'world') {
    classes.maClasseWorld = true;
  }
  if (!visible.value) {
    classes.maClasseHidden = true;
  } else {
    classes.maClasseVisible = true;
  }
  return classes;
});

*/
</script>




<style scoped lang="css">
  .maClassHello {
    background-color: pink;
    font-style: italic;
  }
  .wordClass {
  background-color: lightblue;
  font-size: large;
  }

</style>

