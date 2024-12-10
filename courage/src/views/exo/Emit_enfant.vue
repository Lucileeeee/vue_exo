<template>
  <div class="container my-1 p-3">
      <ul class="list-group">
          <h2 class="list-group-item">{{ name }} {{ premiumData ? 'Ami premium' : 'Ami nul' }}</h2>
          <button @click="afficherPremium" class="btn btn-danger mb-1">Premium ?</button>
          <button @click="afficherDetails" class="btn btn-outline-dark">{{ detailsVisibles ? 'Masquer' : 'Afficher'}}</button>
          <ul v-if="detailsVisibles" class="list-group">
              <li class="list-group-item">{{ phone }}</li>
              <li class="list-group-item">{{ email }}</li>
          </ul>
      </ul>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { ref, defineProps } from 'vue';

const emit = defineEmits(['mon-event-premium']);

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