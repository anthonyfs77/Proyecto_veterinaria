<template>
  <div class="container-fluid">
      <router-view></router-view>
  </div>
  <gestionus/>
</template>

<style scoped>
.container-fluid {
  height: 100vh;
  width: 100%;
}
</style>
<script setup>
//import ubicacion from '@/views/Ubicación/MapaUbicacion.vue';
//import gestionusAdmin from './views/soporteyusuarios/gestionusAdmin.vue';
import gestionus from '@/views/soporteyusuarios/gestionusuario.vue'
</script>
