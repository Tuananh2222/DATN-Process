<template>
  <div class="dx-field-value">
    <DxDateBox
      :value="value"
      :display-format="props.displayFormat"
      :show-clear-button="props.showButtonClear"
      :min="now"
      :onValueChanged="handleDateChanged"
    />
  </div>
</template>

<script setup>
import DxDateBox from "devextreme-vue/date-box";
import { defineProps, ref, watch } from "vue";

let value = ref(props.valueInit);

const now = new Date();
const props = defineProps({
  displayFormat: {
    type: String,
    default: "",
  },
  valueInit: {
    type: Date,
  },
  showButtonClear: {
    type: Boolean,
    default: true,
  },
});

const handleDateChanged = (e) => {
  value.value = e.value;
};

watch(value, (newValue) => {
  if (newValue) {
    value = newValue;
  }
});
</script>

<style scoped>
.dx-field-value {
  width: 25% !important;
}
</style>
