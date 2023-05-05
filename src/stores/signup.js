import { reactive } from "vue";
import { email, helpers, required, minLength } from "@vuelidate/validators";
import { passwordValidate } from "@/utils/constant/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  fetchSignInMethodsForEmail,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { firebase } from '@firebase/app'
import _ from "lodash";
import { useValidate } from "@/composables/useValidate";
import { defineStore } from "pinia";
import router from "@/router";
import { UserInsert } from "@/Entities/User";
import UserAPI from "@/api/UserAPI";

const defaultState = {
  hasErrors: {
    email: "",
    password: "",
    confirmPassword: "",
  },
  email: "",
  password: "",
  confirmPassword: "",
  isAuthenticated: false,
};

export const useAuthenStore = defineStore("authen", () => {
  const auth = getAuth();

  const state = reactive({
    hasErrors: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    email: "",
    password: "",
    confirmPassword: "",
    isAuthenticated: false,
    showPopup: false,
    isExist: "",
  });
  const confirmPasswordRegex = (value) => {
    return state.password === value;
  };

  const ruleList = {
    email: {
      required: helpers.withMessage("Vui lòng nhập email!", required),
      email: helpers.withMessage("Vui lòng nhập đúng định dạng", email),
    },
    password: {
      required: helpers.withMessage("Vui lòng nhập mật khẩu!", required),
      minLength: helpers.withMessage(
        "Vui lòng nhập tối thiểu 6 ký tự",
        minLength(6)
      ),
      passwordRegex: helpers.withMessage(
        "Vui lòng nhập tối thiểu tám ký tự, một chữ hoa, một chữ thường và một số",
        passwordValidate
      ),
    },
    confirmPassword: {
      required: helpers.withMessage(
        "Vui lòng nhập xác nhận mật khẩu!",
        required
      ),
      confirmPasswordRegex: helpers.withMessage(
        "Xác nhận mật khẩu đang khac với mật khẩu",
        confirmPasswordRegex
      ),
    },
  };

  const { checkField, $v, checkAllField, isValidForm } = useValidate(
    ruleList,
    state
  );

  const resetStateToDefault = () => {
    Object.assign(state, _.cloneDeep(defaultState));
    isValidForm.value = false;
  };

  const handleSignUp = async () => {
    fetchSignInMethodsForEmail(auth, state.email).then((signInMethods) => {
      if (signInMethods.length > 0) {
        state.isExist = "Email đã tồn tại! Vui lòng nhập lại email!";
      } else {
        createUserWithEmailAndPassword(auth, state.email, state.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const userInsert = new UserInsert(user.uid, user.email);
            for (let item of user.providerData) {
              if (item.providerId == "password") {
                sendEmailVerification(user)
                  .then(async () => {
                    // Email verification sent
                    await UserAPI.insertUser(userInsert);
                    state.showPopup = true;
                    router.push("/login");
                  })
                  .catch((error) => {
                    // Handle errors
                    console.log(error);
                  });
              }
            }
            resetStateToDefault();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
          });
      }
    });
  };

  return {
    state,
    handleSignUp,
    checkField,
    $v,
    checkAllField,
    isValidForm,
    resetStateToDefault,
  };
});
export default useAuthenStore;
