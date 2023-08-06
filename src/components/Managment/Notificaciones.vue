<template>
    <div class="right">
        <div class="recent-updates">
            <div class="updates">
                <!--Carta de reciente individial-->
                <div class="update">
                    <div class="profile-photo">
                      <span class="material-symbols-outlined">receipt_long</span>
                    </div>
                    <div class="message">
                        <p>{{fecha}}</p>
                        <p>{{descripcion}}</p>                  
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  

<script setup>
import {defineProps} from 'vue'

defineProps({
  fecha:{
    type:String,
  },
descripcion: {
  type:String,
}
})


</script>
  
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
    width: 100%;
  }
  
  .right .recent-updates .updates:hover{
    box-shadow: none;
  }
  
  .right .recent-updates .updates .update{
    display: grid;
    grid-template-columns: 2.5rem auto;
    gap: 1rem;
  }

  span{
    color: red;
  }

  .message p:first-child{
    font-weight: 600;
  }
  
  </style>