<template>
    <div class="container-fluid">
        <div class="productos">
            <div class="title">
                <p class="titulo">Manage Products</p>
            </div>
            <div class="prod">
                <div class="cont-productos">
                    <producto name="prod1" precio="39200" img="" cant="35" />
                    <producto name="prod1" precio="39200" img="" cant="35" />
                    <producto name="prod1" precio="39200" img="" cant="35" />
                    <producto name="prod1" precio="39200" img="" cant="35" />
                    <producto name="prod1" precio="39200" img="" cant="35" />
                    <producto name="prod1" precio="39200" img="" cant="35" />
                </div>

            </div>
        </div>
        <div class="izquierdo">

            <div class="seccion">
                <div class="titulo">
                    <p class="sec-titulo">Estadisticas de productos</p>
                </div>
                <div class="cuerpo">
                    <div class="tiket">
                        <div class="precios">
                            <div class="total-orders">
                                <p>Cantidad de productos:</p>
                                <h4>32</h4>
                            </div>
                            <div class="total-orders">
                                <p>Subtotal <span>-</span> iva:</p>
                                <h4><span>$</span>3092</h4>
                            </div>
                        </div>
                        <div class="total-orders">
                            <p>Precio total</p>
                            <h4><span>$</span>4092</h4>
                        </div>
                    </div>
                    <div class="btns">
                        <btn class="bt" title="Transfer..."/>
                        <btn class="bt" title="Efectivo"/>   
                        <btn id="black" title="Terminar"/>
                    </div>
                </div>
            </div>

            <div class="opciones">
                <div class="status">
                    <div class="radio-inputs">
                        <label class="radio">
                            <input type="radio" name="radio" checked="">
                            <span class="name">Pagado</span>
                        </label>
                        <label class="radio">
                            <input type="radio" name="radio">
                            <span class="name">Pendiente</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import producto from '../../components/compras/RowProdCompras.vue'
import btn from '../../components/controlesindividuales/BotonConEstilo.vue'
</script>

<style scoped>
/*  GENERAL */
.container-fluid {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1.1fr 0.5fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
        ". .";
}

h4 {
    font-size: 20px;
}

/*  BODY */
.izquierdo {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1.1fr;
    grid-template-rows: 1.6fr 0.4fr;
    gap: 0px 0px;
    grid-template-areas:
        "."
        ".";
}

.productos {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1.1fr;
    grid-template-rows: 0.2fr 1.8fr;
    gap: 0px 0px;
    grid-template-areas:
        "."
        ".";
}

.title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(132, 139, 200, 0.18);
    margin: 20px 0px 20px 0px;
}

.prod {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.cont-productos {
    width: 90%;
    height: 90%;
}

.titulo {
    font-size: 20px;
}


/* IZQUIERDO */
.izquierdo {
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
}

.btns{    
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#black{
    background-color: black;
    color: white;
}

.seccion {
    border-bottom: 1px solid rgba(132, 139, 200, 0.18);
}

.sec-titulo {
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
}


.cuerpo {
    width: 100%;
    height: 86%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.tiket {
    width: 80%;
    height: 70%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

}

.total-orders {
    display: flex;
    justify-content: space-between;
}

/* BTNS ELECION */

.radio-inputs {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    border-radius: 0.5rem;
    background-color: #EEE;
    box-sizing: border-box;
    box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
    padding: 0.25rem;
    width: 300px;
    font-size: 14px;
}

.radio-inputs .radio {
    flex: 1 1 auto;
    text-align: center;
}

.radio-inputs .radio input {
    display: none;
}

.radio-inputs .radio .name {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: none;
    padding: .5rem 0;
    color: rgba(51, 65, 85, 1);
    transition: all .15s ease-in-out;
}

.radio-inputs .radio input:checked+.name {
    background-color: #fff;
    font-weight: 600;
}

.opciones{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>