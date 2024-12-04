<template>
  <div>
    <input v-model="value" />
  </div>
  <p>Anniversaire : {{ anniversaire }}</p>
  <p>Lieu de Naissance : {{ naissance }}</p>
  <p>Tableau avec les deux d'avant: {{ tableau }}</p>
  <p>Iban: {{ iban }}</p>
  <p>Object: {{ object }}</p>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { ref } from 'vue';
//? variables:
const anniversaire = ref('7 août');
const naissance = ref('Argenteil');
const tableau = ref([anniversaire, naissance]);
const iban = ref(54679097542);
const object = ref({cleDeDouze : 12, cleDeTreize : 67});

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