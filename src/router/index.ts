import HomeView from '@/views/HomeView.vue'
import PageView from '@/views/PageView.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/page',
      name: 'page',
      component: PageView
    }
  ]
})

export default router
