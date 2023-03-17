import { reactive } from 'vue'
import { email, required, maxLength, helpers } from '@vuelidate/validators'
import axios from 'axios'
import { contactState } from '~~/utils/types/state/contact'

export const useContactStore = defineStore('about', () => {
  const { $axios } = useNuxtApp()
  const state = reactive<contactState>({
    username: '',
    tel: '',
    email: '',
    hasErrors: {
      username: '',
      tel: '',
      email: '',
    },
    error: '',
  })

  const rules = {
    username: {
      required: helpers.withMessage('Vui lòng nhập đầy đủ họ tên', required),
    },
    email: {
      required: helpers.withMessage('Vui lòng nhập email', required),
      email: helpers.withMessage('Vui lòng nhập đúng định dạng của email', email),
    },
    tel: {
      required: helpers.withMessage('Vui lòng nhập số điện thoại', required),
    },
  }
  const { checkField, $v, checkAllField, isValidForm } = useValidate(rules, state)

  const { handleAPICommon } = useApiCommon()

  return { state, checkField, $v, checkAllField, isValidForm }
})
export default useContactStore

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useContactStore, import.meta.hot))
}
