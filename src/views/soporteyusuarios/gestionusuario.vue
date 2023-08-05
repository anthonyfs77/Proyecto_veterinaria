<template>
    <div class="pantalla">

    <div class="container">
      <div class="grid">
        <div class="column1">
          <div class="image">
            <FotoUsuario class="foto"/>
        </div>
      </div>
        <div class="column2">
          <div class="row1 fil">
             <h3>! HOLA {{ nombreA }} !</h3>
          </div>
          <div class="row2 fill2">
            <h4>Nombre: {{ nombreA }}</h4>
          </div>
          <div class="row3 fill2">
            <h4>Apellidos: {{ apellidosA }}</h4>
          </div>
          <div class="row4 fill2">
            <h4>Correo: {{ correoA }}</h4>
          </div>
        </div>
        <div class="column3"></div>
      </div>
    </div>
    <div class="informacion">
      <div class="info">
        <div class="text-field" v-for="(field, index) in fields" :key="index">
  <div class="input-wrapper">
    <label :for="field">{{ field }}</label>
    <div>
      <input type="text" :id="field" v-model="userInfo[field]" :disabled="!isEditable[field]" />
    </div>
  </div>
</div>
    <div class="botons">
      <button v-show=!loading class="button" @click="editInformation" v-if="!isEditing">Editar mi información</button>
    <button v-show=!loading class="button" @click="saveInformation" v-if="isEditing">Guardar</button>
    <div v-show=loading class="loader"></div>
    </div>
      </div>

    </div>
</div>

  </template>
  
  <script setup>

  import axios from 'axios';
  import { ref, reactive } from 'vue'
  import FotoUsuario from '../../components/infoUsuario/FotoUsuario.vue';

  let fields = ['nombre', 'apellido', 'correo', 'telefono1', 'telefono2', 'contrasena'];
  let updatedUserInfo = ref(null);
const nombreA = ref('');
const apellidosA = ref('');
const correoA = ref('');
let idCliente = ref(2);
const loading =ref(false);

let userInfo = reactive({
  'nombre': '',
  'apellido': '',
  'correo': '',
  'telefono1': '',
  'telefono2': '',
  'contrasena': ''
});

let isEditable = reactive({
  'nombre': false,
  'apellido': false,
  'correo': false,
  'telefono1': false,
  'telefono2': false,
  'contrasena': false
});

let isEditing = ref(false);

function editInformation() {
  isEditing.value = true;
  for(let key in isEditable) {
     isEditable[key] = true;
  }
}


async function updateUser() {
  try {
    const userUpdate = {
  id: idCliente.value,
  nombre: userInfo['nombre'],
  correo: userInfo['correo'],
  apellido: userInfo['apellido'],
  telefono1: userInfo['telefono1'],
  telefono2: userInfo['telefono2'],
  contrasena: userInfo['contrasena']
  };
    loading.value = true;
    console.log(userUpdate);
    const response = await axios.post('http://web.Backend.com/clientes/actualizar', userUpdate);
    updatedUserInfo.value = response.data;
    if(updatedUserInfo.value && updatedUserInfo.value.message === 'Cliente actualizado exitosamente.') {
       nombreA.value = userUpdate.nombre;
       apellidosA.value = userUpdate.apellido;
       correoA.value = userUpdate.correo;
    } else {
     console.error('updatedUserInfo.value no existe');
    }

    console.log(response.data);
  } catch (error) {
    console.error('Hubo un error al actualizar los datos del usuario:', error);
  }
  loading.value = false;
}

function saveInformation() {
  updateUser();
  isEditing.value = false;
  for(let key in isEditable) {
    isEditable[key] = false;
  }
}

  </script>
  
  <style scoped>
.input-wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}

.input-wrapper label {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
}

.input-wrapper div {
  grid-column-start: 2;
}

.input-wrapper input {
  width: 100%;
}

    .text-field {
  display: flex;
  align-items: center;
  gap: 10px;
}


