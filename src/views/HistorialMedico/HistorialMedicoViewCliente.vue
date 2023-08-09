<template>
  <div class="first-container">
            <div class="Titulo"> 
          <span class="material-symbols-outlined">respiratory_rate</span><h2>Hisotorial Medico</h2>
        </div>
        <div class="second-container">
          <div class="carta" v-for="mascota in Mascotas" :key="mascota.id" @click="DisplayWindow(mascota.id)">
    <span class="material-symbols-outlined" id="icono">pets</span>
      {{ mascota.nombre }}
      </div>
        </div>
  </div>
  <div v-if="ShowWindow" class="overlay">
    <div class="floating-form">
      <form>
        <InputFecha v-model="fecha" @input="HistorialMedicoFecha"/>
        <br>
        <div class="table-container2">
          <div class="responsive-table" v-show="ShowTable2">
            <table class="table table-hover custom-table">
              <thead>
              <tr>
                <th>Fecha</th>
                <th>Motivo</th>
                <th>Servicios</th>
                <th>Servicio_solicitado</th>
                <th>Peso</th>
                <th>Altura</th>
                <th>Edad</th>
                <th>Observaciones</th>
                <th>Medicacion</th>
                <th>Cantidad</th>
                <th>Dosis</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="datos in HistorialM2">
                <td>{{datos.Fecha}}</td>
                <td>{{datos.Motivo}}</td>
                <td>{{datos.Servicios}}</td>
                <td>{{datos.Servicio_solicitado}}</td>
                <td>{{datos.Peso}}</td>
                <td>{{datos.Altura}}</td>
                <td>{{datos.Edad}}</td>
                <td>{{datos.Observaciones}}</td>
                <td>{{datos.Medicacion}}</td>
                <td>{{datos.Cantidad}}</td>
                <td>{{datos.Dosis}}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="responsive-table" v-show="ShowTable1">
            <table class="table table-hover custom-table">
              <thead>
              <tr>
                <th>Fecha</th>
                <th>Motivo</th>
                <th>Servicios</th>
                <th>Servicio_solicitado</th>
                <th>Peso</th>
                <th>Altura</th>
                <th>Edad</th>
                <th>Observaciones</th>
                <th>Medicacion</th>
                <th>Cantidad</th>
                <th>Dosis</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="datos in HistorialM2">
                <td>{{datos.Fecha}}</td>
                <td>{{datos.Motivo}}</td>
                <td>{{datos.Servicios}}</td>
                <td>{{datos.Servicio_solicitado}}</td>
                <td>{{datos.Peso}}</td>
                <td>{{datos.Altura}}</td>
                <td>{{datos.Edad}}</td>
                <td>{{datos.Observaciones}}</td>
                <td>{{datos.Medicacion}}</td>
                <td>{{datos.Cantidad}}</td>
                <td>{{datos.Dosis}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p id="Atras" @click="CloseWindow">Salir</p>
      </form>
    </div>
  </div>
  </template>
    
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import axios from 'axios';
  import InputFecha from "@/components/ControlesSencillos/InputFecha.vue";

  const id_cliente = ref("1");

  const ShowTable1 = ref(true);
  const ShowTable2 = ref(false);

  const ShowWindow = ref(false);

  const DisplayWindow = (id) => {
    id_animal.value = id;
    ShowWindow.value = true;
    console.log(id_animal.value)
    HistorialMedicoIDMascota();
  };
  const CloseWindow = () => {
    ShowWindow.value = false;
  };


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

  const id_animal = ref("");
  const fecha = ref("");
  const HistorialM1 = ref ([]);
  const HistorialMedicoFecha = async () => {
    ShowTable1.value = false;
    ShowTable2.value = true;
    try {
  const response = await axios.post('http://web.Backend.com/HistorialMedicoIDFecha', {Fecha: fecha.value, id_animal: id_animal.value} )
  HistorialM1.value = response.data.data;
  console.log(response.data);
} catch (error) {
  console.error(error);
}
  };
  watch(fecha, (newValue) => {
    HistorialMedicoFecha();
  });

  const HistorialM2 = ref([]);
  const HistorialMedicoIDMascota = async () => {
    try {
      const response = await axios.post('http://web.Backend.com/HistorialIDMascota', {id_mascota: id_animal.value} )
      HistorialM2.value = response.data.data;
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }



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
  .Titulo {
    display: flex;
    gap: 8px;
    justify-content: center;
  }

   .Titulo span {
      margin-right: 1px;
      margin-top: 5px;
    }

    .carta {
  display: flex;
  justify-content: center;
  border: 1px solid #cccccc;
  padding: 10px;
  margin: 10px;
  width: 250px;
  background-color: #F8FBFE;
  border-radius: 8px;
  transition: transform 0.2s;
}

.second-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.carta:hover{
  background-color: #dfb704;
  color: #ffffff;
  transform: translateY(-4px); 
  border-color: #dfb704;
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
    z-index: 999;
  }

  .floating-form {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
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
  .table-container2 {
    height: 100px;
    overflow: auto;
  }

  </style>
    