<template>
  <!-- <div class="misa-toast-error-list">
    <CToast
      v-for="(message, index) in state.listErrorServer"
      :key="{ index }"
      :style="{
        top: `${index * 80 + 10}` + 'px',
        animationDuration: `${index * 0.2 + 0.3}s`,
      }"
      :type="'error'"
      :message="message"
    >
      <div class="misa-icon misa-icon-error"></div>
    </CToast>
  </div> -->

  <CToast
    v-if="state.toastMessage"
    :type="state.typeToast"
    :message="state.toastMessage"
    :style="{ animationDuration: '.3s' }"
  >
    <div class="icon-error"></div>
  </CToast>
  <div class="container">
    <div class="nav">
      <NavigationAdmin />
    </div>
    <div class="main-content">
      Rooms
      <div class="content-room">
        <BaseTable
          :fieldRender="fieldRenderEmployee"
          :data="state.data"
          :idRow="'roomID'"
          :listItemSelected="state.idSelected"
          @handleSelectItem="selectItem"
          @toggle-all="toggleSelectAll"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { fieldRenderEmployee } from "@/utils/Resource/fieldRender";
import BaseTable from "@/components/generals/BaseTable.vue";
import NavigationAdmin from "@/components/generals/NavigationAdmin.vue";
import { useHotelStore } from "@/stores/hotel";
import { onMounted } from "vue";
import CToast from "@/components/elements/CToast.vue";
const roomStore = useHotelStore();
const { state, selectItem, toggleSelectAll, loadDataRoom } = roomStore;

onMounted(() => {
  loadDataRoom();
});
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
  }
}
</style>
