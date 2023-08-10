<template>
  <div class="first-container">
    <div class="second-container">
      <div class="carta" v-for="cita in citas">
        <div class="decoracion">
        </div>
        <ul>
          <li>Mascota: {{cita.Nombre}}</li>
          <li>Fecha: {{cita.Fecha}}</li>
          <li>Motivo: {{cita.Motivo}}</li>
          <li>Servicios: {{cita.Servicios}}</li>
          <li>Servicios solicitados: {{cita.Servicio_solicitado}}</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup>
import {  ref, onMounted  } from 'vue';
import axios from "axios";

const id_cliente = ref(1);
const citas = ref([]);

const citaPendientes = async () => {
  try {
    const response = await axios.get('http://web.Backend.com/CitasPendientesCliente', {id_cliente: id_cliente.value} )
    citas.value = response.data.data;
    console.log(response.data);
  }catch (error) {
    console.error(error);
  }
};
onMounted(citaPendientes);
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.first-container {
  font-family: 'Comfortaa';
  width: 100%;
  height: 100%;

}

.carta{
  border-radius: 8px;
  width: 450px;
  height: 250px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

}

.second-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.decoracion{
  height: 20px;
  background-color: #f3ae23;
}
</style>