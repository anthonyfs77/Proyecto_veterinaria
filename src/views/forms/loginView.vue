<template>
    <div class="app">
        <div class="img">
            <div class="imagen"></div>
        </div>
        <div class="login">
            <div class="header">
                <h5>Veterinaria cachorros</h5>
                <div class="logo"></div>
            </div>
            <div class="formulario">
                <div class="form">
                    <h1>Welcome Back!</h1>
                    <p>porfavor ingrese sus credenciales.</p><br>
                    <div class="flex-column">
                        <label>Email </label>
                    </div>
                    <div class="inputForm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20">
                            <g data-name="Layer 3" id="Layer_3">
                                <path
                                    d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z">
                                </path>
                            </g>
                        </svg>
                        <input v-model="email" placeholder="Ingresa tu Email" class="input" type="text">
                    </div>

                    <div class="flex-column">
                        <label>Contraseña </label>
                    </div>
                    <div class="inputForm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
                            <path
                                d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0">
                            </path>
                            <path
                                d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0">
                            </path>
                        </svg>
                        <input v-model="pass" placeholder="Ingresa tu contrasela" class="input" type="password">
                    </div>
                    <!-- <router-link :to="{name: 'MenuCliente'}"> -->
                    <button @click="login" class="button-submit">Sign In</button>
                    <!-- </router-link> -->
                    <p class="p">No tienes una cuenta?
                        <router-link :to="{ name: 'register' }" class="custom-link">
                            <span class="span">registrate</span>
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
        <!--Mensaje de error-->

        <div v-if="mostrarError" class="err">
            <error title="El usuario no existe" />
        </div>
    </div>
</template>

<script setup>
import error from '../../components/Mensajes/Error.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {dataLog} from '@/stores/counter.js'

import axios from 'axios';
const user = ref();
const dataUser = dataLog();
const email = ref('');
const pass = ref('');
const router = useRouter();
var mostrarError = ref();
var mostrarSuccess = ref();

const redirectToPage = () => {                                            
    router.push('/cuerpo');
};


import {useUsuarioStore} from "@/stores/UsuariosStore";

let usuarioStore = useUsuarioStore();
let valid = ref(true)

function login() {
  if (!valid.value) {
    return
  }
  let usuario = ref({
    correo: email.value,
    contra: pass.value
  })
  fetch('http://web.Backend.com/auth', {
    method: 'POST',
    body: JSON.stringify(usuario.value),
  }).then(response => response.json())
      .then(data => {
        if (data.status != 200) {
          console.log(usuario.value)
          console.log(data)
          alert(data.message)
          return
        }
        usuarioStore.setUser(data.data)
        redirectToPage();
      });
}


</script>




<style scoped>
* {
    box-sizing: border-box;
}

.err {
    margin-left: 41.3%;
    margin-top: 15.6%;
    position: absolute;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login {
    border-radius: 2em 0 0 2em;
    background-color: white;
}

.app {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1.5fr 1.5fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
        ". .";
    background-color: #fac134;
}

.form {
    display: flex;
    flex-direction: column;
}


.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    padding: 30px;
    width: 550px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.form button {
    align-self: flex-end;
}

.flex-column>label {
    color: #151717;
    font-weight: 600;
}

.inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s ease-in-out;
}

.input {
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    width: 100%;
    height: 100%;
}

.input:focus {
    outline: none;
}



.flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
}

.flex-row>div>label {
    font-size: 14px;
    color: black;
    font-weight: 400;
}

.span {
    font-size: 14px;
    margin-left: 5px;
    font-weight: 500;
    cursor: pointer;
}

.button-submit {
    margin: 20px 0 10px 0;
    background-color: #151717;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    cursor: pointer;
}

.p {
    text-align: center;
    color: black;
    font-size: 14px;
    margin: 5px 0;
}

.btn {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    border: 1px solid #ededef;
    background-color: white;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}


.login {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1.5fr;
    grid-template-rows: 0.2fr 1.8fr;
    gap: 0px 0px;
    grid-template-areas:
        "."
        ".";
}

.formulario {
    display: flex;
    justify-content: center;
    align-items: center;
}

.header {
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    align-items: center;
}

.logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-size: cover;
    margin-left: 10px;
    margin-right: 10px;
    background-repeat: no-repeat;

}

.app {
    position: relative;
    right: 12px;
}

.img {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100vh;
    background-image: url('../../assets/img/loginSinFondo.png');
    background-size: 30em;
    background-repeat: no-repeat;
    background-position: center bottom;
}



@media (max-width: 680px) {
  .app{
    background-color: white;
  }
  .img{
    display: none;
  }
  .formulario{
    width: 122%;
  }
}
</style>