<template>
    <div class="pantalla">
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
                        <btn title="Agregar +"/>
                    </div>
                </div>
                <div class="content">
                    <div class="services">
                    <CardService @ide="editService"       
                    v-for="service in services"
                    :Id="service.id"
                    :Service="service.tipo_servicio"
                    :Type="service.id_servicio"
                    :image="service.image"
                    :Description="service.descripcion"/>
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
                    v-for="service in services"
                    :Id="service.id"
                    :Service="service.tipo_servicio"
                    :Type="service.id_servicio"
                    :image="service.image"
                    :Description="service.descripcion"/>
                </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  import axios from 'axios';
  import CardService from '../../components/servicios/CardService.vue';
  import btn from '../../components/ControlesIndividuales/BotonBlanco.vue';
  
  let services = ref([
   {
    id: 1,
    tipo_servicio: 'Servicio 1',
    descripcion: 'Descripción del Servicio 1',
    image: 'url_a_la_imagen_del_servicio_1',
    id_servicio: 0 
   },
   {
    id: 2,
    tipo_servicio: 'Servicio 2',
    descripcion: 'Descripción del Servicio 2',
    image: 'url_a_la_imagen_del_servicio_1',
    id_servicio: 1 
   },
   {
    id: 2,
    tipo_servicio: 'Servicio 2',
    descripcion: 'Descripción del Servicio 2',
    image: 'url_a_la_imagen_del_servicio_1',
    id_servicio: 1 
   }
  ]);
  
  
  const editService = (elid) =>{
    
  }
  
  function saveService() {

  }
  </script>
  
  <style scoped>

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
  }

  .services{
    display: grid;
    grid-template-columns: 1fr;
    gap: 5rem;
  }

  .content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-wrap:wrap-reverse;
  overflow:initial;
}
  .servi{
    display: grid;
    grid-template-rows: 1fr 9fr;
    margin: 20px ;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    border-radius: 15px;
    overflow:initial;
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
  