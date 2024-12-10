<template>
 <p>{{ name }}</p>

</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { ref, defineProps } from 'vue';


const poke = defineProps({ 
  name: {
      type: String,
      required: true
  },
  url: {
      type: String,
      required: true
  }
});





</script>

<style scoped lang="css">
</style>