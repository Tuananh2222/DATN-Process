<template>
  <div class="header">
    <div class="img-logo">
      <div class="main-logo"></div>
    </div>
    <div class="header-menu">
      <router-link
        v-for="(item, index) in headerList"
        :key="index"
        :to="{ name: item.to }"
        class="menu-item"
        >{{ item.text }}</router-link
      >
    </div>
    <div class="header-icons">
      <div class="icon" @click="handleUser">
        <font-awesome-icon icon="fa-user" />
      </div>
      <div class="icon">
        <font-awesome-icon icon="fa-clipboard" @click="handleCartBooking" />
      </div>
      <div class="icon">
        <font-awesome-icon icon="fa-heart" @click="handleFavorite" />
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

const handleUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      const uid = user.uid;
      console.log(uid);
      router.push({
        path: "/user-info",
        name: "User Information",
        component: () => import("@/pages/UserInfoScreen.vue"),
      });
    } else {
      router.push({
        path: "/login",
        name: "Login",
        component: () => import("@/pages/LoginScreen.vue"),
      });
    }
  });
};

const handleCartBooking = () => {
  router.push({
    path: "/cart",
    name: "Cart",
    component: () => import("@/pages/CartScreen.vue"),
  });
};

const handleFavorite = () => {
  router.push({
    path: "/favorite",
    name: "Favorite",
    component: () => import("@/pages/FavoriteScreen.vue"),
  });
};

const headerList = [
  {
    text: "Trang chủ",
    to: "Home",
  },
  {
    text: "About US",
    to: "About",
  },
  {
    text: "Contact",
    to: "Contact",
  },
  {
    text: "Blog",
    to: "Blog",
  },
  {
    text: "Hotel",
    to: "Hotel",
  },
];
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  background-color: white;
  display: flex;
  align-items: center;
  height: fit-content;
  width: 100%;
  white-space: nowrap;
  flex-shrink: 0;
  font-weight: 600;
  font-size: 15px;
  border-bottom: 1px solid rgba(44, 45, 42, 0.25);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 6;
  padding: 10px 0;
  margin-bottom: 20px;
  @media not screen and (min-width: 1280px) {
    width: calc(100% + 20px);
    margin-left: -10px;
  }
  .img-logo {
    padding-left: 20px;
    .main-logo {
      // background: url("@/public/image/logo.jpg");
      background-position: center;
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }
  }
  .header-menu {
    display: flex;
    align-items: center;
    margin-left: auto;
    .menu-item {
      cursor: pointer;
      padding: 10px 20px;
      list-style: none;
      text-decoration: none;
      color: #000;
    }
  }
  .header-icons {
    margin-left: auto;
    display: flex;
    align-items: center;
    .icon {
      cursor: pointer;
      padding-right: 20px;
    }
  }
}
</style>
