import { createRouter, createWebHistory } from 'vue-router'
import calificaciones from '@/components/calificaciones.vue'
import formulario from '@/components/formulario.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'calificaciones',
      component: calificaciones
    },
    {
      path: '/formulario',
      name: 'formulario',
      component: formulario
    },
  ]
})

export default router
