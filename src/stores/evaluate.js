import { defineStore } from "pinia";
import { reactive } from "vue";
import EvaluateAPI from "@/api/Evaluate";
import { v4 as uuidv4 } from "uuid";

export const useEvaluateStore = defineStore("evaluate", () => {
  const state = reactive({
    userName: "",
    description: "",
  });

  const insertEvaluate = async () => {
    await EvaluateAPI.insertEvaluate({...state,evaluateID: uuidv4()});
    console.log('first')
  };

  return { state, insertEvaluate };
});
export default useEvaluateStore;
