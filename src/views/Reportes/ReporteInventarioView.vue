<template>
<div class="first-container">
  <div class="parametros">
      <div class="Titulo"><span class="material-symbols-outlined">inventory_2</span><h2>Reporte Inventario</h2></div>
  
      <div class="filtro">
        <label for="tipo" class="label-tipo">Seleccione el tipo de reporte que desea realizar:</label>
        <select v-model="selectedOption" id="tipo" class="select-tipo">
          <option value="opcion1">Categoría</option>
          <option value="opcion2">Productos sin stock</option>
          <option value="opcion3">Reporte general</option>
        </select>
      </div>
  
      <div class="filtro2" v-show="status1">
        <label for="busqueda" class="label-busqueda">Busque la categoría:</label>
        <input type="search" name="busquedaCat" id="busqueda" class="input-search" v-model="Cat"><br>
        <button class="btn-generar" @click="obtenerReporteInventarioCat">Generar 1</button>
      </div>
  
      <div class="filtro3" v-show="status2">
        <button class="btn-generar" @click="obtenerReporteInventario">Generar 2</button>
      </div>
  
      <div class="filtro4" v-show="status3">
        <button class="btn-generar"  @click="obtenerReporteInventarioSinStock">Generar 3</button>
      </div>
    </div>
  
    <div class="pantalla">
      <!-- Tabla de reporte general de inventario -->
      <table class="table table-success table-striped" v-if="selectedOption === 'opcion3' && InvGeneral.length > 0">
        <thead class="table-dark">
          <tr>
            <th>Producto</th>
            <th>Descripcion</th>
            <th>Existencia</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Proveedor</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in InvGeneral" :key="item.Descripcion">
            <td>{{ item.Producto }}</td>
            <td>{{ item.Descripcion }}</td>
            <td>{{ item.Existencia }}</td>
            <td>{{ item.Precio }}</td>
            <td>{{ item.Categoria }}</td>
            <td>{{ item.Proveedor }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else-if="selectedOption === 'opcion3'">No hay datos disponibles.</p>

      <!-- Tabla de reporte por categoría -->
      <table class="table table-success table-striped" v-if="selectedOption === 'opcion1' && InvCat.length > 0">
        <thead class="table-dark">
          <tr>
            <th>Producto</th>
            <th>Descripcion</th>
            <th>Existencia</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Proveedor</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in InvCat" :key="producto.Descripcion">
            <td>{{ producto.Producto }}</td>
            <td>{{ producto.Descripcion }}</td>
            <td>{{ producto.Existencia }}</td>
            <td>{{ producto.Precio }}</td>
            <td>{{ producto.Categoria }}</td>
            <td>{{ producto.Proveedor }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else-if="selectedOption === 'opcion1'">No hay datos disponibles.</p>

      <!-- Tabla de reporte de productos sin stock -->
      <table class="table table-success table-striped" v-if="selectedOption === 'opcion2' && InvSinStock.length > 0">
        <thead class="table-dark">
          <tr>
            <th>Producto</th>
            <th>Descripcion</th>
            <th>Existencia</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Proveedor</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stock in InvSinStock" :key="stock.Descripcion">
            <td>{{ stock.Producto }}</td>
            <td>{{ stock.Descripcion }}</td>
            <td>{{ stock.Existencia }}</td>
            <td>{{ stock.Precio }}</td>
            <td>{{ stock.Categoria }}</td>
            <td>{{ stock.Proveedor }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else-if="selectedOption === 'opcion2'">No hay datos disponibles.</p>
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

  const InvGeneral = ref([]);

const obtenerReporteInventario = async () => {
 try {
 const response = await axios.post('http://www.backendorg.com/ReporteInvGeneral')
 InvGeneral.value = response.data.data;
 console.log(response.data);
} catch (error) {
 console.error("Error al obtener el reporte de inventario", error);
}

};

////////////////////////////////////////////////////////////////////////////////

const Cat = ref("");
const InvCat = ref ([]);

const obtenerReporteInventarioCat = async () => {
try {
  const response = await axios.post('http://www.backendorg.com/ReporteInvCat', {Categoria: Cat.value})
  InvCat.value = response.data.data;
  console.log(response.data);
} catch (error) {
  console.error("Error al obtener el reporte de inventario", error);
}
}

////////////////////////////////////////////////////////////////////////////////

const InvSinStock = ref([]);
const obtenerReporteInventarioSinStock = async () => {
 try {
 const response = await axios.post('http://www.backendorg.com/ReporteSinStockInv')
 InvSinStock.value = response.data.data;
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
  
  .input-search {
    border: none;
    border-bottom: 2px solid black;
    transition: border-color 0.3s;
    font-size: 1.2rem;
    padding: 0.5rem;
    width: 100%;
    max-width: 20rem;
  }
  
  .input-search:focus {
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
    .select-tipo,
    .input-search,
    .btn-generar {
      font-size: 1rem;
    }
  
    .select-tipo,
    .input-search {
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
  