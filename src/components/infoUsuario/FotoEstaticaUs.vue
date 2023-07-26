<template>
    <div 
      :style="{ backgroundImage: `url(${URL})` }" 
      class="user-image hover-image"
    />

</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  URL: {
    type: String,
    default: ''
  }
});

</script>

<style scoped>
.icon {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 50px;
height: 50px;
}
.user-image {
  position: relative;
  cursor: pointer;
  width: 100%; 
  height: 0;
  padding-bottom: 100%; 
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
}
.hover-image {
transition: filter 0.5s ease-in-out;
}

.hover-image:hover {
filter: brightness(50%);
}
</style>
