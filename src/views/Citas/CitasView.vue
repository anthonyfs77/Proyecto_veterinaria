<template>
  <div class="card">
    <form @submit.prevent="agendarCita">
      <div>
        <label for="fechaCita">Fecha de la cita:</label>
        <input type="datetime-local" id="fechaCita" v-model="fechaCita" @input="validarFecha" />
      </div>
      <div v-show="showFechaOcupada" class="error-message">
        Ya existe una cita para esta fecha.
        Puedes seleccionar una con una hora de diferencia
      </div>
      <div>
        <label for="nombreMascota"  >selecciona tu mascota</label>
        <select id="nombreMascota" v-model="id_mascota">
        <option value="" disabled selected>Selecciona tu mascota aquí.</option> 
        <option v-for="mascota in Mascotas" :key="mascota.id" :value="mascota.id">
          {{ mascota.nombre }}
        </option>
      </select>
      </div>
      <p id="Registro" @click="FormFlotante">Registra una nueva mascota aquí.</p>
      <div>
      </div>
      <div>
        <label for="motivo">Motivo de la cita:</label>
        <textarea id="motivo" v-model="motivo"></textarea>
      </div>
      <button type="submit" v-show="showButton">Agendar cita</button><br>
      <RouterLink  :to="{name: 'cuerpo'}" class="custom-link"><p id="Exit">Volver al inicio</p></RouterLink>
    </form>
  </div>

  <div v-if="showRegistrarMascota" class="overlay">
  <div class="floating-form">
    <form @submit.prevent="registrarMascota">
      <label for="nomMascota">Nombre de tu mascota</label>
      <input type="text" id="nomMascota" v-model="nombre"> 

      <label for="razaMascota">Raza de tu mascota</label>
      <input type="text" id="razaMascota" v-model="raza"> 

      <label for="generoMascota">Selecciona el genero de tu mascota.</label>
        <select id="generoMascota" v-model="genero">
          <option>Macho</option>
          <option>Hembra</option>
      </select>

      <label for="especieMascota">Selecciona la especie de tu mascota.</label>
        <select id="especieMascota" v-model="especie">
          <option>Perro</option>
          <option>Gato</option>
      </select>
      <br>
      <span id="Warning" class="material-symbols-outlined">warning</span><label for="Warning" class="w">No se atienden especies más allá de las establecidas
      en las opciones</label>
      <label class="w2" for="Warning">En caso de emergencia, puedes contactarnos a través de nuestros medios de contacto</label>
      <br>
      <button type="submit">Registrar mascota.</button><br>
      <p id="BackCitas" @click="BackCitas">Salir</p>
    </form>
  </div>
</div>

</template>

<script setup>
import { ref,  onMounted } from 'vue';
import axios from 'axios';

// Arreglo para los id's de servicios
const Services = ref([]);
// Referencias a elementos del formulario
const fechaCita = ref('');
const id_mascota = ref('');
const estatus = ref('Pendiente');
const motivo = ref('');

import {useUsuarioStore} from "@/stores/UsuariosStore";

let usuarioStore = useUsuarioStore();


// Elementos para insertar en tabla de muchos a muchos
const servicioSelect = ref('');
const tipo_servicio = ref('');

// ID del cliente (debe obtenerse del servidor)
const id_cliente = ref(usuarioStore.usuario.usuario.id);

// Mostrar/ocultar formulario de registro de mascotas
const showRegistrarMascota = ref(false);
const FormFlotante = () => {
  showRegistrarMascota.value = true;
};
const BackCitas = () => {
  showRegistrarMascota.value = false;
};

// Registro de mascotas
const nombre = ref('');
const raza = ref('');
const especie = ref('');
const propietario = ref(id_cliente.value);
const genero = ref('');

const registrarMascota = async () => {
  const mascota = {
    nombre_: nombre.value,
    propietario_: propietario.value,
    especie_: especie.value,
    raza_: raza.value,
    genero_: genero.value,
  };
  console.log(mascota);
  try {
    const response = await axios.post(
      'http://web.Backend.com/registrarMascota',
      mascota
    );
    console.log(response.data);
    location.reload();
  } catch (error) {
    console.error(error);
  }
};

// Agendar cita
const agendarCita = async () => {
  const cita = {
    fechaCita: fechaCita.value,
    estatus: estatus.value,
    motivo: motivo.value,
    id_mascota: id_mascota.value
  };
  console.log(cita);
  try {
    const response = await axios.post(
      'http://web.Backend.com/agendarcita',
      cita
    );
    console.log(response.data);
    cleanForm();
  } catch (error) {
    console.error(error);
  }
};

// Limpiar formulario
const cleanForm = () => {
  fechaCita.value = '';
  id_mascota.value = '';
  estatus.value = 'Pendiente';
  servicioSelect.value = '';
  tipo_servicio.value = '';
  motivo.value = '';
};

// Obtener mascotas del usuario
const Mascotas = ref([]);
const FiltroMascotas = async () => {
  try {
    const response = await axios.post(
      'http://web.Backend.com/MascotasUsuario',
      { id_cliente: id_cliente.value }
    );
    console.log(response.data);
    Mascotas.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
};
onMounted(FiltroMascotas);

const showFechaOcupada = ref(false);
const showButton = ref(true);

const validarFecha = async () => {
  const fechaSeleccionada = new Date(fechaCita.value)
  try {
    const response = await axios.post('http://web.Backend.com/ValidacionFechas');
    const fechasValidadas = response.data.data;
    const fechasExistentes = fechasValidadas.some(cita => new Date(cita.fecha_cita).getTime() === fechaSeleccionada.getTime())
    console.log(fechasExistentes);

    if (fechasExistentes){
      showFechaOcupada.value = true;
      showButton.value = false;
    }else{
      showFechaOcupada.value = false;
      showButton.value = true;
    }

  }catch (error){
    console.error(error);
  }
}



</script>

<style scoped>

.card {
  font-family: 'Comfortaa';
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

form {
  display: flex;
  flex-direction: column;
}

form div {
  margin-bottom: 10px;
}

form label {
  display: block;
  margin-bottom: 5px;
}

form input,
form select,
form textarea {
  width: 100%;
}
#Exit:hover{
  color: #f6bb46;
  cursor: pointer;
}


#Registro:hover{

  color: #0890b9; /*40a0ee f6bb46*/
  cursor: pointer;
}

#Registro{
  color: #002bff;
}

#BackCitas:hover{
  width: 13%;
  color: #ff0000;
  cursor: pointer;
}

#BackCitas{
  color: #600202;
}
@media (max-width: 600px) {
  .card {
    font-family: 'Comfortaa';
    margin: 20px;
    box-shadow: none;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
}

.overlay {
font-family: 'Comfortaa';
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
z-index: 999; /* Asegúrate de que el índice z sea mayor que el de otros elementos para que aparezca en frente */
}

.floating-form {
background-color: white;
border-radius: 10px;
padding: 20px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

#Warning, .w, .w2{
  color: red;
}

.error-message{
  color: red;
}

</style>