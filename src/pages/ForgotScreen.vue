<template>
  <DefaultHeader />
  <CPopupConfirm
    v-if="isShowPopupForgot"
    @close-popup="handleHidePopup"
    :text-title="'Hãy xác nhận Email'"
    :description="'Chúng tôi đã gửi liên kết đặt lại mật khẩu trong email!'"
  />
  <div class="wrapper">
    <div class="cart-forgot-password">
      <section>
        <div class="card-left">
          <div class="title">Password Retrieval</div>
          <TextBox
            v-model.trim="state.email"
            :err-msg="state.hasErrors.email"
            :required="true"
            :placeholder="'Email'"
            @focusOut="forgotStore.checkField('email')"
          />
          <div class="btn-wrapper">
            <button
              @click="submitForgotPassword()"
              :class="isValidForm ? '' : 'disable'"
            >
              Confirm
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
  <DefaultFooter />
</template>

<script setup>
import CPopupConfirm from "@/components/elements/CPopupConfirm.vue";
import { ref } from "vue";
import useForgotStore from "@/stores/forgot";
import { storeToRefs } from "pinia";
import TextBox from "@/components/elements/textBox.vue";
import DefaultHeader from "@/components/generals/defaultHeader.vue";
import DefaultFooter from "@/components/generals/defaultFooter.vue";

const forgotStore = useForgotStore();
const { state, handleForgotPassword } = forgotStore;
const { isValidForm } = storeToRefs(forgotStore);

const isShowPopupForgot = ref(false);
const handleHidePopup = () => {
  isShowPopupForgot.value = true;
};
const submitForgotPassword = () => {
  handleForgotPassword();
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80vh;
  background: url(@/public/image/login/1.jpg) no-repeat center;
  background-size: cover;
}

.cart-forgot-password {
  display: flex;
  align-items: center;
}

.title {
  //Position
  padding-top: 30px;
  padding-bottom: 15px;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}
button {
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
  width: 50%;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

button.disable {
  background: #bbb;
  color: #ccc;
  pointer-events: none;
  border: 1px solid #ccc;
}
</style>
