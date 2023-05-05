<template>
  <div @click="hangleButton" id="paypal-button-container"></div>
  <CPopupPaymentSuccess v-if="isShowPopup" @handle-popup="handleClosePopup" />
</template>

<script setup>
import { onMounted, ref, defineProps } from "vue";
import { loadScript } from "@paypal/paypal-js";
import CPopupPaymentSuccess from "./CPopupPaymentSuccess.vue";
import { v4 as uuidv4 } from "uuid";
const props = defineProps({
  nameRoom: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  paypalRequestProp: {
    type: String,
  },
});

const isShowPopup = ref(false);
const client_id =
  "ASu2CgXspblwQ3wg_4EejqKdpkVmt2BmA2GxIFYOtNA9Xf69O4VsIPb1PXtWw_htFtaWO3kVfyg9CZ9n";

console.log(props.paypalRequestProp);
const orderID = ref("");
onMounted(async () => {
  try {
    const paypal = await loadScript({
      "client-id": client_id,
    });
    const paypalRequest = await uuidv4();
    await paypal
      .Buttons({
        createOrder: function () {
          return fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "PayPal-Request-Id": paypalRequest,
              Authorization:
                "Bearer A21AAKn-Fbei-Mbqrwb1m_uMu6NyD3bA5mxKS3epNY3h756OM6nwqtG5nRJpo79o2ECfqz8SrlB7aAHuYk2aLdOBWJpibyN4A",
            },
            body: JSON.stringify({
              intent: "CAPTURE",
              purchase_units: [
                {
                  items: [
                    {
                      name: props.nameRoom,
                      description: props.description,
                      quantity: "1",
                      unit_amount: {
                        currency_code: "USD",
                        value: props.price,
                      },
                    },
                  ],
                  amount: {
                    currency_code: "USD",
                    value: props.price,
                    breakdown: {
                      item_total: {
                        currency_code: "USD",
                        value: props.price,
                      },
                    },
                  },
                },
              ],
              application_context: {
                return_url: "https://example.com/return",
                cancel_url: "https://example.com/cancel",
              },
            }),
          })
            .then((response) => response.json())
            .then((order) => (orderID.value = order.id));
        },
        onApprove: (data) => {
          return fetch(
            `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID.value}/capture`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "PayPal-Request-Id": "7b92603e-77ed-4896-8e78-5dea2050476a",
                Authorization:
                  "Bearer A21AAKn-Fbei-Mbqrwb1m_uMu6NyD3bA5mxKS3epNY3h756OM6nwqtG5nRJpo79o2ECfqz8SrlB7aAHuYk2aLdOBWJpibyN4A",
              },
              body: JSON.stringify({
                amount: {
                  currency_code: "USD",
                  value: props.price,
                },
                is_final_capture: true,
              }),
            }
          )
            .then((response) => response.json())
            .then((orderData) => {
              console.log(
                "Capture result",
                orderData,
                JSON.stringify(orderData, null, 2)
              );
              isShowPopup.value = true;
              const transaction =
                orderData.purchase_units[0].payments.captures[0];
              console.log(
                "Transaction " +
                  transaction.status +
                  ": " +
                  transaction.id +
                  "\n\nSee console for all available details"
              );
            });
        },
        style: {
          // Adapt to your needs
          layout: "vertical",
          color: "gold",
          shape: "rect",
          label: "paypal",
        },
        fundingSource: paypal.FUNDING.PAYPAL,
      })
      .render("#paypal-button-container");
  } catch (error) {
    console.log(error);
  }
});
const emits = defineEmits(["pop-up", "close-popup"]);
const handleClosePopup = () => {
  emits("pop-up");
};
const hangleButton = () => {
  emits("close-popup");
};
</script>

<style lang="scss" scoped></style>
