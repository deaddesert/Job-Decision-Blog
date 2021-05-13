import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import About from '@/pages/About/AboutUs.vue'


import ListOfUniversities from '@/pages/Universities/ListOfUniversities.vue'

import ListOfHotJobs from '@/pages/HotJobs/ListOfHotJobs.vue'

import ShowJobs from '@/pages/ShowJobs/ShowJobs.vue'

import JobInfo from '@/pages/JobInformation/JobInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [

  {
    path:'/',
    name: 'Home',
    component: Home
  },

  {
    path:'/about',
    name:'About',
    component:About
  },

 
    {
      path:'/jobs/:slug',
      name: 'ShowJobs',
      component:ShowJobs
    },

    {
      path:'/university',
      name:'Universities',
      component: ListOfUniversities
    },

    {
      path:'/hotjob',
      name:'HotJobs',
      component: ListOfHotJobs
    }, 

    {
      path:'/job/:field/:link',
      name:'JobInfo',
      component: JobInfo
    }
    

  ],

  mode:'history'
    
})
