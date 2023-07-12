import { createRouter, createWebHistory } from 'vue-router'
import principalMain from '../../src/views/Inicio/MainInicio.vue'
import control from '../views/Administracion/MenuManagmentView.vue'; 
import panelAdmin from '../views/Administracion/PanelAdminView.vue';
import productos from '../views/Productos/TablaProductsPublicsView.vue'; 
import productosInternos from '../views/Productos/TablaProductsInternosView.vue'; 
import productosPublicos from '../views/Productos/TablaProductsPublicsView.vue'; 
import productosApartados from '../views/Productos/TablaProductApartView.vue'; 
import login from '../views/forms/loginView.vue';
import register from '../views/forms/RegisterView.vue';
//import sidebar from '../views/Administracion/PanelAdminView.vue'

const routes = [
  // Vistas predeterminadas
  {
    path: '/',
    name: 'principalMain',
    component: principalMain,
  },
  
  {
    path: '/login',
    name: 'login',
    component: login
  },

  {
    path: '/register',
    name: 'register',
    component: register,
  },

  {

    // el router view 
    path: '/panelAdmin',
    name: 'panelAdmin',
    component: panelAdmin,
    children: [
      {
        path: '/control',
        name: 'control',
        component: control
      },
      {
        path: '/productos',
        name: 'productos',
        component: productos,
      },
      {
        path: '/productosInternos',
        name: 'productosInternos',
        component: productosInternos
      },
      {
        path: '/productosPublicos',
        name: 'productosPublicos',
        component: productosPublicos
      },
      {
        path: '/productosApartados',
        name: 'productosApartados',
        component: productosApartados
      }
    ]
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
