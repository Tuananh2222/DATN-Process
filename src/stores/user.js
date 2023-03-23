import { reactive } from "vue";

// import { User } from '@/utils/types/general'
import { defineStore } from "pinia";
import { getAuth, signOut } from "firebase/auth";
import router from "@/router";

export const useUserStore = defineStore("user", () => {
  const auth = getAuth();
  const state = reactive({
    name: "",
    email: "",
    phone: "",
  });
  

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Thực hiện các hành động sau khi đăng xuất thành công
        router.push({
          path: "/",
          name: "Home",
          component: () => import("@/pages/HomeScreen.vue"),
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return { state, handleLogout, auth };
});
export default useUserStore;
