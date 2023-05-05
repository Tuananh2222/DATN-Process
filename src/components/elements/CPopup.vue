<template>
  <div id="popup-bg" class="popup-bg">
    <div class="container-popup"></div>
    <div class="body-popup">
      <div class="icon-close" @click="handleHidePopup"></div>
      <div class="title-popup">
        {{ popupTitle }}
      </div>
      <div class="content-popup">
        <div>{{ popupContent }}</div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
const emits = defineEmits(["closePopup"]);
const props = defineProps({
  popupTitle: {
    type: String,
    default: "",
  },
  popupContent: {
    type: String,
    default: "",
  },
});
const handleHidePopup = () => {
  emits("closePopup");
};
</script>
<style lang="scss" scoped>
.popup-bg {
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  .container-popup {
    background: gray;
    opacity: 80%;
    width: 100%;
    height: 100vh;
  }
  .body-popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 12px;
    width: 680px;
    min-height: 271px;
    margin: auto;
    .icon-close {
      cursor: pointer;
      position: absolute;
      top: 16px;
      right: 16px;
    }
    .title-popup {
      margin: 56px auto 12px auto;
      width: 600px;
      text-align: center;
      font-weight: 700;
      min-height: 42px;
      font-size: 28px;
      line-height: 42px;
    }
    .content-popup {
      word-break: keep-all;
      margin: 0 auto 44px auto;
      width: 600px;
      min-height: auto;
      font-weight: 400;
      font-size: 16px;
      line-height: 28.8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      span {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .btn-confirm {
      margin: 0 auto 40px auto;
      button {
        font-size: 16px;
        font-weight: 700;
        line-height: 125%;
        border: none;
      }
      .btn-ghost-caption {
        background: white;
      }
    }
  }
}
</style>
