<template>
  <div class="app">
    <div class="column">
      <p>{{ nombre }}</p>
      <p>{{ cantidad }}</p>
      <p>{{ precio }}</p>
    </div>
  </div>
</template>


<script setup>
import { defineProps } from 'vue';

defineProps({
  nombre: { type: String, default: '---' },
  cantidad: { type: Number, default: '---' },
  precio: { type: Number, default: '---' },
})
</script>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px dashed  rgba(132, 139, 200, 0.18);
  color: #677483;
  max-height: 3em !important;
}

.column {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

}

</style>
