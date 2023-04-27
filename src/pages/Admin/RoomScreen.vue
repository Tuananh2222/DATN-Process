<template>
  <div class="misa-toast-error-list">
    <CToast
      v-for="(message, index) in stateRoomForm.listErrorServer"
      :key="{ index }"
      :style="{
        top: `${index * 80 + 10}` + 'px',
        animationDuration: `${index * 0.2 + 0.3}s`,
      }"
      :type="'error'"
      :message="message"
    >
      <div class="icon-error"></div>
    </CToast>
  </div>

  <CToast
    v-if="state.toastMessage"
    :type="state.typeToast"
    :message="state.toastMessage"
    :style="{ animationDuration: '.3s' }"
  >
    <div class="icon-error"></div>
  </CToast>
  <CToast
    v-if="stateRoomForm.toastMessage"
    :type="stateRoomForm.typeToast"
    :message="stateRoomForm.toastMessage"
    :style="{ animationDuration: '.3s' }"
  >
    <div class="icon-error"></div>
  </CToast>
  <div class="container">
    <div class="nav">
      <NavigationAdmin />
    </div>
    <div class="main-content">
      <BaseTopAdmin :name-page="'Rooms'" />
      <div class="content-room">
        <div class="grid-func">
          <CInput
            @changeValue="handleValueSearch"
            :value="state.keyword"
            :placeholder="'Tìm kiếm phòng...'"
          />
          <div class="grid-func-right">
            <CButton
              v-if="state.idSelected.length > 1 || state.isShowInteractMulti"
              :class-name="'button-primary button-square button-block button-effect-ujarak'"
              :label="'Xóa hàng loạt'"
              @handle-button="handleDeleteMulti"
            />
            <CButton
              :class-name="'button-primary button-square button-block button-effect-ujarak'"
              :label="'Thêm'"
              @handle-button="handleButtonAdd"
            />
          </div>
        </div>
        <BaseTable
          :fieldRender="fieldRenderEmployee"
          :data="state.data"
          :idRow="'roomID'"
          :listItemSelected="state.idSelected"
          @delete-row="handleDeleteItem"
          @show-form-edit="handleEditItem"
        />
        <BasePaging
          :pageNumberRender="state.pageNumberRender"
          :current-page="state.pageNumber"
          :total-record="state.totalRecord"
          :page-size="state.pageSize"
          :total-page="state.totalPage"
          @change-page="handlePageNumber"
        />
      </div>
    </div>
    <RoomForm
      v-if="stateRoomForm.isShowPopup"
      @close-popup="handleClosePopup"
      :title-form="titleForm"
    />
    <PopupDelete
      v-if="stateRoomForm.roomNameDelete"
      @closePopupDelete="togglePopupConfirmDelete"
      @confirmDelete="handleDeleteUser"
      ><template #messageConfirmDelete>
        <div class="popup-delete-msg">
          <span
            v-html="
              `Bạn có chắc chắn muốn xóa <b>${stateRoomForm.roomNameDelete}</b> khỏi danh sách không?`
            "
          ></span>
        </div> </template
    ></PopupDelete>
  </div>
</template>

<script setup>
import { fieldRenderEmployee } from "@/utils/Resource/fieldRender";
import BaseTable from "@/components/generals/BaseTable.vue";
import NavigationAdmin from "@/components/generals/NavigationAdmin.vue";
import { useHotelStore } from "@/stores/hotel";
import { useRoomForm } from "@/stores/roomForm";
import { onMounted, ref } from "vue";
import CToast from "@/components/elements/CToast.vue";
import CButton from "@/components/elements/CButton.vue";
import BaseTopAdmin from "@/components/generals/BaseTopAdmin.vue";
import BasePaging from "@/components/generals/BasePaging.vue";
import useAppStore from "@/stores/app";
import CInput from "@/components/elements/CInput.vue";
import RoomForm from "@/components/generals/RoomForm.vue";
import { FormMode } from "@/utils/Resource/Enum";
import PopupDelete from "@/components/generals/PopupDelete.vue";
import RoomAPI from "@/api/RoomAPI";
const roomStore = useHotelStore();
const roomForm = useRoomForm();
const { state: stateRoomForm, initForm, deleteRoom } = roomForm;
const { state, loadDataRoom, changePageNumber } = roomStore;
const { setStateLoading } = useAppStore();
const titleForm = ref("");

onMounted(() => {
  loadDataRoom();
});

const handleValueSearch = async (kword) => {
  state.keyword = kword;
  if (!state.keyword || state.keyword.trim()) {
    state.pageNumber = 1;
    await loadDataRoom();
  }
};

const handlePageNumber = async (pageNumber) => {
  try {
    setStateLoading(true);
    await changePageNumber(pageNumber);
    setStateLoading(false);
  } catch (error) {
    console.log(error);
  }
};
const handleButtonAdd = async () => {
  stateRoomForm.formMode = FormMode.FORM_ADD;
  titleForm.value = "ADD ROOM";
  await initForm();
  stateRoomForm.isShowPopup = true;
};
const handleClosePopup = () => {
  stateRoomForm.isShowPopup = false;
};
const handleDeleteItem = (id) => {
  const roomDelete = state.data.find((room) => room.roomID == id);
  stateRoomForm.roomNameDelete = roomDelete.roomName;
  stateRoomForm.idRoomTarget = id;
};
const handleEditItem = async (id) => {
  stateRoomForm.formMode = FormMode.FORM_EDIT;
  titleForm.value = "EDIT ROOM";
  stateRoomForm.idRoomEdit = id;
  await initForm(id);
  stateRoomForm.isShowPopup = true;
};
const togglePopupConfirmDelete = (roomN = null) => {
  if (roomN == null) {
    stateRoomForm.roomNameDelete = "";
  } else {
    stateRoomForm.roomNameDelete = roomN;
  }
};

const handleDeleteUser = async () => {
  await deleteRoom();
};

const handleDeleteMulti = async () => {
  await RoomAPI.deleteMultiRoom(state.idSelected);
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  .nav {
    width: 15%;
  }
  .main-content {
    width: 85%;
    .content-room {
      max-width: 100%;
      width: calc(100%);
      height: calc(100vh - 150px);
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding-right: 30px;
      .grid-func {
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        padding: 16px 16px 16px 16px;
        align-items: center;
        z-index: 5;
        .grid-func-right {
          display: flex;
          width: 50%;
          justify-content: flex-end;
        }
      }
    }
  }
}
.popup-delete-msg {
  padding: 24px;
  line-height: 1.25;
}
:deep(.button-primary) {
  border-radius: 8px;
  width: 200px;
  margin-right: 20px;
}
:deep(.sub-container) {
  margin-top: 0;
}
</style>
