<template>
  <div
    :style="{ width: width }"
    :class="`input-container flex ${isFocus ? 'input-container-focus' : ''} ${
      error ? 'border-field-error' : ''
    }`"
  >
    <slot></slot>
    <input
      :tabindex="tabIndex"
      :placeholder="placeholder"
      :value="value"
      :type="type"
      @input="handleChangeValue"
      @blur="handleBlurInput"
      @focus="handleFocusInput"
      class="input h-full flex-1 w-full"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

defineProps({
  placeholder: String,
  //giá trị input
  value: {
    type: String,
    required: true,
  },
  //độ dài
  width: String,
  //tabindex
  tabIndex: {
    type: Number,
    default: 0,
  },
  //độ cao
  height: String,
  //border-radius
  borderRadius: String,
  //border-color
  borderColor: String,
  //kiểu của input
  type: {
    type: String,
    default: "text",
  },
  //thông báo lỗi
  error: String,
  //xác định focus khi input được khởi tạo
  initFocus: Boolean,
});

const isFocus = ref(false);
const emit = defineEmits(["changeValue", "blurInput"]);
const handleChangeValue = (e) => {
  emit("changeValue", e.target.value);
};

const handleBlurInput = (e) => {
  isFocus.value = false;
  emit("blurInput", e.target.value);
};

const handleFocusInput = () => {
  isFocus.value = true;
};
</script>

<style lang="scss" scoped>
.input-container {
  height: 36px;
  box-sizing: border-box;
  border: 1px solid var(--border-color);
  position: relative;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #fff;
  width: 100%;
}

.input-container-focus {
  border-color: var(--input-hover-border-color);
}

.input {
  box-sizing: border-box;
  outline: none;
  border: none;
  padding: 0px 4px;
}

.input-container:hover {
  border: 1px solid var(--input-hover-border-color) !important;
}
</style>
