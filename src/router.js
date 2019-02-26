import Vue from 'vue'
import Router from 'vue-router'

import Top from '@/pages/Top.vue'
import Profile from '@/pages/Profile.vue'
import Skill from '@/pages/Skill.vue'
import Contact from '@/pages/Contact.vue'
import Works from '@/pages/Works.vue'


Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Works',
      name: 'Works',
      component: Works
    }
  ],
  base: process.env.ROOT_BASE, // new!
})

export default router
