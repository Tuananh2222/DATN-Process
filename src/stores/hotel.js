import { reactive } from "vue";
import { defineStore } from "pinia";
import RoomAPI from "@/api/RoomAPI";
import useCommon from "@/composables/useCommon";

export const useHotelStore = defineStore("hotel", () => {
    const state = reactive({
        //số bản ghi trên một trang
        pageSize: 10,
        //trang hiện tại
        pageNumber: 1,
        //tổng số record
        totalRecord: 100,
        //tổng số trang
        totalPage: 100,
        roomsFilter: '',
        //mảng page number sẽ render
        pageNumberRender: [],
        //dữ liệu
        data: [],
        //mảng id được chọn
        idSelected: [],
        //status chọn tất cả
        isSelectAll: false,
        //status ẩn hiện của chức năng xóa nhiều
        isShowInteractMulti: false,
    });
    const { getListPageNumber } = useCommon();
    const loadDataRoom = () => {
        try {
            state.idSelected = []
            state.isSelectAll = false
            const res = RoomAPI.filter(state.pageSize, state.pageNumber)
            const { totalRecord, totalPage, data } = res.data
            state.data = data
            state.totalRecord = totalRecord
            state.totalPage = totalPage
            state.pageNumberRender = getListPageNumber(totalPage, state.pageNumber)
        } catch (error) {
            console.log(error)
        }

    }
    const selectItem = (id) => {
        if (state.idSelected.includes(id))
            state.idSelected = state.idSelected.filter(i => i != id)
        else
            state.idSelected.push(id)

        if (state.idSelected.length == state.data.length)
            state.isSelectAll = true
        else
            state.isSelectAll = false

        if (state.idSelected.length == 0)
            state.isShowInteractMulti = false
    }
    const toggleSelectAll = () => {
        if (!state.isSelectAll)
            state.idSelected = state.data.map(room => room["roomId"])
        else {
            state.isShowInteractMulti = false
            state.idSelected = []
        }

        state.isSelectAll = !state.isSelectAll
    }
    return { state, loadDataRoom, selectItem, toggleSelectAll };
});