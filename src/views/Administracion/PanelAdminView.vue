<template>
  <div class="container-fluid">
    <div class="aside" :class="{ 'aside-active': isSideMenuVisible }">
      <SideMenu />
    </div>
    <button class="burger-menu" @click="toggleSideMenu" v-show="isMobile">&#9776;</button>
    <div class="main">
      <!--Pantall donde se ve las vistas de los elementos del sidebar -->
      <router-view></router-view>
    </div>
    <div class="overlay" v-show="pantalla"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SideMenu from '../../components/Managment/SideMenu.vue'

let pantalla = ref(false);
let isSideMenuVisible = ref(true);
let isMobile = ref(window.innerWidth <= 1300);

const updateViewport = () => {
  isMobile.value = window.innerWidth <= 1300;
  isSideMenuVisible.value = !isMobile.value;
  pantalla.value=false;
}

const toggleSideMenu = () => {
  isSideMenuVisible.value = !isSideMenuVisible.value;
  if(pantalla.value===false){
    pantalla.value=true;
  }else if(pantalla.value===true){
    pantalla.value=false;
  }

}

onMounted(() => {
  window.addEventListener('resize', updateViewport);
  updateViewport();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateViewport);
});
</script>
<style scoped>
.container-fluid {
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
}

.aside {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  overflow-x: hidden;
  transition: all 0.5s ease;
  transform: translateX(-100%);
  z-index: 3;
}

.aside-active {
  transform: translateX(0);
}

.burger-menu {
  position:fixed;
  top: 10px;
  left: 10px;
  width: 5vh;
  height: 5vh;
  background-color: white;
  border-color: rgba(0, 255, 255, 0);
  box-shadow: 0 2rem 3rem rgba(53, 54, 58, 0.18);
  z-index: 4;
  display: none;
}

@media screen and (max-width: 1300px) {
  .burger-menu {
    display: block;
  }
}

@media screen and (min-width: 1301px) {
  .container-fluid {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 3fr;
    grid-column-gap: 40px;
    justify-items: stretch;
    align-items: stretch;
  }
  
  .aside {
    position: static;
    transform: translateX(0);
    height: auto;
    width: auto;
    z-index: 1;
  }

  .burger-menu {
    display: none;
  }
}

.main {
  position: relative;
  z-index: 1;
  box-shadow: 0 1px 25px rgba(0,0,0,0.2);
  background-color: white;
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  overflow-x: hidden;
}

.main::-webkit-scrollbar {
  width: 20px;
}

.main::-webkit-scrollbar-track {
  background-color: white;
}

.main::-webkit-scrollbar-thumb {
  background: #cfcfcf;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
</style>
