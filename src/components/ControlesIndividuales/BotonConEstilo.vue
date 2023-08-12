
<template>
  <button class="button" type="button" @click="toggleCheckbox">
    <span class="button__text">{{ title }}</span>
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

.button {
    position: relative;
    width: 150px;
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

.button:hover{
  box-shadow: 0 0 2em #00000013;
  transform: scale(1.03);
  color: whitesmoke;
  background-color: black;
  font-weight: 600;
}
.button__text {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
}


</style>