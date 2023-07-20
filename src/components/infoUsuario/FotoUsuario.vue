<template>
      <div 
        :style="{ backgroundImage: `url(${image})` }" 
        @click="selectImage" 
        class="user-image hover-image"
      />
      <input 
        type="file" 
        ref="fileInput" 
        @change="previewImage" 
        accept="image/*" 
        style="display: none"
      />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  let image = ref('../src/assets/img/images.png');
  let fileInput = ref(null);
  
  const selectImage = () => {
    fileInput.value.click();
  };
  
  const previewImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        image.value = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
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
  