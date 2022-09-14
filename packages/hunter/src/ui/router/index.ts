import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/oauth", component: () => import("../views/OauthView.vue") },
  { path: "/", component: () => import("../views/IndexView.vue") },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
