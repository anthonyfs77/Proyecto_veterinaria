
<template>
  <button class="button" type="button" @click="toggleCheckbox">
    <span class="button__text">{{ tittle }}</span>
  </button>
</template>



<script setup>
import { defineProps } from 'vue';
 
defineProps({
    tittle:{
        type: String,
    }
})

</script>



<style scoped>
.button {
    position: relative;
    width: 190px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: rgb(39, 231, 0);
    border-radius: 30px;
    overflow: hidden;
    border: 2px;
    border-color: black;
    box-shadow: 0 0 1em #00000013;
    transition: transform 0.5s;
    text-align: center;
    padding: 8px;
    
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
    color: #fdfdfd;
    font-weight: 600;
}

</style>