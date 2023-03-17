<template>
  <div class="dx-field-value">
    <v-calendar :mode="$dayjs" />
  </div>
</template>

<script setup lang="ts">
import { Calendar as VCalendar } from 'v-calendar'
import 'v-calendar/dist/style.css'
const { $dayjs } = useNuxtApp()

const now = new Date()
</script>

<style scoped></style>
