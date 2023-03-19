<template>
  <div class="dx-field-value">
    <DxDateBox
      v-model:value="currentValue"
      :min="minDateValue"
      :max="maxDateValue"
    />
  </div>
</template>

<script setup>
import DxDateBox from "devextreme-vue/date-box";
const now = new Date();
</script>

<style scoped></style>
