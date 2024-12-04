<template>
 <!-- As a link -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Chatchat</a>
  <router-link class="nav-link active" aria-current="page" to="/home">Maison</router-link>
  <router-link class="nav-link active" aria-current="page" to="/lessonsTextInter">Lessons</router-link>
  <router-link class="nav-link active" aria-current="page" to="/ComposantTest">Exo</router-link>

</nav>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});

const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

const value = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const stopWatch = watch(
  () => props.modelValue, async (_newValue, _oldValue) => {
    // do something
  },
  {
    immediate: true
  }
);

onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});

</script>

<style scoped lang="css">
</style>