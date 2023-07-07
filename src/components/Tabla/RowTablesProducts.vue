<template>
    <div class="app">
      <div class="column">
        <p>collar</p>
        <p>12093</p>
        <p>49 $</p>
        <p>29 $</p>
        <p>4 $</p>
        <div type="button" class="btn btn-success">Stock</div>
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

  }
  
  .btn-danger {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Comfortaa', cursive;
    border-radius: 0.6rem;
    background-color: rgb(223, 53, 53);
    color: white;
    width: 7em;
    height: 1.5em;
  }
  
  .btn-success {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Comfortaa', cursive;
    border-radius: 0.6rem;
    background-color: green;
    color: white;
    width: 5em;
    height: 1.5em;
  }
  
  p {
    display: flex;
    height: 40px;
    align-items: center;
    
  }
  </style>
  