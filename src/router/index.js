import { createRouter, createWebHistory } from 'vue-router'
import BeiDou from '@/pages/BeiDou.vue'
import Campus from '@/pages/Campus.vue'
import Home from '@/pages/Home.vue'
import Social from '@/pages/Social.vue'
import Login from '@/pages/Login.vue'
import Work from '@/pages/work in meituan/Work.vue'
import Care from '@/pages/work in meituan/Care.vue'
import Activity from '@/pages/work in meituan/Activity.vue'
import Welfare from '@/pages/work in meituan/Welfare.vue'
import JobDsc from '@/pages/JobDsc.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/home',
    component: Home,
  }, {
    path: '/beidou',
    component: BeiDou,
  }, {
    path: '/social',
    component: Social
  }, {
    path: '/campus',
    component: Campus
  }, {
    path: '/login',
    component: Login
  },
  {
    path: '/work',
    component: Work
  },
  {
    path: '/care',
    component: Care
  },
  {
    path: '/activity',
    component: Activity
  },
  {
    path: '/welfare',
    component: Welfare
  },
  {
    path: '/jobdsc',
    component: JobDsc
  },
  {
    path: '/',
    redirect: '/Home'
  },

  ]
})

export default router
