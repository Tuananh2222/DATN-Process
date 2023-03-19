import { reactive } from 'vue'
import { email, required, maxLength, helpers } from '@vuelidate/validators'
import { contactState } from '@/utils/types/state/contact'
import { defineStore } from 'pinia'
import { useValidate } from '@/composables/useValidate'
import useApiCommon from '@/composables/useApiCommon'

export const useContactStore = defineStore('about', () => {
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