.text-field input {
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 5px #000;
}



    .informacion{
      grid-row-start: 4;
      height: 100%;
      width: 100%;
      border-radius: 15px;
      display:grid;
      grid-template-columns:20% 60% 20%;
      grid-template-rows: 100%;
    }

    .info{
  gap: 3%;
  grid-column-start: 2;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Divide el espacio disponible en dos columnas iguales */
  grid-template-rows: auto auto auto; /* Crea tres filas que se ajustan al contenido */
  grid-auto-flow: row; /* Llena las filas antes que las columnas */
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 0 60px #00000034;
}

  .pantalla{
    height: 100vh;
    width: 100%;
    display:grid;
    grid-template-rows: 5% 35% 5% 55%;
    grid-template-columns: 100%;
  }
  .container {
    grid-row-start: 2;
    width: 90%;
    height: 40vh;
    background:linear-gradient(70deg, rgb(255, 255, 255), #dffffa);
    display: flex;
    justify-content: center;
    align-items: center;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 60px #00000034;
  }
  
  .grid {
    display: grid;
    grid-template-columns: 25% 45% 30%;
    grid-template-rows: 1;
    height: 100%;
    width: 100%;
    gap: 1em;
  }
  
  .column2 {
    display: grid;
    grid-template-rows: repeat(7, 1fr);
    gap: 1em;
  }

  .fil{
display: flex;
align-items: center;
justify-content: center;
  }

  .fill2{
    display: flex;
align-items: center;
justify-content: start;
  }
  
  .row1 {
    border-radius: 15px;
    grid-row-start: 2;
  }
  .row2 {
    border-radius: 15px;
    grid-row-start: 3;
  }
  .row3 {
    border-radius: 15px;
    grid-row-start: 4;
  }
  .row4 {
    border-radius: 15px;
    grid-row-start: 5;
  }
  .image{
    height: 70%;
    width: 70%;
    align-items: center;
    justify-content: center;
    justify-items: center;

  }
  .column1{
    display: flex;
    width: 100%;
    height: 100%;
    grid-column-start: 1;
    align-items: center;
    justify-content: center;
  }

 .botons{
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column-start: 2;
 }

 .button {
 display: inline-block;
 padding: 12px 24px;
 border: 1px solid #4f4f4f;
 border-radius: 4px;
 transition: all 0.2s ease-in;
 position: relative;
 overflow: hidden;
 font-size: 19px;
 color: black;
 z-index: 1;
}

.button:before {
 content: "";
 position: absolute;
 left: 50%;
 transform: translateX(-50%) scaleY(1) scaleX(1.25);
 top: 100%;
 width: 140%;
 height: 180%;
 background-color: rgba(0, 0, 0, 0.05);
 border-radius: 50%;
 display: block;
 transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
 z-index: -1;
}

.button:after {
 content: "";
 position: absolute;
 left: 55%;
 transform: translateX(-50%) scaleY(1) scaleX(1.45);
 top: 180%;
 width: 160%;
 height: 190%;
 background-color: #39bda7;
 border-radius: 50%;
 display: block;
 transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
 z-index: -1;
}

.button:hover {
 color: #ffffff;
 border: 1px solid #39bda7;
}

.button:hover:before {
 top: -35%;
 background-color: #39bda7;
 transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.button:hover:after {
 top: -45%;
 background-color: #39bda7;
 transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}
.loader {
  display: block;
  --height-of-loader: 4px;
  --loader-color: #0071e2;
  width: 130px;
  height: var(--height-of-loader);
  border-radius: 30px;
  background-color: rgba(0,0,0,0.2);
  position: relative;
}

.loader::before {
  content: "";
  position: absolute;
  background: var(--loader-color);
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  border-radius: 30px;
  animation: moving 1s ease-in-out infinite;
  ;
}

@keyframes moving {
  50% {
    width: 100%;
  }

  100% {
    width: 0;
    right: 0;
    left: unset;
  }
}
  </style>
  