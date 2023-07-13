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
             <h4>INFORMACIÓN DE PERFIL</h4>
          </div>
          <div class="row2 fill2">
            <h4>Nombre: {{ Nombre }}</h4>
          </div>
          <div class="row3 fill2">
            <h4>Apellidos: {{ Apellidos }}</h4>
          </div>
          <div class="row4 fill2">
            <h4>Telefono: {{ Numero }}</h4>
          </div>
        </div>
        <div class="column3"></div>
      </div>
    </div>
    <div class="informacion">
      <div>
          
      </div>
      <div class="info">
    <div class="text-field" v-for="(field, index) in fields" :key="index">
      <label :for="field">{{ field }}</label>
      <input type="text" :id="field" :value="userInfo[field]" :disabled="!isEditable[field]" @input="updateField(field, $event)"/>
      <button v-if="field === 'Contraseña' && isEditing" @click="unlockPasswordField">Cambiar contraseña</button>
    </div>
    <button @click="editInformation" v-if="!isEditing">Editar mi información</button>
    <button @click="saveInformation" v-if="isEditing">Guardar</button>
      </div>
      <div>

      </div>

    </div>
</div>

  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
import FotoUsuario from '../../components/infoUsuario/FotoUsuario.vue';
let fields = ['Nombre', 'Apellidos', 'Numero 1', 'Numero 2', 'Contraseña'];

let userInfo = reactive({
  'Nombre': '',
  'Apellidos': '',
  'Numero 1': '',
  'Numero 2': '',
  'Contraseña': ''
});

let isEditable = reactive({
  'Nombre': false,
  'Apellidos': false,
  'Numero 1': false,
  'Numero 2': false,
  'Contraseña': false
});

let isEditing = ref(false);

function editInformation() {
  isEditing.value = true;
  for(let key in isEditable) {
    if (key !== 'Contraseña') isEditable[key] = true;
  }
}

function unlockPasswordField() {
  isEditable['Contraseña'] = true;
}

function updateField(field, event) {
  userInfo[field] = event.target.value;
}

function saveInformation() {
  isEditing.value = false;
  for(let key in isEditable) {
    isEditable[key] = false;
  }
}

  </script>
  
  <style scoped>
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

button {
  margin-top: 5%;
  border: none;
  background: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
    .informacion{
      grid-row-start: 4;
      height: 100%;
      width: 100%;
      border-radius: 15px;
      display:grid;
      grid-template-columns:30% 40% 30%;
      grid-template-rows: 100%;
    }

    .info{
      gap: 3%;
      grid-column-start: 2;
      display: flex;
      flex-direction: column;
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
    background:linear-gradient(70deg, rgb(255, 255, 255), rgb(255, 250, 177));
    display: flex;
    justify-content: center;
    align-items: center;
  border-radius: 15px;
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

  .column3{

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

 

  </style>
  