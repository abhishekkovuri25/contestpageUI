import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import HelloWorld from '@/components/HelloWorld'
import Homepage from '@/pages/Homepage'
import Screening from '@/pages/Screening'
import Login from '@/pages/Login'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'/Homepage',
      name:'Homepage',
      component:Homepage
    },
    {
      path:'/Screening',
      name:'Screening',
      component: Screening
    },
    {
      path:'/Login',
      name:'Login',
      component:Login
    }
  ]
})
