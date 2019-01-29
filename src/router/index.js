import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import HelloWorld from '@/components/HelloWorld'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import checkbox from '@/components/checkbox'
=======
import BootstrapVue from 'bootstrap-vue'
import CreateContestStart from '@/components/CreateContestStart'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import CreateContestText from '@/components/CreateContestText'
import CreateContestImage from '@/components/CreateContestImage'
import CreateContestVideo from '@/components/CreateContestVideo'
import CreateContestAudio from '@/components/CreateContestAudio'

Vue.use(BootstrapVue);
>>>>>>> 0d3e3ebb64532b69f3a6d292d27cc07f0c1e2907
Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  mode: 'history',
  routes: [
    {
<<<<<<< HEAD
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/cb',
      name: 'checkbox',
      component:checkbox
=======
      path: '/createconteststart',
      name: 'CreateContestStart',
      component: CreateContestStart
    },
    {
      path: '/createcontesttext',
      name: 'CreateContestText',
      component: CreateContestText
    },
    {
      path: '/createcontestimage',
      name: 'CreateContestImage',
      component: CreateContestImage
    },
    {
      path: '/createcontestvideo',
      name: 'CreateContestVideo',
      component: CreateContestVideo
    },
    {
      path: '/createcontestaudio',
      name: 'CreateContestAudio',
      component: CreateContestAudio
>>>>>>> 0d3e3ebb64532b69f3a6d292d27cc07f0c1e2907
    }
  ]
})
