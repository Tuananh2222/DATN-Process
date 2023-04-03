<template>
  <div class="dx-field-value">
    <DxDateBox
      :value="value"
      :display-format="props.displayFormat"
      :show-clear-button="props.showButtonClear"
      :min="now"
      :onValueChanged="handleDateChanged"
      pickerType="calendar"
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
// const getDisabledDates = () => {
//   if (!checkinDate.value) {
//     return [];
//   }

//   const startDate = new Date(checkinDate.value);
//   startDate.setHours(0, 0, 0, 0);

//   const endDate = new Date(startDate);
//   endDate.setDate(endDate.getDate() + 1);

//   return {
//     from: startDate,
//     to: endDate,
//   };
// };
// const disabledDates = computed(() => [getDisabledDates()]);

watch(value, (newValue) => {
  if (newValue) {
    value = newValue;
  }
});
</script>

<style scoped></style>
