<template>
    <div class="app">
      <div class="column">
        <p>collar</p>
        <p>12093</p>
        <p>49 $</p>
        <p>29 $</p>
        <p id="stock">Stock</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .app {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(132, 139, 200, 0.18);
    color: #677483;
    max-height: 3em !important;
  }
  
  .column {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

  }
  #stock{
    color: green ;
  }  
  p {
    display: flex;
    height: 40px;
    align-items: center;
    
  }
  </style>
  