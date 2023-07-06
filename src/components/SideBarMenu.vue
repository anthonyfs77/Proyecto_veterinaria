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
                <a href="#">
                    <span class="material-symbols-outlined">grid_view</span>
                    <h4>administracion</h4>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">person</span>
                    <h4>Secc1</h4>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">receipt_long</span>
                    <h4>Secc2</h4>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">insights</span>
                    <h4>Secc3</h4>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">mail_outline</span>
                    <h4>Secc4</h4>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">logout</span>
                    <h4>Salir</h4>
                </a>
            </div>
        </aside>
    </div>
</template>
    
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
h6 {
    font-family: 'Comfortaa', cursive;
}

html {
    font-size: 14px;
}

body {
    width: 100vw;
    height: 100vh;
    font-size: 0.88rem;
    background-color: var(--color-background);
    user-select: none;
    overflow-x: hidden;
    color: var(--color-dark);
}

a {
    color: var(--color-dark);
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
    color: var(--color-dark-variant);
}

b {
    color: var(--color-dark);
}

.containerNorm {
    display: grid;
    width: 95%;
    margin: 0 auto;
    gap: 1.8rem;
    grid-template-columns: 14rem auto 23rem;
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
    color: var(--color-info-dark);
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
    color: var(--color-primary);
}

aside .sidebar a:hover span {
    margin-left: 1rem;
}

aside .sidebar {
    background: var(--color-danger);
    color: var(--color-white);
    padding: 2px 10px;
    font-size: 11px;
    border-radius: var(--border-radius-1);
}

:root {
    --color-primary: #7380ec;
    --color-danger: #ff7782;
    
    --color-dark: #363949;
    --color-light: rgba(132, 139, 200, 0.18);
    --color-dark-variant: #677483;
    --color-background: #f6f6f9;
    
    --border-radius-1: 0.4rem;

    --box-shadow: 0 2rem 3rem var(--color-light);
}



/*=============@Media===========*/
@media screen and (max-width: 1200px) {
    .containerNorm {
        width: 94%;
        grid-template-columns: 7rem auto 23rem;
    }

    aside .logo h2 {
        display: none;
    }

    aside .sidebar h4 {
        display: none;
    }

    aside .sidebar a {
        width: 5.6rem;
    }

    aside .sidebar a:last-child {
        position: relative;
        margin-top: 1.8rem;
    }


    main table thead tr th:last-child,
    main table thead tr th:first-child {
        display: none;
    }

    main table tbody tr td:last-child,
    main table tbody tr td:firt-child {
        display: none;
    }
}


/*====================Small tablets y mobil======================*/
@media screen and (max-width: 768px) {

    .containerNorm {
        width: 100%;
        grid-template-columns: 1fr;
    }

    aside .logo {
        margin-left: 1rem;
    }

    aside .logo h2 {
        display: none;
    }

    aside .sidebar h4 {
        display: inline;
    }

    aside .sidebar a {
        width: 100%;
        height: 3.4rem;
    }

    aside .sidebar a:last-child {
        position: absolute;
        bottom: 5rem;
    }

    aside .close {
        display: inline-block;
        cursor: pointer;
    }

    .top {
        position: fixed;
        top: 0;
        left: 0;
        align-items: center;
        padding: 0 0.8rem;
        height: 4.6rem;
        background: var(--color-white);
        width: 100%;
        margin: 0;
        z-index: 2;
        box-shadow: 0 1rem 1rem var(--color-light);
    }

    .top {
        width: 4.4rem;
        position: absolute;
        left: 66%;
    }

    .top button {
        display: inline-block;
        background: transparent;
        cursor: pointer;
        color: var(--color-dark);
        position: absolute;
        left: 1rem;
    }

    .top button span {
        font-size: 2rem;
    }


}</style>