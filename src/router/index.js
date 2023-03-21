import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/pages/HomeScreen.vue"),
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
    {
      path: "/hotel",
      name: "Hotel",
      component: () => import("@/pages/HotelScreen.vue"),
    },
    {
      path: "/hotel-item",
      name: "Hotel Item",
      component: () => import("@/pages/HotelItem.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/pages/LoginScreen.vue"),
    }
  ],
});

export default router;
