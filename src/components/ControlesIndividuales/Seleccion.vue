<template>
    <div class="container">
	<div class="tabs">
		<input type="radio" id="radio-1" name="tabs">
		<label class="tab" for="radio-1">{{name1}}</label>
		<input type="radio" id="radio-2" name="tabs">
		<label class="tab" for="radio-2">{{name2}}</label>
		<span class="glider"></span>
	</div>
</div>
</template>

<script setup>
import {defineProps} from 'vue'
defineProps({
    name2:{
        type: String,
    },
    name1:{
        type: String,
    }
})

</script>

<style scoped>
.tabs {
  display: flex;
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15);
  padding: 0.75rem;
  border-radius: 20px;
}

.tabs * {
  z-index: 2;
}

.container input[type="radio"] {
  display: none;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 80%;
  font-size: 1rem;
  color: black;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;
}


.container input[type="radio"]:checked + label {
  color: #185ee0;
}

.container input[type="radio"]:checked + label > .notification {
  background-color: #185ee0;
  color: #fff;
  margin: 0px;
}

.container input[id="radio-1"]:checked ~ .glider {
  transform: translateX(11%);
}

.container input[id="radio-2"]:checked ~ .glider {
  transform: translateX(139%);
}

.container input[id="radio-3"]:checked ~ .glider {
  transform: translateX(200%);
}

.glider {
  position: absolute;
  display: flex;
  height: 30px;
  width: 100px;
  background-color: #e6eef9;
  z-index: 1;
  border-radius: 99px;
  transition: 0.25s ease-out;
}

@media(max-width: 700px){
    .container{
        width: 320%;
    }

}
</style>