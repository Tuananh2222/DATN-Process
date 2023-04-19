<template>
  <div class="top-container">
    <div class="title-header">{{ namePage }}</div>
    <div class="user-nav">
      <button class="notification">
        <svg
          class="notification__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0201 2.91003C8.71009 2.91003 6.02009 5.60003 6.02009 8.91003V11.8C6.02009 12.41 5.76009 13.34 5.45009 13.86L4.30009 15.77C3.59009 16.95 4.08009 18.26 5.38009 18.7C9.69009 20.14 14.3401 20.14 18.6501 18.7C19.8601 18.3 20.3901 16.87 19.7301 15.77L18.5801 13.86C18.2801 13.34 18.0201 12.41 18.0201 11.8V8.91003C18.0201 5.61003 15.3201 2.91003 12.0201 2.91003Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
        </svg>
      </button>
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
