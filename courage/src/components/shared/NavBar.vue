<template>
 <!-- As a link -->
<nav class="navbar navbar-light bg-light">
  <router-link class="nav-link active" aria-current="page" to="/home">
    Accueil
  </router-link>
  <!-- Début de la liste des Lessons : -->
  <li class="nav-item dropdown">
    <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Lessons
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <li>
        <router-link class="dropdown-item" aria-current="page" to="/LessonAttributeBindingView">
          Attribute Binding View
        </router-link>
      </li>
      <li>
        <router-link class="dropdown-item" aria-current="page" to="/LessonComputedProperties">
          Computed Properties
        </router-link>
      </li>
      <li>
        <router-link class="dropdown-item" aria-current="page" to="/LessonDynamicStyling">
          Dynamic Styling
        </router-link>
      </li>
      <li>
        <router-link class="dropdown-item" aria-current="page" to="/LessonEventBindingView">
          Event Binding View
        </router-link>
      </li>
      <li>
        <router-link class="dropdown-item" aria-current="page" to="/LessonInlineTemplatingView">
          Inline TemplatingView
        </router-link>
      </li>
      <li>
        <router-link class="dropdown-item" aria-current="page" to="/LessonMethods">
          Methods
        </router-link>
      </li>
      <li>
        <router-link class="dropdown-item" aria-current="page" to="/LessonTextInterpolation">
          Text Interpolation
        </router-link>
      </li>
      <li>
        <router-link class="dropdown-item" aria-current="page" to="/LessonWatchers">
          Watchers
        </router-link>
      </li>
      <li>
        <router-link class="dropdown-item" aria-current="page" to="/LessonListRendering">
          LessonListRendering
        </router-link>
      </li>
    </ul>
  </li>
<!-- Fin de la liste des Lessons : -->
<!-- Début de la liste des TPs: : -->
  <li class="nav-item dropdown">
    <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Tp
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <li>
        <router-link class="dropdown-item" aria-current="page" to="/Tp1">
          Tp1
        </router-link>
      </li>
      <li>
        <router-link class="dropdown-item" to='/Tp2'>
          Tp2
        </router-link>
      </li>
      <li>
        <router-link class="dropdown-item" to='/Tp3'>
          Tp3
        </router-link>
      </li>
      <li>
        <router-link class="dropdown-item" to='/Tp4_ConditionalRender'>
          Tp4_ConditionalRender
        </router-link>
      </li>
    </ul>
  </li>
<!-- Fin de la liste des TPs: : -->
<!-- Début de la liste des Exos: : -->
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
        <router-link to="/V-for" class="dropdown-item">
            V-for
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
    <li>
      <router-link class="dropdown-item" to="/Function">
        Fonction
      </router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to='/Watchers'>
        Watchers
      </router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to='/Style'>
        Style
      </router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to='/StyleClass'>
        Style Class
      </router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to='/Props_parent'>
        Props Parent
      </router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to='/FetchPokemon_parent'>
        Fetch Pokemon
      </router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to='/Route_parent'>
        Route Parent
      </router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to='/Emit_parent'>
        Emit
      </router-link>
    </li>
    </ul>
</li>
<!-- Fin de la liste des Exos -->
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