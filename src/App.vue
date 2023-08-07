<template>
  <div class="container-fluid">
      <router-view></router-view>
  </div>
</template>

<style scoped>

.container-fluid {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
<script setup>
//import GestionusAdmin from './views/soporteyusuarios/gestionusAdmin.vue';
//import ubicacion from '@/views/Ubicación/MapaUbicacion.vue';
//import gestionusAdmin from './views/soporteyusuarios/gestionusAdmin.vue';
import gestionus from '@/views/soporteyusuarios/gestionusuario.vue'
</script>
