<template>
    <div class="pantalla">
      <transition name="fade">
    <div v-if="showModal" class="modal">
    </div>
</transition>
<div class="modal-content" v-if="showModal">
        <genser @close="activar"/>
      </div>
        <div class="header">
            <h4 class="texto">
                SERVICIOS
            </h4>
        </div>
        <div class="body">
            <div class="servi">
                <div class="titulo">
                    <div class="tit">
                        NO PUBLICOS
                    </div>
                    <div class="agreg">
                        <btn title="Agregar +" @click="activar"/>
                    </div>
                </div>
                <div class="content">
                    <div class="services">
                    <CardService @ide="publicar"       
                    v-for="service in services"
                    :Id="service.id"
                    :Service="service.nombre_TServicio"
                    :Type="service.id_servicio"
                    :image="service.image"
                    :Description="service.descripcion"
                    :precio="service.precio"
                    />
                    </div>
                </div>
            </div>
            <div class="servi">
                <div class="titulo2">
                    PUBLICOS
                </div>
                <div class="content">
                    <div class="services">
                    <CardService           
                    v-for="serviceP in servicesP"
                    :Id="serviceP.id"
                    :Service="serviceP.nombre_TServicio"
                    :Type="serviceP.id_servicio"
                    :image="serviceP.image"
                    :Description="serviceP.descripcion"
                    :precio="serviceP.precio"
                    />
                </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import CardService from '../../components/servicios/CardService.vue';
  import btn from '../../components/ControlesIndividuales/BotonBlanco.vue';
  import genser from '@/components/servicios/ServiceForm.vue';

  const showModal = ref(false);

  const activar= async () => {
  if(showModal.value === false)
  {
    showModal.value = true;
  } else if (showModal.value === true)
  {
    showModal.value = false;
    location.reload();
  }
}

  const services = ref([]);
  const servicesP = ref([]);

  const serviciospriv = async () => {
    try {
        const response = await axios.get('http://web.Backend.com/serviciosprivados')
        if (Array.isArray(response.data.data)) {
            services.value = response.data.data;
        } else {
            services.value = [response.data.data];
        }
    } catch (error) {
        console.error(error)
    }
}

const serviciospub = async () => {
    try {
        const response = await axios.get('http://web.Backend.com/serviciospublicos')
        if (Array.isArray(response.data.data)) {
            servicesP.value = response.data.data;
        } else {
            servicesP.value = [response.data.data];
        }
    } catch (error) {
        console.error(error)
    }
}
onMounted(serviciospriv);
onMounted(serviciospub);


  </script>
  
  <style scoped>

.modal-content {
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 99;
}
.modal {
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
  z-index: 98;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


  .tit{
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column-start: 3;
  }
  .agreg{
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column-start: 4;
  }
  .titulo{
    display: grid;
    grid-template-columns: 10% 25% 30% 25% 10%;
    color: rgb(255, 255, 255);
    background: linear-gradient(rgb(104, 68, 235), rgb(255, 255, 255));
    border-radius: 15px;
    font-weight: bold;
    height: 20vh;
  }
  .titulo2{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    color: rgb(255, 255, 255);
    background: linear-gradient(rgb(44, 135, 209), rgb(255, 255, 255));
    border-radius: 15px;
    font-weight: bold;
    height: 20vh;
  }

  .services{
    display: grid;
    grid-template-columns: 1fr;
    gap: 5rem;
  }
  

  .content {
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-wrap:wrap-reverse;
  overflow:auto;
}
.servi{
    display: grid;
    grid-template-rows: 1fr 9fr;
    margin: 20px ;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    border-radius: 15px;
    overflow:hidden;
    height: 90%;
  }
  .content::-webkit-scrollbar {
  width: 20px;
}

.content::-webkit-scrollbar-track {
  background-color: white;
}
  

.content::-webkit-scrollbar-thumb {
  background: #cfcfcf;
}
  .header{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    grid-row-start: 1;
    background-color: rgb(255, 255, 255);
  }

  .body{
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    grid-row-start: 2;
  }

  .pantalla{
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-rows: 8% 92%;
    grid-template-columns: 1fr;
  }


  .service-form {
    margin-top: 20px;
  }

  .texto{
    text-align: center;
    text-justify: center;
  }
  </style>
  