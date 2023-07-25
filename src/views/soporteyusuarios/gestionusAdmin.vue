<template>
    <div class="container">
      <div class="controls">
            <btn class="add-button" tittle="Añadir Usuario"/>
            <buscador type="text" v-model="search" @focus="clearSearch" title="Buscar Usuario..."/>
          <label for="filterBy">Por:</label>
          <select class="search-box" id="filterBy" v-model="filter">
            <option value="true">correo</option>
            <option value="false">ID</option>
          </select>
      </div>
      <div class="content">
        <div class="user-grid">
        <!-- El componente de usuario se repetirá tantas veces como usuarios haya -->
        <InfousAdmin
          v-for="user in users"
          :Id="user.id"
          :Nombre="user.nombre"
          :Apellidos="user.apellidos"
          :Correo="user.correo"
          :Foto="user.foto"
        />
      </div>
    </div>

    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import btn from '../../components/ControlesIndividuales/BotonConEstilo.vue'
  import buscador from '../../components/ControlesIndividuales/SearchGeneral.vue'
  import InfousAdmin from '../../components/infoUsuario/InfousAdmin.vue';

  const search = ref("Buscar Usuario...");
  const filter = ref(true);
  const users = ref([
  {
    id: 1,
    nombre: "Juan",
    apellidos: "Pérez",
    correo: "juan@example.com",
    foto: "url_a_la_foto_de_juan"
  },
  {
    id: 2,
    nombre: "María",
    apellidos: "González",
    correo: "maria@example.com",
    foto: "url_a_la_foto_de_maria"
  },
  // Más usuarios aquí...
]);
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
    gap: 25px;
  }
  
  .controls > * {
    border-radius: 5px;
  }
    
  
  .search-box{
    font-family: inherit;
  font-size: inherit;
  box-shadow: 0 0 1em #00000013;
  border: none;
  color: #646464;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  width: 8em;
  transition: all ease-in-out .5s;
  margin-right: -2rem;
  }
  
  .content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  flex-direction: column;
}
  .user-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem; 
}
  
  .message {
    text-align: center;
  }


  </style>
  