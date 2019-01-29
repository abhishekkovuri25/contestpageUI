import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import CreateContestStart from '@/components/CreateContestStart'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/createconteststart',
      name: 'CreateContestStart',
      component: CreateContestStart
    }
  ]
})
