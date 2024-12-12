<template>
   <div>
    <h2>Active User</h2>
    <p> {{ nameUser }}</p>
    <p> {{ ageUser }}</p>
  </div>
</template>

<script setup lang='js'>
import { ref, defineProps } from 'vue';

const user = defineProps ({
  name : {
    type: String,
    required : true
  },
  age: {
    type: String, 
    required : true
  }
})
const emit = defineEmits(['user-info']);
const nameUser = ref(user.name);
const ageUser = ref(user.age)


const submitData = () => {
  console.log({ nameUser,ageUser });
  emit('user-info', nameUser.value, ageUser.value);
}
</script>

<style scoped lang="css">
div{
  background-color: lightskyblue;
}
</style>