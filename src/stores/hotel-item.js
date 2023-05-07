import { reactive } from "vue";

// import { User } from '@/utils/types/general'
import { defineStore } from "pinia";
import Facilities from "@/api/Facilities";
import useAppStore from "./app";

export const useHotelItemStore = defineStore("hotelItem", () => {
  const state = reactive({
    listFacilities: [],
    roomID: "",
  });
  const appStore = useAppStore();
  const { state: stateApp } = appStore;
  const initProcess = async () => {
    try {
      state.listFacilities = await (await Facilities.getAllFacilities()).data;
    } catch (error) {
      stateApp.typeToast = ToastMode.ERROR;
      stateApp.toastMessage = Resource.errorMessage;
      setTimeout(() => (stateApp.toastMessage = ""), 3000);
    }
  };

  return { state, initProcess };
});
