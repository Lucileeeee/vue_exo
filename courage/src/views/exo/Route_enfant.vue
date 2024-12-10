<template>
  <div class="container py-4">
    <h1 class="text-center mb-4">Détails de l'Élément</h1>
    <div class="card shadow-sm">
      <div class="card-body">
        <h5 class="card-title">ID : {{ id }}</h5>
        <p class="card-text">
          Ceci est une page de détail pour l'élément{{ name }} avec l'identifiant <strong>{{ id }}</strong>.
        </p>
        <router-link to="/Route_parent" class="btn btn-secondary">Go Back</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// Récupération des props depuis la route
//id et name qui corresponde tous les deux aux router /path
const props = defineProps(['id', 'name']);
/* +  dans la page principal: 
<router-link :to="{name: 'Route_enfant', params: {id:item.id, name:item.name}}">
  Voir les Détails
  </router-link>
*/
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}
</style>







