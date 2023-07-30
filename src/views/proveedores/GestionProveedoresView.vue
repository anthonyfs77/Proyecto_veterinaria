<template>
  <div class="container">
    <div class="inner-container">
      <div class="form-container">
        <div class="card">
          <form @submit.prevent="RegistroProveedor">
            <span class="material-symbols-outlined">contacts</span><label for="name">Nombre:</label>
            <inputs type="text" id="name" name="name" v-model="nombre" placeholder="Nombre" /><br><br>
            <span class="material-symbols-outlined">map</span><label for="address">Dirección:</label>
            <inputs type="text" id="address" name="address" v-model="direccion"  placeholder="Localizacion"/><br><br>
            <span class="material-symbols-outlined">contact_phone</span><label for="phone1">Teléfono 1:</label>
            <inputs type="text" id="phone1" name="phone1" placeholder="Obligatorio" v-model="phone" /><br><br>
            <span class="material-symbols-outlined">contact_phone</span><label for="phone2">Teléfono 2:</label>
            <inputs type="text" id="phone2" name="phone2" v-model="phone2" placeholder="Telefono 2" /><br><br>
            <Buttons  title="Registrar proveedor" />
          </form> 
        </div>
      </div>
      <div class="container2">
        <div class="table-container">
          <div class="responsive-table">
            <table class="table table-hover custom-table">
              <thead>
                <tr>
                  <th><span class="material-symbols-outlined">contacts</span>Proveedor</th>
                  <th> <span class="material-symbols-outlined">map</span>Direccion</th>
                  <th><span class="material-symbols-outlined">contact_phone</span>Telefono 1</th>
                  <th><span class="material-symbols-outlined">contact_phone</span>Telefono 2</th>
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
  </div>
</template>

<style scoped>

  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
  
  }
  .inner-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    box-shadow: 0 2px 8px rgba(0,0,0,.1);
  }
  .form-container {
    padding: 1%;
    flex: 1;
    max-width: 40%;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    padding: 20px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0,0,0,.1);
    width: 93%;
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
  th span {
    vertical-align: middle;
    margin-right: 5px;
  }
  .container2 {
    flex: 1;
    max-width: 70%;

  }
  
  .table-container {
    height: 500px;
    overflow: auto;
    -ms-overflow-style: none; /*La oculta en Internet E. y Edge */
    scrollbar-width: none; /* Oculta la barra deslizadora en Firefox */
  }
  .custom-table {
    
    font-size: 0.9rem;
  }
  .custom-table thead th {
    font-weight: bold;
    background-color: white;
  }


  @media (max-width: 767px) {
  .inner-container {
    flex-direction: column;
  }
  .form-container,
  .container2 {
    max-width: 100%;
  }

  .form-container::-webkit-scrollbar{ /*Oculta la barra deslizadora en navegadores como Chrome, Safari, Internet Explorer y Edge */
    display: none;
  }

  .table-container::-webkit-scrollbar{ /*Oculta la barra deslizadora en navegadores como Chrome, Safari, Internet Explorer y Edge */
    display: none;
  }
}

</style>




<script setup>
import Inputs from '../../components/ControlesSencillos/Inputs.vue'
import Buttons from '../../components/ControlesSencillos/Buttons.vue'
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
      location.reload();
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


