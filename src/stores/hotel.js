import { reactive } from "vue";
import { defineStore } from "pinia";
import RoomAPI from "@/api/RoomAPI";
import useCommon from "@/composables/useCommon";
import { ToastMode } from "@/utils/Resource/Enum";
import { Resource } from "@/utils/Resource/resource";

export const useHotelStore = defineStore("hotel", () => {
  const state = reactive({
    //số bản ghi trên một trang
    pageSize: 20,
    //trang hiện tại
    pageNumber: 1,
    //tổng số record
    totalRecord: 100,
    //tổng số trang
    totalPage: 100,
    roomsFilter: "",
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
    typeToast: ToastMode.ERROR,
    //message toast
    toastMessage: "",
    keyword: "",

  });
  const { getListPageNumber } = useCommon();
  const loadDataRoom = async () => {
    try {
      state.idSelected = [];
      state.isSelectAll = false;
      const res = await RoomAPI.filter(state.pageSize, state.pageNumber, state.keyword);
      const data = res.data;
      state.data = data.data;
      state.totalRecord = res.data.totalRecord;
      state.totalPage = res.data.totalPage;
      state.pageNumberRender = getListPageNumber(
        res.data.totalPage,
        state.pageNumber
      );
    } catch (error) {
      state.typeToast = ToastMode.ERROR;
      state.toastMessage = Resource.errorMessage;
      setTimeout(() => (state.toastMessage = ""), 3000);
      console.log(error);
    }
  };
  const changePageNumber = async (pageNumber) => {
    state.pageNumber = pageNumber
    await loadDataRoom()
  }
  const selectItem = (id) => {
    if (state.idSelected.includes(id))
      state.idSelected = state.idSelected.filter((i) => i != id);
    else {
      state.idSelected.push(id)
    }
    console.log(state.idSelected)

    if (state.idSelected.length == state.data.length) state.isSelectAll = true;
    else state.isSelectAll = false;

    if (state.idSelected.length == 0) state.isShowInteractMulti = false;
  };
  const toggleSelectAll = () => {
    if (!state.isSelectAll) {
      state.idSelected = state.data.map((room) => room["roomID"]);
      state.isShowInteractMulti = true
    }
    else {
      state.isShowInteractMulti = false;
      state.idSelected = [];
    }
    state.isSelectAll = !state.isSelectAll;
  };
  return { state, loadDataRoom, selectItem, toggleSelectAll, changePageNumber };
});
