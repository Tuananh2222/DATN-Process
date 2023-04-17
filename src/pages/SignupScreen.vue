<template>
  <DefaultHeader />
  <CPopupConfirm
    v-if="isShowPopup"
    @close-popup="handleHidePopup"
    :text-title="'Xác nhận Email'"
    :description="'Bạn đã tạo tài khoản thành công! Vui lòng xác nhận email!'"
  />
  <CPopupConfirm
    v-if="state.isExist"
    @close-popup="handleHidePopupError"
    :text-title="'Có lỗi xảy ra!'"
    :description="state.isExist"
  />
  <div class="wrapper">
    <div class="card">
      <section>
        <div class="card-left">
          <div class="title">Sign up</div>
          <TextBox
            v-model.trim="state.email"
            :err-msg="state.hasErrors.email"
            :required="true"
            :placeholder="'Email'"
            @focusOut="authenStore.checkField('email')"
          />
          <TextBox
            v-model.trim="state.password"
            :err-msg="state.hasErrors.password"
            :required="true"
            :placeholder="'Password'"
            type="password"
            @focusOut="authenStore.checkField('password')"
          />
          <TextBox
            v-model.trim="state.confirmPassword"
            :err-msg="state.hasErrors.confirmPassword"
            :placeholder="'Comfirm Password'"
            type="password"
            @focusOut="authenStore.checkField('confirmPassword')"
          />
          <div class="btn-wrapper">
            <button
              @click="submitSignup()"
              :class="isValidForm ? '' : 'disable'"
            >
              Sign Up
            </button>
          </div>
          <div class="sign-up">
            Already have an account? <a @click="handleSignin()">Log in</a>
          </div>
        </div>
      </section>
    </div>
  </div>
  <DefaultFooter />
</template>

<script setup>
import CPopupConfirm from "@/components/elements/CPopupConfirm.vue";
import TextBox from "@/components/elements/textBox.vue";
import router from "@/router";
import { useAuthenStore } from "@/stores/signup";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import DefaultHeader from "@/components/generals/defaultHeader.vue";
import DefaultFooter from "@/components/generals/defaultFooter.vue";

let isShowPopup = ref(false);

const authenStore = useAuthenStore();
const { state, handleSignUp } = authenStore;
const { isValidForm } = storeToRefs(authenStore);
const submitSignup = () => {
  handleSignUp();
  isShowPopup.value = state.showPopup;
};
const handleSignin = () => {
  router.push("/login");
};

const handleHidePopup = () => {
  isShowPopup.value = false;
};

const handleHidePopupError = () => {
  state.isExist = "";
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

.card {
  //Sizing
  width: 30%;
  height: 100%;
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

.socials {
  //Position
  display: flex;
  flex-direction: row;
  gap: 16px;

  //Font
  color: black;
  font-weight: 400;
  font-size: 16px;

  svg {
    margin-right: 10.94px;
  }
}

.facebook,
.google {
  //Position
  display: flex;
  justify-content: center;
  align-items: center;

  //Sizing
  width: 207px;
  height: 55px;

  //Font
  color: black;
  font-size: 16px;
  font-weight: 400;

  //Background
  background: #ffffff;
  border: 1px solid #cad6e4;
  border-radius: 5px;
}

.sign-up {
  //Position
  padding-top: 20px;
  width: 55%;
  margin: 0 auto;

  //Font
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;

  a {
    color: #02c0ff;
    cursor: pointer;
  }
  a:hover {
    color: #046586;
  }
}

.next:hover,
.facebook:hover,
.google:hover {
  cursor: pointer;
  opacity: 0.8;
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
