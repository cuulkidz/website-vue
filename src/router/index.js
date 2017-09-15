import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

import Home from '@/pages/Home'
import Hello from '@/components/Hello'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/',
      component: Full,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        }

      ]
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    }
  ]
})
