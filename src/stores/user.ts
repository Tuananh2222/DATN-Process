import { computed, reactive, ref } from 'vue'
import { STORE_DATA_USER } from '@/utils/constant/user'
import { TOKEN_KEY } from '@/utils/constant/userStore'
import { User } from '@/utils/types/general'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const token = ref<string>('')
  const isLogin = computed(() => !!token.value)
  const state = reactive<any>({
    user: null,
    creditRegistered: false,
    isJrePointMember: false,
    isJrePointFlag: 0,
  })

  const logout = () => {
    localStorage.removeItem(STORE_DATA_USER)
    token.value = ''
    localStorage.removeItem(TOKEN_KEY)
  }
  return { state, token, isLogin, logout }
})
export default useUserStore

