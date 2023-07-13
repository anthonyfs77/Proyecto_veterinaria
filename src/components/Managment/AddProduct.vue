<template>
    <div class="right">
      <div class="sales-analytics">
        <div class="item add-product">
          <div>
            <span class="material-symbols-outlined">
              add
            </span>
            <h3>Add product</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  
  .right .sales-analytics {
    margin-top: 2rem;
  }
  
  .right .sales-analytics h2 {
    margin-bottom: 1.0rem;
  }
  
  .right .sales-analytics .item {
    background: #fff;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.7rem;
    padding: 1.4rem 1.8rem;
    border-radius: 2rem;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    transition: all 300ms ease;
    width: 24em;
    min-width: 24em;

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
  
  .right .sales-analytics .item.offline .icon {
    background: #ff7782;
  }
  
  .right .sales-analytics .item.customers .icon {
    background: #41f1b6;
  }
  
  .right .sales-analytics .add-product {
    background-color: transparent;
    border: 2px dashed #7380ec;
    color: #7380ec;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .right .sales-analytics .add-product div {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  h3{
    font-size: 20px;
  }
  
  </style>