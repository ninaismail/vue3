import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/portfolio-projects/PortfolioView.vue'
import PortfolioProjectDetailsView from '@/views/portfolio-projects/PortfolioProjectDetailsView.vue'

const routes = [
  { path: '/', component: HomeView},
  { path: '/portfolio', component: PortfolioView},
  { path: '/portfolio/:slug', component: PortfolioProjectDetailsView},
]
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
    scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    } else if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
      }
    }
      return { top: 0,  behavior: 'smooth' }
  }  
})
export default router
