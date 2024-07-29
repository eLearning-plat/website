import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "@auth0/auth0-vue";

const routes = [
  { path: "/", name: "home", component: () => import("../pages/HomePage.vue") },
  {
    path: "/news",
    name: "newesPage",
    component: () => import("../pages/newsPage.vue"),
  },
  {
    path: "/news/:id",
    name: "newesDetailsPage",
    component: () => import("../pages/NewsDetailsPage.vue"),
    beforeEnter: authGuard,
  },
  {
    path: "/Blogs",
    name: "BlogsPage",
    component: () => import("../pages/BlogsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
