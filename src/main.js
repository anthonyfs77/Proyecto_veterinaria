import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@popperjs/core';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')

app.use(vue3GoogleLogin, {
    clientId: '214328075488-rtthlgpdc7ja0lklgqgubonf5bem2u99.apps.googleusercontent.com'
})
// 
