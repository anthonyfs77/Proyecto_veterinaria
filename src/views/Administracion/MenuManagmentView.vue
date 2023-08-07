<template>
  <div class="header">
    <div class="top-menu">
      <h3>Menu control</h3>
    </div>
    <div class="profile">
        <p>Administrador</p>
        <div class="perfil"></div>
    </div>
  </div>
  <div class="vista">
    <div class="panel">
      <div class="cards">
        <div class="estadisticas">
          <grafica />
          <div class="info">
            <div class="purple">
              <div></div>
              <label>This month</label>
            </div>
            <div class="red">
              <div></div>
              <label>Last month</label>
            </div>
          </div>
        </div>
        <div class="pequenas">

          <div v-for="ventas in ventas" :key="ventas.ventas_mes_actual">
            <info_card icono="local_shipping" name="Ventas"
                          cardStyle="estilo2" :status="estilo_ventas"
                          :number="ventas.ventas_mes_actual"
                          :porcentaje="ventas.porcentaje_crecimiento"
                          :arrow="arrow_ventas"/></div>

          <div>
            <info_card icono="payments" name="Ganancia" porcentaje="21"
                          cardStyle="estilo3" status="estilo-positivo"
                          number="21"/></div>

          <div v-for="citas in citasR" :key="citas.citas_mes_actual">
            <info_card icono="pets" name="Citas tot." :porcentaje="citas.porcentaje_crecimiento"
                          cardStyle="estilo1" :status="estilo_citas"
                          :number="citas.citas_mes_actual"
                          :arrow="arrow_citas"/></div>
        </div>
      </div>
      <div class="tabla">
        <div class="table">
          <TablaComp />
        </div>
        <div class="extra">

        </div>
      </div>
    </div>
    <div class="right">
      <div class="cont">
        <div class="title">
          <h1>Citas Proximas</h1>
        </div>
        <div class="citas" v-for="cita in citas" :key="cita.id">
          <Notificaciones  class="not"
                           :fecha="cita.fecha_cita" :descripcion="cita.motivo" />
        </div>
      </div>
      <div class="estadisticas-aside" >
        <div v-for="prod in productos" :key="prod.id"><estadisticas
            :nombre="prod.nom_producto" :stock="prod.existencias"/>
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
import estadisticas from '../../components/Managment/estadisticas.vue'
import info_card from '../../components/Managment/InfoCard.vue'
import InfoCard from "@/components/Managment/InfoCard.vue";


const citas = ref([])

const fetchData = async () => {
  try {
    const response = await axios.get('http://web.backend.com/citasPendientes');
    citas.value = response.data.data;
  } catch(error) {
    console.log(error)
  }
}

const productos = ref([])
const bajaProd = async () => {
  try {
    const response = await axios.get('http://web.backend.com/bajaProductos');
    productos.value = response.data.data;
    console.log(productos.value)
  } catch(error) {
    console.log(error)
  }
}



const ventas = ref([]);
const citasR = ref([])
const cantidadVentas = async () => {
  try {
    const response = await axios.get('http://web.backend.com/total_ventas');
    ventas.value = response.data.data;
    const citasResponse = await axios.get('http://web.backend.com/total_citas');
    citasR.value = citasResponse.data.data;
  } catch (error) {
    console.log(error)
  }
};

const estilo_citas = ref('');
const estilo_ventas = ref('');
const arrow_citas = ref('')
const arrow_ventas = ref('')

const estadisticas_positivo_negativo = () =>{
  for (const i in citasR) {
      if (i.porcentaje_crecimiento <= 0){
        estilo_citas.value = 'estilo-positivo'
        arrow_citas.value = 'arrow_drop_up'
      } else{
        estilo_citas.value = 'estilo-negativo'
        arrow_citas.value = 'arrow_drop_down'
      }
  }

  for (const i in ventas) {
    if (i.porcentaje_crecimiento <= 0){
      estilo_ventas.value = 'estilo-negativo'
      arrow_ventas.value = 'arrow_drop_down'
    } else{
      estilo_ventas.value = 'estilo-positivo'
      arrow_ventas.value = 'arrow_drop_up'
    }
  }
}
onMounted(fetchData);
onMounted(bajaProd);
onMounted(cantidadVentas);
onMounted(estadisticas_positivo_negativo)
</script>


<style scoped>


.cont {
  margin-bottom: 10px;
  margin-top: 0px;
  background: #fff;
  padding: 1.2rem;
  border-radius: 0rem 0rem 2rem 2rem;
  box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.1);
  transition: all 300ms ease;
  max-width: 25em;
  max-height: 30em;
}
.pequenas{
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0px 0px;
  height: 2em;
}
.pequenas div{

  display: flex;
  justify-content: center;
  align-items: center;

}
.top-menu{
  display: flex;
  align-items: center;
  height: 4em;
  max-height: 6em;
  margin-left: 10px;
}
.estadisticas-aside{
  overflow-y: scroll;
  max-height: 24.8em;
}
.header{
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 0px 0px;
  border-bottom: 1px solid rgba(132, 139, 200, 0.18);
}
.profile{
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-end;
  margin-right: 50px;
}
.profile .perfil{
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../assets/img/profile.jpg");
}
.citas{
  max-height: 10em;
}

.info{
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.red, .purple{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.red div{
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 10px 0px 10px 0px;
}

.purple div{
  background-color: purple;
  width: 20px;
  height: 20px;
  border-radius: 10px 0px 10px 0px;
}

.right{
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: 1.4fr 1.3fr;
  gap: 0px 0px;
}

.tabla h1{
  font-weight: 300;
  width: 95.7%;
  display: flex;
  justify-content: center;
}
.tabla{
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 0px 0px;
}


.table{
  max-height: 13em;
  margin-bottom: 130px;
}

.top-menu h1{
  font-weight: 300;
  width: 82.4%;
  display: flex;
  justify-content: center;
}

.cards {
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 1.9fr 0.5fr;
  gap: 0px 0px;
  grid-template-areas:
    "."
    ".";
  height: 100%;

}



.panel {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;

}

.estadisticas {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
}

.vista {
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 2.2fr 0.8fr;
  gap: 10px;
  justify-items: stretch;
  align-items: stretch;
  width: 100%;
  height: 95vh;

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

