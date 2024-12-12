<template>
  <div class="container my-1">
    <ul class="list-group">
      <h2 class="list-group-item">{{unAmiName}} {{premium ? '(Ami premium)':'(Ami nul)'}}</h2> 
      <div class="btn-group" role="group" aria-label="Basic example">
        <button @click="afficherDetails" type="button" class="m-1 btn btn-outline-secondary">👁 {{detailsVisibles? 'Masquer': 'Afficher'}} Détails</button>
        <button @click="afficherPremium"  type="button" class=" m-1 btn btn-outline-success">⭐️ Premium</button>
        <button @click="emit('deleteFriend',id)" type="button" class=" m-1 btn btn-outline-danger">🗑 Suppr.</button>
      </div>
      <ul v-if="detailsVisibles" class="list-group">
        <li class="list-group-item">{{unAmiPhone}}</li>
        <li class="list-group-item">{{unAmiMail}}</li>
      </ul>
    </ul>
  </div> 
</template>

<script setup lang='js'>
import { ref, defineProps } from 'vue';

/* const emit = defineEmits(['mon-event-premium']); */
const emit = defineEmits({
  'mon-event-premium': (id) => {
    if (id) {
      return true;
    } else {
      console.warn('C\'est la catastrophe !!!!!!');
      console.error('ON A PAS DE ID Dans le event mon-event-premium');
      return false;
    }
  },
  'deleteFriend': (id) => {
    if (id) {
      return true;
    } else {
      console.warn('C\'est la catastrophe !!!!!!');
      console.error('ON A PAS DE ID Dans le event deleteFriend');
      return false;
    }
  }

});

const toto = defineProps({
  id: {
    type: String,
    required : true
  }, 
  name: {
      type: String,
      required: true
  },
  phone: {
      type: String,
      required: false
  },
  email: {
      type: String,
      required: false
  },
  premium: {
      type: Boolean,
      required: false,
      default: false
/*       validator: function(value){return value ==='abc' || value ==='xyz'}*/
  }
});

const detailsVisibles = ref(false);
//on passe par une ref aux objets parents pour la stocker dans l'enfant sans craindre de conflit
const premiumData = ref(toto.premium);

const afficherDetails = () => {
  detailsVisibles.value = !detailsVisibles.value;
};

const afficherPremium = () => {
  premiumData.value = !premiumData.value;
  emit('mon-event-premium', toto.id);
};

</script>

<style scoped lang="css">
</style>