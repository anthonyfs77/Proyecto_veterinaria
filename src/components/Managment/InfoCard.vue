<template>
    <div class="right">
      <div class="sales-analytics">
        <!--Item indivudual-->
        <div class="item online">
          <div class="icon">
            <span class="material-symbols-outlined">
              shopping_cart
            </span>
          </div>
          <div class="right">
            <div class="info">
              <h3>Solo ordenes</h3>
              <small class="text-muted">Ultimas 24 horas</small>
            </div>
            <h5 class="succes">+39%</h5>
            <h3>3820</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  /*=====================Sales analytics=======================00*/
  
 h3,h5{
    font-size: 1.2rem;
 }

  
  .right .sales-analytics .item {
    background: #fff;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.7rem;
    padding: 1.4rem 1.8rem;
    border-radius: 1.2rem;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    transition: all 300ms ease;
    height: 100px;
    width: 24em;
    max-width: 25em;
  }
  
  .right .sales-analytics .item:hover {
    box-shadow: none;
  }
  
  .right .sales-analytics .item .right {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin: 0;
    width: 100%;
  }
  
  .right .sales-analytics .item .icon {
    padding: 0.6rem;
    color: #fff;
    border-radius: 50%;
    background: #7380ec;
    display: flex;
  }
  

  
  .right .sales-analytics  {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  
  </style>