<template>
  <div class="top-container">
    <div class="title-header">{{ namePage }}</div>
    <div class="user-nav">
      <div class="user-info">
        <span class="user-name">Tuấn Anh</span>
      </div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5999 7.45837L11.1666 12.8917C10.5249 13.5334 9.4749 13.5334 8.83324 12.8917L3.3999 7.45837"
          stroke="#596780"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  namePage: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
/* -------------- TOP CONTAINER -------------- */
.top-container {
  border-bottom: 1px solid #f3f5f7;
  padding: 18px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title-header {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
}
/* -------------- USER NAV -------------- */
.user-nav,
.user-info {
  display: flex;
  align-items: center;
}

.user-name {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -2%;
  margin: 0 37px 0 0;
}

.user-image {
  height: 44px;
  width: 44px;
}

/* -------------- NOTIFICATION -------------- */
.notification {
  border: 1px solid #c3d4e9;
  background-color: transparent;
  position: relative;
  margin-right: 32px;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
}

.notification::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  top: -2px;
  right: 3px;
}
</style>
