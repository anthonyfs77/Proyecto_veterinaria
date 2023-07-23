<template>
    <div class="vista">
        <div class="panel">
            <div class="cards">
                <div class="top-menu">
                    <h1>Dasboard</h1>
                </div>
                <div class="estadisticas">
                    <EstadisticCard />
                    <EstadisticCard />
                    <EstadisticCard />
                </div>
            </div>
            
            <div class="tabla">
                <h1>Recent orders</h1>
                <TablaComp />
            </div>
        </div>

        <div class="right">
            <div class="notificaciones">
                <div class="cont">
                    <Notificaciones class="not" />
                    <Notificaciones class="not" />
                </div>
            </div>
            <div class="ordenes-container">
                <InfoCard />
                <InfoCard />
                <AddProduct  />
            </div>
        </div>
    </div>
</template>

<script setup>

import AddProduct from '../../components/Managment/AddProduct.vue'
import EstadisticCard from '../../components/Managment/EstadisticCard.vue'
import InfoCard from '../../components/Managment/InfoCard.vue'
import Notificaciones from '../../components/Managment/Notificaciones.vue'
import TablaComp from '../../components/Managment/TablaComp.vue'



</script>


<style scoped>
.cont {
    margin-bottom: 10px;
    margin-top: 0px;
    background: #fff;
    padding: 1.2rem;
    border-radius: 0rem 0rem 2rem 2rem;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    transition: all 300ms ease;
    max-width: 25em;
}

.cards {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, minmax(2fr, 1fr));
    grid-gap: 10px;
}

.panel {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;
}

.estadisticas {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.vista {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 2.2fr 0.5fr;
    gap: 10px;
    justify-items: stretch;
    align-items: stretch;
    width: 100%;
    height: 100vh;
}

.right {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;
}

.not {
    position: relative;
}

.ordenes-container{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

h1{
    font-size: 30px;
}

</style>

