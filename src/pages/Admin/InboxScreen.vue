<template>
  <div class="container">
    <div class="nav">
      <NavigationAdmin />
    </div>
    <div class="main-container">
      <BaseTopAdmin :name-page="'Inbox'" />
    </div>
  </div>
</template>

<script setup>
import BaseTopAdmin from "@/components/generals/BaseTopAdmin.vue";
import NavigationAdmin from "@/components/generals/NavigationAdmin.vue";
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  .nav {
    width: 15%;
  }
  .main-container {
    width: 85%;
  }
}
</style>
