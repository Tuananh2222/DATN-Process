<template>
  <div
    :id="props.type == 'error' ? 'toast-error' : 'toast-success'"
    class="toast-wrapper"
  >
    <slot></slot>
    <div class="toast-message">{{ props.message }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  message: {
    type: String,
    default: "",
  },
  type : String
});
</script>

<style lang="scss" scoped>
@keyframes showToast {
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes hideToast {
  from {
    transform: translateX(0);
    opacity: 1;
  }

  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
.toast-wrapper {
  z-index: 100;
  display: flex;
  align-items: center;
  position: fixed;
  background-color: #fff;
  padding: 20px 20px 20px 20px;
  border-radius: 8px;
  border: 1px solid #bbb;
  right: 10px;
  animation: showToast ease-in-out;
  transform-origin: right;
  min-width: 400px;
  box-sizing: border-box;
}

.toast-wrapper-hide {
  animation: hideToast 0.5s ease-in-out;
  transform: translateX(calc(100% + 20px));
}

.toast-message {
  margin-left: 16px;
  font-size: 14px;
  white-space: nowrap;
}

#toast-error {
  border: 1px solid #ff7777;
}

#toast-success {
  border: 1px solid green;
}
</style>
