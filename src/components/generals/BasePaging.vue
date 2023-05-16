<template>
  <div class="grid-paging">
    <div class="grid-paging-left">
      Total :
      <span :style="{ fontWeight: 'bold' }">{{ totalRecord }}</span> record
    </div>

    <div class="grid-paging-right">
      <div class="grid-paging-func">
        <div
          @click="currentPage > 1 && changePageNumber(currentPage - 1)"
          :class="{
            'grid-paging-pre': true,
            'grid-paging-disabled': currentPage == 1,
          }"
        >
          Trước
        </div>

        <div
          v-for="(pageNumber, index) in pageNumberRender"
          :key="index"
          class="grid-paging-number"
          :id="isCurrentPage(pageNumber) ? 'grid-paging-current-page' : ''"
          @click="
            pageNumber &&
              pageNumber != currentPage &&
              changePageNumber(pageNumber)
          "
          :style="{ padding: !pageNumber ? '0px' : '' }"
        >
          {{ pageNumber ? pageNumber : "..." }}
        </div>

        <div
          @click="currentPage < totalPage && changePageNumber(currentPage + 1)"
          :class="{
            'grid-paging-next': true,
            'grid-paging-disabled': currentPage == totalPage,
          }"
        >
          Sau
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  //Số bản ghi
  totalRecord: Number,
  //mảng number sẽ render
  pageNumberRender: Array,
  //trang hiện tại
  currentPage: Number,
  //Kích thước trang
  pageSize: Number,
  //tổng số trang
  totalPage: Number,
});
const emits = defineEmits(["changePage"]);
const isCurrentPage = (pageNumber) => {
  if (pageNumber && pageNumber == props.currentPage) return true;

  return false;
};

const changePageNumber = (pageNumber) => {
  console.log(pageNumber);
  emits("changePage", pageNumber);
};
</script>

<style lang="scss" scoped>
.grid-paging {
  height: 56px;
  width: 100%;
  min-height: 56px;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-sizing: border-box;
}

.grid-paging-left {
  white-space: nowrap;
  margin-right: 12px;
}

.grid-paging-right {
  display: flex;
  align-items: center;
}

.grid-paging-func {
  display: flex;
  overflow: hidden;
}

.grid-paging-pre {
  margin: 0px 16px;
  cursor: pointer;
}

.grid-paging-number {
  min-width: 20px;
  text-align: center;
  cursor: pointer;
  padding: 0px 6.5px;
}

#grid-paging-current-page {
  border: 1px solid #babec5;
  cursor: not-allowed;
  font-weight: bolder;
}

.grid-paging-next {
  margin: 0px 16px;
  cursor: pointer;
}

.grid-paging-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
