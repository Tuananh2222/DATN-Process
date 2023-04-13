<template>
  <!--  -->
  <!-- <div v-if="(state.isAdmin = true)">
    <NavigationAdmin />
  </div> -->
  <div>
    <DefaultHeader />
    <div class="body-container">
      <router-view></router-view>
    </div>
    <DefaultFooter />
  </div>
</template>

<script setup>
import DefaultHeader from "@/components/generals/defaultHeader.vue";
import DefaultFooter from "@/components/generals/defaultFooter.vue";
// import useLoginStore from "@/stores/login";
// import NavigationAdmin from "@/components/generals/NavigationAdmin.vue";
// import CLoading from "@/components/elements/CLoading.vue";

// const { state } = useLoginStore();
</script>
<style lang="scss" scoped>
.body-container {
  min-height: calc(100vh - 252px);
  @media not screen and (min-width: 1280px) {
    min-height: calc(100vh - 350px);
  }
}
</style>
