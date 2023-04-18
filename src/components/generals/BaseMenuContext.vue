<template>
  <div
    :style="{
      top: props.positionTop + 'px',
      right: props.positionRight + 'px',
    }"
    class="misa-table-menu-context misa-text-left"
  >
    <div @click="editMethod" class="misa-table-menu-context-item">Sửa</div>
    <div
      @click="deleteMethod"
      id="misa-button-delete-employee"
      class="misa-table-menu-context-item"
    >
      Xóa
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
const props = defineProps({
  positionTop: { type: Number, default: 0 },
  positionRight: { type: Number, default: 0 },
});

const emits = defineEmits(["handleEdit", "handleDelete"]);

const editMethod = () => {
  emits("handleEdit");
};

const deleteMethod = () => {
  emits("handleDelete");
};
</script>

<style lang="scss" scoped></style>
