import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '@/views/Jobs/JobsView.vue'
import JobDetail from '@/views/Jobs/JobDetail.vue'
import NotFound from '@/views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
   {
    path: '/jobs',
    name: 'Jobs',
    component: JobsView
  },
   {
    path: '/jobs/:id',
    name: 'JobDetail',
    component: JobDetail,
    
  },
  //redirect
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  // catchall 404
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
