<template>
  <div class="app" @click="seleccion">
    <div class="column">
      <div>
        <p>{{ nombre }}</p>
      </div>
      <div>
        <p>{{ telefono }}</p>
      </div>
      <div>
        <p>{{ fecha_cita }}</p>
      </div>
      <div>
        <p>{{ estatus }}</p>
      </div>
      <div>
        <p>{{ raza }}</p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { defineProps} from 'vue';

defineProps({
  nombre: { type: String },
  telefono: { type: String },
  fecha_cita:{type:String},
  estatus: { type: String },
  raza: { type: String },
})

</script>

<style scoped>


.app {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgba(132, 139, 200, 0.18);
  color: #677483;
  max-height: 3em !important;
  cursor:pointer;

}

.column {
display: flex;
  justify-content: space-between;
  width: 100%;

}

p {
  display: flex;
  height: 40px;
  align-items: center;
  width: 10em;
  margin-left: 100px;
  text-align: center;
}

.column p:nth-child(2){

  display: flex;
  justify-content: flex-end;
  width: 40em;
}

.column p:nth-child(3){
  width: 250%;
  display: flex;
  justify-content: center;
}

.column p:nth-child(4){

  width: 90%;
}
</style>
