<template>
    <div class="container">
      <div>
        <div class="color">
      <div class="titulo">
              <span class="material-symbols-outlined"  style="font-size: 50px;">
                        sound_detection_dog_barking
                </span>
      <div>Proveedores</div>  
    </div>
  </div>
                
                <div class="container2">
                       <!-- Lista de proveedores -->
                   <ul class="mt-5">
                      <li v-for="proveedor in proveedores" :key="proveedor.id" class="mb-2">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">{{ proveedor.nombre }}</h5>
                            <br>
                                <p class="card-text">{{ proveedor.direccion }}</p>
                                <br>
                                <p class="card-text">{{ proveedor.telefono }}</p>
                          </div>
                         </div>
                      </li>
                   </ul>
                </div> 
              </div> 


              <div>
                <div class="color">
                 <div class="titulo">
                    <span class="material-symbols-outlined"  style="font-size: 50px;">
                        sound_detection_dog_barking
                    </span>
                    <div>Añadir proveedor</div>  
                  </div> 
                </div>
                    <div class="container2">
                       <!-- Formulario para agregar un nuevo proveedor -->
                        <form @submit.prevent="agregarProveedor" class="mt-4">
                          <div class="form-group">
                             <label for="nombre">Nombre:</label>
                              <input type="text" id="nombre" v-model="nuevoProveedor.nombre" required class="form-control" autocomplete="off">
                          </div>
                          <br>
                          <br>
                          <div class="form-group">
                             <label for="direccion">Dirección:</label>
                             <input type="text" id="direccion" v-model="nuevoProveedor.direccion" class="form-control" autocomplete="off">
                          </div>
                          <br>
                          <br>
                        
                          <div class="form-group">
                           <label for="direccion">telefono:</label>
                           <input type="text" id="telefono" v-model="nuevoProveedor.telefono" class="form-control" autocomplete="off">
                          </div>
                          <br>  
                          <button type="submit" class="btn btn-primary">Agregar Proveedor</button>
                        </form>
                    </div>   
              </div>
          

  
      <!-- Formulario para agregar un nuevo proveedor -->
      
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';

const proveedores = ref([
  { id: 1, nombre: "Amazon", direccion: "Tienda en línea", telefono: "8745963582" },
  { id: 2, nombre: "Hábitat Laguna", direccion: "Blvrd Independencia 109 Ote, Los Ángeles, 27140 Torreón, Coah.", telefono: "871 713 0959" },
]);

const nuevoProveedor = ref({
  nombre: "",
  direccion: "",
  telefono: "",
});

const agregarProveedor = () => {
  proveedores.value.push({
    id: Date.now(),
    nombre: nuevoProveedor.value.nombre,
    direccion: nuevoProveedor.value.direccion,
    telefono: nuevoProveedor.value.telefono,
  });

  nuevoProveedor.value.nombre = "";
  nuevoProveedor.value.direccion = "";
  nuevoProveedor.value.telefono = "";
};
</script>
  
  <style scoped>
  
  *{
    padding: 0%;
    margin:0%
  }
  .container{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 1000vh ;
  height: 650px;
  padding:0%;
  margin: 0%;

  }
  .container2{
    display: flex;
    flex-direction: column;
    justify-content:start;
    align-items: start;
    
    margin: 20px;
    widows: 500px;
    height: 500px;
  }
  
  .titulo{
  display: flex;
  justify-content: start;
  flex-direction: row;
  margin: 10px;
  font-size: 35px;
  padding: 20px;
  }
  .color{
    background-color: #fdb720;
    width: 672px
  }
  .card{
    width: 300px;
    height: 150px;
    margin-bottom: 30px;
    border: 2px solid #292b29;
    
  }
  button{
    position: absolute;
    left: 70%;
    top: 90%;
    transform: translate(-50%, -50%);
    height: 35px;
    background-color: #fdb720;
    border: 1px solid #0b0c0b;
    color:#0b0c0b;
  }
  label{
    font-size:25px;
  }
 input{
  width: 400px;
  height: 50px;
  border: 2px solid #0b0c0b; /* Borde de tamaño 2px y color verde (#00ff00) */
  padding: 8px;
 }
  </style>
  
  