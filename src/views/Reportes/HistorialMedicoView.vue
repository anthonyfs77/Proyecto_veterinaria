<template>
  <div class="first-container">

    <div class="parametros">
        <div class="Titulo"><span class="material-symbols-outlined">ecg</span><h2>Hisotorial Medico</h2></div>
      <div class="filtro">
        <label for="busquedaMas" class="label-mascota">Nombre de la mascota:</label>
        <input type="search" name="animales" id="busqueda" class="input-search">
      </div>
      <button class="btn-generar">Generar</button>
    </div>
  
    <div class="pantalla">
      La consulta con el resultado de la búsqueda se verá aquí.
    </div>

  </div>
   
  </template>
  
  <script setup></script>
  
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
    --color-primary: #7380ec;
  }

  .label-mascota {
    font-size: 1.2rem;
  }
  
  .input-search {
    border: none;
    border-bottom: 2px solid black;
    transition: border-color 0.3s;
    font-size: 1.2rem;
    padding: 0.5rem;
    width: 100%;
    max-width: 20rem;
  }
  
  .input-search:focus {
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
    color: var(--color-primary);
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
  
    .label-mascota,
    .input-search,
    .btn-generar {
      font-size: 1rem;
    }
  
    .input-search {
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
  