<template>
    <div class="vista">
        <div class="panel">
            <div class="cards">
                <div class="top-menu">
                    <h1>Estadistica</h1>
                </div>
                <div class="estadisticas">
                    <grafica />
                </div>
            </div>
            <div class="tabla">
                <h1>Ventas hoy</h1>
                <TablaComp />
            </div>
        </div>
        <div class="right">
            <div class="cont">
                <div class="title">
                    <h1>Citas pendientes</h1>
                </div>
                <div class="citas" v-for="cita in citas" :key="cita.id">
                    <Notificaciones  class="not"
                    :fecha="cita.fecha_cita" :descripcion="cita.motivo" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, } from 'vue'
import axios from 'axios'
import Notificaciones from '../../components/Managment/Notificaciones.vue'
import TablaComp from '../../components/Managment/TablaComp.vue'
import grafica from '../../components/managment/grafica.vue'


const citas = ref([])

const fetchData = async () => {
  try {
    const response = await axios.get('http://web.backend.com/citasPendientes');
    citas.value = response.data.data; 
  } catch(error) {
    console.log(error)
  }
}

onMounted(fetchData);
</script>


<style scoped>
.cont {
    margin-bottom: 10px;
    margin-top: 0px;
    background: #fff;
    padding: 1.2rem;
    border-radius: 0rem 0rem 2rem 2rem;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    transition: all 300ms ease;
    max-width: 25em;
    height: 95vh;
}

.tabla h1{
    font-weight: 300;
    width: 95.7%;
    display: flex;
    justify-content: center;
}

.top-menu h1{
    font-weight: 300;
    width: 82.4%;
    display: flex;
    justify-content: center;
}

.cards {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, minmax(2fr, 1fr));
    grid-gap: 10px;
}

.panel {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;
}

.estadisticas {
    display: flex;
    justify-content: space-around;
    width: 100%;
    
}

.vista {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 2.2fr 0.8fr;
    gap: 10px;
    justify-items: stretch;
    align-items: stretch;
    width: 100%;
    height: 100vh;
}

.not {
    position: relative;
}

.title{
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: 30px;
}
</style>

