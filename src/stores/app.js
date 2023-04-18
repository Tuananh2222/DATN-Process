import { reactive } from "vue";
import { defineStore } from "pinia";
import { ToastMode } from "@/utils/Resource/Enum";

export const useAppStore = defineStore("app", () => {
  const state = reactive({
    //status slide bar
    isShowSlidebar: true,
    //status loading
    isLoading: false,
    //thông báo toast
    toastMessage: "",
    //kiểu toast
    typeToast: ToastMode.SUCCESS,
  });
  return { state };
});
export default useAppStore;
