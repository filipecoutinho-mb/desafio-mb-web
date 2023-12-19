import { createRouter, createWebHistory } from 'vue-router'
import RegisterClient from '../views/register-client.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cadastro',
      component: RegisterClient,
    },
  ],
})

export default router
