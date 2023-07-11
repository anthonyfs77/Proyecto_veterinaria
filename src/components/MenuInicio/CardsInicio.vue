<template>
    <div class="cards">
        <div class="top">
            <h5>imagen</h5>
        </div>
        <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime, consequatur expedita odit voluptates,
            amet repellendus provident quod ipsa laudantium, tenetur suscipit eius perspiciatis molestiae culpa veritatis
            veniam praesentium error.
        </div>
    </div>
</template>


<style scoped>
.cards {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 2fr 3fr;
    gap: 0px 0px;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    width: 20em;
    border-radius: 1rem;
    height: 25em;
}

.top{
    border-bottom: 1px solid #f6bb46;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

@media screen and (max-width: 768px) {
    /*====================Small tablets y mobil======================*/
    .cards {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 1fr 2fr;
    width: 100%;
    height: 25em;
}
}


</style>