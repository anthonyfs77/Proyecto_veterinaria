<template>
  <div class="app">
    <div class="column">
      <p>{{ name }}</p>
      <p>{{ stock }}</p>
      <p>{{ descripcion }}</p>
      <p id="stock" :class="{
        'text-red': status === 'Sin stock',
        'text-green': status === 'Stock'
      }">{{ status }}</p>
    </div>
  </div>
</template>


<script setup>
import { defineProps } from 'vue';

defineProps({
  name: { type: String }, stock: { type: Number },descripcion:{type:String}, status: { type: String }
})


</script>
  
<style scoped>
.text-red {
  color: red;
  border-bottom: 1px solid red;
}

.text-green {
  color: green;
}


.app {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(132, 139, 200, 0.18);
  color: #677483;
  max-height: 3em !important;
}

  


.column {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

}

p {
  display: flex;
  height: 40px;
  align-items: center;
  width: 100%;
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
  