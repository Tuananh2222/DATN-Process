<template>
  <div class="success-payment-popup">
    <h2 class="enter-title-success-payment">Successful payment</h2>
    <div class="registration-success-payment">
      <p class="registration-text-success-payment">
        Thanks for paying! Wish you have a great experience with us
      </p>
    </div>
    <div class="button-wrap-success-payment">
      <a
        href="#"
        class="enter-profile-button-success-payment"
        @click="handlePopup"
        >Thank you</a
      >
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["handle-popup"]);
const handlePopup = () => {
    emits("handle-popup")
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.success-payment-popup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 436px;
  height: auto;
  background-color: #fff;
  box-shadow: 0px 0px 1px 1px;
  border-radius: 6px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 36px 44px 36px 44px;
}

.enter-title-success-payment {
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  position: relative;
}
.enter-title-success-payment::before {
  content: "";
  width: 220px;
  height: 130px;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 52px;
  left: 64px;
}
.enter-profile-button-success-payment {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 288px;
  height: 55px;
  border-radius: 6px;
  border: none;
  outline: none;
  background-color: #8f859e;
  color: #fff;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 0px 14px -6px #8f859e;
}
.button-wrap-success-payment {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.registration-success-payment {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: baseline;
}
.registration-text-success-payment {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #84859e;
  text-align: center;
  margin-bottom: 20px;
  line-height: 20px;
}
</style>
