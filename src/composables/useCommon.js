import { SSR_DEFAULT_SCREEN_SIZE_HEIGHT, SSR_DEFAULT_SCREEN_SIZE_WIDTH } from '@/utils/constant'
import { BREAKPOINT, DATE_FORMAT } from '@/utils/constant'
import dayjs from 'dayjs'
import { computed, reactive } from 'vue'
export default function () {

  const state = reactive({
    screenSize: {
      width: process.client ? window.innerWidth : SSR_DEFAULT_SCREEN_SIZE_WIDTH,
      height: process.client ? window.innerHeight : SSR_DEFAULT_SCREEN_SIZE_HEIGHT,
    },
  })

  const formatDate = (date, format = DATE_FORMAT) => {
    return date ? dayjs().format(format) : ''
  }

  const isMobileResolution = computed(() => state.screenSize.width < BREAKPOINT)

  const formatNumber = (number) => {
    return number ? new Intl.NumberFormat().format(Number(number)) : 0
  }

  

  const copyToClipBoard = (textToCopy) => {
    if (process.client) {
      const tmpTextField = document.createElement('textarea')
      tmpTextField.textContent = textToCopy
      tmpTextField.setAttribute('style', 'position:absolute; right:200%;')
      document.body.appendChild(tmpTextField)
      tmpTextField.select()
      tmpTextField.setSelectionRange(0, 99999) /*For mobile devices*/
      document.execCommand('copy')
      tmpTextField.remove()
    }
  }



  const onWindowResize = () => {
    const { innerWidth, innerHeight } = window
    state.screenSize.width = innerWidth
    state.screenSize.height = innerHeight
  }

  onMounted(() => {
    if (typeof window === 'undefined') return
    window.addEventListener('resize', onWindowResize)
  })

  onUnmounted(() => {
    if (typeof window === 'undefined') return
    window.removeEventListener('resize', onWindowResize)
  })

  

  const scrollTo = (top, behavior) => {
    if (process.client) {
      window.scrollTo({ top: top || 0, behavior })
    }
  }

  return {
    state,
    isMobileResolution,
    formatNumber,
    formatDate,
    copyToClipBoard,
    scrollTo,
  }
}
