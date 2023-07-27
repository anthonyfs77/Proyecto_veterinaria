<template>
    <div class="user-card">
      <div class="profile-picture">
        <div class="foto">
            <FotoEstaticaUs :URL="Foto"/>
        </div>
     </div>
      <div class="user-info">
        <h5>{{ Nombre }}</h5>
        <div class="detail-grid">
          <div class="renglon"><h6>ID de usuario: {{ Id }}</h6></div> 
          <div class="renglon"><h6>Correo: {{ Correo }}</h6></div> 
          <button class="buton">Ver Usuario</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import FotoEstaticaUs from './FotoEstaticaUs.vue';
import { defineProps } from 'vue';

const props = defineProps({
  Nombre: {
    type: String,
    default: ''
  },
  Apellidos: {
    type: String,
    default: ''
  },
  Correo: {
    type: String,
    default: ''
  },
  Id: {
    type: Number,
    default: 0
  },
  Foto: {
    type: String,
    default: ''
  }
});

let { Nombre, Apellidos, Correo, Id, Foto } = props;
  </script>
  
  <style scoped>
  .user-card {
    display: grid;
    grid-template-columns: 2fr 3fr;
    height: 22vh;
    width: 45vh;
    border-radius: 2rem;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    padding: 1rem;
    box-sizing: border-box;
  }
  
  .profile-picture {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .foto{
    height: 80%;
    width: 80%;
  }

  .renglon{
    overflow-y:auto;
    overflow-x: hidden;
    overflow-wrap: break-word;
  }

  .buton{
    height: 3vh;
    width: 100%;
    border-radius: 3px;
    border-color: rgb(101, 255, 63);
    background-color: rgb(201, 255, 201);
    border-radius: 10px;
    grid-row-start: 4;
    transition: 0.5s;
  }

  .buton:hover{
    border-color: rgb(141, 137, 137);
    background-color: rgb(52, 119, 124);
    color: rgb(255, 255, 255);
  }
  .renglon::-webkit-scrollbar {
    width: 10px;
}
.renglon::-webkit-scrollbar-track {
    background: #f1f1f1;
}
.renglon::-webkit-scrollbar-thumb {
    background: #888;
}

  
  .user-info {
    display: grid;
    grid-template-rows: 1fr 3fr;
  }
  
  .detail-grid {
    display: grid;
    grid-template-rows: 25% 25% 12.5% 25% 12.5%;
    
  }
  </style>
  