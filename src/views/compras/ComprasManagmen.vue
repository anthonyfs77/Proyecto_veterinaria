<template>
    <div class="container-fluid">
        <div class="productos">
            <div class="title">
                <p class="titulo">Manage Products</p>
            </div>
            <div class="controles">
                <search />
                <btn title="Añadir" @click="agregar" />
            </div>
            <div class="prod">
                <div class="cont-productos">
                    <producto @click="mandarIdProd(productoArray[0].id)" v-for="productoArray in productosEnPantalla" :key="productoArray[0].id"
                      :id="productoArray[0].id"  :name="productoArray[0].nom_producto" :precio="productoArray[0].precio_venta" />

                </div>
            </div>
        </div>
        <div class="izquierdo">

            <div class="seccion">
                <div class="titulo">
                    <p class="sec-titulo">Estadisticas de productos</p>
                </div>
                <div class="cuerpo">
                    <div class="tiket">
                        <div class="precios">
                            <div class="total-orders">
                                <p>Cantidad absoluta de productos :</p>
                                <h4>{{ productos_comprados }}</h4>
                            </div>
                        </div>
                        <div class="total-orders">
                            <p>Precio total</p>
                            <h4><span>$</span>{{ precioTotal }}</h4>
                        </div>
                    </div>
                    <div class="btns">
                      <div class="mtdPago">
                        <btn class="bt" title="Efectivo" @click="declararEfectivo"/>
                        <btn class="bt" title="Mixto" @click="declararMixto"/>
                      </div>
                      <div class="term">
                        <btn capture class="bt" title="Transfer..." @click="declararTransferencia"/>
                        <btn id="black" title="Terminar" @click="terminar" />
                      </div>
                    </div>
                </div>
            </div>

            <div class="opciones">
                <div class="status">
                  <btn id="black" title="Limpiar" @click="reload" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import producto from '../../components/compras/RowProdCompras.vue'
import btn from '../../components/controlesindividuales/BotonConEstilo.vue'
import search from '../../components/controlesindividuales/searchInput.vue'
import { ref } from 'vue'
import { useStore } from '@/stores/counter.js'
import axios from 'axios'
import {idProducto} from "@/stores/counter.js";
import {cantProducto} from "@/stores/counter.js";

const id_producto = idProducto();
const idProd = ref();

// CALL venta_productos('efectivo', '[ [1, 3], [2,4], [3,4]]');
const metodo_pago_total = ref('');
const productos_compra = ref([])

const cantidad = cantProducto();
const recibirCantidad = ref(1);

const imprimir = () =>{
  recibirCantidad.value = cantidad.state.variable;
}


setInterval(imprimir, 1000)

const store = useStore()
const productosEnPantalla = ref([])
const precioTotal = ref(0)
const subTotal = ref(0)
const data = ref([])
const fecha_compra = ref();
const nombre_cliente = ref('');
const nombre_empleado = ref('')
const metodo_pago = ref('')
const productos_comprados = ref(0)
const producto_id = ref([]);

// METODO DE PAGO
const declararTransferencia = ()=>{
  metodo_pago.value = 'transferencia'
}

const declararEfectivo = ()=>{
  metodo_pago.value = 'efectivo'
}

const declararMixto = () =>{
  metodo_pago.value = 'mixto'
}

const datas = {
  tipo_pago: metodo_pago.value,
  productos: productos_compra.value

}


const agregar = () => {
  const newProduct = store.state.variable;
  productosEnPantalla.value.push(newProduct);

  for (const productoArray of productosEnPantalla.value) {
    const producto_id = parseFloat(productoArray[0].id);
  }
  productos_comprados.value ++
  idProd.value = id_producto.state.variable; ////////
  precioSum()
  calcularSubtotal()
}

const precioSum = () => {
  let total = 0;

  for (const productoArray of productosEnPantalla.value){
    total += recibirCantidad.value * productoArray[0].precio_venta || productoArray[0].precio_venta;
  }

  precioTotal.value = total;
}

setInterval(precioSum, 1000)




const calcularSubtotal = () => {
    let subtotal = 0;
    let iva = 0;
    let totalSinIva = 0;

    for (const productoArray of productosEnPantalla.value) {
        const precioVenta = parseFloat(productoArray[0].precio_venta);
        subtotal += isNaN(precioVenta) ? 0 : precioVenta;
    }

    iva = subtotal * 0.16;
    totalSinIva = subtotal - iva;
    subTotal.value = totalSinIva;
}

const reload = () =>{
  location.reload()
}

// mandar la informacion
const terminar = async () => {
  const productosInfo = productosEnPantalla.value.map(producto => [producto[0].id, recibirCantidad.value]);
  const jsonData = {
    metodo_pago: metodo_pago.value,
    productos: JSON.stringify(productosInfo)
  };



// Parsear la cadena JSON en un array
  const parsedProductos = JSON.parse(jsonData.productos);

// Convertir los números de tipo string a números enteros
  const productosInfoParsed = parsedProductos.map(producto => [parseInt(producto[0]), parseInt(producto[1])]);

  const jsonDataFormatted = {
    metodo_pago: jsonData.metodo_pago,
    productos: productosInfoParsed
  };

  console.log(jsonDataFormatted);


  try {
    const response = await axios.post('http://web.backend.com/venta', jsonDataFormatted);
    console.log(response)
  } catch (error) {
    console.log(error);
  }
}




</script>



<style scoped>
/*  GENERAL */
.container-fluid {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1.1fr 0.5fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
        ". .";
}


h4 {
    font-size: 20px;
}

.term{

  height: 10em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}


/*  BODY */
.izquierdo {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1.1fr;
    grid-template-rows: 1.6fr 0.4fr;
    gap: 0px 0px;
    grid-template-areas:
        "."
        ".";
}

.productos {
    display: grid;
    grid-auto-columns: 1fr;

    grid-template-rows: 0.2fr 0.1fr;
    gap: 0px 0px;
    grid-template-areas:
        "."
        ".";

}

.controles {
    display: flex;
    gap: 100px;
    justify-content: center;
    align-items: center;
}

.title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(132, 139, 200, 0.18);
    margin: 20px 0px 20px 0px;
    max-height: 3em;
}

.prod {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.cont-productos {
    width: 90%;
    height: 90%;
}

.titulo {
    font-size: 20px;
}


/* IZQUIERDO */


.izquierdo {
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
}

.btns {
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.mtdPago{
  height: 10em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}


#black {
    background-color: black;
    color: white;
}

.seccion {
    border-bottom: 1px solid rgba(132, 139, 200, 0.18);
}

.sec-titulo {
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
}


.cuerpo {
    width: 100%;
    height: 86%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.tiket {
    width: 80%;
    height: 70%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

}

.total-orders {
    display: flex;
    justify-content: space-between;
}

/* Nombre */

.status {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 90%;
}

.input-container {
    position: relative;
}

.input {
    font-size: 1em;
    padding: 0.6em 1em;
    border: none;
    border-radius: 6px;
    background-color: #f8f8f8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    color: #333;
}

.input:hover {
    background-color: #f2f2f2;
}

.input:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.input::placeholder {
    color: #999;
}

.highlight {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #6c63ff;
    transition: width 0.3s ease;
}

.input:focus+.highlight {
    width: 100%;
}

/* Optional: Animation on focus */
@keyframes input-focus {
    from {
        transform: scale(1);
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
    }

    to {
        transform: scale(1.02);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
}

.input:focus {
    animation: input-focus 0.3s ease;
}
</style>