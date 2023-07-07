<template>
    <div class="right">
        <div class="recent-updates">
            <div class="updates">
                <!--Carta de reciente individial-->
                <div class="update">
                    <div class="profile-photo">
                        <span class="material-symbols-outlined">person</span>
                    </div>
                    <div class="message">
                        <p><b>Usuario</b></p>
                        <p>descripcion</p>
                        <!--Hora de realizacion-->
                        <small class="text-muted">Hace 2 minutos</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  
  <style scoped>

  .updates{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .right .recent-updates .updates{
    margin-bottom: 10px;
    margin-top: 10px;
    background: #fff;
    padding: 1.2rem;
    border-radius:  2rem;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    transition: all 300ms ease;
    max-width: 25em;
  }
  
  .right .recent-updates .updates:hover{
    box-shadow: none;
  }
  
  .right .recent-updates .updates .update{
    display: grid;
    grid-template-columns: 2.5rem auto;
    gap: 1rem;
  }
  
  </style>