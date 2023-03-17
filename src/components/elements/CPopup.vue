<template>
  <div v-if="modelValue" id="popup-bg" class="popup-bg">
    <div class="container-popup"></div>
    <div class="body-popup">
      <div class="icon-close" @click="handleHidePopup"></div>
      <div class="title-popup">
        {{ popupTitle }}
      </div>
      <div class="content-popup">
        <div v-html="popupContent"></div>
        <slot></slot>
      </div>
      <div class="btn-confirm">
        <button v-if="typeButton" class="btn-normal-gradient" @click="handleHidePopup">
          {{ buttonName }}
        </button>
        <button v-else class="btn-ghost-caption" @click="handleHidePopup">{{ buttonName }}</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
const emits = defineEmits(['update:modelValue', 'closePopup'])
const props = defineProps({
  popupTitle: {
    type: String,
    default: '',
  },
  popupContent: {
    type: String,
    default: '',
  },
  buttonName: {
    type: String,
    default: '',
  },
  // new props
  modelValue: {
    type: Boolean,
    default: false,
  },
  // true confirm, false cancel
  typeButton: {
    type: Boolean,
    default: false,
  },
})
const handleHidePopup = () => {
  emits('update:modelValue', false)
  emits('closePopup')
}
</script>
<style lang="scss" scoped>
.popup-bg {
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .container-popup {
    background: $gray;
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
    background: $white;
    border-radius: 12px;
    width: 680px;
    min-height: 271px;
    margin: auto;
    @include sp {
      max-width: 90%;
      min-width: 334px;
      min-height: 303px;
    }
    .icon-close {
      cursor: pointer;
      position: absolute;
      top: 16px;
      right: 16px;
      @include icon('close', 28px, $caption);
    }
    .title-popup {
      margin: 56px auto 12px auto;
      width: 600px;
      text-align: center;
      font-weight: 700;
      min-height: 42px;
      font-size: 28px;
      line-height: 42px;
      @include sp {
        font-size: 21px;
        line-height: 150%;
        width: 294px;
        min-height: 32px;
      }
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
      @include sp {
        font-size: 14px;
        line-height: 25px;
        width: 294px;
        min-height: 25px;
      }
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
        @include sp {
          font-size: 14px;
        }
        border: none;
      }
      .btn-ghost-caption {
        background: $white;
        @include sp {
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          border: 1px solid $caption;
        }
      }
    }
  }
}
</style>
