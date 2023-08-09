<template>
    <div class="card">
      <form @submit.prevent="agendarCita">
        <div>
          <label for="fechaCita">Fecha de la cita:</label>
          <input type="datetime-local" id="fechaCita" v-model="fechaCita" />
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
        <div class="Servicios">
            <div class="responsive-table">
        <table class="table table-hover custom-table">
        <thead>
            <tr>
              <th></th>
              <th>Servicios Clinicos</th>
            </tr>
          </thead>
          <tbody> 
            <tr v-for="servC in servClinicos">
              <td><input type="checkbox" v-model="Services" :value="servC.id" /></td> 
              <td>{{ servC.nombre_TServicio }}</td>
              </tr>
          </tbody>
        </table>
      </div>
          </div>
          <div class="Servicios">
            <div class="responsive-table">
        <table class="table table-hover custom-table">
        <thead>
            <tr>
              <th></th>
              <th>Servicios Esteticos</th>
            </tr>
          </thead>
          <tbody> 
            <tr v-for="servE in servEsteticos">
              <td><input type="checkbox" v-model="Services" :value="servE.id" /></td> 
              <td>{{ servE.nombre_TServicio }}</td>
              </tr>
          </tbody>
        </table>
      </div>
          </div>
        <div>
          <label for="motivo">Motivo de la cita:</label>
          <textarea id="motivo" v-model="motivo"></textarea>
        </div>
        <button type="submit">Agendar cita</button><br>
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
  const estatus = ref('Aceptada');
  const motivo = ref('');

  // Elementos para insertar en tabla de muchos a muchos
  const servicioSelect = ref('');
  const tipo_servicio = ref('');
  
  // ID del cliente (debe obtenerse del servidor)
  const id_cliente = ref(1);
  
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
      id_mascota: id_mascota.value,
      servicios: Services.value
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
    estatus.value = 'Aceptada';
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
  
  // Obtener servicios clinicos
  const servClinicos = ref([]);
  const ServiciosClinicos = async () => {
    try {
      const response = await axios.post('http://web.Backend.com/ServiciosClinicos');
      console.log(response.data);
      servClinicos.value = response.data.data;
    } catch (error) {
      console.error(error);
    }
  };
  
    // Obtener servicios esteticos
  const servEsteticos = ref([]);
  const ServiciosEsteticos = async () => {
    try {
      const response = await axios.post('http://web.Backend.com/ServiciosEsteticos');
      console.log(response.data);
      servEsteticos.value = response.data.data;
    } catch (error) {
      console.error(error);
    }
  };
  onMounted(ServiciosClinicos);
  onMounted(ServiciosEsteticos);
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
    width: 22%;
    border-bottom: 1px solid #f6bb46;
    cursor: pointer;
  }
  #Buscar:hover{
    width:59%;
    border-bottom: 1px solid #f6bb46;
    cursor: pointer;
  }

  #Registro:hover{
    width:51%;
    border-bottom: 1px solid #40a0ee; /*40a0ee f6bb46*/
    cursor: pointer;
  }

  #Registro{
    color: #40a0ee;
  }

  #BackCitas:hover{
    width: 13%;
    border-bottom: 1px solid red;
    cursor: pointer;
  }
  
  #BackCitas{
    color: red;
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
.Servicios {
    height: 100px;
    overflow: auto;
  }
  </style>