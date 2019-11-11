import vue from 'vue'
import vueRouter from 'vue-router'
vue.use(vueRouter)

import Home from '@/views/Home'
import Detail from '@/views/Detail'
import Add from '@/views/Add'

const router = new vueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/detail',
      component: Detail,
      props: (route) => ({ id: route.query.id })
    },
    {
      path: '/add',
      component: Add
    }
  ]
})

export default router
