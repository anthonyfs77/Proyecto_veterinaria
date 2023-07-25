
<template>
  
    <button class="button" type="button" @click="toggleCheckbox">
    <span class="button__text">{{ tittle }}</span>
    <span class="button__icon">
      <div class="content">
        <label class="checkBox">
          <input type="checkbox" id="ch1" :checked="isChecked" @change="toggleCheckbox">
          <div class="transition"></div>
        </label>
      </div>
    </span>
  </button>
</template>



<script setup>
import { ref, defineProps } from 'vue';
 
defineProps({
    tittle:{
        type: String,
    },
})

const isChecked = ref(false);

const toggleCheckbox = () => {
  isChecked.value = !isChecked.value;
};
</script>



<style scoped>
.button {
    position: relative;
    width: 150px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    border: none;
    box-shadow: 0 0 1em #00000013;
}

.button,
.button__icon,
.button__text {
    transition: all 0.3s;
}

.button .button__text {
    transform: translateX(22px);
    color: #999999;
    font-weight: 600;
}

.button .button__icon {
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
}




.button:active {
    transform: translate(3px, 3px);
    box-shadow: 0 0 1em #00000013;
}


.checkBox {
    display: block;
    cursor: pointer;
    width: 19px;
    height: 18px;
    border: 3px solid rgba(255, 255, 255, 0);
    border-radius: 1px;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 0px 0px 2px black;
}

.checkBox div {
    width: 60px;
    height: 60px;
    background-color: black;
    top: -52px;
    left: -52px;
    position: absolute;
    transform: rotateZ(45deg);
    z-index: 100;
}

.checkBox input[type=checkbox]:checked+div {
    left: -10px;
    top: -10px;
}

.checkBox input[type=checkbox] {
    position: absolute;
    left: 50px;
    visibility: hidden;
}

.transition {
    transition: 300ms ease;
}
</style>