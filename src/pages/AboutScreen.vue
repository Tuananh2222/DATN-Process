<template>
  <div class="container-wrapper">
    <div class="img-banner">
      <h2 class="text-white">About</h2>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container-wrapper {
  width: 100%;
  position: relative;

  .img-banner {
    height: 304px;
    width: 1920px;
    background: url('@/public/image/about/breadcrumbs-01.jpg');
    padding-top: 95px;
    padding-bottom: 110px;
    .text-white {
      color: white;
      font-size: 60px;
      font-weight: 700;
      text-align: center;
    }
  }
}
</style>
