import { createRouter, createWebHistory } from 'vue-router'
import administracion from '../views/Administracion/MenuManagmentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'administracion',
      component: administracion
    }
  ]
})

export default router
