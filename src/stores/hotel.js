import { reactive } from "vue";
import { defineStore } from "pinia";
import RoomAPI from "@/api/RoomAPI";

export const useHotelStore = defineStore("hotel", () => {
    const state = reactive({
        listHotel: [],
        pageNumber: 1,
        pageSize: 9,
        keyword: '',
        roomID: '',
        detailHotel:{}
    });

    const initProcess = async () => {
        state.listHotel = await (await RoomAPI.filter(state.pageSize, state.pageNumber, state.keyword, state.roomID)).data
        state.detailHotel = await (await RoomAPI.geRoomByID(state.roomID)).data
    }


    return { state, initProcess };
});