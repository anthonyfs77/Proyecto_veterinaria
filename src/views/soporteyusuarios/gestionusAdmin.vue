<template>
    <div class="container">
      <div class="controls">
        <button class="add-button">Añadir</button>
        <input class="search-box" type="text" v-model="search" @focus="clearSearch" placeholder="Buscar Usuario...">
        <button class="remove-button">Eliminar</button>
        <button class="edit-button">Editar</button>
      </div>
      <div class="content">
        <div class="message">Aquí se mostrarán los usuarios</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const search = ref("Buscar Usuario...");
  
  const clearSearch = () => {
    search.value = "";
  }
  </script>
  
  <style scoped>
  .container {
    display: grid;
    grid-template-rows: 20% 80%;
    height: 100vh;
    width: 100%;
  }
  
  .controls {
    display: grid;
    grid-template-columns: auto 30% auto auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .controls > * {
    border-radius: 5px;
  }
  
  .add-button {
    background-color: green;
    color: white;
    padding: 10px;
  }
  
  .search-box {
    padding: 10px;
  }
  
  .remove-button {
    background-color: red;
    color: white;
    padding: 10px;
  }
  
  .edit-button {
    background-color: blue;
    color: white;
    padding: 10px;
  }
  
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80%;
  }
  
  .message {
    text-align: center;
  }
  </style>
  