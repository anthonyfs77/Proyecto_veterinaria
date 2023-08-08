<template>
      <div class="cont">
            <div class="header">
                  <p>Manage Product</p>
            </div>
            <div class="body">
                  <div class="checkout">
                        <div class="cuerpo">
                              <div class="header-check">
                                    <div class="title">
                                          <div class="g">
                                                <h3>AGREGAR PRODUCTO NUEVO</h3>
                                                <p>Se agregara un producto no existente</p>
                                          </div>
                                          <div class="more">
                                                <RouterLink :to="{ name: 'add' }" class="custom-link">
                                                      <add title="Existente" />
                                                </RouterLink>

                                          </div>
                                    </div>
                              </div>
                              <div class="detalle-productos">
                                    <div class="input">
                                          <span>NOMBRE DEL PRODUCTO</span>
                                          <input type="text" v-model="nombre_producto">
                                    </div>
                                    <div class="input">
                                          <span>DESCRIPCION DEL PRODUCTO</span>
                                          <input type="text" v-model="descripcion_producto">
                                    </div>
                                    <div class="input">
                                          <span>CATEGORIA DEL PRODUCTO</span>
                                          <select @click="mostrar_categorias" name="categorias" id="2"
                                                v-model="categoria_producto">
                                                <option disabled selected value="">Selecciona una categorias</option>
                                                <option v-for="cat in categorias" :key="cat.id" :value="cat.categoria">
                                                      {{ cat.categoria }}
                                                </option>
                                          </select>
                                    </div>
                                    <div class="precios">
                                          <div class="input" v-if="mostrar_precio">
                                                <span>PRECIO VENTA</span>
                                                <input type="number" v-model="precio_venta" placeholder="$">
                                          </div>
                                          <div class="input">
                                                <span>CANTIDAD DE PRODUCTOS</span>
                                                <input type="number" v-model="cantidad_pructos" placeholder="0">
                                          </div>
                                          <div class="input">
                                                <span>TIPO DE PRODUCTO</span>
                                                <select @change="seleccionTipoProducto" name="tipoProducto" id="2"
                                                      v-model="tipo_producto">
                                                      <option value="venta">Producto de venta</option>
                                                      <option value="interno">Poducto Interno</option>
                                                </select>
                                          </div>
                                    </div>
                                    <button @click="agregar"><span>Agregar producto</span></button>
                              </div>
                        </div>
                  </div>
                  <!-- ------------ -->
                  
                  <!-- ------------ -->
                  <div class="productos" v-if="mostrar_preview">
                        <div class="desc">
                              <div class="header-check">
                                    <div class="title">
                                          <p>Vista previa del producto</p>
                                    </div>
                              </div>
                        </div>
                        <div class="producto-preview">
                              <div class="ca">
                                    <div class="card-img">
                                          <div class="img">
                                                <label class="custum-file-upload" for="file">
                                                      <div class="icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill=""
                                                                  viewBox="0 0 24 24">
                                                                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                                                                  <g stroke-linejoin="round" stroke-linecap="round"
                                                                        id="SVGRepo_tracerCarrier"></g>
                                                                  <g id="SVGRepo_iconCarrier">
                                                                        <path fill=""
                                                                              d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                                                                              clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                  </g>
                                                            </svg>
                                                      </div>
                                                      <div class="text">
                                                            <span>Click to upload image</span>
                                                      </div>
                                                      <input type="file" id="file">
                                                </label>
                                          </div>
                                    </div>
                                    <div class="card-title">{{ nombre_producto }}</div>
                                    <div class="card-subtitle">{{ descripcion_producto }}</div>
                                    <hr class="card-divider">
                                    <div class="card-footer">
                                          <div class="card-price"><span>$</span> {{ precio_venta }}</div>
                                          <button class="card-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                      <path
                                                            d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z">
                                                      </path>
                                                      <path
                                                            d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z">
                                                      </path>
                                                      <path
                                                            d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z">
                                                      </path>
                                                      <path
                                                            d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z">
                                                      </path>
                                                </svg>
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>

<script setup>
import add from '../../components/ControlesIndividuales/ingresar.vue'
import { ref } from 'vue'
import axios from 'axios'


// en el front debemos de cambiar los datos a ingresar porque se cambio a tipo producto
// en el back se debe cambiar los parametros de la consulta como tambien con el procedure
// luego de eso serviria

const nombre_producto = ref('');
const descripcion_producto = ref();
const precio_venta = ref('');
const categoria_producto = ref('');
const cantidad_pructos = ref();
const productos = ref({});
const img_producto = ref();
const tipo_producto = ref();
const mostrar_precio = ref(true);
const mostrar_preview = ref(true);
const proveedores = ref([]);
const categorias = ref([]);
const fetchData = async () => {
      const data = {
            nombre_producto: nombre_producto.value,
            descripcion_producto: descripcion_producto.value,
            tipo_producto: tipo_producto.value,
            cantidad_pructos: cantidad_pructos.value,
            precio_venta: precio_venta.value,
            categoria_producto: categoria_producto.value,
      }

      try {
            const response = await axios.post('http://web.backend.com/agregarProducto', data);
            productos.value = response.data.data;
            console.log(data)
      } catch (error) {
            console.log(error)
      }
}

