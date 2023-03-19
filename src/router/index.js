import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/pages/homeScreen.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/pages/AboutScreen.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("@/pages/ContactScreen.vue"),
    },
    {
      path: "/blog",
      name: "Blog",
      component: () => import("@/pages/BlogScreen.vue"),
    },
  ],
});

export default router;
