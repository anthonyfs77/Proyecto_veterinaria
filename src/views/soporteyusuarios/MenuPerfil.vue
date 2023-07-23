<template>
<div class="contenedor">
    <div class="contfoto">
        <div class="foto">
<FotoEstaticaUs/>
    </div>
    </div>
        <div>
            <button>
               Ver Perfil
            </button>
        </div>
        <div>
            <button>
               Configuración
            </button>
        </div>
        <div>
            <button>
               Ayuda y Soporte
            </button>
        </div>
</div>
</template>

<script setup>
import FotoEstaticaUs from '../../components/infoUsuario/FotoEstaticaUs.vue';
</script>

<style scoped>

button{
width: 100%;
height: 100%;
border-radius: 0%;
border-color: white;
background-color: white;
padding: 10px;
  box-shadow: 0 0 60px #00000034;
}

button:hover{
    background-color: rgb(255, 254, 176);
    transition: filter 0.5s ease-in-out;
}
.contenedor{
    height: 55vh;
    width: 20%;
    border-radius: 15px;
  padding: 10px;
  box-shadow: 0 0 60px #00000034;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 60% 13.33% 13.33% 13.33%;

}

.contfoto{
    display:flex;
    align-items: center;
    justify-content: center;
 grid-row-start: 1;
 height: 100%;
 width: 100%;
}

.foto{
    height: 50%;
    width: 50%;
}
</style>