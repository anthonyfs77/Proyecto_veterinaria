<script setup>
  import {  ref, onMounted, watch   } from 'vue';
  import axios from 'axios';
  import btn from '../../components/ControlesIndividuales/BotonAntho.vue'
  import load from '../../components/loaders/loaderPrincipal.vue'
  const tipo = ref(1);
  const loading =ref(false);
  const productos = ref([]);
  const data = ref([]);
  const productosSeleccionados = ref([]);
  const disa = ref(false);



  const emi = defineEmits(['close']);

  const cerra = () =>{
    emi('close')
  }

  const checkCantidad = (producto) => {
  producto.puedeSeleccionar = producto.cantidad > 0;
  if (!producto.puedeSeleccionar && producto.seleccionado) {
    producto.seleccionado = false;
  }
};


  const agregarAlArray = (producto) => {
  if (producto.seleccionado) {
    productosSeleccionados.value.push({
      id: producto.id,
      cantidad: producto.cantidad
      });
  } else {
    const index = productosSeleccionados.value.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      productosSeleccionados.value.splice(index, 1);
    }
  }
  console.log(productosSeleccionados)
};



const sendPostRequest = async () => {
  try {
    const jsonData = {
      ServiceId: orderId.value,
      ProductsItems: data.value,
    };
    const response = await axios.post('http://web.Backend.com/orden/Detalles', jsonData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const obtenerproductos = async () => {
    try {
        const response = await axios.get('http://web.Backend.com/productos/all')
        if (Array.isArray(response.data.data)) {
            productos.value = response.data.data;
        } else {
            productos.value = [response.data.data];
        }
    } catch (error) {
        console.error(error)
    }
}
obtenerproductos();

</script>

<template>  
    <div class="card">
      <transition name="fade">
      <div class="display2" v-if="loading">
        <load v-if=loading class="loader"/>
        <h2>Generando...</h2>
      </div>
      </transition>
      <div class="grilla" v-if=!loading>
        <button class="cerrar" @click="cerra" >X</button>
        <div class="form">
          <h2>Crear Nuevo Servicio</h2>
      <label for="payment-date" >Nombre:</label>
      <input class="search-box" type="text" v-model="nombre"/>
      <br/>
      <label>Descripcion:</label>
      <input class="search-boxx" type="text" v-model="desc"/>
      <br />
      <label>Precio:</label>
      <input type= "number" class="search-box" v-model="precio" >
      <br />
      <label for="status">Tipo de Servicio:</label>
      <select class="search-box" id="1" v-model="tipo">
        <option value="1">Clinico</option>
        <option value="2">Estetico</option>
      </select>
      <br>
        <div class="combo">
          <div class="select" v-for="producto in productos" :key="producto.id">
            <span>{{ producto.id }}</span>
            <span>{{ producto.nom_producto }}</span>
            <input type="number" v-model="producto.cantidad" placeholder="Cantidad" @input="checkCantidad(producto)" />
            <input :disabled="!producto.puedeSeleccionar" type="checkbox" v-model="producto.seleccionado" @change="agregarAlArray(producto)" />
        </div>
      </div>
      <btn v-if=!detallar title="Crear Servicio" @click="generarservicio"/>
      <btn v-if="detallar" title="Cerrar" @click="cerra"/>
      <span v-if="detallar">¡Servicio registrado correctamente!</span>
        </div>
      </div>
    </div>

</template>

<style scoped>

.cerrar{
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 0 2em #00000013;
  grid-column-start: 1;
  grid-row-start: 1;
  border: none;
  background-color: #00000000;
}

.loader{
  position: relative;
    z-index: 105;
    width: 25%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
.display2{
  background-color: rgba(95, 95, 95, 0.4); /* fondo negro semi-transparente */
  height: 100%;
  width: 100%;
  z-index: 103;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.form{
  grid-column-start: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  display: grid;
  row-gap: 8px;  
}
    .grilla{
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 30% 50% 20%;
      grid-template-rows: 10% 70% 20%;
    }
    .card {
      font-family: 'comfortaa';
      display: flex;
      align-items: center;
      justify-content: center;
      height: 90vh;
      overflow-y: auto;
      overflow-x: hidden;
      width: 45%;
      box-shadow: 0 0 2em #00000013;
      border: none;
      border-radius: 20px;
    }
    .card::-webkit-scrollbar {
  width: 10px;
}

.card::-webkit-scrollbar-track {
  background-color: white;
}

.card::-webkit-scrollbar-thumb {
  background: #cfcfcf;
}
  
    @media (max-width: 950px) {
      .card{
        width: 65%;
        height: 80vh;
      }
      .grilla{
        grid-template-columns: 20% 70% 10%;
      }
    }

    .search-box{
    font-family: inherit;
  font-size: inherit;
  box-shadow: 0 0 1em #00000013;
  border: none;
  color: #646464;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  width: 17em;
  transition: all ease-in-out .5s;
  margin-right: -2rem;
  text-align: center;
  }

  .search-boxx{
    font-family: inherit;
  font-size: inherit;
  box-shadow: 0 0 1em #00000013;
  border: none;
  color: #646464;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  width: 17em;
  transition: all ease-in-out .5s;
  margin-right: -2rem;
  text-align: left;
  height: 8vh;
  }
  

  .select{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.combo{
  width: 100%;
  height: 30vh;
  overflow: auto;

}

.combo::-webkit-scrollbar {
  width: 15px;
}

.combo::-webkit-scrollbar-track {
  background-color: white;
}

.combo::-webkit-scrollbar-thumb {
  background: #cfcfcf;
}




</style>