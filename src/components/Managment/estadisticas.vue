<template>
  <div class="app">
    <div class="table">
      <div>{{ stock }}</div>
      <div>{{ nombre }}</div>
      <div v-if="stock <= 2" id="preca">Warn</div>
      <div v-else id="save">Save</div>
    </div>
  </div>
</template>


<script setup>
import {defineProps} from 'vue'

defineProps({
  nombre:{
    type: String,
  },
  stock:{
    type: Number,
  }
})

</script>

<style scoped>

.app{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 80%;
  border-radius: 10px;
}
#preca{
  background-color: #feeaeb;
  color: red;
  padding: 0px 20px 0px 20px;
  border-radius: 10px;
}

#save{
  background-color: #eaf7e8;
  color: green;
  padding: 0px 20px 0px 20px;
  border-radius: 10px;

}
.title img{
  width: 35px;
}
span{
  color: silver;
}
.table{
  display: flex;
  justify-content: space-between;
}

</style>