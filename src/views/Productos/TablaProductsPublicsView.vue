<template>
    <div class="app">
        <div class="header">
            <router-link :to="{name: 'publicos'}">
                <h3>
                    <span class="material-symbols-outlined">dynamic_form</span>
                    <strong>Productos publicos</strong>
                </h3>
            </router-link>

            <router-link :to="{name: 'internos'}">
                <h3>
                    <span class="material-symbols-outlined">trending_up</span>
                    Productos internos
                </h3>
            </router-link>

            <router-link :to="{name: 'apartados'}">
                <h3>
                    <span class="material-symbols-outlined">query_stats</span>
                    Apartados
                </h3>
            </router-link>
        </div>
        <div class="table">
            <div class="headerTable">
                <h4>Nombre</h4>
                <h4>Stock</h4>
                <h4>Precio v</h4>
                <h4>Precio c</h4>
                <h4>IVA</h4>
                <h4>Status</h4>
            </div>
            <div class="cont-table">
                <div class="fila">
                    <Rows />
                </div>
                <div class="fila">
                    <Rows />
                </div>
                <div class="fila">
                    <Rows />
                </div>
                <div class="fila">
                    <Rows />
                </div>
                <div class="fila">
                    <Rows />
                </div>
                <div class="fila">
                    <Rows />
                </div>
                <div class="fila">
                    <Rows />
                </div>
                <div class="fila">
                    <Rows />
                </div>
                <div class="fila">
                    <Rows />
                </div>
                <div class="fila">
                    <Rows />
                </div>
                <div class="fila">
                    <Rows />
                </div>
                <div class="fila">
                    <Rows />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Rows from '/proyecto_veterinaria/proyecto/veterinaria/src/components/Tabla/RowTablesProducts.vue'; 
</script>

<style scoped>
.headerTable {

    display: flex;
    justify-content: space-around;
    margin-top: 3em;
    margin-bottom: 2em;
}



span {
    color: #ffd800;
}

.app {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 1fr 5fr;
    gap: 0px 0px;
    width: 100%;
    height: 100vh;
}


.header {
    display: flex;
    justify-content: center;
    gap: 7em;
    border-bottom: 1px solid rgba(132, 139, 200, 0.18);
    margin-top: 3em;
}

h4 {
    font-size: 20px;
    cursor: pointer;

}


h3 {
    font-family: 'Comfortaa', cursive;
    font-size: 1.3em;
    color: #c2c5ce;
    margin-bottom: 1em;
    cursor: pointer;
}

strong {
    color: #818694;
    border-bottom: 3px solid #ffd800;
}
</style>
