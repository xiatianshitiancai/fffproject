import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/layout'
import home from '@/views/home'

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
      component: layout,
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          name: '主页',
          component: home
        }
      ]
    }
  ]
})
