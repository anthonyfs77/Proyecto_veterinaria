<script setup>
  import btn from '../../components/ControlesIndividuales/BotonBlanco.vue'
  
const props = defineProps({
  FechaCompra: {
    type: String,
    default: ''
  },
  FechaPago: {
    type: String,
    default: ''
  },
  Proveedor: {
    type: String,
    default: ''
  },
  Estado: {
    type: String,
    default: ''
  }
});

  
</script>

<template>
        <div class="columns">
        <div class="file">
            <span>
              {{ FechaCompra }}
            </span>
        </div>
        <div class="file">
            <span>
              {{ FechaPago }}
            </span>
        </div>
        <div class="file">
            <span>
                {{ Proveedor }}

            </span>
        </div>
        <div class="file">
            <span>
                {{ Estado }}
            </span>
        </div>
        <div class="gestion">
            <btn title="Gestionar"/>
        </div>
        </div>
</template>

<style scoped>
.gestion{
    display: flex;
    align-items: center;
  justify-content:flex-start;
  text-align: center;
  grid-column-start: 5;
    height: 100%;
  width: 100%;
}


.file{
    display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-column: span 1;
  height: 100%;
  width: 100%;
  }

  .columns{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    height: 6vh;
    border-radius: 10px;
  }
</style>