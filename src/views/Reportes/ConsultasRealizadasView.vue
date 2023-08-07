<template>
    <div class="first-container">
  
      <div class="parametros">
          <div class="Titulo">
            <span class="material-symbols-outlined">pet_supplies</span><h2>Consultas Realizadas</h2></div>
        <div class="filtro">
          <ComboBox v-model="selectedOption" title="Filtrar por:" :options="[{ text: 'Cliente', value: 'opcion1' },{ text: 'Fecha', value: 'opcion2' }]"/>
        </div>
        
        <div class="filtro2" v-show="status1">
          <InputCliente tittle1="Nombres(S)" tittle2="Apellidos" @input="obtenerConsultasClientes" v-model:modelValue1="Nombres" v-model:modelValue2="Apellidos" /> 
          <div class="label">
          <p class="plabel">Fecha</p>
          <InputFecha  placeholder="Formato: aaaa-mm-dd" v-model="FechaCons1" @input="obtenerConsultasClientes" /><br>
          <InputFecha  placeholder="Formato: aaaa-mm-dd" v-model="FechaCons2" @input="obtenerConsultasClientes" /><br>
        </div>
        </div>

        <div class="filtro4" v-show="status3">
          <div class="label">
          <p class="plabel">Fecha</p>
          <InputFecha  placeholder="Formato: aaaa-mm-dd" v-model="FechaCons" @input="obtenerConsultasFecha" /><br>
          <InputFecha  placeholder="Formato: aaaa-mm-dd" v-model="FechaCons3" @input="obtenerConsultasFecha" /><br>
        </div>
        </div>
      </div>
    
      <div class="pantalla">
        <div class="table-container">

        <div class="responsive-table" v-if="selectedOption === 'opcion2' && consFecha.length > 0">
          <table class="table table-hover custom-table">
        <thead>
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
                <th>Dosis</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in consFecha" :key="item.Motivo">
                <td id="Nombre">{{ item.Nombre }}</td>
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
                <td>{{ item.Dosis }}</td>
                <td>{{ item.Cantidad }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-else-if="selectedOption === 'opcion2'">No hay datos disponibles.</p>
  
        <div class="responsive-table" v-if="selectedOption === 'opcion1' && constCliente.length > 0">
          <table class="table table-hover custom-table">
            <thead>
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
                <th>Dosis</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in constCliente" :key="item.Motivo">
                <td id="Nombre">{{ item.Nombre }}</td>
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
                <td>{{ item.Dosis }}</td>
                <td>{{ item.Dosis }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-else-if="selectedOption === 'opcion1'">No hay datos disponibles.</p>
      </div>
      </div>
    </div>
    </template>
    
    <script setup>
    import { ref, watch } from 'vue';
    import axios from 'axios';
   import InputCliente from '../../components/ControlesSencillos/InputCliente.vue';
   import ComboBox from '../../components/ControlesSencillos/ComboBox.vue'
   import InputFecha from '../../components/ControlesSencillos/InputFecha.vue';

    const selectedOption = ref('opcion2');
    const status1 = ref(false);
    const status3 = ref(true);
    
    watch(selectedOption, (newValue) => {
      if (newValue === 'opcion1') {
        status1.value = true;
        status3.value = false;
      } else if (newValue === 'opcion2') {
        status1.value = false;
        status3.value = true;
      } 
    });
  
  const FechaCons3 = ref("");
  const FechaCons = ref("");
  const consFecha = ref ([]);
  const obtenerConsultasFecha = async () => {
  try {
    const response = await axios.post('http://web.Backend.com/ReporteConsultasFecha', {Fecha: FechaCons.value, Fecha2: FechaCons3.value})
    consFecha.value = response.data.data;
    console.log(response.data);
  } catch (error) {
    console.error("Error al obtener el reporte de inventario", error);
  }
  };
  
  const FechaCons1 = ref("");
  const FechaCons2 = ref("");
  const Nombres = ref("");
  const Apellidos = ref("");
  const constCliente = ref([]);
  const obtenerConsultasClientes = async () => {
  try {
    const response = await axios.post('http://web.Backend.com/ReporteConsultasCliente', {Nombre: Nombres.value, Apellido: Apellidos.value, Fecha: FechaCons1.value, Fecha2: FechaCons2.value})
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

    .first-container, .pantalla{
      font-family: 'Comfortaa';
  }
  
    .first-container{
      width: 100%;
      height: 100vh;

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
  .custom-table td,
  .custom-table th {
    border: 1px solid #dee2e6;
  }

  .table-container {
    height: 500px;
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
    