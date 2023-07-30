<template>
  <div class="first-container">

    <div class="parametros">
        <div class="Titulo">
          <span class="material-symbols-outlined">local_hospital</span><h2>Generar Consultas</h2></div>
      <div class="filtro">
        <label for="tipo" class="label-tipo">Filtrar por:</label>
        <select v-model="selectedOption" id="tipo" class="select-tipo">
          <option value="opcion1">Cliente</option>
          <option value="opcion2">Fecha</option>
          <option value="opcion3" selected>Reporte general</option>
        </select>
      </div>
      <div class="filtro2" v-show="status1">
        <label for="busqueda" class="label-busqueda">Nombre(s) del cliente:</label>
        <input type="search" name="busquedaCat" id="busqueda" class="input-search" v-model="Nombres"><br><br>
        <label for="busquedaP" class="label-busqueda">Apellidos del cliente:</label>
        <input type="search" name="busquedaCat" id="busquedaP" class="input-search" v-model="Apellidos"><br>
        <button class="btn-generar" @click="GenerarConsultasCliente">Generar</button>
      </div>
  
      <div class="filtro3" v-show="status2">
        <button class="btn-generar" @click="GenerarConsultas">Generar</button>
      </div>
  
      <div class="filtro4" v-show="status3">
        <label for="busquedafecha" class="label-fecha">Ingrese la fecha:</label>
        <input type="search" name="fecha" id="busquedafecha" class="input-fecha" placeholder="       Formato: aaaa-mm-dd" v-model="FechaCons"><br>
        <button class="btn-generar" @click="GenerarConsultasFecha">Generar</button>
      </div>
    </div>
  
    <div class="pantalla">
      <div class="table-container">
      <!-- Tabla de citas generales -->
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
              <th>Servicio Solicitado</th>
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
              <th>Servicio Solicitado</th>
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
          <label for="medicamentos">Medicamento a usar: </label>
          <select  id="medicamentos" v-model="id_medicamentos">
            <option v-for="medicamento in medicamentos" :key="medicamento.id" :value="medicamento.id">
              {{ medicamento.nom_producto }}
            </option>
          </select>
          <br>
          <div class="table-container2">
            <div class="responsive-table">
        <table class="table table-hover custom-table">
        <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Dosis</th>
            </tr>
          </thead>
          <tbody> 
            <tr v-for="medicamento in medicamentos" :key="medicamento.id">
              <td><input type="checkbox" name="" id=""></td>
              <td>{{ medicamento.nom_producto }}</td>
              <td><input type="text"></td>
            </tr>
          </tbody>
        </table>
      </div>
          </div>
          <br>
         <label for="dosis">Dosis:</label>
          <input type="text" id="dosis" v-model="dosis">
          <br>
          <button type="submit">Guardar Consulta.</button><br>
        <p id="Atras" @click="Atras">Salir</p>
      </form>
    </div>
  </div>

  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import axios from 'axios';
  
  const selectedOption = ref('opcion3');
  const status1 = ref(false);
  const status2 = ref(true);
  const status3 = ref(false);

  const observaciones = ref("");
  const id_medicamentos = ref("");
  const peso = ref("");
  const altura = ref("");
  const edad = ref("");
  const id_cita = ref("");
  const dosis = ref("");

  const medicamentos = ref([]);
  const BuscarMedicamentos = async (id) => {
   id_cita.value = id;
  try {
  const response = await axios.post('http://www.backendorg.com/BuscarMedicamentos')
  medicamentos.value = response.data.data;
  console.log(response.data);
  console.log(id_cita.value);
  FormFlotante();
  } catch (error) {
  console.error("Error al obtener el reporte de inventario", error);
  }
  };

  const RegistroConsulta = async () => {
    const Consulta = {
      observaciones: observaciones.value,
      id_productosInternos: id_medicamentos.value,
      peso: peso.value,
      altura: altura.value,
      edad: edad.value,
      id_cita: id_cita.value,
      dosis: dosis.value,
      
    };
    try {
      const response = await axios.post(
        'http://www.backendorg.com/RegistroConsulta',
        Consulta
      );
      console.log(response.data);
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
 const response = await axios.post('http://www.backendorg.com/GenerarConsultas')
 General.value = response.data.data;
 console.log(response.data);
} catch (error) {
 console.error("Error al obtener el reporte de inventario", error);
}
};

/////////////////////////////////////////////////////////////////////////////

const FechaCons = ref("");
const consFecha = ref ([]);

const GenerarConsultasFecha = async () => {
try {
  const response = await axios.post('http://www.backendorg.com/GenerarConsultasFecha', {Fecha: FechaCons.value})
  consFecha.value = response.data.data;
  console.log(response.data);
} catch (error) {
  console.error("Error al obtener el reporte de inventario", error);
}
}

////////////////////////////////////////////////////////////////////////////////////

const Nombres = ref("");
const Apellidos = ref("");

const constCliente = ref([]);
const GenerarConsultasCliente = async () => {
try {
  const response = await axios.post('http://www.backendorg.com/GenerarConsultasCliente', {Nombre: Nombres.value, Apellido: Apellidos.value})
  constCliente.value = response.data.data;
  console.log(response.data);
} catch (error) {
  console.error("Error al obtener el reporte de inventario", error);
}
}

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
  
  :root {
    --color-primary: #7380ec;
  }

  .label-tipo {
    font-size: 1.2rem;
  }
  
  .select-tipo {
    border: none;
    border-bottom: 2px solid black;
    transition: border-color 0.3s;
    font-size: 1.2rem;
    padding: 0.5rem;
    max-width: 20rem;
  }
  
  .select-tipo:focus {
    border-color: var(--color-primary);
    background-color: transparent;
  }
  
  .label-busqueda {
    font-size: 1.2rem;
  }
  
  .label-fecha {
    font-size: 1.2rem;
  }
  
  .input-search,
  .input-fecha {
    border: none;
    border-bottom: 2px solid black;
    transition: border-color 0.3s;
    font-size: 1.2rem;
    padding: 0.5rem;
    width: 100%;
    max-width: 20rem;
  }
  
  .input-search:focus,
  .input-fecha:focus {
    border-color: var(--color-primary);
    background-color: transparent;
  }
  
  .btn-generar {
    border: none;
    background-color: transparent;
    color: black;
    transition: border-color 0.3s, transform 0.3s;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    max-width: 10rem;
  }
  
  .btn-generar:hover {
    color: var(--color-primary);
  transform: translateX(15px);
  }
  
  .btn-generar:focus {
    outline: none;
  }
  
  .btn-generar:hover:not(:focus) {
    transform: translateX(15px);
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
  
    .label-tipo,
    .label-busqueda,
    .label-fecha,
    .select-tipo,
    .input-search,
    .input-fecha,
    .btn-generar {
      font-size: 1rem;
    }
  
    .select-tipo,
    .input-search,
    .input-fecha {
      max-width: none;
    }
  }
  
  @media (max-width: 576px) {
    .filtro {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  
    .btn-generar {
      max-width: none;
    }
  }
  .Titulo{
    display: flex;
    gap: 8px;
  }
    /* Estilos personalizados para la tabla */
    .custom-table {
    font-size: 0.9rem;
  }
  .custom-table thead th {
    font-weight: bold;
    background-color: white;
  }
  .custom-table td,
  .custom-table th {
    border: 1px solid #dee2e6;
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
  </style>
  