import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'homeAnime',
    component: () => import( '../views/HomeAnime.vue')
  },
  {
    path: '/aboutNew',
    name: 'aboutNew',
    component: () => import( '../views/AboutViewNew.vue')
  },
  {
    path: '/contactnew',
    name: 'contactnew',
    component: () => import( '../views/ContactViewNew.vue')
  },
  {
    path: '/testimonialsNew',
    name: 'testimonialsNew',
    component: () => import( '../views/TestimonialsViewNew.vue')
  },
  {
    path: '/projectsNew',
    name: 'projectsNew',
    component: () => import( '../views/ProjectsViewNew.vue')
  },
  {
    path: '/eduExpNew',
    name: 'eduExpNew',
    component: () => import( '../views/EduExpNew.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
