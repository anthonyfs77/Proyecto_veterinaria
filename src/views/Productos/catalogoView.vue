<template>
    <div class="container">
      <h1>Catálogo de productos</h1>
      <br>
      <br>
      <div class="row">
        <div class="col-lg-4" v-for="producto in productos" :key="producto.id">
          <div class="card">
            <img :src="producto.imagen" class="card-img-top" :alt="producto.nombre">
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
      nombre: 'Producto 1',
      descripcion: 'Descripción del producto 1',
      precio: 10,
      imagen: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      nombre: 'Producto 2',
      descripcion: 'Descripción del producto 2',
      precio: 20,
      imagen: 'https://via.placeholder.com/300x200'
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
  </style>
  