import { reactive } from 'vue'
import { email, helpers, required, minLength } from '@vuelidate/validators'
import { passwordValidate } from '~~/utils/constant/validate'
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

import _ from 'lodash'

const defaultState = {
  hasErrors: {
    email: '',
    password: '',
    confirmPassword: '',
  },
  email: '',
  password: '',
  confirmPassword: '',
  isAuthenticated: false,
  message: '',
}

export const useAuthenStore = defineStore('authen', () => {
  const { handleAPICommon } = useApiCommon()
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  const state = reactive({
    ..._.cloneDeep(defaultState),
  })
  const confirmPasswordRegex = (value: string) => {
    return state.password === value
  }

  const ruleList = {
    email: {
      required: helpers.withMessage('Vui lòng nhập email!', required),
      email: helpers.withMessage('Vui lòng nhập đúng định dạng', email),
    },
    password: {
      required: helpers.withMessage('Vui lòng nhập mật khẩu!', required),
      minLength: helpers.withMessage('Vui lòng nhập tối thiểu 6 ký tự', minLength(6)),
      passwordRegex: helpers.withMessage(
        'Vui lòng nhập tối thiểu tám ký tự, một chữ hoa, một chữ thường và một số',
        passwordValidate
      ),
    },
    confirmPassword: {
      required: helpers.withMessage('Vui lòng nhập xác nhận mật khẩu!', required),
      confirmPasswordRegex: helpers.withMessage('Xác nhận mật khẩu đang khac với mật khẩu', confirmPasswordRegex),
    },
  }

  const { checkField, $v, checkAllField, isValidForm } = useValidate(ruleList, state)

  const resetStateToDefault = () => {
    Object.assign(state, _.cloneDeep(defaultState))
    isValidForm.value = false
  }

  const handleSignUp = async () => {
    await handleAPICommon(handleSignUpProcess)
  }
  const handleSignIn = async () => {
    await handleAPICommon(handleSignInProcess)
  }

  const handleSignUpProcess = async () => {
    createUserWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        debugger
        // Signed in
        const user = userCredential.user
        console.log(user)
        const providerId = userCredential.providerId
        sendEmailVerification(user)
          .then(() => {
            // Email verification sent
            state.isAuthenticated = true
          })
          .catch((error) => {
            // Handle errors
            console.log(error)
          })
        if (providerId === 'password') {
          // if()
        } else if (providerId === 'google.com') {
          // User signed up using Google
          console.log('Signed up with Google')
        } else if (providerId === 'facebook.com') {
          // User signed up using Facebook
          console.log('Signed up with Facebook')
        }
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
      })
  }

  const handleSignInProcess = async () => {
    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        navigateTo('/')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  const handleSignInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        // const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  return {
    state,
    handleSignUp,
    handleSignUpProcess,
    checkField,
    $v,
    checkAllField,
    isValidForm,
    resetStateToDefault,
    handleSignIn,
  }
})
export default useAuthenStore

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthenStore, import.meta.hot))
}
