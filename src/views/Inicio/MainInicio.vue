<template>
    <div class="app">
      <div class="inicio">
        <div class="header">
          <navegacion />
        </div>
        <div class="cont">
          <div class="img">
            <div class="tittle">
              <h3>Veterinaria Cachorros</h3>
              <br>
              <h4>Estamos comprometidos con el cuidado de tu amigo</h4>
              <br>
              <btn />
            </div>
            <div class="imagen">
              <div class="imagenperro">
              </div>
            </div>
          </div>
          <barras class="barr" />
        </div>
      </div>
      <div class="encabezado">
        <div class="tit">
          <h1>Texto de ejemplo</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit eaque explicabo nesciunt cumque
            perferendis! Pariatur commodi odit, officiis quaerat suscipit rerum, perferendis eum possimus velit porro alias
            explicabo dignissimos?</p>
          <span class="material-symbols-outlined">
            sound_detection_dog_barking
          </span>
        </div>
      </div>
      <div class="body">
        <cards />
        <cards />
        <cards />
      </div>
      <div class="final">
        <div class="info">
          <div class="text">
            <div class="titulo">
              <h1>Texto de referencia</h1>
            </div>
            <div class="texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, non nobis. Accusantium ipsum natus non nemo?
              Facere fugit neque iusto facilis qui natus iure quod. Laborum esse modi ex repellat.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci provident illo repudiandae quam amet? Quae,
              incidunt optio magnam quaerat voluptatibus dignissimos libero sunt quam esse, recusandae autem maiores odio
              hic?
            </div>
            <btn/>
          </div>
          <div class="img-footer">
            <div class="card-container">
              <div class="imgFooter"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        Proyecto desarrollado por alumnos de la universidad tecnologica de torreón
      </div>
    </div>
  </template>
  
  
  <script setup>
  import navegacion from '../../components/MenuInicio/NavbarInicio.vue'
  import btn from '../../components/MenuInicio/BtnInicio.vue'
  import barras from '../../components/MenuInicio/BarraInicio.vue'
  import cards from '../../components/MenuInicio/CardsInicio.vue'
  </script>
  
  <style scoped>
  .inicio {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 1fr 6fr;
    gap: 0px 0px;
    height: 95vh;
  }
  
  .img {
    width: 90em;
    height: 35em;
    border-radius: 2rem;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3fr;
    gap: 0px 0px;
    grid-template-areas:
      ". .";
  }
  
  .imagenperro {
    background-color: #f6bb46;
    border-radius: 2rem;
    height: 100%;
    background-image: url('../../assets/img/sinFondo.png');
    background-size: 49.5em;
    background-repeat: no-repeat;
  }
  
  .tittle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5em;
    margin-left: 5em;
  }
  
  
  .tittle h3 {
    font-size: 3em;
    color: white;
  }
  
  .img {
    background-color: #f6bb46;
  }
  
  .cont {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
  
  .titulo {
    margin-bottom: 5em;
  }
  
  .body {
    height: 46vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9em;
  
  }
  
  
  .encabezado {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
  }
  
  .tit {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  
  .barr {
    position: absolute;
    margin-top: 32em;
  }
  
  span {
    font-size: 2yem;
  }
  
  
  
  .text {
    margin-left: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .img-footer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .info {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
      ". .";
    margin-top: 100px;
    margin-bottom: 100px;
    height: 70vh;
    width: 100%;
    background-color: rgb(252, 251, 251);
  }
  
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    width: 30em;
    height: 30em;
    background-color: white;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
  
  }
  
  .imgFooter {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    background-image: url('../../assets/img/perroFooter.jpg');
    background-size: cover;
  }
  
  .texto {
    text-align: center;
    margin-bottom: 5em;
  }
  
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 6em;
    width: 100%;
    background-color: black;
  }
  
  /*==========================Resoluciones=============================*/
  
  
  @media screen and (max-width: 768px) {
      /*====================Small tablets y mobil======================*/
  
    .img{
      width: 90%;
      height: 30em;
    }
  
  
    .barr{
      position: absolute;
      margin-top: 43em;
    }
    .tit {
      width: 100%;
    }
  
    .body {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      gap: 1em;
      height: 40em;
    }
  
    .card-container{
      box-shadow: none;
    }
  
    .text{
      width: 192%;
      margin-left: 10px;
    }
  
    .img-footer{
      display: none;
    }
  
  
    .footer{
      text-align: center;
    }
  }
  
  @media screen and (max-width: 1268px) {
      /*====================tablets======================*/
      .img{
        border-radius: 0;
        width: 100%;
      }
      .encabezado{
        margin-top: 100px;
      }
  }
  </style>