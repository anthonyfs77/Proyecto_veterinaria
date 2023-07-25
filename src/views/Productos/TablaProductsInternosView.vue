<template>
  <div class="app">
    <div class="title">
      <encabezado />
    </div>
    <div class="app">
      <div class="controles">
        <div class="botones">
          <!-- Cada btn individual tiene su propia función stockLogic o sinStockLogic -->
          <btnStock tittle="Stock" @click="Stock"/>
          <btnSinStock tittle="Sin stock" @click="sinStock"/>
          <add/>
        </div>
        <div class="rango">
          <precios tittle1="$min" tittle2="$max"/> 
          
        </div>
        <div class="izquierdo">
          <div class="btns"></div>
                <btn2 @click="filtrar" title="Aplicar"/><btn2  @click="fetchData" title="Limpiar"/>
        </div>
      </div>
      <div class="table">
        <div class="headerTable">
          <h4>Nombre</h4>
          <h4>Stock</h4>
          <h4>Precio</h4>     
          <h4>IVA</h4>
          <h4>Status</h4>
        </div>
        <div class="cont-table">
          <div v-for="producto in productos" :key="producto.id" class="fila">
            <!-- Pasa las propiedades únicas a Rows -->
            <Rows :name="producto.nom_producto" :stock="producto.existencias" 
              :precio="producto.precio_venta" :iva="producto.iva" :status="producto.estado"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Rows from '../../components/Tabla/RowTablesInternos.vue'
import encabezado from '../../components/Tabla/header.vue'
import search from '../../components/ControlesIndividuales/searchInput.vue'
import add from '../../components/ControlesIndividuales/ingresar.vue'
import btnStock from '../../components/ControlesIndividuales/BotonSencillo.vue'
import btnSinStock from '../../components/ControlesIndividuales/BotonSencillo2.vue'
import btn2 from '../../components/ControlesIndividuales/BotonConEstilo.vue'
import precios from '../../components/ControlesIndividuales/RangoPrecios.vue'
import axios from 'axios'
import {ref, onMounted} from 'vue'
import {useStore} from '@/stores/counter.js'

const store = useStore()
const productos = ref([])



const fetchData = async () => {
  try {
    const response = await axios.get('http://web.backend.com/productosInternos');
    productos.value = response.data.data; 
  } catch(error) {
    console.log(error)
  }
}

onMounted(fetchData);

// Logica de filtracion Stock y sin Stock de productos 
const sinStock = () =>{
  console.log("sin stock")
}
const Stock = () =>{
  console.log("stock")
}

const filtrar = () =>{
    productos.value = store.state.variable
}




</script>




<style scoped>

.btns{
    display: flex;
}

.izquierdo{
    margin-right: 100px;
}

.controles{
    display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1.1fr 1.6fr 0.8fr; 
  gap: 0px 0px; 
  height: 100px;
  width: 94%;
  margin-left: 50px;
}

.izquierdo{
    display: flex;
    align-items: flex-end;
}

.rango{
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.botones{
    display: flex;
    gap: 10px;
    align-items: flex-end;
}

.headerTable {
    display: flex;
    justify-content: space-around;
    margin-top: 3em;
    margin-bottom: 2em;
    
}
span {
    color: #ffd800;
    
}

.app {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 1fr 5fr;
    gap: 0px 0px;
    width: 100%;
    height: 100vh;
}


.header {
    display: flex;
    justify-content: center;
    gap: 7em;
    margin-top: 3em;
}

h4 {
    font-size: 20px;
    cursor: pointer;
}


h3 {
    font-family: 'Comfortaa', cursive;
    font-size: 1.3em;
    color: #c2c5ce;
    margin-bottom: 1em;
    cursor: pointer;
}

strong {
    color: #818694;
    border-bottom: 3px solid #ffd800;
}

.header {
    margin-top: 0px;
}
</style>
