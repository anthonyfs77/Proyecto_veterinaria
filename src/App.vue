<template>
  <div class="container-fluid">
      <router-view></router-view>
  </div>
</template>


<script setup>
import SideMenu from './components/Managment/SideMenu.vue'
</script>


<style scoped>
.container-fluid {
  height: 100vh;
  width: 100%;
}
</style>
