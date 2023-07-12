<template>
  <div class="first-container">
    <div class="parametros">
        <div class="Titulo"><span class="material-symbols-outlined">payments</span><h2>Ventas Realizadas.</h2></div>
      <div class="filtro">
        <label for="tipo" class="label-tipo">Seleccione el tipo de reporte que desea realizar:</label>
        <select v-model="selectedOption" id="tipo" class="select-tipo">
          <option value="opcion1" selected>General</option>
          <option value="opcion2">Fecha</option>
        </select>
      </div>
      <div class="filtro2" v-show="status1">
        <button class="btn-generar">Generar</button>
      </div>
  
      <div class="filtro3" v-show="status3">
        <label for="busquedafecha" class="label-fecha">Ingrese la fecha:</label>
        <input type="date" name="fecha" id="busquedafecha" class="input-fecha"><br>
        <button class="btn-generar">Generar</button>
      </div>
    </div>
  
    <div class="pantalla">
      La consulta con el resultado de la búsqueda se verá aquí.
    </div>

  </div>

  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const selectedOption = ref('opcion1');
  const status1 = ref(true);
  const status3 = ref(false);
  
  watch(selectedOption, (newValue) => {
    if (newValue === 'opcion1') {
      status1.value = true;
      status3.value = false;
    } else if (newValue === 'opcion2') {
      status1.value = false;
      status3.value = true;
    } 
  });
  </script>
  
  <style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Comfortaa', cursive;
  }
  
  .first-container{
    width: 100%;
    height: 100vh;
  }

  :root {
    --color-primary: #e0b14b;
  }
  
  .label-tipo {
    font-size: 1.2rem;
  }
  
  .select-tipo {
    border: none;
    border-bottom: 2px solid black;
    transition: border-color 0.3s;
    font-size: 1.2rem;
    padding: 0.5rem;
    max-width: 20rem;
  }
  
  .select-tipo:focus {
    border-color: var(--color-primary);
    background-color: transparent;
  }
  
  .label-fecha {
    font-size: 1.2rem;
  }
  
  .input-fecha {
    border: none;
    border-bottom: 2px solid black;
    transition: border-color 0.3s;
    font-size: 1.2rem;
    padding: 0.5rem;
  }
  
  .input-fecha:focus {
    border-color: var(--color-primary);
    background-color: transparent;
  }
  
  .btn-generar {
    border: none;
    background-color: transparent;
    border-bottom: 2px solid black;
    color: black;
    transition: border-color 0.3s, transform 0.3s;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    max-width: 10rem;
  }
  
  .btn-generar:hover {
    border-color: var(--color-primary);
    transform: translateX(5px);
  }
  
  .btn-generar:focus {
    outline: none;
  }
  
  .btn-generar:hover:not(:focus) {
    transform: translateX(15px);
  }
  
  .pantalla {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    .parametros {
      padding: 1rem;
    }
  
    .label-tipo,
    .select-tipo,
    .label-fecha,
    .input-fecha,
    .btn-generar {
      font-size: 1rem;
    }
  
    .select-tipo,
    .input-fecha {
      max-width: none;
    }
  }
  
  @media (max-width: 576px) {
    .filtro {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  
    .btn-generar {
      max-width: none;
    }
  }
  .Titulo{
    display: flex;
    gap: 8px;
  }
  </style>
  