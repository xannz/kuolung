import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue'
import Home from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/wat-is-ju-jitsu',
      name: 'WhatIsJuJitsu',
      component: () => import("../views/WhatIsJuJitsu.vue")
    },
    {
      path: '/vjjf',
      name: 'vjjf',
      component: () => import("../views/Vjjf.vue")
    },
    {
      path: '/trainingsuren',
      name: 'TrainingHours',
      component: () => import("../views/TrainingHours.vue")
    },
    {
      path: '/lidgeld-en-verzekering',
      name: 'FeesAndInsurance',
      component: () => import("../views/FeesAndInsurance.vue")
    },
    {
      path: '/wie-is-wie',
      name: 'WhoIsWho',
      component: () => import("../views/WhoIsWho.vue")
    },
    {
      path: '/kalender',
      name: 'Calendar',
      component: () => import("../views/Calendar.vue")
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import("../views/Contact.vue")
    },
    { 
      path: '/:catchAll(.*)', 
      component: () => import("../views/Error404.vue"),
      name: 'NotFound'
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
