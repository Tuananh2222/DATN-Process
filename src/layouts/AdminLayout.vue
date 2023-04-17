<template>
  <NavigationAdmin />
  <div class="body-container">
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavigationAdmin from "@/components/generals/NavigationAdmin.vue";
</script>

<style lang="scss" scoped>
.body-container {
  min-width: calc(100% - 240px);
}
</style>
