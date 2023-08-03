<template>
    <div class="container-fluid">
        <div class="izquierdo">
            <div class="header">
                <p>Manage Product</p>
            </div>
            <div class="body">
                <div class="stock">
                    <p>Añadir producto existente</p>
                    <div class="inputs">
                        <div class="inp">
                            <span>NOMBRE DEL PRODUCTO</span>
                            <input type="text" v-model="nombre_producto">
                        </div>
                        <div class="inp">
                            <span>CANTIDAD A AGREGAR</span>
                            <input type="text" v-model="cantidad_producto">
                        </div>
                        <button @click="agregar"><span>Agregar producto</span></button>
                    </div>
                </div>
                <div class="alter-product">
                    <div class="top">
                        <p>Alternar producto</p>
                    </div>
                    <div class="formulario">
                        <div class="detalle-productos">
                            <div class="input">
                                <span>NOMBRE DEL PRODUCTO</span>
                                <input type="text" v-model="nombre" >
                            </div>
                            <div class="input">
                                <span>DESCRIPCION DEL PRODUCTO</span>
                                <input type="text" v-model="descripcion">
                            </div>
                            <div class="input">
                                <span>NOMBRE DEL PROVEEDOR</span>
                                <input type="text" v-model="proveedor">
                            </div>
                            <div class="input">
                                <span>CATEGORIA DEL PRODUCTO</span>
                                <select name="categorias" id="1" v-model="categoria" >
                                    <option value="Disable">Seleccion de categirias</option>
                                    <option value="Transportadoras">Transportadoras</option>
                                    <option value="Pecheras">Pecheras</option>
                                    <option value="Accesorios">Accesorios</option>
                                    <option value="Juegeteria">Juegeteria</option>
                                    <option value="Alimentos">Alimentos</option>
                                    <option value="Medicamentos">Medicamentos</option>
                                    <option value="Articulos de aseo">Articulos de aseo</option>

                                </select>
                            </div>
                            <div class="precios">
                                <div class="input">
                                    <span>PRECIO VENTA</span>
                                    <input type="number" placeholder="$" v-model="precioV">
                                </div>
                            </div>
                            <button @click="editar"><span>Agregar producto</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="derecho">
            <div class="card-prod">
                <div class="title">
                    <h3>Productos</h3>
                </div>
                <div class="header-table">
                    <p>Nombre</p>
                    <p>Stock</p>
                    <p>Status</p>
                </div>
                <div class="prod" v-for="prod in productos" :key="prod.id">
                    <row :name="prod.nom_producto" :stock="prod.existencias" :status="prod.estado" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import row from '../../components/tabla/RowTablesProduct.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'




// MOSTRAR PRODUCTOS LATERAL
const productos = ref([])
const fetchData = async () => {
    try {
        const response = await axios.get('http://web.backend.com/productosPublicos');
        productos.value = response.data.data;
    } catch (error) {
        console.log(error)
    }
}


setInterval(fetchData, 500);

//MODIFICAR PRODUCTO EXISTENTE

const nombre_producto = ref('');
const cantidad_producto = ref();
const data = ref([]);

const alterCantProduct = async () => {
    const producto = ({
        nombre_producto: nombre_producto.value,
        cantidad_producto: cantidad_producto.value,
    })
    try {
        const response = await axios.post('http://web.backend.com/alterProduct', producto);
        data.value = response.data.data;        
    } catch (error) {
        console.log(error)
    }
}

const agregar = () =>{
    alterCantProduct();
}

// MODIFICAR PRODUCTO EXISTENTE
const nombre = ref();
const descripcion = ref();
const proveedor = ref();
const categoria = ref();
const precioV = ref();
const info = ref([]);

const alterProduct = async () => {
    const Alterproducto = ({
        nombre: nombre.value,
        descripcion: descripcion.value,
        proveedor: proveedor.value,
        categoria:categoria.value,
        precioV: precioV.value,
    })
    try {
        const response = await axios.post('http://web.backend.com/dataProd', Alterproducto);
        info.value = response.data.data;
            console.log("🚀 ~ file: AgregarProductoPublicExistente.vue:156 ~ alterProduct ~  info.value:",  info.value)
              
    } catch (error) {
        console.log(error)
    }
}

const editar = () =>{
    alterProduct();
}
</script>

<style scoped>
.container-fluid {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1.4fr 1fr;
    gap: 0px 0px;
}

.prod{
    height: 5em;
}
.izquierdo {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1.8fr;
    gap: 0px 0px;
    grid-template-areas:
        "."
        ".";
    height: 82%;
}

.header {
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid rgba(132, 139, 200, 0.18);
    height: 4.2em;
}

.header p {
    font-size: 20px;
    margin-left: 17px;
}

.card-prod {
    width: 100%;
    height: 100vh;
    border-radius: 15px 0px 0px 15px;
    overflow-y: auto;
}

.title {
    height: 4.12em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(132, 139, 200, 0.18);
    background-color: white;
}


.header-table {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
}

.formulario{
    height: 120%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.detalle-productos{
    width: 80%;
}

.body {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: 0.6fr 1.4fr;
    gap: 0px 0px;
    grid-template-areas:
        "."
        ".";
}

.stock p:first-child {
    margin-top: 2em;
    width: 100%;
    
}

.stock {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90%;
}

.inputs {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 80%;

}


.inputs .inp:nth-child(2) input {
    width: 50%;
}

input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    border: 1px solid #ccc;
    padding: 8px;
    font-size: 14px;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 5px;
}

.inp {
    display: flex;
    flex-direction: column;
}

.inp span, .input span {
    font-size: 13px;
    color: #898c8f;
}

.input {
  display: flex;
  flex-direction: column;
}

.precios {
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1.7fr;
  gap: 0px 20px;
  grid-template-areas:
    ". .";
  width: 100%;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 14px;
  background-color: white;
  color: #333;
  cursor: pointer;
  margin-bottom: 10px;
}

button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  border: none;
  padding: 14px 20px;
  font-size: 16px;
  background-color: #4cb8a8;
  color: #333;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}

button span {
  font-size: 15px;
  color: white;
}


select option {
  font-size: 14px;
  color: #333;
}
</style>