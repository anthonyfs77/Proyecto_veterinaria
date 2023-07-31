<template>
  <div class="container">
    <div class="card">
      <div class="grilla">
        <div class="form">
          <h2>Generar orden de compra</h2>
      <label for="product-type">Tipo de producto:</label>
      <select class="search-box" id="product-type">
        <option value="sale">Producto de venta</option>
        <option value="internal">Producto interno</option>
      </select>
      <br />
      <label for="payment-date" >Fecha de Compra:</label>
      <input class="search-box" type="date" id="payment-date" v-model="fechacompra"/>
      <br />
      <label for="payment-date">Fecha de Pago:</label>
      <input class="search-box" type="date" id="payment-date" v-model="fechapago"/>
      <br />
      <label>seleccionar producto:</label>
      <select class="search-box">
            <option >correo</option>
            <option >ID</option>
          </select>
      <br />
      <label for="quantity">Cantidad:</label>
      <input class="search-box" type="number" id="quantity" />
      <br />
      <label for="proveedor">Proveedor:</label>
      <select class="search-box" id="proveedor" v-model="selectedProvider">
           <option v-for="prov in provsnmid" :value="prov.id" :key="prov.id">
              {{ prov.id + ' ' + prov.proveedor }}
           </option>
       </select>
      <br />
      <label for="unit-price">Precio unitario:</label>
      <input class="search-box" type="number" id="unit-price" />
      <br />
      <label for="total">Total pagado:</label>
      <input class="search-box" type="number" id="total" />
      <br/>
      <label for="status">Estado:</label>
      <select class="search-box" id="status">
        <option value="paid">Pagado</option>
        <option value="pending">Pendiente</option>
      </select>
      <btn title="Generar Orden"/>
        </div>
      </div>
    </div>
  </div>
 
  </template>
  
  <script setup>
  import {  ref, onMounted   } from 'vue';
  import axios from 'axios';
  import btn from '../../components/ControlesIndividuales/BotonAntho.vue'
  const provsnmid = ref([]);
  const selectedProvider = ref('');
  
  const provs = async () => {
    provsnmid.value = [];
  try {
    const response = await axios.get('http://web.VeterinariaBack.com/Proveedores/NombreID');
    if (Array.isArray(response.data.data)) {
    provsnmid.value = response.data.data;
    } else {
    provsnmid.value = [response.data.data];
    }  
    console.log(provsnmid)
  } catch (error) {
    console.error('Hubo un error al obtener los nombre e id de los proveedores:', error);
  }
};
onMounted(provs);


  </script>
  
  <style scoped>


.form{
  grid-column-start: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  display: grid;
  row-gap: 8px;
}

    .grilla{
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 30% 40% 30%;
      grid-template-rows: 10% 80% 10%;
    }

    .container{
      display: flex;
      width: 100%;
      height: 100vh;
    }
    .card {
      font-family: 'comfortaa';
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80vh;
      overflow-y: auto;
      overflow-x: hidden;
      width: 70%;
      box-shadow: 0 0 2em #00000013;
      border: none;
    }
    .card::-webkit-scrollbar {
  width: 10px;
}

.card::-webkit-scrollbar-track {
  background-color: white;
}

.card::-webkit-scrollbar-thumb {
  background: #cfcfcf;
}
  
    @media (max-width: 600px) {
      .card{
        padding: 10px;
        box-sizing: border-box;
        width: 100%;
        height: auto;
      }
    }

    .search-box{
    font-family: inherit;
  font-size: inherit;
  box-shadow: 0 0 1em #00000013;
  border: none;
  color: #646464;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  width: 17em;
  transition: all ease-in-out .5s;
  margin-right: -2rem;
  text-align: center;
  }
  </style>
  