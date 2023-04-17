<template>
  <DefaultHeader />
  <form class="payment-form" @submit.prevent="submitForm">
    <div class="form-group">
      <label for="cardNumber">Số thẻ tín dụng:</label>
      <input type="text" name="cardNumber" v-model="cardNumber" required />
    </div>
    <div class="form-group">
      <label for="expDate">Ngày hết hạn:</label>
      <input type="text" name="expDate" v-model="expDate" required />
    </div>
    <div class="form-group">
      <label for="cvv">Mã CVV:</label>
      <input type="text" name="cvv" v-model="cvv" required />
    </div>
    <button type="submit">Thanh toán</button>
  </form>
  <DefaultFooter />
</template>

<script setup>
import DefaultFooter from "@/components/generals/defaultFooter.vue";
import DefaultHeader from "@/components/generals/defaultHeader.vue";
import router from "@/router";
import { ref } from "vue";

const cardNumber = ref("");
const expDate = ref("");
const cvv = ref("");

const submitForm = () => {
  // Xử lý thanh toán trực tuyến ở đây
  // ...
  // Sau khi thanh toán thành công, chuyển sang trang kết quả
  router.push("/payment-success");
};
</script>

<style lang="scss" scoped></style>