const proveedoresData = async () => {
      try {
            const response = await axios.get('http://web.backend.com/proveedores');
            proveedores.value = response.data.data;
      }
      catch (error) {
            console.log(error)
      }
}

const categoriasData = async () => {
      try {
            const response = await axios.get('http://web.backend.com/categorias');
            categorias.value = response.data.data;
      }
      catch (error) {
            console.log(error)
      }
}

const agregar = () => {
      fetchData();
}

const mostrar_categorias = () => {
      categoriasData()
}
const mostrar_proveedores = () => {
      proveedoresData()
}

const seleccionTipoProducto = () => {
      if (tipo_producto.value === 'interno') {
            mostrar_precio.value = false
            mostrar_preview.value = false
      } else if (tipo_producto.value === 'venta') {
            mostrar_precio.value = true
            mostrar_preview.value = true
      }
}

</script>

<style scoped>
.cont {
      display: grid;
      grid-auto-columns: 1fr;
      grid-template-rows: 0.0fr 1.9fr;
      gap: 0px 0px;
      width: 100%;
      height: 100vh;
}

.body {
      display: grid;
      grid-auto-columns: 1fr;
      grid-template-columns: 1.3fr 0.7fr;
      grid-template-rows: 1.7fr;
      gap: 0px 0px;
      grid-template-areas:
            ". .";
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

/* IZQUIERDO */

.checkout {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 100%;
}


.more {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
}

.title h3 {
      margin-bottom: 20px;
}

.title {
      margin-bottom: 20px;
}

.header-check .title {
      display: grid;
      grid-auto-columns: 1fr;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 0px 0px;
}

.cuerpo {
      width: 70%;
      height: 90%;
}

.header-check {
      display: flex;
      border-bottom: 1px solid rgba(132, 139, 200, 0.18);
      width: 100%;
      margin-bottom: 30px;
}

.data {
      display: grid;
      grid-auto-columns: 1fr;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1.7fr;
      gap: 0px 0px;
      grid-template-areas:
            ". .";
      margin-top: 20px;
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

.precios input {
      width: 100%;
}

.input {
      display: flex;
      flex-direction: column;
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

.input span {
      font-size: 13px;
      color: #898c8f;
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


select option {
      font-size: 14px;
      color: #333;
}

.productos {
      display: grid;
      grid-auto-columns: 1fr;
      grid-template-rows: 0.6fr 1.4fr;
      gap: 0px 0px;
}

.desc {
      height: 89%;
      display: flex;
      justify-content: center;
      align-items: center;
}

.producto-preview {
      display: flex;
      justify-content: center;
}


.ca {

      width: 23em;
      height: 30em;
      background: white;
      border: 2px solid #323232;
      box-shadow: 4px 4px #323232;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 20px;
      gap: 10px;
}

.ca:last-child {
      justify-content: flex-end;
}

.card-img {

      transition: all 0.5s;
      display: flex;
      justify-content: center;
}



.card-title {
      font-size: 20px;
      font-weight: 500;
      text-align: center;
      color: #323232;
}

.card-subtitle {
      font-size: 14px;
      font-weight: 400;
      color: #323232;
}

.card-divider {
      width: 100%;
      border: 1px solid #323232;
      border-radius: 50px;
}

.card-footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
}

.card-price {
      display: flex;
      font-size: 20px;
      font-weight: 500;
      color: #323232;
}

.card-price span {
      font-size: 20px;
      font-weight: 500;
      color: #323232;
}

.card-btn {
      height: 35px;
      background: #fff;
      border: 2px solid black;
      width: 100px;
      border-radius: 5px;
      padding: 0 15px;
      transition: all 0.3s;
}

.card-btn svg {
      width: 100%;
      height: 100%;
      transition: all 0.3s;
}

.card-img:hover {
      transform: translateY(-3px);
}

.card-btn:active {
      transform: translateY(3px);
}

.custum-file-upload {
      height: 200px;
      width: 300px;
      display: flex;
      flex-direction: column;

      gap: 20px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border: 2px dashed #cacaca;
      background-color: rgba(255, 255, 255, 1);
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0px 48px 35px -48px rgba(0, 0, 0, 0.1);
}

.custum-file-upload .icon {
      display: flex;
      align-items: center;
      justify-content: center;
}

.custum-file-upload .icon svg {
      height: 80px;
      fill: rgba(75, 85, 99, 1);
}

.custum-file-upload .text {
      display: flex;
      align-items: center;
      justify-content: center;
}

.custum-file-upload .text span {
      font-weight: 400;
      color: rgba(75, 85, 99, 1);
}

.custum-file-upload input {
      display: none;
}
</style>