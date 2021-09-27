import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/praticiens',
    name: 'Praticiens',
    component: () => import('../views/Praticiens.vue')
  },
  {
    path: '/links',
    name: 'Links',
    component: () => import('../views/Links.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
