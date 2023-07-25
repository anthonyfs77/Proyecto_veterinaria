<template>
    <div class="card">
      <form @submit.prevent="Functions">
        <div>
          <label for="fechaAlta">Fecha de alta de la cita:</label>
          <input type="date" id="fechaAlta" v-model="fechaAlta" />
        </div>
        <div>
          <label for="fechaCita">Fecha de la cita:</label>
          <input type="date" id="fechaCita" v-model="fechaCita" />
        </div>
        <div>
          <label for="nombreMascota">Nombre de la mascota:</label>
          <input type="text" id="nombreMascota" v-model="nombreMascota" />
        </div>
        <div>
          <label for="estatus">Estatus:</label>
          <select id="estatus" v-model="estatus">
            <option value="Aceptar">Aceptar</option>
            <option value="Rechazar">Rechazar</option>
            <option value="Pendiente" selected>Pendiente</option>
          </select>
        </div>
        <div>
          <label for="servicio">Servicio:</label>
          <select id="servicio" v-model="servicio">
            <option value="Medico">Médico</option>
            <option value="Estetico">Estético</option>
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
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const fechaAlta = ref('');
  const fechaCita = ref('');
  const nombreMascota = ref('');
  const estatus = ref('Pendiente');
  const servicio = ref('');
  const motivo = ref('');
  
  /* const submitForm = () => {
    const cita = {
      fechaAlta: fechaAlta.value,
      fechaCita: fechaCita.value,
      nombreMascota: nombreMascota.value,
      estatus: estatus.value,
      servicio: servicio.value,
      motivo: motivo.value,
    };
    console.log(cita);
  }; */
  
  const cleanForm = () => {
    fechaAlta.value = "";
    fechaCita.value = "";
    nombreMascota.value = "";
    estatus.value = "Pendiente";
    servicio.value = "";
    motivo.value = "";
  };
  
  const Functions = () => {
    agendarCita();
  };
 
  const agendarCita = async () => {
  const cita = {
    fechaAlta: fechaAlta.value,
    fechaCita: fechaCita.value,
    nombreMascota: nombreMascota.value,
    estatus: estatus.value,
    servicio: servicio.value,
    motivo: motivo.value,
    id_cliente: 1, // Aquí debe ir el id_cliente obtenido del servidor
    id_mascota: 1, // Aquí debe ir el id_mascota obtenido del servidor
  };

  try {
    const response = await axios.post('http://www.backendorg.com/agendarcita', cita);
    console.log(response.data);
    cleanForm();
  } catch (error) {
    console.error(error)
  }
};
  </script>
  
  <style scoped>
  
  .card {
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
p:hover{
    width: 22%;
    border-bottom: 1px solid #f6bb46;
    cursor: pointer;
  }
  
  @media (max-width: 600px) {
    .card {
      margin: 20px;
      box-shadow: none;
      border-radius: 0;
      border-left: none;
      border-right: none;
    }
  }
  
  </style>
  