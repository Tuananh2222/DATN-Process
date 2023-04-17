<template>
  <div class="body-container">
    <router-view></router-view>
  </div>
  <CChatOpen />
</template>

<script setup>
import CChatOpen from "./components/elements/CChatOpen.vue";
</script>

<style lang="scss">
@import url("./assets/scss/general.scss");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.body-container {
  min-height: calc(100vh - 252px);
  @media not screen and (min-width: 1280px) {
    min-height: calc(100vh - 350px);
  }
}
</style>
