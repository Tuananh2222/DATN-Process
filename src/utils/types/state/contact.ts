import { email } from '@vuelidate/validators'
export type contactState = {
  username: string
  tel: string
  email: string
  error: string
  hasErrors: {
    username: string
    tel: string
    email: string
  }
}
