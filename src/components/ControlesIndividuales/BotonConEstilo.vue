
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
    width: 100px;
    height: 40px;
    cursor: pointer;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    border: none;
    box-shadow: 0 0 1em #00000013;
    font-size: 15px;
    transition: transform 0.5s;
}

.button:hover{
  box-shadow: 0 0 2em #00000013;
  transform: scale(1.03);
}
.button__text {
    transition: all 0.3s;
}

.button .button__text {
    transform: translateX(22px);
    font-weight: 590;
}

</style>