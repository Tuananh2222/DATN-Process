import { defineStore } from "pinia";
import { reactive } from "vue";
import EvaluateAPI from "@/api/Evaluate";
import { v4 as uuidv4 } from "uuid";
import useAppStore from "./app";
import { ToastMode } from "@/utils/Resource/Enum";
import { Resource } from "@/utils/Resource/resource";

export const useEvaluateStore = defineStore("evaluate", () => {
  const state = reactive({
    userName: "",
    description: "",
    listEvaluate: [],
  });
  const appStore = useAppStore();
  const { state: stateApp } = appStore;
  const insertEvaluate = async () => {
    try {
      await EvaluateAPI.insertEvaluate({ ...state, evaluateID: uuidv4() }).then(
        () => {
          (state.userName = ""), (state.description = "");
        }
      );
    } catch (error) {
      stateApp.typeToast = ToastMode.ERROR;
      stateApp.toastMessage = Resource.errorMessage;
      setTimeout(() => (stateApp.toastMessage = ""), 3000);
    }
  };

  const getDataEvaluate = async () => {
    try {
      const data = (await EvaluateAPI.getEvaluate()).data;
      state.listEvaluate = data;
    } catch (error) {
      stateApp.typeToast = ToastMode.ERROR;
      stateApp.toastMessage = Resource.errorMessage;
      setTimeout(() => (stateApp.toastMessage = ""), 3000);
    }
  };

  return { state, insertEvaluate, getDataEvaluate };
});
export default useEvaluateStore;
