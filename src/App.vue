<template>
  <div class="container-fluid">
    <div class="aside">
      <SideMenu/>
    </div>
    <div class="main">
      
    </div>
  </div>

</template>

<script setup>
import SideMenu from './components/Managment/SideMenu.vue'
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