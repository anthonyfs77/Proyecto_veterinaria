import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})


import { defineStore } from 'pinia';

export const useStore = defineStore('store', () => {
  const state = {
    variable: false, // Inicializar la variable en false
  };

  const setVariable = (newValue) => {
    state.variable = newValue;
  };

  return {
    state,
    setVariable,
  };
});
