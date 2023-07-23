<template>
    <div class="containerNorm">
        <aside>
            <div class="top">
                <div class="logo">
                    <span class="material-symbols-outlined">sound_detection_dog_barking</span>
                    <h2>Veterinaria</h2>
                </div>
                <div class="close" id="close-btn">
                    <span class="material-symbols-outlined">close</span>
                </div>
            </div>
            <div class="sidebar">
                <router-link :to="{ name: 'control'}">
                    <span class="material-symbols-outlined">person</span>
                    <h4>Dashboard</h4>
                </router-link>
                <router-link :to="{name: 'productos'}">
                    <span class="material-symbols-outlined">person</span>
                    <h4>Productos</h4>
                </router-link>
                    <router-link :to="{name: 'GestionProveedores'}">
                    <span class="material-symbols-outlined">receipt_long</span>
                    <h4>Proveedores</h4>
                </router-link>
                <a href="#">
                    <span class="material-symbols-outlined">insights</span>
                    <h4>Secc3</h4>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">mail_outline</span>
                    <h4>Secc4</h4>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">summarize</span>
                    <select  v-model="selectedOption" class="sidebar-select"  @change="onReportChange">
                    <option value="" disabled selected>Reportes</option>
                    <option value="reportinvetnariointerno">Invtentario interno.</option>
                    <option value="reportinventario">Inventario.</option>
                    <option value="reportehistorialmedico">Historial medico.</option>
                    <option value="reportconsultasrealizadas">Consultas realizadas.</option>
                    <option value="reportconsultasrechazadas">Consultas rechazadas.</option>
                    <option value="reportordenescompra">Ordenes de compra.</option>
                    <option value="reporteventas">Productos vendidos.</option>
                    </select>
                </a>
                <router-link :to="{name: 'principalMain'}">
                    <span class="material-symbols-outlined">logout</span>
                    <h4>Salir</h4>
                </router-link>
            </div>
        </aside>  
    </div>
</template>



<script setup>
import { ref } from 'vue';


import { useRouter } from 'vue-router';
const router = useRouter();

const selectedOption = ref ('');

const resetSelect = () => {
    selectedOption.value = '';
}

const onReportChange = (event) => {
    const selectedReport = event.target.value;
    router.push({ name: selectedReport }).then(() => {
        resetSelect();
    })
}

</script>


 
<style scoped>

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




h1,
h2,
h4,
h4,
h5,
h6, 
select{
    font-family: 'Comfortaa', cursive;
}

html{
    font-size: 14px;
}

body {
    width: 100vw;
    height: 100vh;
    font-size: 0.88rem;
    background-color: #f6f6f9;
    user-select: none;
    overflow-x: hidden;
    color: #363949;
}
option{
    background-color: white;
}
a {
    color: #363949;
}

img {
    display: block;
    width: 100%;
}

h1 {
    font-weight: 800;
    font-size: 1.8rem;
}

h2 {
    font-size: 1.4;
}

h4 {
    font-size: 1rem;
}

h5 {
    font-size: 0.77rem;
}

smal {
    font-size: 0.75rem;
}

p {
    color: #677483;
}

b {
    color: #363949;
}

.containerNorm {
    position: relative;
  display: grid;
  width: 21.8em;
  margin: 0 auto;
  gap: 1.8rem;
  grid-template-columns: 15rem 1fr;
  position: fixed;
  
  margin-left: -24px;

}


aside {
    height: 100vh;
}

aside .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.4rem;
}

aside .logo {
    display: flex;
    gap: 0.8rem;
}

aside .logo img {
    width: 2rem;
    height: 2rem;
}

aside .close {
    display: none;
}

/*======================side bar===========================*/
aside .sidebar {
    display: flex;
    flex-direction: column;
    height: 86vh;
    position: relative;
    top: 3rem;
}

aside .sidebar a {
    display: flex;
    color: black;
    margin-left: 2rem;
    gap: 1rem;
    align-items: center;
    position: relative;
    height: 3.7rem;
    transition: all 300ms ease;
}

aside .sidebar a span {
    font-size: 1.6rem;
    transition: all 300ms ease;
}

aside .sidebar a:last-child {
    position: absolute;
    bottom: 2rem;
    width: 100%;
}

aside .sidebar a:hover {
    color: #7380ec;
}

aside .sidebar a:hover span {
    margin-left: 1rem;
}

aside .sidebar {
    color: #fff;
    padding: 2px 24px;
    font-size: 11px;
    border-radius: 0.4rem;
}

.sidebar-select {
    display: flex;
    color: black;
    gap: 1rem;
    align-items: center;
    position: relative;
    height: 3.7rem;
    transition: all 300ms ease;
    font-size: 16px;
}

.sidebar-select:hover {
    color: #7380ec;
}

</style>
