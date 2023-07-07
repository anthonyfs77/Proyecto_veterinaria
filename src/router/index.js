import { createRouter, createWebHistory } from 'vue-router'

import control from '/proyecto_veterinaria/proyecto/veterinaria/src/views/Administracion/MenuManagmentView.vue'; 
import productos from '/proyecto_veterinaria/proyecto/veterinaria/src/views/Productos/TablaProductsPublicsView.vue'; 
import productosInternos from '/proyecto_veterinaria/proyecto/veterinaria/src/views/Productos/TablaProductsInternosView.vue'; 
import productosPublicos from '/proyecto_veterinaria/proyecto/veterinaria/src/views/Productos/TablaProductsPublicsView.vue'; 
import productosApartados from '/proyecto_veterinaria/proyecto/veterinaria/src/views/Productos/TablaProductApartView.vue'; 

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
