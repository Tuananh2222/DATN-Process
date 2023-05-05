import { reactive } from "vue";

// import { User } from '@/utils/types/general'
import { defineStore } from "pinia";
import { getAuth, signOut } from "firebase/auth";
import router from "@/router";
import UserAPI from "@/api/UserAPI";
import { UserInsert } from "@/Entities/User";

export const useUserStore = defineStore("user", () => {
  const auth = getAuth();
  const state = reactive({
    detailInfoUser: null,
    user: null,
    uid: null,
    notifications: []
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
        console.log(errorCode, errorMessage);
      });
  };

  const getUser = async () => {
    state.uid = sessionStorage.getItem("uid");
    state.detailInfoUser = (await UserAPI.getUserByUUID(state.uid)).data;
    console.log(state.detailInfoUser)
  };

  const handleEditUser = async (user, id) => {
    await UserAPI.editUser(user, id);
  };
  return { state, handleLogout, getUser, handleEditUser };
});
export default useUserStore;
