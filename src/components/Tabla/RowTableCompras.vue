<template>
  <div class="container-fluid">
      <div class="descripcion"><p>{{ motivo }}</p></div>
      <div class="fecha"><p>{{ fecha }}</p></div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue'

defineProps({
  motivo:{
    type: String,
  },
  fecha:{
    type: String,
  }
})

</script>

<style scoped>

.container-fluid{
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1.5fr 0.8fr;
  gap: 0px 0px;
  border-bottom: 1px dashed lightgray;
  width: 90%;
  height: 100%;
}

.descripcion{
  display: flex;
}

.fecha{
  display: flex;
  justify-content: center;
}
</style>