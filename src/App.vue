<template>
  <CToast
    :style="{ top: '10px', animationDuration: `0.5s` }"
    :type="AppStore.state.typeToast"
    :message="AppStore.state.toastMessage"
    v-if="AppStore.state.toastMessage"
  >
    <div
      :class="{
        'icon-success': AppStore.state.typeToast == ToastMode.SUCCESS,
        'icon-error': AppStore.state.typeToast == ToastMode.ERROR,
      }"
    ></div>
  </CToast>
  <div class="body-container">
    <router-view></router-view>
  </div>
  <CChatOpen />
  <CLoading v-if="AppStore.state.isLoading" />
</template>

<script setup>
import CChatOpen from "./components/elements/CChatOpen.vue";
import CLoading from "./components/elements/CLoading.vue";
import CToast from "./components/elements/CToast.vue";
import useAppStore from "./stores/app";
import { ToastMode } from "./utils/Resource/Enum";
import { onMounted } from "vue";

const AppStore = useAppStore();

onMounted(() => {
  AppStore.initWebsite();
  localStorage.removeItem("__paypal_storage__")
});
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
