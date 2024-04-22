import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './Home.vue';
import About from './About.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
