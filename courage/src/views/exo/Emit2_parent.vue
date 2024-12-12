<template>
  <Emit2_enfant @add-ami="ajouterAmi"></Emit2_enfant>
  <Emit_enfant
      v-for="unAmi in lesAmis" 
      :key="unAmi.id" 
      :id="unAmi.id"
      :unAmiName="unAmi.name" 
      :unAmiPhone="unAmi.phone"
      :unAmiMail="unAmi.email"
      :premium="unAmi.premium"
      @mon-event-premium="reactionStatus"
      @deleteFriend="effacerAmi"
  ></Emit_enfant>
</template>

<script setup lang='js'>
import { ref } from 'vue';
import Emit_enfant from './Emit_enfant.vue' 
import Emit2_enfant from './Emit2_enfant.vue' 

const lesAmis = ref([
  {
    id: 'lasticot',
    name: 'COCO L ASTICOT',
    phone: '01234 5678 991',
    email: 'coco@lasticot.com',
    premium: true
  },
  {
    id: 'lasticot2',
    name: 'COCO L ASTICOT',
    phone: '01234 5678 991',
    email: 'coco@lasticot.com',
    premium: true
  },
  {
    id: 'kimonoSurUnFrigo',
    name: "Steven Seagal",
    phone: '+338765477',
    email: 'steven@seagal.com',
    premium: true
  },
  {
    id: 'yoyoyo',
    name: "JAROD",
    phone: '+338765477',
    email: 'jAROD@seagal.com',
    premium: true
  }
]);

function reactionStatus(leIdDansUnAmi) {
  const unAmiIdentified = lesAmis.value.find(unAmiATrouver => unAmiATrouver.id === leIdDansUnAmi);
  console.log('amiIdentified : ', unAmiIdentified);
  unAmiIdentified.premium = !unAmiIdentified.premium;
  console.log('amiIdentified : ', unAmiIdentified);
}

function ajouterAmi(eventName, eventPhone, eventMail) {
  const newAmiContact = {
    id: new Date().toISOString(),
    name: eventName,
    phone: eventPhone,
    email: eventMail,
    premium: false,
  };
  lesAmis.value.push(newAmiContact);
  console.log(lesAmis.value);
}

const effacerAmi = (unId) => {
  lesAmis.value = lesAmis.value.filter(unAmi => unAmi.id!== unId);
}

</script>