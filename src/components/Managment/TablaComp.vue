<template>
    <main>
    <div class="recent-orders">
              <br><br>
              <div class="table">
                      <div class="headerTable">
                          <div>Nombre producto</div>
                          <div>Cantiddad</div>
                          <div>Precio total</div>
                          <div>Hora</div>
                          
                      </div>
                  <div class="cont-table">
                        <recent class="rec"/>
                        <recent class="rec"/>
                  </div>
              </div>
              <router-link :to="{name: 'productos'}">Show all</router-link>
          </div>
        </main>
  </template>
  
  <script setup>
  import recent from '../../components/tabla/RowTablesRencent.vue'
  
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
  

  
  
  /*=================Tabla==================*/

  main .recent-orders{
      margin-top: 2rem;
  }
  
  main .recent-orders h2{
      margin-bottom: 0.8rem;
  }
   .table{
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
  
  table{
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

  

.headerTable {
    display: flex;
    justify-content: space-around;
    margin-top: 3em;
    margin-bottom: 2em;

}
  </style>