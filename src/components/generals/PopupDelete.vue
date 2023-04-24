<template>
  <div class="container-popup flex-center">
    <BasePopup id="popup-delete">
      <template #header>
        <div class="popup-header flex align-items-center flex-between">
          <div class="popup-delete-title">Xóa Phòng</div>

          <div
            @click="$emit('closePopupDelete')"
            class="icon-close pst-relative flex-center"
          >
            <div class="cursor-pointer"></div>
          </div>
        </div>
      </template>

      <template #main>
        <slot name="messageConfirmDelete"></slot>
      </template>
      <template #button-left>
        <CButton
          @handle-button="handleClosePopup"
          :class-name="'button-primary button-square button-block'"
          class="button-custome"
          :label="'Hủy'"
          :tabIndex="3"
        />
      </template>

      <template #button-right>
        <div tabindex="1" class="tab-again"></div>
        <CButton
          @click="handleConfirmDelete"
          @keydown.enter="handleConfirmDelete"
          :class-name="'button-primary button-square button-block button-effect-ujarak'"
          :label="'Xóa'"
          :tabIndex="2"
        />
      </template>
    </BasePopup>
  </div>
</template>

<script setup>
import CButton from "../elements/CButton.vue";
import { defineEmits } from "vue";
import BasePopup from "./BasePopup.vue";

const emits = defineEmits(["closePopupDelete", "confirmDelete"]);
const handleClosePopup = () => {
  emits("closePopupDelete");
};
const handleConfirmDelete = () => {
  emits("confirmDelete");
};
</script>

<style lang="scss" scoped>
.container-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 22;
}
#popup-delete {
  width: 500px;
}

.popup-delete-title {
  letter-spacing: 0.576px;
  font-size: 24px;
  color: rgb(33, 33, 33);
  font-weight: 500;
}

#popup-delete .popup-header {
  padding: 18px 24px;
}
.icon-close {
  background: url(./../../public/icon/close.svg) center;
  background-size: cover;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

#popup-delete .icon-close,
#popup-insert-multi .icon-close {
  transform: translateX(8px);
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
  margin-left: 20px;
}
</style>
