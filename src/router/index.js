import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Users from '@/views/Users.vue'
import Charts from '@/views/Charts.vue'
import Chats from '@/views/Chats.vue'
import Timer from '@/views/Timer.vue'
import Settings from '@/views/Settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Users',
    name: 'Users',
    component: Users
  },
  {
    path: '/Charts',
    name: 'Charts',
    component: Charts
  },
  {
    path: '/Chats',
    name: 'Chats',
    component: Chats
  },
  {
    path: '/Timer',
    name: 'Timer',
    component: Timer
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
