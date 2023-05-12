import { reactive } from "vue";
import { email, helpers, required, minLength } from "@vuelidate/validators";
import { passwordValidate } from "@/utils/constant/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  fetchSignInMethodsForEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { firebase } from "@firebase/app";
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
      required: helpers.withMessage("Please enter email!", required),
      email: helpers.withMessage("Please enter the correct format!", email),
    },
    password: {
      required: helpers.withMessage("Please enter password!", required),
      minLength: helpers.withMessage(
        "Please enter at least 6 characters!",
        minLength(6)
      ),
      passwordRegex: helpers.withMessage(
        "Please enter a minimum of eight characters, one uppercase, one lowercase and one number",
        passwordValidate
      ),
    },
    confirmPassword: {
      required: helpers.withMessage(
        "Please enter password confirmation!",
        required
      ),
      confirmPasswordRegex: helpers.withMessage(
        "Confirm password is different from password!",
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

  const handleSignUpWithPopup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then(async (result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          const email = "";
          const userInsert = new UserInsert(user.uid, email);
          await UserAPI.insertUser({
            ...userInsert,
            userName: user.displayName,
          });
          sessionStorage.setItem("uid", user.uid);
          console.log("first", user);
          // IdP data available using getAdditionalUserInfo(result)
          // ...
          router.push("/login");
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          // const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    } catch (error) { }
  };

  return {
    state,
    handleSignUp,
    checkField,
    $v,
    checkAllField,
    isValidForm,
    resetStateToDefault,
    handleSignUpWithPopup,
  };
});
export default useAuthenStore;
