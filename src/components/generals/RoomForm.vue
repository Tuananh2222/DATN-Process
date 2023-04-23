<template>
  <div class="popup-container">
    <div class="form-container">
      <div class="container">
        <div class="header-container">
          <div class="title">ADD ROOM</div>
          <div class="icon-close" @click="handleClosePopup"></div>
        </div>
        <div class="form">
          <div class="user_details">
            <CInput
              :value="state.rooms.roomCode"
              :error="state.hasErrors.roomCode"
              :label="'Mã Phòng'"
              :field-require="true"
              width="315px"
              :fieldName="'roomCode'"
              @changeValue="changeValue"
              @focusOut="roomForm.checkField('roomCode')"
            />
            <CInput
              :value="state.rooms.roomName"
              :error="state.hasErrors.roomName"
              :label="'Tên phòng'"
              :field-require="true"
              width="315px"
              :field-name="'roomName'"
              @changeValue="changeValue"
              @focusOut="roomForm.checkField('roomName')"
            />
            <CInput
              :value="state.rooms.roomSize"
              :error="state.hasErrors.roomSize"
              :label="'Diện tích'"
              :field-require="true"
              width="315px"
              :field-name="'roomSize'"
              @changeValue="changeValue"
              @focusOut="roomForm.checkField('roomSize')"
            />
            <CDropdown
              :data="state.bedtypes"
              :value-init="state.rooms.bedTypeID"
              field-display="bedTypeName"
              field-name="bedTypeID"
              placeholder="Kiểu giường"
              @changeValue="handleChangeValueBedType"
              :label="'Kiểu giường'"
              :field-require="true"
              width="315px"
              :error="state.hasErrors.bedTypeID"
              @blurDropdown="roomForm.checkField('bedTypeID')"
            />
            <CDropdown
              :data="state.bathrooms"
              :value-init="state.rooms.bathroomID"
              field-display="bathroomName"
              field-name="bathroomID"
              placeholder="Nhà tắm"
              @changeValue="handleChangeValueBathroom"
              :label="'Phòng tắm'"
              :field-require="true"
              width="315px"
              :error="state.hasErrors.bathroomID"
              @blurDropdown="roomForm.checkField('bathroomID')"
            />
            <CInput
              :value="state.rooms.countPeople"
              :error="state.hasErrors.countPeople"
              :label="'Số người'"
              :field-require="true"
              width="315px"
              :field-name="'countPeople'"
              @changeValue="changeValue"
              @focusOut="roomForm.checkField('countPeople')"
            />
            <CInput
              :value="state.rooms.price"
              :error="state.hasErrors.price"
              :label="'Giá'"
              :field-require="true"
              width="315px"
              :field-name="'price'"
              @changeValue="changeValue"
              @focusOut="roomForm.checkField('price')"
            />
            <CInput
              :value="state.rooms.viewRoom"
              :error="state.hasErrors.viewRoom"
              :label="'View phòng'"
              width="315px"
              :field-require="true"
              :field-name="'viewRoom'"
              @changeValue="changeValue"
              @focusOut="roomForm.checkField('viewRoom')"
            />
            <CInput
              :value="state.rooms.imgUrl"
              :error="state.hasErrors.imgUrl"
              :label="'Link ảnh'"
              :field-require="true"
              width="315px"
              :field-name="'imgUrl'"
              @changeValue="changeValue"
              @focusOut="roomForm.checkField('imgUrl')"
            />
            <CInput
              :label="'Chi tiết phòng'"
              :field-require="true"
              width="315px"
              :value="state.rooms.description"
              :error="state.hasErrors.description"
              :field-name="'description'"
              @changeValue="changeValue"
              @focusOut="roomForm.checkField('description')"
            />
          </div>
          <div class="btn-wrapper">
            <CButton
              :class-name="'button-primary button-square button-block button-effect-ujarak'"
              :label="'Thêm mới'"
              @handle-button="handleAddItem"
            />
            <CButton
              :class-name="'button-primary button-square button-block'"
              class="button-custome"
              :label="'Hủy'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CButton from "../elements/CButton.vue";
import CDropdown from "../elements/CDropdown.vue";
import CInput from "../elements/CInput.vue";
import { defineEmits, onMounted } from "vue";
import useRoomForm from "@/stores/roomForm";
const roomForm = useRoomForm();
const { state, getBedType, getBathRoom, changeValue, getNewRoomCode } =
  roomForm;
const emits = defineEmits(["closePopup"]);
const handleClosePopup = () => {
  emits("closePopup");
};
onMounted(() => {
  getBedType();
  getBathRoom();
  getNewRoomCode();
});

const handleChangeValueBedType = (id) => {
  if (id) {
    state.rooms.bedTypeID = id;
  }
};
const handleChangeValueBathroom = (id) => {
  if (id) {
    state.rooms.bathroomID = id;
  }
};
</script>

<style lang="scss" scoped>
.popup-container {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
}
.container {
  max-width: 700px;
  width: 100%;
  background: #fff;
  padding: 25px 30px;
  border-radius: 5px;
}
.container .title {
  font-size: 25px;
  font-weight: 500;
  position: relative;
  margin-bottom: 20px;
}
.header-container {
  display: flex;
  justify-content: space-between;
}

.icon-close {
  background: url(./../../public/icon/close.svg) center;
  background-size: cover;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.container .title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  background: linear-gradient(123deg, #71b8e7, #9b59b6);
}
.container .form .user_details {
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  justify-content: space-between;
}
.btn-wrapper {
  display: flex;
}

:deep(.button-primary) {
  border-radius: 8px;
  margin-right: 10px;
  margin-top: 10px;
}
.button-custome {
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
}
</style>
