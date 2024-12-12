<template>
  <h1>Emit</h1>
  <Emit_enfant
        v-for="unAmi in lesAmis" 
        :key="unAmi.id" 
        :id="unAmi.id"
        :unAmiName="unAmi.name" 
        :unAmiPhone="unAmi.phone"
        :unAmiMail="unAmi.email"
        :premium="unAmi.premium"
        @mon-event-premium="reactionParent"
    ></Emit_enfant>
</template>

<script setup lang='js'>
import { ref } from 'vue'
import Emit_enfant from './Emit_enfant.vue' 

function reactionParent(leIdDansUnAmi){
 // console.log(`retour de l'émit`, lesAmis[0].id);
  const unAmiIdentified = lesAmis.value.find(unAmiATrouver => unAmiATrouver.id === leIdDansUnAmi);
    console.log('amiIdentified : ', unAmiIdentified);
    unAmiIdentified.premium = !unAmiIdentified.premium;
    console.log('amiIdentified : ', unAmiIdentified);
}

const toto = defineProps(['id']);

const lesAmis = ref([
    {
        id: 'lasticot',
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
    }
]);


/* 
const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});
 */

</script>

<style scoped lang="css">
</style>