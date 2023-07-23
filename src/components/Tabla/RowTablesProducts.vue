<template>
    <div class="app">
      <div class="column">
        <p>{{ name }}</p>
        <p>{{stock}}</p>
        <p>{{priceV}} <span>$</span></p>
        <p>{{priceC}} <span>$</span></p>
        <p>{{iva}} <span>$</span></p>
        <p id="stock">{{ status }}</p>
      </div>
    </div>
  </template>
  
<script setup>
import {defineProps} from 'vue'

defineProps({
  name:{type:String}, stock:{type:Number}, priceV:{type:Number}, priceC:{type:Number}, iva:{type:Number}, status:{type:String}
})

</script>

  <style scoped>
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
  
  #stock{
    color: green ;
  }
  p {
    display: flex;
    height: 40px;
    align-items: center;
    width: 11%;
    margin-left: 60px;
    text-align: center;
  }
  </style>
  