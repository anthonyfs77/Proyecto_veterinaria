<template>
    <RouterLink :to="{name: 'AgregarProducto'}" class="custom-link">
    <button class="button" type="button">
        <span class="button__text">Add Item</span>
        <span class="button__icon"><svg class="svg" fill="none" height="24" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <line x1="12" x2="12" y1="5" y2="19"></line>
                <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg></span>
    </button>
</RouterLink>
</template>


<style scoped>

.button {
    position: relative;
    width: 150px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    border: none;
    box-shadow: 0 0 1em #00000013;
}

.button,
.button__icon,
.button__text {
    transition: all 0.3s;
}

.button .button__text {
    transform: translateX(22px);
    color: #999999;
    font-weight: 600;
}

.button .button__icon {
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button .svg {
    width: 20px;
}

.button:hover {
    box-shadow: 0 0 1em #00000013;
}

.button:hover .button__text {
    color: transparent;
}

.button:hover .button__icon {
    width: 148px;
    transform: translateX(0);
}

.button:active {
    transform: translate(3px, 3px);
    box-shadow: 0 0 1em #00000013;
}
</style>