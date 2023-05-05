import { reactive } from "vue";
import { defineStore } from "pinia";
import { ToastMode } from "@/utils/Resource/Enum";
import UserAPI from "@/api/UserAPI";

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
    detailUser: {},
  });
  const setStateLoading = (stateIn) => {
    state.isLoading = stateIn;
  };
  const initWebsite = async () => {
    try {
      const uid = sessionStorage.getItem("uid");
      const detailInfoUser = (await UserAPI.getUserByUUID(uid)).data;
      if (detailInfoUser) {
        state.detailUser = detailInfoUser;
      }
      console.log(state.detailUser)
    } catch (error) {
      console.log(error);
    }
  };
  return { state, setStateLoading, initWebsite };
});
export default useAppStore;
