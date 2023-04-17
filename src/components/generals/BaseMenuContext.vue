<template>
  <div
    :style="{ top: position.y + 'px', right: position.x + 'px' }"
    class="misa-table-menu-context misa-text-left"
  >
    <div @click="duplicateMethod" class="misa-table-menu-context-item">
      Nhân bản
    </div>
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
const props = defineProps({
  position: {
    x: Number,
    y: Number,
  },
});

const emits = defineEmits(["handleDupliCate", "handleDelete"]);

const duplicateMethod = () => {
  emits("handleDupliCate");
};

const deleteMethod = () => {
  emits("handleDelete");
};
</script>

<style lang="scss" scoped></style>
