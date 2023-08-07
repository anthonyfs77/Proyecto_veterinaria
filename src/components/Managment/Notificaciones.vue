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
    background: #fff;
    padding: 1.2rem;
    border-radius:  1rem;
    box-shadow: 0 1rem 1rem rgba(132, 139, 200, 0.18);
    transition: all 300ms ease;
    width: 100%;
    cursor: pointer;
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
    color: blue;
  }

  .message p:first-child{
    font-weight: 600;
  }
  
  </style>