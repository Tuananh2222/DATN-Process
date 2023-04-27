import Bathroom from "@/api/Bathroom";
import BedType from "@/api/BedType";
import RoomAPI from "@/api/RoomAPI";
import { useValidate } from "@/composables/useValidate";
import { FormMode, ToastMode } from "@/utils/Resource/Enum";
import { Resource } from "@/utils/Resource/resource";
import useVuelidate from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";
import { defineStore } from "pinia";
import { reactive } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useHotelStore } from "./hotel";

export const useRoomForm = defineStore("roomForm", () => {
  const state = reactive({
    //status toast
    isShowToast: false,
    //status loading
    isLoading: false,
    //thông báo toast
    toastMessage: "",
    //kiểu toast
    typeToast: ToastMode.SUCCESS,
    //dữ liệu kiểu phòng
    bedtypes: [],
    //message lỗi trùng mã nhân viên
    errorDuplicateRoomCode: "",
    //mảng message thông báo lỗi từ server
    listErrorServer: [],
    //dữ liệu nhà tắm
    bathrooms: [],
    roomDetail: {},
    formMode: FormMode.FORM_ADD,
    idRoomEdit: undefined,
    roomNameDelete: "",
    idRoomTarget: "",
    isShowPopup: false,
    rooms: {
      roomID: "",
      roomCode: "",
      roomName: "",
      roomSize: "",
      bedTypeID: "",
      bathroomID: "",
      countPeople: "",
      price: "",
      viewRoom: "",
      imgUrl: "",
      description: ""
    },
    hasErrors: {
      roomCode: "",
      roomName: "",
      roomSize: "",
      countPeople: "",
      price: "",
      viewRoom: "",
      imgUrl: "",
      description: "",
      bedTypeID: "",
      bathroomID: "",
    },
    isValidForm: false
  });
  const ruleList = {
    roomCode: {
      required: helpers.withMessage("Vui lòng nhập mã phòng!", required),
    },
    roomName: {
      required: helpers.withMessage("Vui lòng nhập tên phòng!", required),
    },
    roomSize: {
      required: helpers.withMessage("Vui lòng nhập diện tích phòng!", required),
    },
    countPeople: {
      required: helpers.withMessage(
        "Vui lòng nhập sô người 1 phòng!",
        required
      ),
    },
    price: {
      required: helpers.withMessage("Vui lòng nhập tiền phòng!", required),
    },
    viewRoom: {
      required: helpers.withMessage("Vui lòng nhập view phòng!", required),
    },
    imgUrl: {
      required: helpers.withMessage("Vui lòng nhập view phòng!", required),
    },
    description: {
      required: helpers.withMessage("Vui lòng nhập chi tiết phòng!", required),
    },
    bedTypeID: {
      required: helpers.withMessage("Vui lòng chọn kiểu giường!", required),
    },
    bathroomID: {
      required: helpers.withMessage("Vui lòng chọn kiểu nhà tắm!", required),
    },
  };
  const validate = async (val) => {
    const $v = useVuelidate(ruleList, state.rooms)
    const v = await $v.value[val].$validate()
    const vf = await $v.value.$validate()
    if (!v) {
      state.hasErrors[val] = $v.value[val].$errors[0].$message
    }
    else {
      state.hasErrors.bedTypeID = ""
      state.hasErrors.bathroomID = ""
      2
    }
    state.isValidForm = vf
    console.log(vf)
  }

  const roomStore = useHotelStore();
  const { loadDataRoom } = roomStore
  const { checkField, checkAllField } = useValidate(
    ruleList,
    state.rooms,
    state.hasErrors
  );
  const getBedType = async () => {
    try {
      const bedtypeData = (await BedType.getBedType()).data;
      state.bedtypes = bedtypeData;
    } catch (error) {
      console.log(error);
      state.toastMessage = Resource.errorMessage;
      state.typeToast = ToastMode.ERROR;
    }
  };

  const getBathRoom = async () => {
    try {
      const bathroomData = (await Bathroom.getAllBathroom()).data;
      state.bathrooms = bathroomData;
    } catch (error) {
      console.log(error);
      state.toastMessage = Resource.errorMessage;
      state.typeToast = ToastMode.ERROR;
    }
  };

  const changeValue = (value, fieldName) => {
    state.rooms[fieldName] = value;

    state.hasErrors[fieldName] = "";
  };
  const getNewRoomCode = async () => {
    return (await RoomAPI.getNewRoomCode()).data;
  };

  const initForm = async (id) => {
    emptyForm();
    try {
      if (state.formMode == FormMode.FORM_ADD) {
        state.rooms.roomCode = await getNewRoomCode();
      } else {
        state.roomDetail = (await RoomAPI.getRoomByID(id)).data;
        state.rooms = {
          roomID: state.roomDetail.roomID,
          roomCode: state.roomDetail.roomCode,
          roomName: state.roomDetail.roomName,
          roomSize: state.roomDetail.roomSize,
          bedTypeID: state.roomDetail.bedTypeID,
          bathroomID: state.roomDetail.bathroomID,
          countPeople: state.roomDetail.countPeople,
          price: state.roomDetail.price,
          viewRoom: state.roomDetail.viewRoom,
          imgUrl: state.roomDetail.imgUrl,
          description: state.roomDetail.description,
        };
      }
    } catch (error) {
      state.toastMessage = Resource.errorMessage;
      state.typeToast = ToastMode.ERROR;
      console.log(error);
    }
  };

  const isChanged = () => {
    const fieldName = Object.keys(state.rooms)
    let isChanged = false;
    if (state.formMode == FormMode.FORM_ADD) {
      fieldName.forEach(field => {
        if (state.rooms[field] && field != 'roomCode') {
          isChanged = true;
        }
      })
    }
    else {
      fieldName.forEach(field => {
        if (state.rooms[field] != state.roomDetail[field]) {
          isChanged = true
        }
      })
    }
    console.log(isChanged)
    return isChanged;
  }

  const saveForm = async () => {
    try {
      if (!state.isValidForm) {
        if (state.formMode == FormMode.FORM_ADD) {
          await RoomAPI.insertNewRoom({ ...state.rooms, roomID: uuidv4() })

        }
        else if (state.formMode == FormMode.FORM_EDIT) {
          await RoomAPI.updateRoom(state.idRoomEdit, state.rooms)
        }
      }
    } catch (error) {
      const status = error.response.status
      const responseError = error.response
      if (status == 500) {
        state.toastMessage = responseError.userMsg
        state.typeToast = ToastMode.ERROR
        setTimeout(() => {
          state.toastMessage = ""
        }, 5000)
      }

      if (status == 400) {
        const errors = error.response.data.errors

        if (errors.RoomCode) {
          state.toastMessage = Resource.typeErrorDuplicateRoomCode
          setTimeout(() => (state.toastMessage = ""), 3000);
        } else {
          state.listErrorServer = errors
          setTimeout(() => {
            state.listErrorServer = []
          }, 5000 + 100 * state.listErrorServer.length)
        }
      }
      console.log(error)
    }
  }

  const deleteRoom = async () => {
    try {
      state.roomNameDelete = "";
      await RoomAPI.deleteRoom(state.idRoomTarget);
      await loadDataRoom();
      state.toastMessage = Resource.deleteSuccess
      state.typeToast = ToastMode.SUCCESS
      state.idRoomEdit = null
    } catch (error) {
      console.log(error);
    }
  }

  const emptyForm = () => {
    for (let key in state.rooms) {
      state.hasErrors[key] = "";
      state.rooms[key] = "";
    }
  };

  return {
    state,
    checkField,
    checkAllField,
    getBedType,
    getBathRoom,
    changeValue,
    getNewRoomCode,
    initForm,
    validate,
    saveForm,
    isChanged,
    deleteRoom
  };
});
export default useRoomForm;
