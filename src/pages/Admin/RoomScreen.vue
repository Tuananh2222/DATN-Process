<template>
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
          :idRow="'roomId'"
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
const roomStore = useHotelStore();
const { state, selectItem, toggleSelectAll } = roomStore;
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
