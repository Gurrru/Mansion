import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import PropListView from '@/views/Prop-ListView.vue'
import PropertyView from '@/views/PropertyView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/properties',
      name: 'properties',
      component: PropListView,
      children: [],
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/property/:id',
      component: PropertyView,
      name: 'property',
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/ErrorView.vue'),
    },
  ],
})

export default router
