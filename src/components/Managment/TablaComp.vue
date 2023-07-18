<template>
    <main>
    <div class="recent-orders">
              <br><br>
              <table>
                  <thead>
                      <tr>
                          <th>Nombre producto</th>
                          <th>Numero producto</th>
                          <th>Precio producto</th>
                          <th>Status producto</th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Producto1</td>
                          <td>2140</td>
                          <td>40$</td>
                          <td class="warning">Vendido</td>
                          <td class="primary">Detalles</td>
                      </tr>
                      <tr>
                          <td>Producto1</td>
                          <td>2140</td>
                          <td>40$</td>
                          <td class="warning">Vendido</td>
                          <td class="primary">Detalles</td>
                      </tr>
                      <tr>
                          <td>Producto1</td>
                          <td>2140</td>
                          <td>40$</td>
                          <td class="warning">Vendido</td>
                          <td class="primary">Detalles</td>
                      </tr>
                      <tr>
                          <td>Producto1</td>
                          <td>2140</td>
                          <td>40$</td>
                          <td class="warning">Vendido</td>
                          <td class="primary">Detalles</td>
                      </tr>
                      <tr>
                          <td>Producto1</td>
                          <td>2140</td>
                          <td>40$</td>
                          <td class="warning">Vendido</td>
                          <td class="primary">Detalles</td>
                      </tr>
                  </tbody>
              </table>
              <router-link :to="{name: 'productos'}">Show all</router-link>
          </div>
        </main>
  </template>
  
  <script setup>
  
  
  </script>
  
  
  
  <style scoped>
  *{
      font-family: 'Comfortaa', cursive;
      margin: 0;
      padding: 0;
      outline: 0;
      appearance: none;
      border: 0;
      text-decoration: none;
      list-style: none;
      box-sizing: border-box;
      }
  
      .primary {
          color: #7380ec;
      }
      .warning{
          color: #ffbb55;
      }
  
  
  
  /*=================Tabla==================*/
  main .recent-orders{
      margin-top: 2rem;
  }
  
  main .recent-orders h2{
      margin-bottom: 0.8rem;
  }
  
  main .recent-orders table{
      background-color: #fff;
      width: 98%;
      border-radius: 2rem;
      padding: 1.8rem;
      text-align: center;
      box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
      transition: all 300ms ease;
  }
  
  main .recent-orders table:hover{
      box-shadow: none;
  }
  
  main table tbody td{
      height: 2.8rem;
      border-bottom: 1px solid rgba(132, 139, 200, 0.18);
      color: #677483;
  }
  
  main table tbody tr:last-child td{
      border: none;
  }
  
  main .recent-orders a{
      text-align: center;
      display: block;
      margin: 1rem auto;
      color:#7380ec;
  }

  .recent-orders h2{
    font-size: 30px;
  }
  
  </style>