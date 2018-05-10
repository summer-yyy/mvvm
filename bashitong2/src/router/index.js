import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/pages/address'], resolve),
      name: 'address'
    }, {
      path: '/address',
      component: resolve => require(['@/pages/address'], resolve),
      name: 'address'
    }, {
      path: '/login',
      component: resolve => require(['@/pages/login'], resolve),
      name: 'login'
    }, {
      path: '/agreement',
      component: resolve => require(['@/pages/agreement'], resolve),
      name: 'agreement'
    }
  ]
})
