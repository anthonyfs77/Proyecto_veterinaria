<template>
    <div class="app">
      <div class="column">
        <p>{{ name }}</p>
        <p>{{stock}}</p>
        <p>{{priceV}} <span> $</span></p>
        <p>{{iva}} <span> $</span></p>
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
  name:{type:String}, stock:{type:Number}, priceV:{type:Number}, iva:{type:Number}, status:{type:String}
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
    
    border-bottom: 1px solid rgba(132, 139, 200, 0.18);
    color: #677483;
    max-height: 4.5em;
    height: 1em;
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
  
  .column p:first-child{
    width: 200px;
  }

  p {
    display: flex;
    height: 40px;
    align-items: center;
    width: 11%;
    margin-left: 60px;
  }
  </style>
  