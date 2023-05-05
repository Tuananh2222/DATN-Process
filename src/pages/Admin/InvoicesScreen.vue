<template>
  <div class="container">
    <div class="nav">
      <NavigationAdmin />
    </div>
    <div class="main-container">
      <BaseTopAdmin :name-page="'Invoices'" />
      <div class="mt-40">
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
            :caption="'Date created'"
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
          <DxColumn
            :width="100"
            cellTemplate="actionTemplate"
            :allowResizing="false"
            allowReordering="false"
            :caption="'Action'"
            alignment="center"
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
              Hủy đặt
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
          <template #actionTemplate="{ data }">
            <div class="action-wrapper">
              <div
                @click="updateStatusOrder(data.key, OrderStatus.Confirm)"
                class="button mr-12 action-edit"
              >
                <div
                  title="Duyệt đơn"
                  class="icon-order-success pst-relative"
                ></div>
              </div>

              <div
                @click="updateStatusOrder(data.key, OrderStatus.Cancel)"
                class="button mr-12 action-edit"
              >
                <div
                  title="Hủy đơn"
                  class="icon-cancel-order pst-relative"
                ></div>
              </div>
            </div>
          </template>
        </DxDataGrid>
      </div>
    </div>
  </div>
</template>

<script setup>
import OrderRoom from "@/api/OrderRoom";
import BaseTopAdmin from "@/components/generals/BaseTopAdmin.vue";
import NavigationAdmin from "@/components/generals/NavigationAdmin.vue";

import { onMounted, ref } from "vue";
import DxDataGrid, { DxColumn } from "devextreme-vue/data-grid";
import { OrderStatus } from "@/utils/Resource/Enum";

onMounted(() => {
  getOrder();
});
const orders = ref([]);
const getOrder = async () => {
  const res = await OrderRoom.getAllOrderRoom();
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

const updateStatusOrder = async (order, status) => {
  try {
    const orderID =  order.orderRoomID;
    console.log(orderID,{...order, statusOrder: status})
    var res = await OrderRoom.updateOrderStatus(orderID,{...order, statusOrder: status});
    getOrder()
  } catch (error) {
    
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  .nav {
    width: 15%;
  }
  .main-container {
    width: 85%;
  }
}
.dx-datagrid-table.dx-pointer-events-none.dx-datagrid-table-fixed {
  .dx-row.dx-data-row.dx-row-lines.dx-column-lines {
    position: relative;
    .custom-action {
      display: none;
      position: absolute;
      right: 0px;
      top: 0px;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.008);
      .button {
        width: 28px;
        height: 28px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }

  .dx-row.dx-data-row.dx-row-lines.dx-column-lines.dx-state-hover {
    .custom-action {
      display: flex;
    }
  }

  .dx-pointer-events-none.dx-cell-focus-disabled {
    border-left: none;
    border-right: none;
  }
}
.action-wrapper{
  display: flex;
  justify-content: space-around;
}
</style>
