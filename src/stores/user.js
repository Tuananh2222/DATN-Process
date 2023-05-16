import { reactive } from "vue";

// import { User } from '@/utils/types/general'
import { defineStore } from "pinia";
import { getAuth, signOut } from "firebase/auth";
import router from "@/router";
import UserAPI from "@/api/UserAPI";
import { UserInsert } from "@/Entities/User";
import useAppStore from "./app";
import { ToastMode } from "@/utils/Resource/Enum";
import { Resource } from "@/utils/Resource/resource";

export const useUserStore = defineStore("user", () => {
  const auth = getAuth();
  const state = reactive({
    detailInfoUser: null,
    user: null,
    uid: null,
    notifications: [],
  });

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Xóa cookie chứa thông tin đăng nhập của người dùng
        sessionStorage.removeItem("uid");
        // Thực hiện các hành động sau khi đăng xuất thành công
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const appStore = useAppStore();
  const { state: stateApp } = appStore;
  const getUser = async () => {
    try {
      state.uid = sessionStorage.getItem("uid");
      if (!state.uid) {
        router.push("/login")
      }
      else {
        state.detailInfoUser = (await UserAPI.getUserByUUID(state.uid)).data;
      }
    } catch (error) {
      stateApp.typeToast = ToastMode.ERROR;
      stateApp.toastMessage = Resource.errorMessage;
      setTimeout(() => (stateApp.toastMessage = ""), 3000);
    }
  };

  const handleEditUser = async (user, id) => {
    try {
      await UserAPI.editUser(user, id);
    } catch (error) {
      stateApp.typeToast = ToastMode.ERROR;
      stateApp.toastMessage = Resource.errorMessage;
      setTimeout(() => (stateApp.toastMessage = ""), 3000);
    }
  };
  return { state, handleLogout, getUser, handleEditUser };
});
export default useUserStore;
