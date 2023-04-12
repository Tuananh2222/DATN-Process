import { reactive } from "vue";

// import { User } from '@/utils/types/general'
import { defineStore } from "pinia";
import { getAuth, signOut } from "firebase/auth";
import router from "@/router";
import UserAPI from "@/api/UserAPI";

export const useUserStore = defineStore("user", () => {
  const auth = getAuth();
  const state = reactive({
    detailInfoUser: null,
    user:null,
    uid:null
  });
  

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Thực hiện các hành động sau khi đăng xuất thành công
        router.push({
          path: "/",
          name: "Home",
          component: () => import("@/pages/homeScreen.vue"),
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  
  const getUser = async() => {
    state.uid = state.user.currendUser
    state.detailInfoUser = await (await UserAPI.getUserByUUID(state.uid))
  }
  return { state, handleLogout,getUser };
});
export default useUserStore;
