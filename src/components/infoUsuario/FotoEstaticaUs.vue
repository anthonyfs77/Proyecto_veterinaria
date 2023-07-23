<template>
    <div 
      :style="{ backgroundImage: `url(${image})` }" 
      class="user-image hover-image"
    />

</template>

<script setup>
import { ref } from 'vue';

let image = ref('../src/assets/img/images.png');

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
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 60px #00000085;
}
.hover-image {
transition: filter 0.5s ease-in-out;
}

.hover-image:hover {
filter: brightness(50%);
}
</style>
