<template>
    <div class="app">
      <div class="column">
        <p>{{ name }}</p>
        <p>{{stock}}</p>
        <p id="stock" :class="{
          'text-red': status === 'Sin stock',
          'text-green': status === 'Stock'
        }">{{ status }}</p>
      </div>
    </div>
  </template>
  
<script setup>
import {defineProps} from 'vue'

defineProps({
  name:{type:String}, stock:{type:Number},status:{type:String}
})

</script>

  <style scoped>

  .text-red{
    color: red;
    border-bottom: 1px solid red;
  }

  .text-green{
    color: green;
  }
  .app {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid rgba(132, 139, 200, 0.18);
    color: #677483;
    max-height: 3em !important;
    
  }
span{
  color: green;
}  
  .column {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

  }
  

  p {
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  </style>
  