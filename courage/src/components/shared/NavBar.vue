<template>
 <!-- As a link -->
<nav class="navbar navbar-light bg-light">
  <router-link class="nav-link active" aria-current="page" to="/home">Accueil</router-link>
  <router-link class="nav-link active" aria-current="page" to="/lessons-lessonsTextInter">Lessons</router-link>
  <router-link class="nav-link active" aria-current="page" to="/Tp1">Tp</router-link>
  <li class="nav-item dropdown">
    <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Exo
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    <li>
        <router-link to="/ComposantTest" class="dropdown-item">
            ComposantTest
        </router-link>
    </li>
    <li>
        <router-link to='/EventBinding' class="dropdown-item">
            EventBinding
        </router-link>
    </li>
    <li>
        <router-link to='/TpEventBinding' class="dropdown-item">
          TpEventBinding
        </router-link>
    </li>
    <li>
        <router-link to='/ClientX' class="dropdown-item">
            KeyUp
        </router-link>
    </li>
    <li>
        <router-link to='/TpEventBinding' class="dropdown-item">
            TpEventBinding
        </router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to="/Inline">
        Inline
      </router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to='/ComputedBug'>
        ComputedBug
      </router-link>
    </li>
    <router-link class="dropdown-item" to="/Function">
      Fonction
    </router-link>
    <router-link class="dropdown-item" to='/Watchers'>
      Watchers
    </router-link>
    <router-link class="dropdown-item" to='/Tp2'>
      Tp2
    </router-link>
    </ul>
</li>
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