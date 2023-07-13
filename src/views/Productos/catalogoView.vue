<template>
    <div class="container">
      <h1>Catálogo de productos</h1>
      <br>
      <br>
      <div class="row">
        <div class="col-lg-4" v-for="producto in productos" :key="producto.id">
          <div class="card card-small">
            <img :src="producto.imagen"  class="card-img-top custom-image" :alt="producto.nombre">
            <div class="card-body">
              <h5 class="card-title">{{ producto.nombre }}</h5>
              <p class="card-text">{{ producto.descripcion }}</p>
              <p class="card-text">Precio: {{ producto.precio }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const productos = [
    {
      id: 1,
      nombre: 'Cama para Perro',
      descripcion: 'Resistente, Confortable, con Relleno Suave, Medidas y Color a Elegir (Small, Marino/Gris)',
      precio: 299,
      imagen: 'https://m.media-amazon.com/images/I/61rl+xIe2HL._AC_SX679_.jpg'
    },
    {
      id: 2,
      nombre: 'Jaula para Mascota',
      descripcion: ' hasta 5kg, IATA, Resistente, de fácil transportación',
      precio: 399.50,
      imagen: 'https://m.media-amazon.com/images/I/41LbL2i91kL._AC_.jpg'
    },
    {
      id: 3,
      nombre: 'Producto 3',
      descripcion: 'Descripción del producto 3',
      precio: 30,
      imagen: 'https://via.placeholder.com/300x200'
    }
  ];
  </script>
  
  <style>
 h1{
    margin: 20px;
 }
 .card.card-small {
  max-width: 300px; 
  max-height: 500px;
}
.custom-image {
  width: 200px; 
  height: 150px; 
}
  </style>
  