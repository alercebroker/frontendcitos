import { createRouter, createWebHistory } from 'vue-router'
import Search from '@ui/layouts/Search.vue'
import SearchHome from '@ui/views/SearchHome.vue'
import SearchResults from '@ui/views/SearchResults.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search,
      children: [
        {
          path: '/',
          component: SearchHome
        },
        {
          path: 'results',
          component: SearchResults
        }
      ]
    },
  ]
})

export default router
