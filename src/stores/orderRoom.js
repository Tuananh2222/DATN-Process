import { reactive } from "vue";

// import { User } from '@/utils/types/general'
import { defineStore } from "pinia";
import OrderRoom from "@/api/OrderRoom";

export const useOrderRoom = defineStore("orderRoom", () => {
  const state = reactive({
    listOrderRoom: [],
    listDate: [],
    listDataDisabled: []
  });

  const getDataOrder = async () => {
    const data = await OrderRoom.getAllOrderRoom();
    state.listOrderRoom = data.data;
    state.listDate = state.listOrderRoom.map(
      ({ arrivalTime, depatureTime }) => ({ arrivalTime, depatureTime })
    );

    state.listDataDisabled = state.listDate.map((item) => {
      return {
        start: new Date(item.arrivalTime),
        end: new Date(item.depatureTime)
      }
    })
  };

  const formatDate = (array) => {
    const newArray = array.map((obj) => ({
      ...obj,
      arrivalTime: new Date(obj.arrivalTime),
      depatureTime: new Date(obj.depatureTime),
    }));
    return newArray;
  };

  return { state, getDataOrder, formatDate };
});
export default useOrderRoom;
