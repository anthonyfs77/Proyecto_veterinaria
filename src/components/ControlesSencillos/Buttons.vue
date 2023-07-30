<template>
    <button class="buttons">
        <span class="text">{{ title }}</span>
    </button>
</template>

<script setup>
import { defineProps } from 'vue';
 
 defineProps({
     title:{
         type: String,
     }
 })
</script>

<style scoped>
.buttons {
    position: relative;
    width: 155px;
    height: 40px;
    cursor: pointer;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    border: none;
    box-shadow: 0 0 1em #00000013;
    transition: all 0.3s;
    font-weight: 500;
}

.buttons:hover{
  box-shadow: 0 0 2em #00000013;
  transform: scale(1.03);
  color: black;
  font-weight: 600;
}

.text{
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
}

</style>