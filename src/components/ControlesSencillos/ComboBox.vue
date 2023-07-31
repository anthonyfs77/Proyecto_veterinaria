<template>
    <div class="label">
      <p>{{ title }}</p>
      <div class="inputs">
        <select
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        >
          <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  defineProps({
    modelValue: [String, Number],
    title: {
      type: String,
    },
    options: {
      type: Array,
    },
  });
  </script>
  
  <style scoped>
  .label {
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
  }
  
  .inputs select {
    font-size: 100%;
    padding: 0.8em;
    outline: none;
    box-shadow: 0 0 1em #00000013;
    border: none;
    background-color: transparent;
    border-radius: 10px;
    width: 200px;
    height: 50px;
    text-align: center;
  }
  
  p {
    color: #313131;
  }
  </style>
  