<!-- LineChart.vue -->
<template>
    <div>
      <canvas ref="lineChartCanvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { Chart, LineController, LinearScale, CategoryScale, PointElement, LineElement, Title } from 'chart.js';
  
  // Register Chart.js components
  Chart.register(LineController, LinearScale, CategoryScale, PointElement, LineElement, Title);
  
  const lineChartCanvas = ref(null);
  
  
  // Simulación de datos, reemplazar con los datos de órdenes por día en el mes actual
  const ordersData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    values: [5, 7, 10, 12, 8, 15, 9, 11, 6, 14, 12, 18, 20, 16, 12, 9, 13, 17, 22, 18, 14, 19, 15, 11, 13, 10, 12, 14, 9, 8, 6],
  };
  
  const chartData = {
    labels: ordersData.labels,
    datasets: [
      {
        label: 'Órdenes por día',
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        data: ordersData.values,
        fill: true,
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
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
  
  const updateChart = () => {
    if (lineChartCanvas.value && lineChartCanvas.value.getContext('2d')) {
      new Chart(lineChartCanvas.value.getContext('2d'), {
        type: 'line',
        data: chartData,
        options: chartOptions,
      });
    }
  };
  
  onMounted(() => {
    updateChart();
  });
  </script>
  
  <style scoped>
  /* Estilos opcionales para el contenedor de la gráfica */
  div {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
  </style>
  