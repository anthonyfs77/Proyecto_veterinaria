<template>
    <div class="label">
      <p>Dueño</p>
      <div class="inputs">
        <input
          id="inputN"
          :value="modelValue1"
          @input="$emit('update:modelValue1', $event.target.value)"
          :placeholder="tittle1"
        />
        <span class="material-symbols-outlined">boy</span>
        <input
          id="inputA"
          :value="modelValue2"
          @input="$emit('update:modelValue2', $event.target.value)"
          :placeholder="tittle2"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  defineProps({
    modelValue1: String,
    modelValue2: String,
    tittle1: {
      type: String,
    },
    tittle2: {
      type: String,
    },
  });
  </script>

<style scoped>
span{
    color: #999999;
}

p{
    color: #c2c5d3;
}
.label{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.inputs {
    margin: -0.9em 0 0em 0;
    position: relative;
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
}

.inputs input {
    font-size: 100%;
    padding: 0.8em;
    outline: none;
    box-shadow: 0 0 1em #00000013;
    border: none;
    background-color: transparent;
    border-radius: 10px;
    width: 125px;
    height: 40px;
    text-align: center;
}

input::placeholder {
    color: #999999;
}

</style>