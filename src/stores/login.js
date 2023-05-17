import { reactive } from "vue";
import { email, helpers, required, minLength } from "@vuelidate/validators";
import { passwordValidate } from "@/utils/constant/validate";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import { useValidate } from "@/composables/useValidate";
import { defineStore } from "pinia";
import router from "@/router";
import useAppStore from "./app";
import { Resource } from "@/utils/Resource/resource";
import { ToastMode } from "@/utils/Resource/Enum";

export const useLoginStore = defineStore("login", () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const state = reactive({
    hasErrors: {
      email: "",
      password: "",
    },
    email: "",
    password: "",
    isAuthenticate: false,
    isAdmin: false,
  });

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
        "Please enter a minimum of eight characters, one uppercase, one lowercase and one number!",
        passwordValidate
      ),
    },
  };

  const { checkField, $v, checkAllField, isValidForm } = useValidate(
    ruleList,
    state
  );

  const appStore = useAppStore();
  const { state: stateApp } = appStore;

  const handleSignIn = async () => {
    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        sessionStorage.setItem("uid", user.uid);
        if (user.email === "vut5441@gmail.com") {
          state.isAdmin = true;
          if (user.emailVerified) {
            router.push("/admin/home");
            state.isAuthenticate = false;
          } else {
            state.isAuthenticate = true;
          }
        } else {
          state.isAdmin = false;
          if (user.emailVerified) {
            router.push("/");
            state.isAuthenticate = false;
          } else {
            state.isAuthenticate = true;
          }
        }

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode || errorMessage) {
          stateApp.toastMessage = Resource.emailNotExist;
          console.log(stateApp.toastMessage);
          stateApp.typeToast = ToastMode.ERROR;
          setTimeout(() => (stateApp.toastMessage = ""), 5000);
        }
        console.log(errorCode);
      });
  };

  const handleSignInWithPopup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then(async (result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          sessionStorage.setItem("uid", user.uid);
          // IdP data available using getAdditionalUserInfo(result)
          // ...
          router.push("/");
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
  const handleSignInWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;

          sessionStorage.setItem("uid", user.uid);
          // IdP data available using getAdditionalUserInfo(result)
          // ...
          router.push("/");
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
          const credential = FacebookAuthProvider.credentialFromError(error);

          // ...
        });
    } catch (error) { }
  };

  return {
    state,
    checkField,
    $v,
    checkAllField,
    isValidForm,
    handleSignIn,
    handleSignInWithPopup,
    handleSignInWithFacebook
  };
});
export default useLoginStore;
