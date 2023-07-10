import { createRouter, createWebHistory } from 'vue-router'

import control from '../views/Administracion/MenuManagmentView.vue'; 
import productos from '../views/Productos/TablaProductsPublicsView.vue'; 
import productosInternos from '../views/Productos/TablaProductsInternosView.vue'; 
import productosPublicos from '../views/Productos/TablaProductsPublicsView.vue'; 
import productosApartados from '../views/Productos/TablaProductApartView.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/control',
      name: 'control',
      component: control
    },
    {
      path: '/Productos',
      name: 'productos',
      component: productos
    },

    // links para vista de productos
    {
      path: '/internos',
      name: 'internos',
      component: productosInternos
    },
    {
      path: '/publicos',
      name: 'publicos',
      component: productosPublicos
    },
    {
      path: '/apartados',
      name: 'apartados',
      component: productosApartados
    },

    //links para Dashboard
    
  ]
})

export default router
