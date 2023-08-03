<template>
  
    <div>
    <canvas ref="lineChartCanvas"></canvas>
  </div>

</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
import { Chart, LineController, LinearScale, CategoryScale, PointElement, LineElement, Title, Filler } from 'chart.js'; // Importa el complemento 'Filler'
import axios from 'axios';


Chart.register(LineController, LinearScale, CategoryScale, PointElement, LineElement, Title, Filler); // Registra el complemento 'Filler'

const lineChartCanvas = ref(null);
const data = ref([]);

/* OBTENER RANGO DE FECHA */
const currentDate = new Date();
const mes = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();
const startDate = new Date(year, mes - 1, 1);
const lastDayOfMonth = new Date(year, mes, 0);
const endDate = new Date(year, mes - 1, lastDayOfMonth.getDate());
const formattedStartDate = startDate.toISOString().substring(0, 10);
const formattedEndDate = endDate.toISOString().substring(0, 10);

const fetchData = async () => {
  const rango = {
    fechaI: formattedStartDate,
    fechaF: formattedEndDate
  };

  try {
    const response = await axios.post('http://web.backend.com/data', rango);
    data.value = response.data;
    console.log(data.value);
    updateChartData();
  } catch (error) {
    console.error(error);
  }
};

const extractDayFromDate = (dateString) => {
  return dateString.substring(8);
};

const chartData = reactive({ 
  labels: [],
  datasets: [
    {
      label: 'Órdenes por día',
      borderColor: 'rgb(253, 242, 78)',
      backgroundColor: 'rgba(253, 242, 78, 0.2)',
      data: [],
      fill: true,
    },
  ],
});

const chartOptions = {
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Día del mes',
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Órdenes',
      },
    },
  },
};

const updateChartData = () => {
  chartData.labels = data.value.map((item) => extractDayFromDate(item.fecha)); 
  chartData.datasets[0].data = data.value.map((item) => parseInt(item.cantidad));
};

const updateChart = () => {
  if (lineChartCanvas.value && lineChartCanvas.value.getContext('2d')) {
    new Chart(lineChartCanvas.value.getContext('2d'), {
      type: 'line',
      data: chartData,
      options: chartOptions,
    });
  }
};

setInterval(() => {
  fetchData();
    updateChart();
}, 1000);
 
</script>

<style scoped>
/* Estilos opcionales para el contenedor de la gráfica */
div {
  width: 100%;
  height: 90%;
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
    border-radius: 2rem;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    transition: all 300ms ease;
}


</style>
