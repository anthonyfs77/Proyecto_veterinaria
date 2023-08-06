<template>
    <div class="app">
      <div class="column">
        <p> {{ name }}</p>
        <p id="stock" :class="{
          'text-red': status === 'Sin stock',
          'text-green': status === 'Stock'
        }">{{ status }}</p>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { defineProps} from 'vue';
  
  defineProps({
    name: { type: String }, 
    status: { type: String }
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
  
  .app{
    display: flex;
    flex-direction: column;
    height: auto;
  }

  </style>
    