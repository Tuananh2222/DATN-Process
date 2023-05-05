import { reactive } from "vue";
import { v4 as uuidv4 } from "uuid";
// import { User } from '@/utils/types/general'
import { defineStore } from "pinia";
import OrderRoom from "@/api/OrderRoom";
import useAppStore from "./app";
import { addDoc, collection } from "firebase/firestore";
import { dbRealTime } from "@/firebaseConfig";
import dayjs from "dayjs";

export const useOrderRoom = defineStore("orderRoom", () => {
  const state = reactive({
    listOrderRoom: [],
    listDate: [],
    listDataDisabled: [],
    orderRoom: {
      orderRoomID: uuidv4(),
      userID: "",
      roomID: "",
      arrivalTime: null,
      depatureTime: null,
      price: 0,
      statusOrder: 0,
      statusPayment: 0,
      orderDate: new Date(),
    },
  });

  const appStore = useAppStore();

  const { state: stateApp } = appStore;

  const getDataOrder = async () => {
    const roomID = sessionStorage.getItem("roomID");
    const data = await OrderRoom.getOrderRoomByRoomID(roomID);
    state.listOrderRoom = data.data;
    state.listDate = state.listOrderRoom.map(
      ({ arrivalTime, depatureTime }) => ({ arrivalTime, depatureTime })
    );
    state.listDataDisabled = state.listDate.map((item) => {
      return {
        start: new Date(item.arrivalTime),
        end: new Date(item.depatureTime),
      };
    });
  };

  const formatDate = (array) => {
    const newArray = array.map((obj) => ({
      ...obj,
      arrivalTime: new Date(obj.arrivalTime),
      depatureTime: new Date(obj.depatureTime),
    }));
    return newArray;
  };

  const checkDateRange = (startDate, endDate, rangeArray) => {
    for (let i = 0; i < rangeArray.length; i++) {
      const rangeStart = rangeArray[i].start;
      const rangeEnd = rangeArray[i].end;

      // Kiểm tra xem khoảng thời gian đã chọn có nằm trong khoảng thời gian của đối tượng trong mảng không
      if (
        (startDate >= rangeStart && startDate <= rangeEnd) ||
        (endDate >= rangeStart && endDate <= rangeEnd) ||
        (startDate < rangeStart && endDate > rangeEnd)
      ) {
        return false;
      }
    }
    return true;
  };

  const submitForm = async () => {
    try {
      state.orderRoom.userID = stateApp.detailUser.userID;
      await OrderRoom.insertOrderRoom(state.orderRoom)
        .then(async () => {
          await addDoc(collection(dbRealTime, "notification"), {
            message:
              "You have made a successful reservation. Thanks for visiting ❤️",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatePayment = async () => {
    try {
      state.orderRoom.statusPayment = 1;
      submitForm();
    } catch (error) {}
  };

  return {
    state,
    getDataOrder,
    formatDate,
    submitForm,
    checkDateRange,
    updateStatePayment,
  };
});
export default useOrderRoom;
