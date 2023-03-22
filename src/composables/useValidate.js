import useVuelidate from '@vuelidate/core'
import lodash from 'lodash'
import { ref } from 'vue'
const { isEmpty } = lodash

export const useValidate = (rules, state) => {
  const $v = useVuelidate(rules, state)

  const isValidForm = ref(true)

  const checkField = async (name) => {
    const formKeys = Object.keys(rules)
    if (formKeys.includes(name)) {
      await $v.value[name].$validate()
      if (!isEmpty($v.value[name].$errors)) {
        state.hasErrors[name] = $v.value[name].$errors[0].$message
      } else {
        state.hasErrors[name] = ''
      }
    }
    isValidForm.value = await $v.value.$validate()
    console.log(isValidForm.value)
  }

  const checkAllField = async () => {
    const isValid = await $v.value.$validate()
    if (!isValid) {
      const formKeys = Object.keys(rules)
      formKeys.forEach((nameKey) => {
        checkField(nameKey)
      })
    }
    isValidForm.value = true
    return isValid
  }
  return { checkField, $v, checkAllField, isValidForm }
}
