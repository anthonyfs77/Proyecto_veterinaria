<script setup>
  import {  ref, onMounted, watch   } from 'vue';
  import btn from '../../components/ControlesIndividuales/BotonAntho.vue'
  import axios from 'axios';

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

</script>

<template>
    <div class="card">
        <div class="grilla" v-if=!loading>
            <btn @click="sendPostRequest" title="Generar Detalles"/>
        </div>
    </div>
</template>

<style scoped>
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
</style>