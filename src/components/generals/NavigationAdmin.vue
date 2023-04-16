<template>
  <nav class="sidebar">
    <div>
      <div class="sidebar__logo">
        <h2 class="sidebar__logo-header">Lexington Hotel</h2>
      </div>
      <ul class="side-nav">
        <router-link
          v-for="(item, index) in navList"
          :key="index"
          :to="{ name: item.to }"
          class="side-nav__item"
          ><img :src="item.imgUrl" alt="" />
          <span>{{ item.text }}</span></router-link
        >
        <li class="side-nav__item" @click="handleSignout">
          <span>Log Out</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import router from '@/router';
import useUserStore from '@/stores/user';

const userStore = useUserStore();
const { handleLogout } = userStore;
const navList = [
  {
    text: "Dashboard",
    to: "Home Admin",
  },
  {
    text: "Invoices",
    to: "Invoices",
  },
  {
    text: "Rooms",
    to: "Rooms",
  },
  {
    text: "Inbox",
    to: "Inbox",
  },
  {
    text: "Settings",
    to: "Settings",
  },
];
const handleSignout = () => {
  handleLogout()
  router.push('/')
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 240px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;
  border-right: 1px solid #f3f5f7;
  padding: 0 16px;
  overflow: auto;
}

.sidebar__logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 56px -30px;
}

.sidebar__logo-header {
  margin-left: 14px;
}
.side-nav {
  display: flex;
  flex-direction: column;
}

.side-nav__header {
  font-size: 14px;
  line-height: 21px;
  color: #90a3bf;
  padding-bottom: 10px;
  display: inline-block;
}

.side-nav__header,
.side-nav__item > span {
  letter-spacing: -2%;
  font-weight: 500;
}

.side-nav__item {
  list-style: none;
  color: #596780;
  display: flex;
  align-items: center;
  padding: 14px 0 14px 16px;
  border-radius: 10px;
  transition: all 0.4s;
  cursor: pointer;
  white-space: nowrap;
}

.side-nav__item.last-item {
  margin-bottom: 32px;
}

.side-nav__item:not(:last-child) {
  margin-bottom: 4px;
}

.side-nav__item:hover,
.router-link-active.side-nav__item {
  background-color: #7c5cfc;
  color: white;
}
</style>
