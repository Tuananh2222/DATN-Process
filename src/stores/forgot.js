import { reactive } from "vue";
import { email, helpers, required } from "@vuelidate/validators";

import { sendPasswordResetEmail } from "firebase/auth";

import { useValidate } from "@/composables/useValidate";
import { defineStore } from "pinia";
import useAppStore from "./app";

export const useForgotStore = defineStore("forgot", () => {
  const state = reactive({
    hasErrors: {
      email: "",
    },
    email: "",
  });

  const ruleList = {
    email: {
      required: helpers.withMessage("Vui lòng nhập email!", required),
      email: helpers.withMessage("Vui lòng nhập đúng định dạng", email),
    },
  };

  const { checkField, $v, checkAllField, isValidForm } = useValidate(
    ruleList,
    state
  );
  const appStore = useAppStore();
  const { state: stateApp } = appStore;
  const handleForgotPassword = async () => {
    sendPasswordResetEmail(state.email)
      .then(() => {
        // Email đặt lại mật khẩu đã được gửi.
      })
      .catch(function (error) {
        stateApp.typeToast = ToastMode.ERROR;
        stateApp.toastMessage = Resource.errorMessage;
        setTimeout(() => (stateApp.toastMessage = ""), 3000);
      });
  };

  return {
    state,
    checkField,
    $v,
    checkAllField,
    isValidForm,
    handleForgotPassword,
  };
});
export default useForgotStore;
