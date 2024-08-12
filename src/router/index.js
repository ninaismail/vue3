import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/portfolio-projects/PortfolioView.vue'
import PortfolioProjectDetailsView from '../views/portfolio-projects/PortfolioProjectDetailsView.vue'
import CollaborationsView from '../views/collaborations-projects/CollaborationsView.vue'
import CollaborationsProjectDetailsView from '../views/collaborations-projects/CollaborationsProjectDetailsView.vue'
import ContactView from '../views/ContactView.vue'
import EditorialView from '@/views/EditorialView.vue'

const routes = [
  { path: '/', component: HomeView},
  { path: '/portfolio', component: PortfolioView},
  { path: '/editorial', component: EditorialView},
  { path: '/contact', component: ContactView},
  { path: '/portfolio/:slug',  component: PortfolioProjectDetailsView},
  { path: '/collaborations', component: CollaborationsView},
  { path: '/collaborations/:slug', component: CollaborationsProjectDetailsView},
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
