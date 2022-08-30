import { createRouter, createWebHistory } from "vue-router";
import Search from "@ui/layouts/Search.vue";
import SearchHome from "@ui/views/SearchHome.vue";
import SearchResults from "@ui/views/SearchResults.vue";
import ObjectDetails from "@ui/layouts/ObjectDetails.vue";
import ObjectDetailsView from "@ui/views/ObjectDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "search",
      component: Search,
      children: [
        {
          path: "/",
          component: SearchHome,
        },
        {
          path: "results",
          component: SearchResults,
        },
      ],
    },
    {
      path: "/object/:objectId",
      name: "object-details",
      component: ObjectDetails,
      children: [
        {
          path: "",
          component: ObjectDetailsView,
          name: "object",
        },
      ],
    },
  ],
});

export default router;
