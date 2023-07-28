<template>
    <div class="card" v-show="cardShow">
        <span class="material-symbols-outlined">shopping_bag</span>
        <h1>Generar orden de compra</h1>
      <label for="product-type">Tipo de producto:</label>
      <select id="product-type">
        <option value="sale">Producto a venta</option>
        <option value="internal">Producto interno</option>
      </select>
      <br />
      <label for="payment-date">Fecha de pago:</label>
      <input type="date" id="payment-date" />
      <br />
      <label for="product-name">Nombre del producto:</label>
      <input type="text" id="product-name" />
      <br />
      <label for="quantity">Cantidad:</label>
      <input type="number" id="quantity" />
      <br />
      <label for="proveedor">Proveedor:</label>
      <select id="proveedor">
        <option value="sale">Producto a venta</option>
        <option value="internal">Producto interno</option>
      </select>
      <br />
      <label for="unit-price">Precio unitario:</label>
      <input type="number" id="unit-price" />
      <br />
      <label for="total">Total pagado:</label>
      <input type="number" id="total" />
      <br />
      <label for="status">Estado:</label>
      <select id="status">
        <option value="paid">Pagado</option>
        <option value="pending">Pendiente</option>
      </select>
    </div>
    <div class="card2" v-show="card2Show">
        <span class="material-symbols-outlined">shopping_bag</span>
        <h1>Generar orden de compra</h1>
        <h4>Productos internos</h4>
      <label for="product-type">Tipo de producto:</label>
      <select id="product-type">
        <option value="sale">Producto a venta</option>
        <option value="internal">Producto interno</option>
      </select>
      <br />
      <label for="payment-date">Fecha de pago:</label>
      <input type="date" id="payment-date" />
      <br />
      <label for="product-name">Nombre del producto:</label>
      <input type="text" id="product-name" />
      <br />
      <label for="quantity">Cantidad:</label>
      <input type="number" id="quantity" />
      <br />
      <label for="proveedor">Proveedor:</label>
      <select id="proveedor">
        <option value="sale">Producto a venta</option>
        <option value="internal">Producto interno</option>
      </select>
      <br />
      <label for="unit-price">Precio unitario:</label>
      <input type="number" id="unit-price" />
      <br />
      <label for="total">Total pagado:</label>
      <input type="number" id="total" />
      <br />
      <label for="status">Estado:</label>
      <select id="status">
        <option value="paid">Pagado</option>
        <option value="pending">Pendiente</option>
      </select>
    </div>
  </template>
  
  <script setup>
  import {  ref   } from 'vue';
  import axios from 'axios';

  const cardShow = ref(false);
  const card2Show = ref(true);
  </script>
  
  <style scoped>
    .card, .card2 {
        font-family: 'comfortaa';
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
    }
  
    @media (max-width: 600px) {
      .card, .card2 {
        padding: 10px;
        box-sizing: border-box;
        width: 100%;
        height: auto;
        overflow-y: scroll;
      }
    }
  </style>
  