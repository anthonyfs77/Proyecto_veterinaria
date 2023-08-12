<script setup>
  import {  ref, watch ,onMounted } from 'vue';
  import btn from '../../components/ControlesIndividuales/BotonAntho.vue'
  import axios from 'axios';

  const productos = ref([]);
  const productosSeleccionados = ref([]);

  const props = defineProps({
  idorden: {
    type: Number,
    default: ''
  },
});

  const orderId = ref('1'); 
  const data = ref([
  {
    producto: 1,
    cantidad: 2,
    precio_compra: '100.00',
  },
  {
    producto: 2,
    cantidad: 1,
    precio_compra: '50.00',
  },
]);


const sendPostRequest = async () => {
  try {
    const jsonData = {
      orderId: orderId.value,
      orderItems: data.value,
    };
    const response = await axios.post('http://web.Backend.com/orden/Detalles', jsonData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const obtenerproductos = async () => {
    try {
        const response = await axios.get('http://web.Backend.com/productos/all')
        if (Array.isArray(response.data.data)) {
            productos.value = response.data.data;
        } else {
            productos.value = [response.data.data];
        }
    } catch (error) {
        console.error(error)
    }
}
obtenerproductos();



</script>

<template>
    <div class="card">
        <div class="grilla" v-if=!loading>
          <div class="form">
           <div class="combo">
            <div class="select" v-for="producto in productos" :key="producto.id">
      <span>{{ producto.id }}</span>
      <span>{{ producto.nom_producto }}</span>
      <input type="number" v-model="producto.cantidad" placeholder="Cantidad" />
      <input type="number" v-model="producto.precio" placeholder="Precio" />
      <input type="checkbox" v-model="producto.seleccionado" @change="agregarAlArray(producto)" />
    </div>
           </div>
            <btn @click="sendPostRequest" title="Generar Detalles"/>
          </div>
        </div>
    </div>
</template>

<style scoped>

input{
  border-radius: 10px;
}
.grilla{
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 30% 50% 20%;
      grid-template-rows: 10% 80% 10%;
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

.select{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.combo::-webkit-scrollbar {
  width: 15px;
}

.combo::-webkit-scrollbar-track {
  background-color: white;
}

.combo::-webkit-scrollbar-thumb {
  background: #cfcfcf;
}
.combo{
  width: 100%;
  height: 50%;
  overflow: auto;

}

.form{
  grid-column-start: 2;
  grid-row-start: 2;
}

</style>