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
                <AddProduct />
            </div>
        </div>
    </div>
</template>

<script setup>
import AddProduct from '/proyecto_veterinaria/proyecto/veterinaria/src/components/Managment/AddProduct.vue'
import EstadisticCard from '/proyecto_veterinaria/proyecto/veterinaria/src/components/Managment/EstadisticCard.vue'
import InfoCard from '/proyecto_veterinaria/proyecto/veterinaria/src/components/Managment/InfoCard.vue'
import Notificaciones from '/proyecto_veterinaria/proyecto/veterinaria/src/components/Managment/Notificaciones.vue'
import TablaComp from '/proyecto_veterinaria/proyecto/veterinaria/src/components/Managment/TablaComp.vue'
</script>


<style scoped>
.cont {
    margin-bottom: 10px;
    margin-top: 10px;
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
    grid-template-rows: repeat(0, 2fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.panel {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(0, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.estadisticas {
    display: flex;
}



.vista {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    grid-template-rows: 3fr;
    justify-items: stretch;
    align-items: stretch;

    width: 100%;
    height: 100vh;
}

.right {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(0, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}



.not {
    position: relative;
}
</style>