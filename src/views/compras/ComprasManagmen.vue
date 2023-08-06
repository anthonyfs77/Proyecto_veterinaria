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
                    <producto v-for="productoArray in productosEnPantalla" :key="productoArray[0].id"
                        :name="productoArray[0].nom_producto" :precio="productoArray[0].precio_venta" :cant="1" />
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
                                <p>Cantidad de productos:</p>
                                <h4>{{ productos_comprados }}</h4>
                            </div>
                            <div class="total-orders">
                                <p>Subtotal <span>-</span> iva:</p>
                                <h4><span>$</span>{{ subTotal }}</h4>
                            </div>
                        </div>
                        <div class="total-orders">
                            <p>Precio total</p>
                            <h4><span>$</span>{{ precioTotal }}</h4>
                        </div>
                    </div>
                    <div class="btns">
                        <btn class="bt" title="Transfer..." @click="declararTransferencia"/>
                        <btn class="bt" title="Efectivo" @click="declararEfectivo"/>
                        <btn id="black" title="Terminar" @click="terminar" />
                    </div>
                </div>
            </div>

            <div class="opciones">
                <div class="status">
                    <div class="input-container">
                        <input v-model="nombre_cliente" type="text" name="text" class="input" placeholder="Nombre del cliente">
                        <div class="highlight"></div>
                    </div>
                    <div class="input-container">
                        <input v-model="nombre_empleado" type="text" name="text" class="input" placeholder="Nombre del empleado">
                        <div class="highlight"></div>
                    </div>
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



const agregar = () => {
    const newProduct = store.state.variable;
    productosEnPantalla.value.push(newProduct);
    console.log('productosEnPantalla:', productosEnPantalla.value);
    productos_comprados.value ++
    precioSum()
    calcularSubtotal()
}

const precioSum = () => {
    let total = 0;

    for (const productoArray of productosEnPantalla.value) {
        const precioVenta = parseFloat(productoArray[0].precio_venta);
        total += isNaN(precioVenta) ? 0 : precioVenta;
    }

    precioTotal.value = total;
}

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


// ENVIAR FORMULARIO

const terminar = () => {
    const fechaActual = new Date();
    const anio = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const dia = String(fechaActual.getDate()).padStart(2, '0');

    const fechaEnFormato = `${anio}-${mes}-${dia}`;
    fecha_compra.value = fechaEnFormato

    console.log(fecha_compra.value)

    fetchData()
}

// METODO DE PAGO 
const declararTransferencia = ()=>{
    metodo_pago.value = 'transferencia'
}

const declararEfectivo = ()=>{
    metodo_pago.value = 'efectivo'
}



// peticion para mandar formurio

const fetchData = async () => {
    const jsonData = {
        fecha_compra: fecha_compra.value,
        fecha_pago: fecha_compra.value,
        metodo_pago: metodo_pago.value,
        nombre_cliente: nombre_cliente.value,
        nombre_empleado: nombre_empleado.value,
        total_compra: precioTotal.value,
        subtotal: subTotal.value,
        productos_comprados: productos_comprados.value,
        productos: productosEnPantalla.value,
    };
    console.log(jsonData);
    try {
        const response = await axios.post('http://web.backend.com/compra', jsonData);
        data.value = response.data.data;
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
    display: flex;
    justify-content: space-around;
    align-items: center;
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