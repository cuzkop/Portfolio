import Vue from 'vue'
import Router from 'vue-router'

import Top from '@/pages/Top.vue'
import About from '@/pages/About.vue'
import Skill from '@/pages/Skill.vue'


Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Skill',
      name: 'Skill',
      component: Skill
    }
  ]
})

export default router
