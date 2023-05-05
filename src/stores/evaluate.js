import { defineStore } from "pinia";
import { reactive } from "vue";
import EvaluateAPI from "@/api/Evaluate";
import { v4 as uuidv4 } from "uuid";

export const useEvaluateStore = defineStore("evaluate", () => {
  const state = reactive({
    userName: "",
    description: "",
    listEvaluate: [],
  });

  const insertEvaluate = async () => {
    await EvaluateAPI.insertEvaluate({ ...state, evaluateID: uuidv4() }).then(() => {
      state.userName ='',
      state.description = ''
    });
    console.log("first");
  };

  const getDataEvaluate = async () => {
    const data = (await EvaluateAPI.getEvaluate()).data
    state.listEvaluate = data
  };

  return { state, insertEvaluate, getDataEvaluate };
});
export default useEvaluateStore;
