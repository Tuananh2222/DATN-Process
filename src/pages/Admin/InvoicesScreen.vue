<template>
  <div class="container">
    <div class="nav">
      <NavigationAdmin />
    </div>
    <div class="main-container">
      <BaseTopAdmin :name-page="'Invoices'" />
      
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
  .nav {
    width: 15%;
  }
  .main-container {
    width: 85%;
  }
}
</style>
