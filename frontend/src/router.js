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
      children: [
        {
          path: '/home',
          name: '_home',
          component: () => import('@/views/Home.vue'),
        },
      ],
    },
  ],
});
