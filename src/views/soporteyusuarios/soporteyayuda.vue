<template>
    <div class="support-screen">
      <h2 class="title">¿En qué podemos ayudarte?</h2>
      <p class="message">Nuestro equipo de soporte está listo para asistirte.</p>
      <button class="help-button" @click="openHelpCenter">Centro de Ayuda</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  
  const openHelpCenter = () => {
    alert('Centro de ayuda abierto. Esta función debería ser reemplazada por tu propia implementación.');
  }
  </script>
  
  <style scoped>
  .support-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
    padding: 2em;
    box-sizing: border-box;
  }
  
  .title {
    font-size: 2.5em;
    margin-bottom: 1em;
  }
  
  .message {
    font-size: 1.2em;
    margin-bottom: 2em;
    text-align: center;
  }
  
  .support-button, .help-button {
    font-size: 1em;
    padding: 0.5em 1em;
    margin-bottom: 1em;
    cursor: pointer;
    border: none;
    color: #fff;
    border-radius: 5px;
  }
  
  .support-button {
    background-color: #007bff;
  }
  
  .help-button {
    background-color: #28a745;
  }
  </style>