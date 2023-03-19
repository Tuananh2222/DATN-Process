<template>
  <DefaultLayout />
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const DefaultLayout = defineAsyncComponent(() => import("@/layouts/defaultLayout.vue"))
</script>

<style lang="scss">
@import url("./assets/scss/general.scss");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
