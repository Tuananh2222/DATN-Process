import { useGeneralStore } from '@/stores/general'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, Axios, HttpStatusCode } from 'axios'

export default function () {
  const { actionLoading } = useGeneralStore()

  const handleAPICommon = async (actionOrigin) => {
    // start loading
    actionLoading(true)
    try {
      await actionOrigin()
    } catch (e) {
      //sử lý lỗi common 401, 500, >400
      if (e.response && axios.isAxiosError(e)) {
        const errorCode = e.response.status
        if (errorCode === 401) {
          console.log('actionAuthPopup(true)')
        } else {
          // Other api response errors
          console.log('actionSystemErrorPopup(true)')
        }
      } else {
        console.log('actionSystemErrorPopup(true)')
      }
      return e
    } finally {
      // stop loading
      actionLoading(false)
    }
  }

  return {
    // callApiSync,
    // callApiAsync,
    handleAPICommon,
  }
}
