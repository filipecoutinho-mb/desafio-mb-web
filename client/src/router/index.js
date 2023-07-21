import { createRouter, createWebHistory } from 'vue-router'
import FormCadastro from '../views/FormCadastro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cadastro',
      component: FormCadastro
    },
  ]
})

export default router
