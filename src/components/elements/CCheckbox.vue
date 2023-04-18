<template>
  <div
    @click="toggleSelect"
    :class="{ checkbox: true, 'checkbox-checked': checkedData }"
  >
    <div></div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";
const props = defineProps({
  checked: {
    type: Boolean,
  },
});
const checkboxData = ref(false);
const toggleSelect = () => {
  checkboxData.value = !checkboxData.value;
};
watch(() => {
  props.checked,
    (newValue) => {
      checkboxData.value = newValue;
    };
});
</script>

<style lang="scss" scoped>
@keyframes checked {
  from {
    transform: rotate(-90deg);
  }

  to {
    transform: rotate(0deg);
  }
}

.checkbox {
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: 1px solid #babec5;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-90deg);
}

.checkbox-checked {
  border-color: var(--color-primary);
  transform: rotate(0deg);
  animation: checked 0.2s ease-in-out;
}

.checkbox-checked div {
  background: url(../../public/icon/checked.svg) no-repeat -1225px -363px;
  width: 14px;
  height: 11px;
}
</style>
