<template>
  <div class="first-container">
    <div class="parametros">
      <div class="Titulo">
        <span class="material-symbols-outlined">shopping_cart</span><h2>Ordenes de Compra</h2>
      </div>
      <div class="filtro">
        <label for="tipo" class="label-tipo">Seleccione el tipo de reporte que desea realizar:</label>
        <select v-model="selectedOption" id="tipo" class="select-tipo">
          <option value="opcion1" selected>General</option>
          <option value="opcion2">Pagadas</option>
        </select>
      </div>
      <div class="filtro2" v-show="status1">
        <button class="btn-generar" @click="ReporteGeneralOrdenesCompra">Generar</button>
      </div>
      <div class="filtro3" v-show="status3">
        <button class="btn-generar" @click="ReporteGeneralOrdenesCompraPagadas">Generar</button>
      </div>
    </div>

    <div class="pantalla">
      <div class="table-container">
      <!-- Tabla de ordenes de compra generales -->
      <div class="responsive-table" v-if="selectedOption === 'opcion1' && General.length > 0">
        <table class="table table-hover custom-table">
        <thead>
            <tr>
              <th>Fecha de compra</th>
              <th>Fecha de pago</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Proveedor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in General" :key="item.Motivo">
              <td id="Fecha">{{ item.Fecha_Compra }}</td>
              <td>{{ item.Fecha_Pago }}</td>
              <td>{{ item.Nombre }}</td>
              <td>{{ item.Cantidad }}</td>
              <td>{{ item.Precio }}</td>
              <td>{{ item.Estado }}</td>
              <td>{{ item.Proveedor }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else-if="selectedOption === 'opcion1'">No hay datos disponibles.</p>

      <!-- Tabla de ordenes de compra pagadas -->
      <div class="responsive-table" v-if="selectedOption === 'opcion2' && Pagadas.length > 0">
        <table class="table table-hover custom-table">
        <thead>
            <tr>
              <th>Fecha de compra</th>
              <th>Fecha de pago</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Proveedor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in Pagadas" :key="item.Motivo">
              <td id="Fecha">{{ item.Fecha_Compra }}</td>
              <td>{{ item.Fecha_Pago }}</td>
              <td>{{ item.Nombre }}</td>
              <td>{{ item.Cantidad }}</td>
              <td>{{ item.Precio }}</td>
              <td>{{ item.Estado }}</td>
              <td>{{ item.Proveedor }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else-if="selectedOption === 'opcion2'">No hay datos disponibles.</p>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';

const selectedOption = ref('opcion1');
const status1 = ref(true);
const status3 = ref(false);

watch(selectedOption, (newValue) => {
  if (newValue === 'opcion1') {
    status1.value = true;
    status3.value = false;
  } else if (newValue === 'opcion2') {
    status1.value = false;
    status3.value = true;
  } 
});

const General = ref([]);
const ReporteGeneralOrdenesCompra = async () => {
  try {
    const response = await axios.post('http://www.backendorg.com/ReporteGeneralOrdenesCompra');
    General.value = response.data.data;
    console.log(response.data);
  } catch (error) {
    console.error("Error al obtener el reporte ", error);
  }
};

const Pagadas = ref([]);
const ReporteGeneralOrdenesCompraPagadas = async () => {
  try {
    const response = await axios.post('http://www.backendorg.com/ReporteGeneralOrdenesCompraPagadas');
    Pagadas.value = response.data.data;
    console.log(response.data);
  } catch (error) {
    console.error("Error al obtener el reporte", error);
  }
};
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
    .select-tipo,
    .btn-generar {
      font-size: 1rem;
    }
  
    .select-tipo {
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
    #Fecha {
    font-weight: bold;
  }
  }
  </style>
  