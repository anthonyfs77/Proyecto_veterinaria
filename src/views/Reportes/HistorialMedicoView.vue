<template>
  <div class="first-container">

    <div class="parametros">
      <div class="Titulo"> 
        <span class="material-symbols-outlined">respiratory_rate</span><h2>Hisotorial Medico</h2>
      </div>
      <div class="filtro">
        <label for="busquedaMas" class="label-mascota">Nombre de la mascota:</label>
        <input type="search" name="animales" id="busqueda" class="input-search" v-model="nomMascota">
      </div>
      <button class="btn-generar" @click="generarHistorial">Generar</button>
    </div>

    <div class="pantalla">
      <div class="table-container">
      <div class="responsive-table" v-if="historialMedico.length > 0">
        <table class="table table-hover custom-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Raza</th>
            <th>Genero</th>
            <th>Dueño</th>
            <th>Fecha</th>
            <th>Motivo</th>
            <th>Servicio</th>
            <th>Tipo de servicio solicitado</th>
            <th>Peso</th>
            <th>Altura</th>
            <th>Edad</th>
            <th>Observaciones medicas</th>
            <th>Medicacion</th>
            <th>Tipo de medicamento</th>
            <th>Dosis</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in historialMedico" :key="item.Fecha">
            <td>{{ item.Nombre }}</td>
            <td>{{ item.Raza }}</td>
            <td>{{ item.Genero }}</td>
            <td>{{ item.Dueño }}</td>
            <td>{{ item.Fecha }}</td>
            <td>{{ item.Motivo }}</td>
            <td>{{ item.Servicios }}</td>
            <td>{{ item.Servicio_solicitado }}</td>
            <td>{{ item.Peso }} Kg</td>
            <td>{{ item.Altura }} Mts</td>
            <td>{{ item.Edad }} Meses</td>
            <td>{{ item.Observaciones }}</td>
            <td>{{ item.Medicacion }}</td>
            <td>{{ item.Tipo_de_medicamento }}</td>
            <td>{{ item.Dosis }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else id="Mensaje">No hay datos disponibles.</p>
    </div>
  </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const nomMascota = ref("");
const historialMedico = ref([]);

const generarHistorial = async () => {
  try {
    const response = await axios.post('http://www.backendorg.com/historialMedico', { nombreMascota: nomMascota.value });
    historialMedico.value = response.data.data;
    console.log(response.data);
  } catch (error) {
    console.error('Error al obtener el historial médico:', error);
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

.first-container {
  width: 100%;
  height: 100vh;

}

:root {
  --color-primary: #7380ec;
}

.label-mascota {
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

  .label-mascota,
  .input-search,
  .btn-generar {
    font-size: 1rem;
  }

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

.Titulo {
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
  }
</style>
  