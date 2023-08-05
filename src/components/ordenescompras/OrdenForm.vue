<script setup>
  import {  ref, onMounted, watch   } from 'vue';
  import axios from 'axios';
  import btn from '../../components/ControlesIndividuales/BotonAntho.vue'
  const provsnmid = ref([]);
  const productosX = ref([]);
  const provedor = ref(0);
  const fpago = ref('');
  const fcompra = ref('');
  const elegirpro = ref(0);
  const preciocompra = ref('');
  const totalpagado = ref('');
  const status = ref('');
  const productoselect = ref(0);
  const cantida = ref(0);

  watch(elegirpro, async (newVal, oldVal) => {
    await products()
    })

  const products = async () => {
    productosX.value = [];
    const pro = {
     id_tipoproducto: elegirpro.value
    };
  try {
    const response = await axios.post('http://web.Backend.com/productosXproductosinternos', pro);
    if(response.data.data===null)
    {
      productosX.value=[]
    }
    console.log(response.data.data)
    if (Array.isArray(response.data.data)) {
  productosX.value = response.data.data;
   } else {
    productosX.value = [response.data.data];
   }

  } catch (error) {
    console.error('Hubo un error al obtener el usuario:', error);
  }
  
};


const generarorden = async () => {
    const pro = {
      fecha_compra: fcompra.value,
      fecha_pago: fpago.value,
      cantidad: cantida.value,
      precio_compra: preciocompra.value,
      estado: status.value,
      id_empleado: 1,
      id_proveedores: provedor.value,
      id_producto: productoselect.value,
      precio_total: totalpagado.value,
      id_tipoproducto: elegirpro.value
    };
  try {
    const response = await axios.post('http://web.Backend.com/orden/compra', pro);
    if(Object.keys(response.data).length === 0) {
    console.log('No se recibió nada')
      }

    console.log(response.data)
  } catch (error) {
    console.error('Hubo un error al obtener al generar orden de compra:', error);
  }
  
};

  const provs = async () => {
    provsnmid.value = [];
  try {
    const response = await axios.get('http://web.Backend.com/Proveedores/NombreID');
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

<template>
    <div class="card">
      <div class="grilla">
        <div class="form">
          <h2>Generar orden de compra</h2>
      <label for="product-type">Tipo de producto:</label>
      <select class="search-box" v-model="elegirpro">
        <option value="1">Producto de venta</option>
        <option value="2">Producto interno</option>
      </select>
      <br />
      <label for="payment-date" >Fecha de Compra:</label>
      <input class="search-box" type="date" id="payment-date" v-model="fcompra"/>
      <p>Fecha seleccionada: {{fcompra}}</p>
      <label for="payment-date">Fecha de Pago:</label>
      <input class="search-box" type="date" id="payment-date" v-model="fpago"/>
      <p>Fecha seleccionada: {{fpago}}</p>
      <label>seleccionar producto:</label>
      <select class="search-box" id="producto" v-model="productoselect">
           <option v-for="prod in productosX" :value="prod.id" :key="prod.id">
              {{ prod.nom_producto }}
           </option>
       </select>
      <br />
      <label for="quantity">Cantidad:</label>
      <input class="search-box" type="number" id="quantity" v-model="cantida"/>
      <br />
      <label for="proveedor">Proveedor:</label>
      <select class="search-box" id="proveedor" v-model="provedor">
           <option v-for="prov in provsnmid" :value="prov.id" :key="prov.id">
              {{ prov.id + ' ' + prov.proveedor }}
           </option>
       </select>
      <br />
      <label for="unit-price">Precio unitario:</label>
      <input class="search-box" type="number" v-model="preciocompra" />
      <br />
      <label for="total">Total pagado:</label>
      <input class="search-box" type="number" v-model="totalpagado" />
      <br/>
      <label for="status">Estado:</label>
      <select class="search-box" id="status" v-model="status">
        <option value="Pagado">Pagado</option>
        <option value="Pendiente">Pendiente</option>
      </select>
      <btn title="Generar Orden" @click="generarorden"/>
        </div>
      </div>
    </div>

</template>

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