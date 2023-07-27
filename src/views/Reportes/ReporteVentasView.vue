<template>
  <div class="first-container">
    <div class="parametros">
      <div class="Titulo">
        <span class="material-symbols-outlined">paid</span><h2>Ventas Realizadas.</h2>
      </div>
      <div class="filtro">
        <label for="tipo" class="label-tipo">Seleccione el tipo de reporte que desea realizar:</label>
        <select v-model="selectedOption" id="tipo" class="select-tipo">
          <option value="opcion1" selected>General</option>
          <option value="opcion2">Fecha</option>
        </select>
      </div>
      <div class="filtro2" v-if="selectedOption === 'opcion1'">
        <button class="btn-generar" @click="ReporteGralVentas">Generar</button>
      </div>

      <div class="filtro3" v-if="selectedOption === 'opcion2'">
        <label for="busquedafecha" class="label-fecha">Ingrese la fecha:</label>
        <input type="search" name="fecha" id="busquedafecha" class="input-fecha" placeholder="Formato: aaaa-mm-dd" v-model="FechaVenta"><br>
        <button class="btn-generar" @click="ReporteFechaVentas">Generar</button>
      </div>
    </div>

    <div class="pantalla">
      <!-- Tabla de ventas generales -->
      <div class="responsive-table" v-if="selectedOption === 'opcion1' && gralVenta.length > 0">
        <table class="table table-success table-striped">
          <thead class="table-dark">
            <tr>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Tipo de pago</th>
              <th>Monto pagado</th>
              <th>Nombre del producto</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in gralVenta" :key="item.Fecha">
              <td>{{ item.Fecha }}</td>
              <td>{{ item.Cliente }}</td>
              <td>{{ item.Tipo_pago }}</td>
              <td>{{ item.Monto_pagado }}</td>
              <td>{{ item.Nombre_producto }}</td>
              <td>{{ item.Cantidad }}</td>
              <td>{{ item.Precio_unitario }}</td>
              <td>{{ item.Total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else-if="selectedOption === 'opcion1'">No hay datos disponibles.</p>

      <!-- Tabla de ventas por fecha -->
      <div class="responsive-table" v-if="selectedOption === 'opcion2' && ventaFecha.length > 0">
        <table class="table table-success table-striped">
          <thead class="table-dark">
            <tr>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Tipo de pago</th>
              <th>Monto pagado</th>
              <th>Nombre del producto</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in ventaFecha" :key="item.Fecha">
              <td>{{ item.Fecha }}</td>
              <td>{{ item.Cliente }}</td>
              <td>{{ item.Tipo_pago }}</td>
              <td>{{ item.Monto_pagado }}</td>
              <td>{{ item.Nombre_producto }}</td>
              <td>{{ item.Cantidad }}</td>
              <td>{{ item.Precio_unitario }}</td>
              <td>{{ item.Total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else-if="selectedOption === 'opcion2'">No hay datos disponibles.</p>
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

const FechaVenta = ref("");
const ventaFecha = ref([]);

const ReporteFechaVentas = async () => {
  try {
    const response = await axios.post('http://www.backendorg.com/ReporteFechaVentas', { Fecha: FechaVenta.value });
    ventaFecha.value = response.data.data;
    console.log(response.data);
  } catch (error) {
    console.error("Error al obtener el reporte de inventario", error);
  }
};

const gralVenta = ref("");
const ReporteGralVentas = async () => {
  try {
    const response = await axios.post('http://www.backendorg.com/ReporteGralVentas');
    gralVenta.value = response.data.data;
    console.log(response.data);
  } catch (error) {
    console.error("Error al obtener el reporte de inventario", error);
  }
};
</script>

<style>
/* Estilos generales y estilos para tamaños de pantalla más pequeños ... */

.first-container {
  width: 100%;
  height: 100vh;
}

:root {
  --color-primary: #e0b14b;
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

.label-fecha {
  font-size: 1.2rem;
}

.input-fecha {
  border: none;
  border-bottom: 2px solid black;
  transition: border-color 0.3s;
  font-size: 1.2rem;
  padding: 0.5rem;
}

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

/* Estilos para tablas responsivas */
.responsive-table {
  overflow-x: auto;
}

/* Estilos específicos para tamaños de pantalla más pequeños */
@media (max-width: 768px) {
  .parametros {
    padding: 1rem;
  }

  .label-tipo,
  .select-tipo,
  .label-fecha,
  .input-fecha,
  .btn-generar {
    font-size: 1rem;
  }

  .select-tipo,
  .input-fecha {
    max-width: none;
  }

  /* Estilos para tablas responsivas en pantallas pequeñas */
  .responsive-table table {
    font-size: 0.9rem;
  }
}
</style>
