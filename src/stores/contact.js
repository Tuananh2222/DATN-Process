import { email, required, helpers } from "@vuelidate/validators";
import { defineStore } from "pinia";
import { useValidate } from "@/composables/useValidate";
import { reactive } from "vue";

export const useContactStore = defineStore("contact", () => {
  const state = reactive({
    username: "",
    tel: "",
    email: "",
    hasErrors: {
      username: "",
      tel: "",
      email: "",
    },
  });

  const rules = {
    username: {
      required: helpers.withMessage("Vui lòng nhập đầy đủ họ tên", required),
    },
    email: {
      required: helpers.withMessage("Vui lòng nhập email", required),
      email: helpers.withMessage(
        "Vui lòng nhập đúng định dạng của email",
        email
      ),
    },
    tel: {
      required: helpers.withMessage("Vui lòng nhập số điện thoại", required),
    },
  };
  const { checkField, $v, checkAllField, isValidForm } = useValidate(
    rules,
    state
  );

  return { state, checkField, $v, checkAllField, isValidForm };
});
export default useContactStore;
