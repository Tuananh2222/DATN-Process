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
      path: "/evaluate",
      name: "Evaluate",
      component: () => import("@/pages/EvaluateScreen.vue"),
    },
    {
      path: "/blog",
      name: "Blog",
      component: () => import("@/pages/BlogScreen.vue"),
    },
    {
      path: "/blog-item/:id",
      name: "Blog Item",
      component: () => import("@/pages/BlogItem.vue"),
    },
    {
      path: "/hotel",
      name: "Hotel",
      component: () => import("@/pages/HotelScreen.vue"),
    },
    {
      path: "/hotel-detail/:id",
      name: "Hotel Detail",
      component: () => import("@/pages/HotelDetail/[roomID].vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/pages/LoginScreen.vue"),
    },
    {
      path: "/forgot-password",
      name: "Forgot Password",
      component: () => import("@/pages/ForgotScreen.vue"),
    },
    {
      path: "/sign-up",
      name: "Sign Up",
      component: () => import("@/pages/SignupScreen.vue"),
    },
    {
      path: "/user-info",
      name: "User Information",
      component: () => import("@/pages/UserInfoScreen.vue"),
    },
    {
      path: "/booking/booking-form/:id",
      name: "Booking Form",
      component: () => import("@/pages/booking/FormScreen.vue"),
    },
    {
      path: "/admin/home",
      name: "Home Admin",
      component: () => import("@/pages/Admin/HomeScreen.vue"),
      meta: {
        layout: 'AdminLayout',
      },
    },
    {
      path: "/admin/invoices",
      name: "Invoices",
      component: () => import("@/pages/Admin/InvoicesScreen.vue"),
    },
    {
      path: "/admin/rooms",
      name: "Rooms",
      component: () => import("@/pages/Admin/RoomScreen.vue"),
    },
    {
      path: "/admin/evaluate",
      name: "Evaluate Admin",
      component: () => import("@/pages/Admin/InboxScreen.vue"),
    },
  ],
});

export default router;
