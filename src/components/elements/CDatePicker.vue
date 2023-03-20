<template>
  <dx-date-box type="date" :value="now"></dx-date-box>
</template>

<script setup>
import "devextreme/dist/css/dx.light.css";
import DxDateBox from "devextreme-vue/date-box";
const now = new Date();
</script>

<style scoped></style>
