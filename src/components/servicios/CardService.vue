<script setup>
import {ref, defineProps} from 'vue';
import BotonConEstilo from '../ControlesIndividuales/BotonConEstilo.vue';
const props = defineProps({
  Service: {
    type: String,
    default: ''
  },
  Description: {
    type: String,
    default: ''
  },
  Type: {
    type: String,
    default: ''
  },
  Id: {
    type: Number,
    default: 0
  },
  Foto: {
    type: String,
    default: '../src/assets/img/FotosServicios/estetico1.jpeg'
  }
});

let { Description, Service, Type, Id, Foto } = props;
const emits = defineEmits(['ide'])


const editService = (value) =>{
    emits('ide', value);
}
</script>


<template>
    <div class="carta">
        <div class="service-image" :style="{ backgroundImage: `url(${Foto})` }" ></div>
        <div class="info">
            <div class="texto">
                <h3 class="grilla" >Nombre: {{ Service }}</h3>
            </div>
            <div class="texto">
                <p class="text">Servicio: {{ Type }}</p>
            </div>
            <div class="texto">
                <p class="text">Descripción: {{ Description }}</p>
            </div>
            <div  class="boton">
                <BotonConEstilo @click="editService(Id)" title="Editar Servicio" />
            </div>
      </div>
    </div>
</template>

<style scoped>

.text{
    grid-column-start: 2;
}
.texto{
    display: grid;
    grid-template-columns: 10% 80% 10%;
}
.boton{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 7%;
    grid-row-start: 5;
}
.grilla{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-column-start: 2;
}
.carta {
    display: grid;
    grid-template-rows: 1fr 1fr 8fr; 
    grid-template-columns: 100%;
    width: 65vh;
    height: 40vh;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    border-radius: 15px;
    overflow: hidden; 
}

.service-image {
  grid-row-start: 1;
  position: relative;
  width: 100%; 
  padding-bottom: 17%;
  background-size: cover;
  background-position:center;
}

.info{
    grid-row-start: 3;
    display: grid;
    grid-template-rows: 15% 10% 45% 5% 20% 5%;
}

</style>