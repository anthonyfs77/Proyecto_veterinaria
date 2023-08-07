<template>
  <div class="first-container">

    <div class="parametros">
        <div class="Titulo">
          <span class="material-symbols-outlined">local_hospital</span><h2>Generar Consultas</h2>
        </div>
      <div class="filtro">
        <ComboBox v-model="selectedOption" title="Filtrar por:" :options="[{ text: 'Cliente', value: 'opcion1' },{ text: 'Fecha', value: 'opcion2' },{ text: 'Reporte General', value: 'opcion3' }]"/>
      </div>
      <div class="filtro2" v-show="status1">
        <InputCliente tittle1="Nombres(S)" tittle2="Apellidos" v-model:modelValue1="Nombres" v-model:modelValue2="Apellidos" @input="GenerarConsultasCliente" />
      </div>
  
      <div class="filtro4" v-show="status3">
        <div class="label">
          <p class="plabel">Fecha</p>
          <InputFecha  v-model="FechaCons" @input="GenerarConsultasFecha" /><br>
          <InputFecha  v-model="FechaCons2" @input="GenerarConsultasFecha" /> <br>
        </div>
      </div>
    </div>
  
    <div class="pantalla">
      <div class="table-container">
        <div class="responsive-table" v-if="selectedOption === 'opcion3' && General.length > 0">
        <table class="table table-hover custom-table">
        <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Especie</th>
              <th>Raza</th>
              <th>Genero</th>
              <th>Dueño</th>
              <th>Fecha</th>
              <th>Motivo</th>
              <th>Servicios</th>
              <th>Servicio Solicitado</th>
            </tr>
          </thead>
          <tbody> 
            <tr v-for="item in General" :key="item.id">
              <td><span class="material-symbols-outlined" id="Boton" @click="BuscarMedicamentos(item.id)">local_hospital</span></td>
              <td id="Nombre">{{ item.Nombre }}</td>
              <td>{{ item.Especie }}</td>
              <td>{{ item.Raza }}</td>
              <td>{{ item.Genero }}</td>
              <td>{{ item.Dueño }}</td>
              <td>{{ item.Fecha }}</td>
              <td>{{ item.Motivo }}</td>
              <td>{{ item.Servicios }}</td>
              <td>{{ item.Servicio_solicitado }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else-if="selectedOption === 'opcion3'">No hay datos disponibles.</p>
  
      <!-- Tabla de consultas por fecha -->
      <div class="responsive-table" v-if="selectedOption === 'opcion2' && consFecha.length > 0">
        <table class="table table-hover custom-table">
        <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Especie</th>
              <th>Raza</th>
              <th>Genero</th>
              <th>Dueño</th>
              <th>Fecha</th>
              <th>Motivo</th>
              <th>Servicios</th>
              <th>Servicios Solicitados</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in consFecha" :key="item.id">
              <td><span class="material-symbols-outlined" id="Boton" @click="BuscarMedicamentos(item.id)">local_hospital</span></td>
              <td id="Nombre">{{ item.Nombre }}</td>
              <td>{{ item.Especie }}</td>
              <td>{{ item.Raza }}</td>
              <td>{{ item.Genero }}</td>
              <td>{{ item.Dueño }}</td>
              <td>{{ item.Fecha }}</td>
              <td>{{ item.Motivo }}</td>
              <td>{{ item.Servicios }}</td>
              <td>{{ item.Servicio_solicitado }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else-if="selectedOption === 'opcion2'">No hay datos disponibles.</p>

      <!-- Tabla de consultas por cliente -->
      <div class="responsive-table" v-if="selectedOption === 'opcion1' && constCliente.length > 0">
        <table class="table table-hover custom-table">
        <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Especie</th>
              <th>Raza</th>
              <th>Genero</th>
              <th>Dueño</th>
              <th>Fecha</th>
              <th>Motivo</th>
              <th>Servicios</th>
              <th>Servicios Solicitados</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in constCliente" :key="item.id">
              <td><span class="material-symbols-outlined" id="Boton" @click="BuscarMedicamentos(item.id)">local_hospital</span></td>
              <td id="Nombre">{{ item.Nombre }}</td>
              <td>{{ item.Especie }}</td>
              <td>{{ item.Raza }}</td>
              <td>{{ item.Genero }}</td>
              <td>{{ item.Dueño }}</td>
              <td>{{ item.Fecha }}</td>
              <td>{{ item.Motivo }}</td>
              <td>{{ item.Servicios }}</td>
              <td>{{ item.Servicio_solicitado }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else-if="selectedOption === 'opcion1'">No hay datos disponibles.</p>
    </div>
    </div>
  </div>
  <div v-if="showRegistrarMascota" class="overlay">
    <div class="floating-form">
      <form @submit.prevent="RegistroConsulta">
        <label for="observaciones">Observaciones medicas:</label>
          <textarea id="observaciones" v-model="observaciones"></textarea>
          <label for="peso">Peso (kg):</label>
          <input type="text" id="peso" v-model="peso"> 
          <label for="altura">Altura (mts):</label>
          <input type="text" id="altura" v-model="altura"> 
          <label for="edad">Edad (meses):</label>
          <input type="text" id="edad" v-model="edad">
          <br>
          <div class="table-container2">
            <div class="responsive-table">
        <table class="table table-hover custom-table">
        <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody> 
            <tr v-for="(medicamento, index ) in medicamentoCantidad">
              <td><input type="checkbox" name="c1" id="" v-model="medicamento.Selected"  :key="index"  /></td> 
              <td>{{ medicamento.nom_producto }}</td>
              <td><DosisCant tittle1="Dosis" tittle2="Cant" v-model:modelValue1="medicamento.Dosis" v-model:modelValue2="medicamento.Cantidad" :key="index" /></td>
              </tr>
          </tbody>
        </table>
      </div>
          </div>
          <br>
          
          <button type="submit">Guardar Consulta.</button><br>
        <p id="Atras" @click="Atras">Salir</p>
      </form>
    </div>
  </div>

  </template>
  
  <script setup>
  import { ref, watch, onMounted } from 'vue';
  import axios from 'axios';
  import InputCliente from '../../components/ControlesSencillos/InputCliente.vue';
  import ComboBox from '../../components/ControlesSencillos/ComboBox.vue'
  import DosisCant from '../../components/ControlesSencillos/DosisCant.vue';
  import InputFecha from '../../components/ControlesSencillos/InputFecha.vue';

  const selectedOption = ref('opcion3');
  const status1 = ref(false);
  const status2 = ref(true);
  const status3 = ref(false);

  const observaciones = ref('');
  const peso = ref('');
  const altura = ref('');
  const edad = ref('');
  const id_cita = ref('');
  const FiltroMedicamento = ref();

  const medicamentoCantidad = ref();

  const medicamentos = ref([]);
  const BuscarMedicamentos = async (id) => {
   id_cita.value = id;
  try {
  const response = await axios.post('http://web.Backend.com/BuscarMedicamentos')
  medicamentos.value = response.data.data;
  medicamentoCantidad.value = response.data.data.map(ii => ({
    ...ii,
    "Selected": false,
    "Cantidad": null,
    "Dosis": null
  }) )
  console.log(medicamentoCantidad.value);
  console.log(id_cita.value);
  FormFlotante();
  } catch (error) {
  console.error("Error al obtener el reporte de inventario", error);
  }
  };
  
  const RegistroConsulta = async () => {
   FiltroMedicamento.value = medicamentoCantidad.value.filter(objeto => objeto.Selected )
  const Consulta = {
    id_cita: id_cita.value,
    observaciones: observaciones.value,
    peso: peso.value,
    altura: altura.value,
    edad: edad.value,
    id_productosInternos: FiltroMedicamento.value
  }
    try {
      console.log("CITA", id_cita.value)
    console.log("Datos 1", Consulta);
      const response = await axios.post(
        'http://web.Backend.com/RegistroConsulta',
        Consulta
      );
      
      console.log("respuesta",response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const showRegistrarMascota = ref(false);
  const FormFlotante = () => {
    showRegistrarMascota.value = true;
    
  };
  const Atras = () => {
    showRegistrarMascota.value = false;
  };
  
  watch(selectedOption, (newValue) => {
    if (newValue === 'opcion1') {
      status1.value = true;
      status2.value = false;
      status3.value = false;
    } else if (newValue === 'opcion2') {
      status1.value = false;
      status2.value = false;
      status3.value = true;
    } else {
      status1.value = false;
      status2.value = true;
      status3.value = false;
    }
  });
  const General = ref([]);
const GenerarConsultas = async () => {
 try {
 const response = await axios.post('http://web.Backend.com/GenerarConsultas')
 General.value = response.data.data;
 console.log(response.data);
} catch (error) {
 console.error("Error al obtener el reporte de inventario", error);
}
};
onMounted(GenerarConsultas);

  const FechaCons2 = ref("");
const FechaCons = ref("");
const consFecha = ref ([]);
const GenerarConsultasFecha = async () => {
try {
  const response = await axios.post('http://web.Backend.com/GenerarConsultasFecha', {Fecha: FechaCons.value, Fecha2: FechaCons2.value})
  consFecha.value = response.data.data;
  console.log(response.data);
} catch (error) {
  console.error(error);
}
};

const Nombres = ref("");
const Apellidos = ref("");  
const constCliente = ref([]);
const GenerarConsultasCliente = async () => {
try {
  const response = await axios.post('http://web.Backend.com/GenerarConsultasCliente', {Nombre: Nombres.value, Apellido: Apellidos.value})
  constCliente.value = response.data.data;
  console.log(response.data);
} catch (error) {
  console.error("Error al obtener el reporte de inventario", error);
}
};
  </script>
  
  <style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }


  .first-container{
    width: 100%;
    height: 100vh;
    font-family: 'Comfortaa';
  }
  
 

  .pantalla {
    display: flex;
    justify-content: center;
 
    height: 85vh;
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    .parametros {
      padding: 1rem;
    }
  }
  
  @media (max-width: 576px) {
    .filtro {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }
  .Titulo{
    display: flex;
    gap: 8px;
    justify-content: center;
  }
  .Titulo span {
    margin-right: 1px;
    margin-top: 5px;
  }
    .custom-table {
    font-size: 0.9rem;
  }
  .custom-table thead th {
    font-weight: bold;
    background-color: white;
  }
  
  .table-container {
    height: 500px;
    overflow: auto;
  }

  .table-container2 {
    height: 100px;
    overflow: auto;
  }

  @media (max-width: 767px) {
    .custom-table thead {
      display: none;
    }
    .custom-table td {
      display: block;
      text-align: right;
    }
    .custom-table td:before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    #Nombre {
    font-weight: bold;
  }
  }
  #Boton{
    color: rgb(132, 202, 26);
  }
  #Boton:hover{
    color: green;
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

#Atras:hover{
    width: 22%;
    border-bottom: 1px solid red;
    cursor: pointer;
  }
  
  #Atras{
    color: red;
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

  .label{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.plabel{
    color: #c2c5d3;
}
  </style>
  