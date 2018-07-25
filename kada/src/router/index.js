import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/layout'
      // name: 'HelloWorld',
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout
    }
  ]
})
