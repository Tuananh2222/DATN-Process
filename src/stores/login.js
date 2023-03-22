import { reactive } from "vue";
import { email, helpers, required, minLength } from "@vuelidate/validators";
import { passwordValidate } from "@/utils/constant/validate";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import _ from "lodash";
import { useValidate } from "@/composables/useValidate";
import { defineStore } from "pinia";
import router from "@/router";

const defaultState = {
  hasErrors: {
    email: "",
    password: "",
  },
  email: "",
  password: "",
  isAuthenticated: false,
};

export const useLoginStore = defineStore("login", () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const state = reactive({
    ..._.cloneDeep(defaultState),
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



  const handleSignIn = async () => {
    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        router.push({
          path: "/",
          name: "Home",
          component: () => import("@/pages/HomeScreen.vue"),
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleSignInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, credential, email);
        // ...
      });
  };

  return {
    state,
    checkField,
    $v,
    checkAllField,
    isValidForm,
    handleSignIn,
    handleSignInWithGoogle,
  };
});
export default useLoginStore;
