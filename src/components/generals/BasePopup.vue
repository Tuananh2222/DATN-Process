<template>
  <div :style="{ width: width }" class="popup-container flex flex-column">
    <slot name="header"></slot>
    <div class="popup-content flex-1">
      <slot name="main"></slot>
    </div>

    <div
      v-if="showButtonGr"
      class="popup-button-gr flex align-items-center flex-center"
    >
      <slot name="button-left"></slot>
      <slot name="button-right"></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  width: String,
  showButtonGr: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.popup-container {
  background-color: #fff;
  border-radius: 6px;
  min-height: 100px;
  position: relative;
  box-shadow: 0 0 10px rgb(0 0 0 / 18%);
  overflow: hidden;
  min-width: 200px;
}

.popup-content {
  overflow: hidden;
}

.popup-button-gr {
  height: 60px;
  min-height: 60px;
  width: 100%;
  padding-bottom: 20px;
}
</style>
