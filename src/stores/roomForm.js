import Bathroom from "@/api/Bathroom";
import BedType from "@/api/BedType";
import RoomAPI from "@/api/RoomAPI";
import { useValidate } from "@/composables/useValidate";
import { FormMode, ToastMode } from "@/utils/Resource/Enum";
import { Resource } from "@/utils/Resource/resource";
import { helpers, required } from "@vuelidate/validators";
import { defineStore } from "pinia";
import { reactive } from "vue";

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
    //dữ liệu nhà tắm
    bathrooms: [],
    roomDetail: {},
    formMode: FormMode.FORM_ADD,
    idRoomEdit: undefined,
    rooms: {
      roomCode: "",
      roomName: "",
      roomSize: "",
      bedTypeID: "",
      bathroomID: "",
      countPeople: "",
      price: "",
      viewRoom: "",
      imgUrl: "",
      description: "",
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

  const { checkField, $v, checkAllField } = useValidate(
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

    state.rooms.hasErrors[fieldName] = "";
  };
  const getNewRoomCode = async () => {
    return (await RoomAPI.getNewRoomCode()).data;
  };

  const submitForm = async (id) => {
    emptyForm();
    try {
      if (state.formMode == FormMode.FORM_ADD) {
        state.rooms.roomCode = getNewRoomCode();
      } else {
        state.roomDetail = (await RoomAPI.getRoomByID(id)).data;
        // state.rooms = state.roomDetail
        console.log(state.roomDetail);
        state.rooms = {
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

  // const getRoomDetail = async () => {
  //   return await RoomAPI
  // }

  const emptyForm = () => {
    for (let key in state.rooms) {
      if (key == "hasErrors") {
        state.rooms.hasErrors[key] = "";
      } else {
        state.rooms[key] = "";
      }
    }
  };

  return {
    state,
    checkField,
    checkAllField,
    $v,
    getBedType,
    getBathRoom,
    changeValue,
    getNewRoomCode,
    submitForm,
  };
});
export default useRoomForm;
