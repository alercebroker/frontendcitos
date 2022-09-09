import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "search",
    component: () => import("@ui/layouts/Search.vue"),
    children: [
      {
        path: "/",
        component: () => import("@ui/views/SearchHome.vue"),
        name: "search",
      },
      {
        path: "results",
        name: "results",
        component: () => import("@ui/views/SearchResults.vue"),
      },
    ],
  },
  {
    path: "/object/:objectId",
    name: "object-details",
    component: () => import("@ui/layouts/ObjectDetails.vue"),
    children: [
      {
        path: "",
        component: () => import("@ui/views/ObjectDetailsView.vue"),
        name: "object",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
