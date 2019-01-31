import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import CreateContestStart from '@/components/CreateContestStart'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import CreateContestText from '@/components/CreateContestText'
import CreateContestImage from '@/components/CreateContestImage'
import CreateContestVideo from '@/components/CreateContestVideo'
import CreateContestAudio from '@/components/CreateContestAudio'
import CreateContestDynamic from '@/components/CreateContestDynamic'
import CreateContestDynamicQuestions from '@/components/CreateContestDynamicQuestions'

Vue.use(BootstrapVue);
Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/createcontesttype',
      name: 'Type',
      component : CreateContestType
    },
    {
      path:'/createcontestdynamic',
      name: 'CreateContestDynamic',
      component : CreateContestDynamic
    },
    {
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
    },
    {
      path: '/createcontesttype',
      name: 'CreateContestType',
      component: CreateContestType
    },
    {
      path: '/createcontestdynamic',
      name: 'CreateContestDynamic',
      component: CreateContestDynamic
    },
    {
      path: '/createcontestdynamicquestions',
      name: 'CreateContestDynamicQuestions',
      component: CreateContestDynamicQuestions
    }
  ]
})
