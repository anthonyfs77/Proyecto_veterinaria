<template>
  <div class="container">
    <div class="form-container">
      <div class="card">
        <form @submit.prevent="RegistroProveedor">
          <span class="material-symbols-outlined">contacts</span><label for="name">Nombre:</label>
          <input type="text" id="name" name="name" v-model="nombre"><br><br>
          <span class="material-symbols-outlined">map</span><label for="address">Dirección:</label>
          <input type="text" id="address" name="address" v-model="direccion"><br><br>
          <span class="material-symbols-outlined">contact_phone</span><label for="phone1">Teléfono 1:</label>
          <input type="text" id="phone1" name="phone1" placeholder="Obligatorio" v-model="phone"><br><br>
          <span class="material-symbols-outlined">contact_phone</span><label for="phone2">Teléfono 2:</label>
          <input type="text" id="phone2" name="phone2" v-model="phone2"><br><br>
          <button>Registrar proveedor.</button>
        </form>
      </div>
    </div>
    <div class="container2">
    <div class="table-container">
      <div class="responsive-table">
        <table class="table table-hover custom-table">
          <thead>
            <tr>
              <th>Proveedor</th>
              <th>Direccion</th>
              <th>Telefono 1</th>
              <th>Telefono 2</th>
            </tr>
          </thead>
          <tbody> 
            <tr v-for="item in proveedores" :key="item.telefono1">
              <td id="Nombre">{{ item.proveedor }}</td>
              <td>{{ item.direccion }}</td>
              <td>{{ item.telefono1 }}</td>
              <td>{{ item.telefono2 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const nombre = ref ("");
const phone = ref("");
const phone2 = ref("");
const direccion = ref("");


const RegistroProveedor = async () => {
    const Proveedor = {
      nombre: nombre.value,
      direccion: direccion.value,
      telefono1: phone.value,
      telefono2: phone2.value
    };
    try {
      const response = await axios.post(
        'http://www.backendorg.com/registrarProveedor',
        Proveedor
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const proveedores = ref([]);
  const TablaProveedor = async () => {
  try {
  const response = await axios.post('http://www.backendorg.com/TablaProveedor')
  proveedores.value = response.data.data;
  console.log(response.data);
  } catch (error) {
  console.error("Error al obtener el reporte de inventario", error);
  }
  };
  onMounted(TablaProveedor);
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .form-container {
    flex: 1;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0,0,0,.1);
    width: 80%;
    max-width: 500px;
  }
  form label {
    margin-right: 10px;
  }
  form input {
    margin-bottom: 10px;
  }
  form span {
    vertical-align: middle;
    margin-right: 5px;
  }
  .container2 {
    flex: 1;
    overflow: auto;
  }

  .table-container {
    height: 500px;
    overflow: auto;
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
</style>
