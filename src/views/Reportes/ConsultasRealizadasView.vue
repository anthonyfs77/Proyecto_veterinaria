<template>
    <div class="first-container">
  
      <div class="parametros">
          <div class="Titulo">
            <span class="material-symbols-outlined">pet_supplies</span><h2>Consultas Realizadas</h2></div>
        <div class="filtro">
          <label for="tipo" class="label-tipo">Seleccione el tipo de reporte que desea realizar:</label>
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
          <button class="btn-generar" @click="obtenerConsultasClientes">Generar 1</button>
        </div>
    
        <div class="filtro3" v-show="status2">
          <button class="btn-generar" @click="obtenerReporteConsultas">Generar 2</button>
        </div>
    
        <div class="filtro4" v-show="status3">
          <label for="busquedafecha" class="label-fecha">Ingrese la fecha:</label>
          <input type="search" name="fecha" id="busquedafecha" class="input-fecha" placeholder="       Formato: aaaa-mm-dd" v-model="FechaCons"><br>
          <button class="btn-generar" @click="obtenerConsultasFecha">Generar 3</button>
        </div>
      </div>
    
      <div class="pantalla">
        <!-- Tabla de consultas generales -->
        <div class="responsive-table" v-if="selectedOption === 'opcion3' && General.length > 0">
          <table class="table table-success table-striped">
            <thead class="table-dark">
              <tr>
                <th>Nombre</th>
                <th>Especie</th>
                <th>Raza</th>
                <th>Genero</th>
                <th>Dueño</th>
                <th>Fecha</th>
                <th>Motivo</th>
                <th>Servicios</th>
                <th>Servicio Solicitado</th>
                <th>Peso</th>
                <th>Altura</th>
                <th>Edad</th>
                <th>Observaciones</th>
                <th>Medicacion</th>
                <th>Tipo de medicamento</th>
                <th>Dosis</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in General" :key="item.Motivo">
                <td>{{ item.Nombre }}</td>
                <td>{{ item.Especie }}</td>
                <td>{{ item.Raza }}</td>
                <td>{{ item.Genero }}</td>
                <td>{{ item.Dueño }}</td>
                <td>{{ item.Fecha }}</td>
                <td>{{ item.Motivo }}</td>
                <td>{{ item.Servicios }}</td>
                <td>{{ item.Servicio_solicitado }}</td>
                <td>{{ item.Peso }} kg</td>
                <td>{{ item.Altura }} mts</td>
                <td>{{ item.Edad }} meses</td>
                <td>{{ item.Observaciones }}</td>
                <td>{{ item.Medicacion }}</td>
                <td>{{ item.Tipo_de_medicamento }}</td>
                <td>{{ item.Dosis }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-else-if="selectedOption === 'opcion3'">No hay datos disponibles.</p>
  
        <!-- Tabla de consultas por fecha -->
        <div class="responsive-table" v-if="selectedOption === 'opcion2' && consFecha.length > 0">
          <table class="table table-success table-striped">
            <thead class="table-dark">
              <tr>
                <th>Nombre</th>
                <th>Especie</th>
                <th>Raza</th>
                <th>Genero</th>
                <th>Dueño</th>
                <th>Fecha</th>
                <th>Motivo</th>
                <th>Servicios</th>
                <th>Servicio Solicitado</th>
                <th>Peso</th>
                <th>Altura</th>
                <th>Edad</th>
                <th>Observaciones</th>
                <th>Medicacion</th>
                <th>Tipo de medicamento</th>
                <th>Dosis</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in consFecha" :key="item.Motivo">
                <td>{{ item.Nombre }}</td>
                <td>{{ item.Especie }}</td>
                <td>{{ item.Raza }}</td>
                <td>{{ item.Genero }}</td>
                <td>{{ item.Dueño }}</td>
                <td>{{ item.Fecha }}</td>
                <td>{{ item.Motivo }}</td>
                <td>{{ item.Servicios }}</td>
                <td>{{ item.Servicio_solicitado }}</td>
                <td>{{ item.Peso }} kg</td>
                <td>{{ item.Altura }} mts</td>
                <td>{{ item.Edad }} meses</td>
                <td>{{ item.Observaciones }}</td>
                <td>{{ item.Medicacion }}</td>
                <td>{{ item.Tipo_de_medicamento }}</td>
                <td>{{ item.Dosis }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-else-if="selectedOption === 'opcion2'">No hay datos disponibles.</p>
  
        <!-- Tabla de consultas por cliente -->
        <div class="responsive-table" v-if="selectedOption === 'opcion1' && constCliente.length > 0">
          <table class="table table-success table-striped">
            <thead class="table-dark">
              <tr>
                <th>Nombre</th>
                <th>Especie</th>
                <th>Raza</th>
                <th>Genero</th>
                <th>Dueño</th>
                <th>Fecha</th>
                <th>Motivo</th>
                <th>Servicios</th>
                <th>Servicio Solicitado</th>
                <th>Peso</th>
                <th>Altura</th>
                <th>Edad</th>
                <th>Observaciones</th>
                <th>Medicacion</th>
                <th>Tipo de medicamento</th>
                <th>Dosis</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in constCliente" :key="item.Motivo">
                <td>{{ item.Nombre }}</td>
                <td>{{ item.Especie }}</td>
                <td>{{ item.Raza }}</td>
                <td>{{ item.Genero }}</td>
                <td>{{ item.Dueño }}</td>
                <td>{{ item.Fecha }}</td>
                <td>{{ item.Motivo }}</td>
                <td>{{ item.Servicios }}</td>
                <td>{{ item.Servicio_solicitado }}</td>
                <td>{{ item.Peso }} kg</td>
                <td>{{ item.Altura }} mts</td>
                <td>{{ item.Edad }} meses</td>
                <td>{{ item.Observaciones }}</td>
                <td>{{ item.Medicacion }}</td>
                <td>{{ item.Tipo_de_medicamento }}</td>
                <td>{{ item.Dosis }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-else-if="selectedOption === 'opcion1'">No hay datos disponibles.</p>
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
  
  const obtenerReporteConsultas = async () => {
   try {
   const response = await axios.post('http://www.backendorg.com/ReporteConsultasGeneral')
   General.value = response.data.data;
   console.log(response.data);
  } catch (error) {
   console.error("Error al obtener el reporte de inventario", error);
  }
  };
  
  /////////////////////////////////////////////////////////////////////////////
  
  const FechaCons = ref("");
  const consFecha = ref ([]);
  
  const obtenerConsultasFecha = async () => {
  try {
    const response = await axios.post('http://www.backendorg.com/ReporteConsultasFecha', {Fecha: FechaCons.value})
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
  const obtenerConsultasClientes = async () => {
  try {
    const response = await axios.post('http://www.backendorg.com/ReporteConsultasCliente', {Nombre: Nombres.value, Apellido: Apellidos.value})
    constCliente.value = response.data.data;
    console.log(response.data);
  } catch (error) {
    console.error("Error al obtener el reporte de inventario", error);
  }
  }
  
    </script>
    
    <style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Comfortaa', cursive;
    }
  
    .first-container{
      width: 100%;
      height: 100vh;
  
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
      border-bottom: 2px solid black;
      color: black;
      transition: border-color 0.3s, transform 0.3s;
      cursor: pointer;
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      max-width: 10rem;
    }
    
    .btn-generar:hover {
      border-color: var(--color-primary);
      transform: translateX(5px);
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
      align-items: center;
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
    </style>
    