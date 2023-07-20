<template>
    <main>
      <div class="insights">
        <div class="sales">
          <span class="material-symbols-outlined">
            analytics
          </span>
          <div class="middle">
            <div class="left">
              <h3>Total sales</h3>
              <h1>$25,024</h1>
            </div>
            <div class="progress">
              <svg>
                <circle cx='38' cy='38' r="38"></circle>
              </svg>
              <div class="number">
                <p>Ejemplo</p>
              </div>
            </div>
          </div>
          <small class="text-muted">last 24 hours</small>
        </div>
      </div>
    </main>
  </template>
  
  <style scoped>
  /*=====================Carta de estadistica=======================00*/
  main{
    width: 32%;
    margin-left: 10px;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    appearance: none;
    border: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }
  
  h1,h3,p{
    font-family: 'Comfortaa', cursive;
  
  }
  
  h1 {
    font-weight: 800;
    font-size: 1.8rem;
  }
  
  
  h3 {
    font-size: 0.87;
  }
  
  
  p {
    color: #677483;
  }
  
  
  .text-muted {
    color: #7d8da1;
  
  }
  
  /*----------------MAIN--------------*/
  main .insights>div {
    background: #fff;
    padding: 1rem;
    border-radius: 2rem;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    transition: all 300ms ease;
    width: 100%;
    margin-right: 1em;
  }
  
  main .insights>div:hover {
    box-shadow: none;
  }
  
  main .insights>div span {
    background: #ffd800;
    padding: 0.5rem;
    border-radius: 50%;
    color: #fff;
    font-size: 2rem;
  }
  
  
  
  
  main .insights>div .middle {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  main .insights h3 {
    margin: 1rem 0 0.6rem;
    font-size: 1rem;
  }
  
  main .insights .progress {
    position: relative;
    width: 92px;
    height: 92px;
    border-radius: 50%;
  }
  
  main .insights svg {
    width: 7rem;
    height: 7rem;
  }
  
  main .insights svg circle {
    fill: none;
    stroke: #7380ec;
    stroke-width: 14;
    stroke-linecap: round;
    transform: translate(5px, 5px);
    stroke-dasharray: 110;
    stroke-dashoffset: 92;
  }
  
  main .insights .sales svg circle {
    /*Imagen de stadistica*/
    stroke-dashoffset: -30;
    stroke-dasharray: 200;
  }
  
  main .insights .progress .number {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  main .insights small {
    margin-top: 1.3rem;
    display: block;
  }
  </style>