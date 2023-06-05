import Vue from 'vue'
import VueRouter from 'vue-router'
import StorageViews from '@/views/StorageViews'
import HomeView from '@/views/HomeView'
import OrderList from '@/views/OrderList'
import PageStatistics from '@/views/PageStatistics'
import PageEmployees from '@/views/PageEmployees'
import ClientList from '@/views/ClientList'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: HomeView
  },
  {
    path: '/storage',
    component: StorageViews
  },
  {
    path: '/orders',
    component: OrderList
  },
  {
    path: '/statistics',
    component: PageStatistics
  },
  {
    path: '/employees',
    component: PageEmployees
  },
  {
    path: '/clients',
    component: ClientList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
