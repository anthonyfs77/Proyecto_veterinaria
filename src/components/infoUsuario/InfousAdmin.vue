<template>
    <div class="user-card">
      <div class="profile-picture">
        <div class="foto">
            <FotoEstaticaUs/>
        </div>
     </div>
      <div class="user-info">
        <h5>ID del Usuario: {{ Id }}</h5>
        <div class="detail-grid">
          <div><h6>Correo: {{ Correo }}</h6></div> 
          <div><h6>Nombre: {{ Nombre }}</h6></div> 
          <div><h6>Apellidos: {{ Apellidos }}</h6></div>
          <div><button class="buton">Ver Perfil</button></div> 
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
    border-radius: 10px; /* bordes redondeados */
    box-shadow: 0px 4px 20px 0px rgba(0,0,0,0.75); /* sombra negra */
    padding: 1rem;
    box-sizing: border-box;
    overflow:auto;
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

  .buton{
    height: 3vh;
    width: 100%;
    border-radius: 3px;
    border-color: black;
    background-color: rgb(201, 229, 255);
    border-radius: 10px;
  }
  
  .user-info {
    display: grid;
    grid-template-rows: 1fr 3fr;
  }
  
  .detail-grid {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
  }
  </style>
  