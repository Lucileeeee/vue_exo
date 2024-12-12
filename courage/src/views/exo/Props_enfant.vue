Vesrion Objet:
<template>
  <h1>Props parent/enfant</h1>
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
import { ref, defineProps } from 'vue';

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
      required: true
  },
  email: {
      type: String,
      required: true
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
};
</script>

<!-- <template>
  <div class="container p-3 my-2 bg-primary-subtle">
      <ul class="list-group">
          <h2 class="list-group-item" >{{ unAmiName }}</h2>
          <button @click="afficherDetails" class="btn btn-outline-dark">
              {{ !detailsVisibles ? 'Voir Détails' : 'Masquer Détails' }}
          </button>
          <p>{{ afficherPremiumTest() }}</p>
          <ul v-if="detailsVisibles" class="list-group">
              <li class="list-group-item">{{ unAmiPhone }}</li>
              <li class="list-group-item">{{ unAmiMail }}</li>
          </ul>
      </ul>
      <h2 class="list-group-item">{{ unAmiName }} {{ premiumData.value === 'abc' ? 'Ami premium' : 'Ami nul' }}</h2> 
      <!--  <p @:click="afficherPremiumTest()">Savoir si on est Prenium</p> 
  </div>
</template>

<script setup lang='js'>
import { ref, defineProps } from 'vue';

const props = defineProps(['unAmiName', 'unAmiPhone', 'unAmiMail', 'prenium']);
const detailsVisibles = ref(false);
const preniumData = ref(props.prenium);

function afficherDetails() {
  detailsVisibles.value = !detailsVisibles.value;
}
//marchera pas:
function afficherPreniumTest(){
  props.prenium = "props.prenium : abc ? 'Ami Prenium':'Ami Nul' "
}
//à la place, celle là marche:
function afficherPremiumTest() {
  preniumData.value = preniumData.value === 'abc' ? 'xyz' : 'abc'
}
</script> -->
