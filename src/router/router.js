
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: "/",  name:'home', component:()=>import('../pages/HomePage.vue')},
  { path: "/news",  name:'newesPage', component:()=>import('../pages/newsPage.vue')},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
