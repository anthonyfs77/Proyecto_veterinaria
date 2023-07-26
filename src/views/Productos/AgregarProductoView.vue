<template>
    <div class="container">
      <div class="titulo">
              <span class="material-symbols-outlined"  style="font-size: 50px;">
                        sound_detection_dog_barking
                </span>
                <div>Agregar Producto</div>    
                
            </div>
          

  
      <!-- Formulario para agregar un nuevo producto -->
      <form @submit.prevent="agregarProducto" class="mt-4">
        <div class="form-group">
          <label for="nombre">Nombre del producto:</label>
          <input type="text" id="nombre" v-model="nuevoProducto.nombre" required class="form-control">
        </div>
  
        <div class="form-group">
          <label for="direccion">Descripcion del producto:</label>
          <input type="text" id="descripcion" v-model="nuevoProducto.descripcion" class="form-control">
        </div>
  
        <div class="form-group">
          <label for="direccion">cantidad adquirida:</label>
          <input type="text" id="cantidad" v-model="nuevoProducto.cantidad" class="form-control">
        </div>

        <div class="form-group">
          <label for="direccion">Precio de venta:</label>
          <input type="text" id="PrecioVenta" v-model="nuevoProducto.PrecioVenta" class="form-control">
        </div>
  
        <div class="form-group">
          <label for="direccion">Precio de compra</label>
          <input type="text" id="PrecioCompra" v-model="nuevoProducto.PrecioCompra" class="form-control">
        </div>

        <div class="form-group">
          <label for="direccion">Categoria del producto:</label>
          <input type="text" id="Categoria" v-model="nuevoProducto.categoria" class="form-control">
        </div>
        
        <div class="form-group">
          <label for="direccion">Tipo de producto:</label>
          <input type="text" id="Tipo" v-model="nuevoProducto.Tipo" class="form-control">
        </div>

        <div class="form-group">
          <label for="direccion">Proveedor del producto:</label>
          <input type="text" id="Proveedor" v-model="nuevoProducto.Proveedor" class="form-control">
        </div>
  
        <br>
  
        <button type="submit" class="btn btn-primary">Agregar Producto</button>
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
        nuevoProducto: {
          nombre: "",
          descripcion: "",
          cantidad: "",
          PrecioVenta: "",
          PrecioCompra: "",
          categoria: "",
          Tipo: "",
          Proveedor: "",
        },
      };
    },
    methods: {
      agregarProducto() {
        this.productos.push({
          id: Date.now(),
          nombre: this.nuevoProducto.nombre,
          descripcion: this.nuevoProducto.descripcion,
          cantidad: this.nuevoProducto.cantidad,
          PrecioVenta: this.nuevoProducto.PrecioVenta,
          PrecioCompra: this.nuevoProducto.PrecioCompra,
          categoria: this.nuevoProducto.categoria,
          Tipo: this.nuevoProducto.Tipo,
          Proveedor: this.nuevoProducto.Proveedor
        });
  
        this.nuevoProducto.nombre = "";
        this.nuevoProducto.descripcion = "";
        this.nuevoProducto.cantidad = "";
        this.nuevoProducto.PrecioVenta = "";
        this.nuevoProducto.PrecioCompra = "";
        this.nuevoProducto.categoria = "";
        this.nuevoProducto.Tipo = "";
        this.nuevoProducto.Proveedor = "";
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
  
  