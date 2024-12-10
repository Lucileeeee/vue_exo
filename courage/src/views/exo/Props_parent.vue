//vesrion objet:
<template>
 <!--    <props phone="0987654" email="eric@reptile.com" premium="true"></props>
    <props id="2" name="Lulu" phone="0987654" email="eric@reptile.com" premium="true"></props> -->

    <Props_enfant v-for="ami in lesAmis"
      :key="ami.id"
      :id="ami.id"
      :name="ami.name"
      :phone="ami.phone"
      :email="ami.email"
      :premium="ami.premium"
      ></Props_enfant>

    <camembert v-for="ami in lesAmis"
      :key="ami.id"
      :id="ami.id"
      :name="ami.name"
      :phone="ami.phone"
      :email="ami.email"
      :premium="ami.premium"
      ></camembert>
</template>

<script setup lang='js'>
import { ref, defineAsyncComponent } from 'vue'
import Props_enfant from './Props_enfant.vue' 
import camembert from './Props_enfant.vue' 


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


</script>
