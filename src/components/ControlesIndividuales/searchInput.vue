<template>
  
  <div class="search">
    <input v-model="nombre" type="text" class="search__input" placeholder="Buscar producto">
    <button class="search__button" @click="fetchData">
      <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
        </svg>
    </button>
  <div class="recomendaciones">
      <div class="producto" v-for="prod in productosBusqueda" :key="prod.id">
       <Row :name="prod.nom_producto" :stock="prod.estado"/>
  </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, watch} from 'vue'
import {useStore} from '@/stores/counter.js'
import Row from '../tabla/ResultadosBusqueda.vue'
var nombre = ref('');
var productos = ref([]);
var productosBusqueda = ref([]);
const store = useStore()
const mostrar = ref(false);

const fetchData = async () => {
  try {
    var response = await axios.post('http://web.backend.com/buscarlimit', { nombre: nombre.value });
    productos.value = response.data.data;
    productosBusqueda.value = response.data.data;
    updateVariable();
    console.log(productos.value);
  } catch (error) {
    console.log(error);
  }
}


const updateVariable = () =>{
  store.setVariable(productos)

}

// Agregar un watcher para la variable "nombre"
watch(nombre, (newValue) => {
  console.log(newValue);
  fetchData()
});

setInterval(() => {
    if (nombre.value === '') {
          productosBusqueda.value = '';
  } else {
    mostrar.value = true;
    productosBusqueda.value = '';
  }
}, 4000);
</script>


<style scoped>
.search {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}
.recomendaciones{
  z-index: 9999;
}
.search__input {
  font-family: inherit;
  font-size: inherit;
  box-shadow: 0 0 1em #00000013;
  border: none;
  color: #646464;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  width: 25em;
  transition: all ease-in-out .5s;
  margin-right: -2rem;
}

.search__input:hover, .search__input:focus {
  box-shadow: 0 0 1em #00000013;
}

.search__input:focus {
  outline: none;
  background-color: #f0eeee;
}

.search__input::-webkit-input-placeholder {
  font-weight: 100;
  color: #ccc;
}

.search__input:focus + .search__button {
    background-color: transparent;
}

.search__button {
  border: none;
  background-color: transparent;
  margin-top: .1em;
}

.search__button:hover {
  cursor: pointer;
}

.search__icon {
  height: 1.3em;
  width: 1.3em;
  fill: #b4b4b4;
}
</style>