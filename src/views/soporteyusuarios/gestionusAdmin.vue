<template>
    <div class="container">
      <div class="controls">
            <btn title="Buscar Usuario" @click="buscar"/>
            <div class="search">
    <input :type="inputType" class="search__input" v-model="search" :placeholder="texto" @input="buscar">
    <button class="search__button" @click="buscar">
        <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
        </svg>
    </button>
         </div>
          <label for="filterBy">Por:</label>
          <select class="search-box" id="filterBy" v-model="filter">
            <option :value="true">correo</option>
            <option :value="false">ID</option>
          </select>
      </div>
        <div class="content">
        <div class="user-grid">
        <InfousAdmin
          v-for="user in users"
          :Id="user.id"
          :Nombre="user.nombre"
          :Apellidos="user.apellidos"
          :Correo="user.correo"
          :Foto="user.fotourl"
        />
    </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import axios from 'axios';
  import btn from '../../components/ControlesIndividuales/BotonBlanco.vue';
  import InfousAdmin from '../../components/infoUsuario/InfousAdmin.vue';
  const search = ref('');
  const texto = ref("Buscar Usuario...");
  const filter = ref(true);
  const users = ref([]);
  const inputType = ref("text");

watch(filter, (newValue) => {
  inputType.value = newValue ? "text" : "number";
});

  const buscar = async () => {
  if(search.value==="") {
    await fetchUsers();
  } else if(filter.value===false) {
    await UsersID();
  } else if(filter.value===true) {
    await UsersCorreo();
  }
}

  //usuario x id
  const UsersID = async () => {
    users.value = [];
    const userUpdate = {
     id: search.value
    };
  try {
    const response = await axios.post('http://web.Backend.com/clientes/infoID', userUpdate);
    if(response.data.data===null)
    {
      users.value=[]
    }
    console.log(response.data.data)
    if (Array.isArray(response.data.data)) {
  users.value = response.data.data;
   } else {
    users.value = [response.data.data];
   }

  } catch (error) {
    console.error('Hubo un error al obtener el usuario:', error);
  }
  
};

//usuario x correo

const UsersCorreo = async () => {
    users.value = [];
    const userUpdate = {
     cadena: search.value
    };
    console.log(userUpdate);
  try {
    const response = await axios.post('http://web.Backend.com/clientes/infoCorreo', userUpdate);
    if (Array.isArray(response.data.data)) {
  users.value = response.data.data;
   } else {
    users.value = [response.data.data];
   }  
   console.log(response.data.data)
  } catch (error) {
    console.error('Hubo un error al obtener los usuarios:', error);
  }
};

  // traer todos los usuarios, se traen todos por default
  const fetchUsers = async () => {
    users.value = [];
  try {
    const response = await axios.get('http://web.Backend.com/clientes/All');
    users.value = response.data.data; // Coloca la respuesta en el arreglo 'users'
  } catch (error) {
    console.error('Hubo un error al obtener los usuarios:', error);
  }
};
onMounted(fetchUsers);



  </script>
  
  <style scoped>

  .router{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
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
  align-items: flex-start; /* Cambiado de center a flex-start */
  justify-content: flex-start;
  width: 100%;
  height: 80%;
  flex-direction: column;
  flex-wrap:wrap-reverse;
  overflow:initial;
}

.user-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  width: 100%; /* Asegúrate de que la grilla toma todo el ancho posible */
}

  
  .message {
    text-align: center;
  }

  .search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.search__input {
  font-family: inherit;
  font-size: inherit;
  box-shadow: 0 0 1em #00000013;
  border: none;
  color: #646464;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  width: 25em;
  transition: all ease-in-out .5s;
  margin-right: -2rem;
}

.search__input:hover, .search__input:focus {
  box-shadow: 0 0 1em #00000013;
}

.search__input:focus {
  outline: none;
  background-color: #f0eeee;
}

.search__input::-webkit-input-placeholder {
  font-weight: 100;
  color: #ccc;
}

.search__input:focus + .search__button {
    background-color: transparent;
}

.search__button {
  border: none;
  background-color: transparent;
  margin-top: .1em;
}

.search__button:hover {
  cursor: pointer;
}

.search__icon {
  height: 1.3em;
  width: 1.3em;
  fill: #b4b4b4;
}


  </style>
  