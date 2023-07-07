<template>
  <div class="container-fluid">
    <div class="aside">
      <SideMenu/>
    </div>
    <div class="main">
      <vista/>
    </div>
  </div>

</template>

<script setup>
import SideMenu from '/proyecto_veterinaria/proyecto/veterinaria/src/components/Managment/SideMenu.vue'
import vista from '/proyecto_veterinaria/proyecto/veterinaria/src/views/Administracion/MenuManagmentView.vue'
</script>

<style scoped>

.container-fluid {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 3fr;
    grid-column-gap: 20px;
    justify-items: stretch;
    align-items: stretch;
    width: 100%;
    height: 100vh;
 }

</style>