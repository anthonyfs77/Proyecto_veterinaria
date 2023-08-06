<script setup>
  import {  ref, onMounted, watch   } from 'vue';
  import axios from 'axios';
  import btn from '../../components/ControlesIndividuales/BotonAntho.vue'
  import load from '../../components/loaders/loaderPrincipal.vue'
  const provsnmid = ref([]);
  const provedor = ref(0);
  const fpago = ref('');
  const fcompra = ref('');
  const status = ref('');
  const loading =ref(false);
  const detallar =ref(false);

  const emi = defineEmits(['close']);

  const cerra = () =>{
    emi('close')
  }

const generarorden = async () => {
  loading.value = true;
    const pro = {
      fecha_compra: fcompra.value,
      fecha_pago: fpago.value,
      estado: status.value,
      id_empleado: 1,
      estatus: 'pendiente',
      proveedor: provedor.value,
    };
    console.log(provsnmid.value);
    console.log(pro)
  try {
    const response = await axios.post('http://web.Backend.com/orden/compra', pro);
    if(Object.keys(response.data).length === 0) {
    console.log('No se recibió nada')
      }

    if (response.data.status === 200) { 
        detallar.value = true;
    }
  } catch (error) {
    console.error('Error al generar orden de compra:', error);
    console.error('Detalle del error:', error.config);  
  }
  loading.value = false;
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
      <transition name="fade">
      <div class="display2" v-if="loading">
        <load v-if=loading class="loader"/>
        <h2>Generando...</h2>
      </div>
      </transition>

      <div class="grilla" v-if=!loading>
        <button class="cerrar" @click="cerra" >X</button>
        <div class="form">
          <h2>Generar orden de compra</h2>
      <br />
      <label for="payment-date" >Fecha de Compra:</label>
      <input class="search-box" type="date" id="payment-date" v-model="fcompra"/>
      <p>Fecha seleccionada: {{fcompra}}</p>
      <br/>
      <label for="payment-date">Fecha de Pago:</label>
      <input class="search-box" type="date" id="payment-date" v-model="fpago"/>
      <p>Fecha seleccionada: {{fpago}}</p>
      <br />
      <label for="proveedor">Proveedor:</label>
      <select class="search-box" id="proveedor" v-model="provedor">
           <option v-for="prov in provsnmid" :value="prov.id" :key="prov.id">
              {{ prov.id + ' ' + prov.proveedor }}
           </option>
       </select>
      <br />
      <label for="status">Estado:</label>
      <select class="search-box" id="status" v-model="status">
        <option value="Pagado">Pagado</option>
        <option value="Pendiente">Pendiente</option>
      </select>
      <br>
      <btn v-if=!detallar title="Generar Orden" @click="generarorden"/>
      <btn v-if="detallar" title="Detallar Orden" @click="detallarorden"/>
      <span v-if="detallar">¡Orden de compra registrada correctamente!</span>
        </div>
      </div>
 
    </div>

</template>

<style scoped>

.cerrar{
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 0 2em #00000013;
  grid-column-start: 1;
  grid-row-start: 1;
  border: none;
  background-color: #00000000;
}

.loader{
  position: relative;
    z-index: 105;
    width: 25%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
.display2{
  background-color: rgba(95, 95, 95, 0.4); /* fondo negro semi-transparente */
  height: 100%;
  width: 100%;
  z-index: 103;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
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
      grid-template-columns: 30% 50% 20%;
      grid-template-rows: 10% 70% 20%;
    }
    .card {
      font-family: 'comfortaa';
      display: flex;
      align-items: center;
      justify-content: center;
      height: 90vh;
      overflow-y: auto;
      overflow-x: hidden;
      width: 45%;
      box-shadow: 0 0 2em #00000013;
      border: none;
      border-radius: 20px;
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
  
    @media (max-width: 950px) {
      .card{
        width: 65%;
        height: 80vh;
      }
      .grilla{
        grid-template-columns: 20% 70% 10%;
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