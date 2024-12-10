<template>
  <h1>Route parent</h1>
  <div class="container py-5">
    <ul class="list-group">
      <li v-for="item in items"
      :key="item.id">{{ item.name }} 
        <button>
          <!-- IMPORTANT: Suivre comme en index.js name du path + param -->
          <router-link :to="{name: 'Route_enfant', params: {id:item.id, name:item.name}}">
            Voir les Détails
          </router-link>
        </button>
      </li>
    </ul>
  </div>  
  <button>
    <router-link to="/Route_parent">Go Back</router-link>
  </button>
</template>


<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const items = [
  { id: 1, name: 'Élément 1' },
  { id: 2, name: 'Élément 2' },
  { id: 3, name: 'Élément 3' },
  { id: 44, name: 'Élément 44' }
];

</script>

<style scoped lang="css">
</style>