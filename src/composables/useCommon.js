import {
  SSR_DEFAULT_SCREEN_SIZE_HEIGHT,
  SSR_DEFAULT_SCREEN_SIZE_WIDTH,
} from "@/utils/constant";
import { BREAKPOINT, DATE_FORMAT } from "@/utils/constant";
import dayjs from "dayjs";
import { computed, reactive } from "vue";
export default function () {
  const state = reactive({
    screenSize: {
      width: process.client ? window.innerWidth : SSR_DEFAULT_SCREEN_SIZE_WIDTH,
      height: process.client
        ? window.innerHeight
        : SSR_DEFAULT_SCREEN_SIZE_HEIGHT,
    },
  });

  const isMobileResolution = computed(
    () => state.screenSize.width < BREAKPOINT
  );

  const formatNumber = (number) => {
    return number ? new Intl.NumberFormat().format(Number(number)) : 0;
  };


  /**
   * Random màu
   * @returns
   */
  const randomColor = () => {
    const colors = [
      "red",
      "green",
      "yellow",
      "blue",
      "teal",
      "coral",
      "brown",
      "tomato",
    ];
    const colorIndex = Math.floor(Math.random() * 8);

    return colors[colorIndex];
  };

  const onWindowResize = () => {
    const { innerWidth, innerHeight } = window;
    state.screenSize.width = innerWidth;
    state.screenSize.height = innerHeight;
  };

  onMounted(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("resize", onWindowResize);
  });

  onUnmounted(() => {
    if (typeof window === "undefined") return;
    window.removeEventListener("resize", onWindowResize);
  });

  const scrollTo = (top, behavior) => {
    if (process.client) {
      window.scrollTo({ top: top || 0, behavior });
    }
  };

  return {
    state,
    isMobileResolution,
    formatNumber,
    scrollTo,
    randomColor
  };
}
