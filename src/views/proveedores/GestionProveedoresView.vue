<template>
    <div class="container">
      <div class="titulo">
              <span class="material-symbols-outlined"  style="font-size: 50px;">
                        sound_detection_dog_barking
                </span>
                <div>proveedores</div>    
                
            </div>
          
    
      <!-- Lista de proveedores -->
      <ul class="mt-5">
        <li v-for="proveedor in proveedores" :key="proveedor.id" class="mb-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ proveedor.nombre }}</h5>
              <p class="card-text">{{ proveedor.direccion }}</p>
              <p class="card-text">{{ proveedor.telefono }}</p>
            </div>
          </div>
        </li>
      </ul>
      <br>
      <br>
      <br>
  
      <!-- Formulario para agregar un nuevo proveedor -->
      <form @submit.prevent="agregarProveedor" class="mt-4">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="nuevoProveedor.nombre" required class="form-control">
        </div>
  
        <div class="form-group">
          <label for="direccion">Dirección:</label>
          <input type="text" id="direccion" v-model="nuevoProveedor.direccion" class="form-control">
        </div>
  
        <div class="form-group">
          <label for="direccion">telefono:</label>
          <input type="text" id="telefono" v-model="nuevoProveedor.telefono" class="form-control">
        </div>
  
        <br>
  
        <button type="submit" class="btn btn-primary">Agregar Proveedor</button>
      </form>
    </div>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.css'
  export default {
    data() {
      return {
        proveedores: [
          { id: 1, nombre: "Proveedor 1", direccion: "Dirección ", telefono: "telefono" },
          { id: 2, nombre: "Proveedor 2", direccion: "Dirección ",telefono: "telefono" },
        ],
        nuevoProveedor: {
          nombre: "",
          direccion: "",
          telefono: "",
        },
      };
    },
    methods: {
      agregarProveedor() {
        this.proveedores.push({
          id: Date.now(),
          nombre: this.nuevoProveedor.nombre,
          direccion: this.nuevoProveedor.direccion,
          telefono: this.nuevoProveedor.telefono,
        });
  
        this.nuevoProveedor.nombre = "";
        this.nuevoProveedor.direccion = "";
        this.nuevoProveedor.telefono = "";
      },
    },
  };
  </script>
  
  <style scoped>
  
  *{
    padding: 0%;
    margin:0%
  }
  .container{
  display: flex;
  justify-content: start;
  flex-direction: column;
  
  width: 900vh ;
  height: 650px;
  padding:0%;
  margin: 0%;
  }
  
  .titulo{
  display: flex;
  justify-content: start;
  flex-direction: row;
  margin: 20px;
  font-size: 35px;
  padding: 15px;
  }
  </style>
  
  