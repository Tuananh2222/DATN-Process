<template>
  <!-- <CLoading v-if="state.isLoading" /> -->
  <DefaultHeader />
  <div class="body-container">
    <router-view></router-view>
  </div>
  <DefaultFooter />
</template>

<script setup>
import DefaultHeader from "@/components/generals/defaultHeader.vue";
import DefaultFooter from "@/components/generals/defaultFooter.vue";

// const { state } = useGeneralStore()

// const handleConfirm = () => {
//   navigateTo('/login')
// }
</script>
<style lang="scss" scoped>
.body-container {
  min-height: calc(100vh - 252px);
  @media not screen and (min-width: 1280px) {
    min-height: calc(100vh - 350px);
  }
}
</style>
