<template>
  <div class="first-container">
    <div class="second-container">
      <div class="carta" v-for="cita in citas">
        <div class="decoracion">
        </div>
        <ul>
          <li id="li1"><label class="labels" for="li1">Mascota:</label> {{cita.Nombre}}</li>
          <li id="li2"><label class="labels" for="li2">Fecha:</label> {{cita.Fecha}}</li>
          <li id="li3"><label class="labels" for="li3">Motivo:</label> {{cita.Motivo}}</li>
          <li id="li4"><label class="labels" for="li4">Estatus:</label>
            <span :style="{
                            'background-color': cita.Estatus === 'Aceptada' ? 'green' : (cita.Estatus === 'Pendiente' ? 'grey' : 'transparent'),
                            'color': cita.Estatus === 'Aceptada' || cita.Estatus === 'Pendiente' ? 'white' : 'black'
                          }">
                  {{ cita.Estatus }}
            </span>
          </li>
          <br>
          <li id="li5"><label class="labels" for="li5">En caso de que quieras cancelar tu cita, contáctanos</label></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup>
import {  ref, onMounted  } from 'vue';
import axios from "axios";
import {useUsuarioStore} from "@/stores/UsuariosStore";

let usuarioStore = useUsuarioStore();

const id_cliente = ref(usuarioStore.usuario.usuario.id);
const citas = ref([]);  

const citaPendientes = async () => {
  try {
    const response = await axios.post('http://web.Backend.com/CitasPendientesCliente', {id_cliente: id_cliente.value} )
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
  width: 395px;
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
.labels{
  font-weight: bold;
}
</style>