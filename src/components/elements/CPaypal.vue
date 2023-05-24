<template>
  <div @click="hangleButton" id="paypal-button-container"></div>
  <CPopupPaymentSuccess v-if="isShowPopup" @handle-popup="handleClosePopup" />
</template>

<script setup>
import { onMounted, ref, defineProps, onBeforeMount } from "vue";
import { loadScript } from "@paypal/paypal-js";
import CPopupPaymentSuccess from "./CPopupPaymentSuccess.vue";
import { v4 as uuidv4 } from "uuid";
import { Buffer } from "buffer";

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
});

const isShowPopup = ref(false);
const client_id =
  "ASu2CgXspblwQ3wg_4EejqKdpkVmt2BmA2GxIFYOtNA9Xf69O4VsIPb1PXtWw_htFtaWO3kVfyg9CZ9n";
const APP_SECRET =
  "EJ5G59H4u6439rJJ7wSSmesq_CrLqlQyd2aMVerchFYRle-BQCm-LjMw3hnnoN4xCTvQCEwbBhZmWKjE";
const handleResponse = async (response) => {
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }

  const errorMessage = await response.text();
  throw new Error(errorMessage);
};
const orderID = ref("");
const access_token = ref("");
const generateAccessToken = async () => {
  const auth = Buffer.from(client_id + ":" + APP_SECRET).toString("base64");
  const response = await fetch(
    `https://api-m.sandbox.paypal.com/v1/oauth2/token`,
    {
      method: "post",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  );

  const jsonData = await handleResponse(response);
  return jsonData.access_token;
};
onBeforeMount(async () => {
  access_token.value = await generateAccessToken();
}),
  onMounted(async () => {
    try {
      const paypal = await loadScript({
        "client-id": client_id,
      });
      console.log(access_token.value)
      const paypalRequest = await uuidv4();
      await paypal
        .Buttons({
          createOrder: function () {
            return fetch(
              "https://api-m.sandbox.paypal.com/v2/checkout/orders",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "PayPal-Request-Id": paypalRequest,
                  Authorization: `Bearer ${access_token.value}`,
                },
                body: JSON.stringify({
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      items: [
                        {
                          name: props.nameRoom,
                          description: "Need to payments",
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
              }
            )
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
                  Authorization: `Bearer ${access_token.value}`,
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
