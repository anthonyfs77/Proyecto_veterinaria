<template>
  <div class="container-fluid">
    <div class="aside">
      <SideMenu/>
    </div>
    <div class="main"> 
      <!--Pantall donde se ve las vistas de los elementos del sidebar -->
      <router-view></router-view>
    </div>
  </div>
</template>

  
  <script setup>
  import SideMenu from '../../components/Managment/SideMenu.vue'

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
   .main{
    position: relative;
    box-shadow: 0 1px 25px rgba(0,0,0,0.2);
    background-color: white;
    border-radius: 20px 20px 0px 0px;
    width: 103%;
    right: 23px;
    overflow-x: hidden;
    
   }
  </style>