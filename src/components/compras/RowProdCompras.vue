<template>
    <div class="app">
        <div class="column">
            <p>{{ img }}</p>
            <p>{{ name }}</p>
            <p>{{ precio }} <span>$</span></p>
            <p>{{ cant }}</p>
            <div class="btns">
                <button @click="mandarTrue">
                    <span class="material-symbols-outlined">
                        add
                    </span>
                </button>
                <button @click="mandarFalse">
                    <span class="material-symbols-outlined">
                        remove
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>
  
  
<script setup>
import { defineProps, ref } from 'vue';
import { StorePublics } from '@/stores/counter.js'


defineProps({
    name: { type: String },
    precio: { type: Number }, 
    img: { type: String }, 
    cant:{ type: Number}
})

const store = StorePublics();
var numero = ref(0)


const mandarTrue =  () =>{
    numero.value ++;
    store.setVariable(numero)
    console.log(store)
}

const mandarFalse =  () =>{
    numero.value --;
    store.setVariable(numero)
    console.log(store)
}


</script>
    
<style scoped>  
.app {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid rgba(132, 139, 200, 0.18);
      color: #677483;
      max-height: 3em !important;
      margin-top: 30px;
  }

  .column {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;

  }

  p {
      display: flex;
      height: 40px;
      align-items: center;
      width: 100%;
      margin-left: 100px;
      text-align: center;
  }

  .column p:first-child{
    min-width: 0px;
    width: 300px;
    background-color: #fd1853;
    border-radius: 50%;
    background-size: contain;
  }


  /* BOTONES */
  .btns{
    display: flex;
    gap: 10px;
  }

  .btns button:first-child{
    display: flex;
    border: none;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    background-color: green;
    border-radius: 5px;
    color: white;
  }

  .btns button:last-child{
    display: flex;
    border: none;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    background-color: #fd1853;
    border-radius: 5px;
    color: white;
  }
</style>
    