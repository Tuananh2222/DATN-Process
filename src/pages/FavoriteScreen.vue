<template>
  <DefaultHeader />
  <div class="mt-40 table-order">
    <DxDataGrid
      :allowColumnResizing="true"
      :columnResizingMode="'widget'"
      :showColumnLines="false"
      :showBorders="false"
      :width="'100%'"
      :noDataText="'You don\'t have any orders yet'"
      :data-source="orders"
    >
      <DxColumn
        :width="250"
        :data-field="'roomName'"
        :allow-sorting="false"
        :caption="'Room Name'"
      >
      </DxColumn>

      <DxColumn
        :width="160"
        :data-field="'arrivalTime'"
        :allow-sorting="false"
        :caption="'Day In'"
        cellTemplate="arrivalTemplate"
      >
      </DxColumn>

      <DxColumn
        :width="160"
        :data-field="'depatureTime'"
        :allow-sorting="false"
        :caption="'Day Out'"
        cellTemplate="depatureTemplate"
      >
      </DxColumn>

      <DxColumn
        :width="160"
        :data-field="'createdDate'"
        :allow-sorting="false"
        :caption="'date created'"
        cellTemplate="createdTemplate"
      >
      </DxColumn>

      <DxColumn
        :width="160"
        :data-field="'statusPayment'"
        :allow-sorting="false"
        alignment="left"
        :caption="'Payment Status'"
        cellTemplate="paymentStatusTemplate"
      >
      </DxColumn>

      <DxColumn
        :width="160"
        :data-field="'statusOrder'"
        :allow-sorting="false"
        :caption="'Order Status'"
        alignment="center"
        cellTemplate="orderStatusTemplate"
      >
      </DxColumn>

      <DxColumn
        :width="100"
        :data-field="'price'"
        :allow-sorting="false"
        :caption="'Total Amount'"
        cellTemplate="totalBillTemplate"
      >
      </DxColumn>

      <template #arrivalTemplate="{ data }">
        <div>{{ formatDate(data.value) }}</div>
      </template>

      <template #depatureTemplate="{ data }">
        <div>{{ formatDate(data.value) }}</div>
      </template>

      <template #createdTemplate="{ data }">
        <div>{{ formatDate(data.value) }}</div>
      </template>
      <template #paymentStatusTemplate="{ data }">
        <div
          class="border-radius text-white order-pending"
          v-if="data.value == 0"
        >
          Chờ xác nhận
        </div>
        <div
          class="border-radius text-white order-confirm"
          v-if="data.value == 1"
        >
          Đã xác nhận
        </div>
        <div
          class="border-radius text-white order-cancel"
          v-if="data.value == 2"
        >
          Hủy thanh toán
        </div>
      </template>
      <template #orderStatusTemplate="{ data }">
        <div
          class="border-radius text-white order-pending"
          v-if="data.value == 0"
        >
          Chờ xác nhận
        </div>
        <div
          class="border-radius text-white order-confirm"
          v-if="data.value == 1"
        >
          Đã xác nhận
        </div>
        <div
          class="border-radius text-white order-cancel"
          v-if="data.value == 2"
        >
          Hủy thanh toán
        </div>
      </template>

      <template #totalBillTemplate="{ data }">
        <div class="text-red">
          {{
            data.value.toLocaleString("it-IT", {
              style: "currency",
              currency: "USD",
            })
          }}
        </div>
      </template>
    </DxDataGrid>
  </div>
  <DefaultFooter/>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DxDataGrid, { DxColumn } from "devextreme-vue/data-grid";
import DefaultHeader from "@/components/generals/defaultHeader.vue";
import OrderRoom from "@/api/OrderRoom";
import useAppStore from "@/stores/app";
import DefaultFooter from "@/components/generals/defaultFooter.vue";

onMounted(() => {
  getOrderByUserID();
});
const appStore = useAppStore();
const { state } = appStore;
const orders = ref([]);
const getOrderByUserID = async () => {
  const userID = state.detailUser.userID;
  console.log(userID);
  const res = await OrderRoom.getOrderRoomByUserID(userID);
  orders.value = res.data;
};
const formatDate = (d) => {
  try {
    console.log(d);
    const date = new Date(d);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  } catch (error) {
    return d;
  }
};
</script>

<style lang="scss" scoped>
.table-order{
  width: 70%;
  margin: 0 auto;
}


</style>
