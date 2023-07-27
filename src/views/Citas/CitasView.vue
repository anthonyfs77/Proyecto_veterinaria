<template>
    <div class="card">
      <form @submit.prevent="agendarCita">
        <div>
          <label for="fechaCita">Fecha de la cita:</label>
          <input type="date" id="fechaCita" v-model="fechaCita" />
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
          <label for="estatus">Estatus:</label>
          <select id="estatus" v-model="estatus">
            <option value="Aceptada">Aceptada</option>
            <option value="Rechazada">Rechazada</option>
            <option value="Pendiente" selected>Pendiente</option>
          </select>
        </div>
        <div>
          <label for="servicio">Servicio:</label>
          <select id="servicio" v-model="servicioSelect">
          <option v-for="servicio in servicios" :key="servicio.id" :value="servicio.id">
            {{ servicio.servicios }}
          </option>
        </select>
        <br>
        <label for="tiposervicio">Tipo de servicio:</label>
        <select id="tiposervicio" v-model="tipo_servicio">
            <option v-for="tipo_s in tiposservicios" :key="tipo_s.id" :value="tipo_s.id">{{ tipo_s.tipo_servicio }}</option>
          </select>
        </div>
        <div>
          <label for="motivo">Motivo de la cita:</label>
          <textarea id="motivo" v-model="motivo"></textarea>
        </div>
        <button type="submit">Agendar cita</button><br>
        <RouterLink  :to="{name: 'principalMain'}" class="custom-link"><p id="Exit">Volver al inicio</p></RouterLink>
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
          <select id="generoMascota" v-model="GeneroCombo">
            <option>Hembra</option>
            <option>Macho</option>
        </select>

        <label for="especieMascota">Selecciona la especie de tu mascota.</label>
          <select id="especieMascota" v-model="id_especie">
          <option v-for="especie in Especies" :key="especie.id" :value="especie.id">
            {{ especie.especie }}
          </option>
        </select>
        <br>
        <button type="submit">Registrar mascota.</button><br>
        <p id="BackCitas" @click="BackCitas">Salir</p>
      </form>
    </div>
  </div>

  </template>
  
  <script setup>
  import { ref, watch, onMounted } from 'vue';
  import axios from 'axios';
  
  // Referencias a elementos del formulario
  const fechaCita = ref('');
  const id_mascota = ref('');
  const estatus = ref('Pendiente');
  const servicioSelect = ref('');
  const tipo_servicio = ref('');
  const motivo = ref('');
  
  // ID del cliente (debe obtenerse del servidor)
  const id_cliente = ref(1);
  
  // Mostrar/ocultar formulario de registro de mascotas
  const showRegistrarMascota = ref(false);
  const FormFlotante = () => {
    showRegistrarMascota.value = true;
    ObtenerEspecie();
  };
  const BackCitas = () => {
    showRegistrarMascota.value = false;
  };
  
  // Registro de mascotas
  const nombre = ref('');
  const raza = ref('');
  const id_especie = ref('');
  const propietario = ref(id_cliente.value);
  const genero = ref('');
  const GeneroCombo = ref('');
  
  watch(GeneroCombo, (newValue) => {
    if (newValue === 'Hembra') {
      genero.value = 'Hembra';
    } else if (newValue === 'Macho') {
      genero.value = 'Macho';
    }
  });
  
  const registrarMascota = async () => {
    const mascota = {
      nombre_: nombre.value,
      propietario_: propietario.value,
      especie_: id_especie.value,
      raza_: raza.value,
      genero_: genero.value,
    };
    console.log(mascota);
    try {
      const response = await axios.post(
        'http://www.backendorg.com/registrarMascota',
        mascota
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  // Agendar cita
  const agendarCita = async () => {
    const cita = {
      fechaCita: fechaCita.value,
      estatus: estatus.value,
      tipo_servicio: tipo_servicio.value,
      motivo: motivo.value,
      id_cliente: id_cliente.value,
      id_mascota: id_mascota.value,
      id_servicio: servicioSelect.value,
    };
  
    try {
      const response = await axios.post(
        'http://www.backendorg.com/agendarcita',
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
        'http://www.backendorg.com/MascotasUsuario',
        { id_cliente: id_cliente.value }
      );
      console.log(response.data);
      Mascotas.value = response.data.data;
    } catch (error) {
      console.error(error);
    }
  };
  onMounted(FiltroMascotas);
  
  // Obtener especies
  const Especies = ref([]);
  const ObtenerEspecie = async () => {
    try {
      const response = await axios.post('http://www.backendorg.com/especie');
      console.log(response.data);
      Especies.value = response.data.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  // Obtener servicios
  const servicios = ref([]);
  const ObtenerServicio = async () => {
    try {
      const response = await axios.post('http://www.backendorg.com/servicio');
      console.log(response.data);
      servicios.value = response.data.data;
    } catch (error) {
      console.error(error);
    }
  };
  onMounted(ObtenerServicio);
  
  // Obtener tipos de servicios para el servicio seleccionado
  const tiposservicios = ref([]);
  watch(servicioSelect, async (newValue) => {
    const response = await axios.post(
      'http://www.backendorg.com/tiposservicios',
      { id_servicio: newValue }
    );
    tiposservicios.value = response.data.data;
  });
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
  
  </style>
  