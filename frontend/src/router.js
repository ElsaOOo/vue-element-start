import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: () => import('@/components/main'),
      children: [
        {
          path: '/home',
          name: '_home',
          component: () => import('@/views/Home.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
});
