<template>
    <div class="container-fluid">
        <header>
            <headerClient/>
        </header>
        <body>
            
        </body>
    </div>
    <footerClient/>
</template>
<script setup>
import headerClient from '../../../components/cliente/menuComponents/header.vue'
import footerClient from '../../../components/cliente/menuComponents/footer.vue'
</script>

<style scoped>

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

.container-fluid{
    display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 2.2fr; 
  grid-template-rows: 0.3fr 1.7fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "."
    "."; 
    height: 100vh;
}

</style>