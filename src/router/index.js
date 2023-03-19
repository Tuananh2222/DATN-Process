import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from 'vue'
const Home = defineAsyncComponent(() => import('@/pages/homeScreen.Vue'))
const Blog = defineAsyncComponent(() => import('@/pages/blog.vue'))

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog,
    },
  ],
});

export default router;
