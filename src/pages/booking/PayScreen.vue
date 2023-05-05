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
    <CPaypal />
  </form>
  <DefaultFooter />
  <CPopupPaymentSuccess />
</template>

<script setup>
import CPaypal from "@/components/elements/CPaypal.vue";
import CPopupPaymentSuccess from "@/components/elements/CPopupPaymentSuccess.vue";
import DefaultFooter from "@/components/generals/defaultFooter.vue";
import DefaultHeader from "@/components/generals/defaultHeader.vue";

import router from "@/router";
import axios from "axios";
import { ref } from "vue";

const cardNumber = ref("");
const expDate = ref("");
const cvv = ref("");
const props = defineProps({
  // Some kind of reference if you like
  reference: Object,
});
const submitForm = () => {
  axios
    .post(
      "https://api.sandbox.paypal.com/v1/payments/payment",
      {
        intent: "sale",
        payer: {
          payment_method: "paypal",
        },
        transactions: [
          {
            amount: {
              total: "10.00",
              currency: "USD",
            },
            description: "Example transaction",
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${paypalAccessToken}`,
        },
      }
    )
    .then((response) => {
      console.log("Created payment ID:", response.data.id);
    })
    .catch((error) => {
      console.error("Error creating payment:", error.response.data);
    });
};
</script>

<style lang="scss" scoped></style>
