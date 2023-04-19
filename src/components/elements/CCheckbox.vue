<template>
  <div :class="`checkbox-container`">
    <div
      @click="handleChangeState()"
      :class="{
        'icon-square-uncheck': !isChecked,
        'icon-checkmark': true,
        'icon-square-check': isChecked,
        'cursor-pointer': true,
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";
const props = defineProps({
  checked: {
    type: Boolean,
  },
});
const isChecked = ref(false);
const handleChangeState = () => {
  isChecked.value = !isChecked.value;
};
watch(
  () => props.checked,
  (value) => {
    isChecked.value = value;
  }
);
</script>

<style lang="scss" scoped>
.checkbox-container {
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.icon-checkmark {
  height: 26px;
  width: 22px;
  min-width: 22px;
  min-height: 26px;
  box-sizing: border-box;
}

.icon-square-check {
  width: 16px;
  height: 16px;
  background: url(../../public/icon/checked.svg) center;
  background-size: cover;
}
.icon-square-uncheck {
  width: 20px;
  height: 24px;
  background: url(../../public/icon/square.svg) center;
  background-size: cover;
}
</style>
