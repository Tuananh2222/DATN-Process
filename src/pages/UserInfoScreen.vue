<template>
  <DefaultHeader />
  <div class="container">
    <table>
      <tr>
        <td>
          <section>
            <img
              src="https://i.ibb.co/yNGW4gg/avatar.png"
              id="blah"
              alt="Avatar"
            />
          </section>
          <h1>{{ state.detailInfoUser?.userName }}</h1>
          <ul>
            <li>
              <b>Full name:</b>
              <input
                type="text"
                name="fname"
                id="fname"
                maxlength="100"
                v-model="state.detailInfoUser.userName"
                :class="isEdit && 'showEdit'"
              />
            </li>
            <li>
              <b>Email:</b>
              <input
                type="email"
                name="email"
                id="email"
                maxlength="150"
                v-model="state.detailInfoUser.email"
                :class="isEdit && 'showEdit'"
              />
            </li>
            <li>
              <b>Contact number:</b>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                maxlength="10"
                v-model="state.detailInfoUser.phoneNumber"
                :class="isEdit && 'showEdit'"
              />
            </li>
            <li>
              <b>Address:</b>
              <input
                type="text"
                name="address"
                id="address"
                maxlength="250"
                v-model="state.detailInfoUser.address"
                :class="isEdit && 'showEdit'"
              />
            </li>
          </ul>
          <div class="btn-wrapper">
            <CButton
              :label="'Edit'"
              :class-name="'button-primary button-square button-block button-effect-ujarak'"
              @handle-button="handleChangeForm()"
            />
            <CButton
              v-if="isEdit"
              :label="'Save'"
              :class-name="'button-primary button-square button-block button-effect-ujarak'"
              @handle-button="handleSaveForm()"
            />
            <CButton
              :label="'Sign out'"
              :class-name="'button-primary button-square button-block button-effect-ujarak'"
              @handle-button="submitLogout()"
            />
          </div>
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
                :width="160"
                :data-field="'typePayment'"
                :allow-sorting="false"
                :caption="'Type Payment'"
                alignment="center"
                cellTemplate="typePaymentTemplate"
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
                  Wait for Pay
                </div>
                <div
                  class="border-radius text-white order-confirm"
                  v-if="data.value == 1"
                >
                  Paid
                </div>
                <div
                  class="border-radius text-white order-cancel"
                  v-if="data.value == 2"
                >
                  Cancel Payment
                </div>
              </template>
              <template #orderStatusTemplate="{ data }">
                <div
                  class="border-radius text-white order-pending"
                  v-if="data.value == 0"
                >
                  Wait for confirmation
                </div>
                <div
                  class="border-radius text-white order-confirm"
                  v-if="data.value == 1"
                >
                  Confirmed
                </div>
                <div
                  class="border-radius text-white order-cancel"
                  v-if="data.value == 2"
                >
                  Cancel
                </div>
              </template>
              <template #typePaymentTemplate="{ data }">
                <div
                  class="border-radius text-white payment-direct"
                  v-if="data.value == 0"
                >
                  Direct Payment
                </div>
                <div
                  class="border-radius text-white payment-online"
                  v-if="data.value == 1"
                >
                  Online Payment
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
        </td>
      </tr>
    </table>
  </div>
  <DefaultFooter />
</template>

<script setup>
import CButton from "@/components/elements/CButton.vue";
import DefaultFooter from "@/components/generals/defaultFooter.vue";
import DefaultHeader from "@/components/generals/defaultHeader.vue";
import useUserStore from "@/stores/user";
import { onBeforeMount, ref, onMounted } from "vue";
import DxDataGrid, { DxColumn } from "devextreme-vue/data-grid";
import OrderRoom from "@/api/OrderRoom";
import useAppStore from "@/stores/app";
import { ToastMode } from "@/utils/Resource/Enum";
import { Resource } from "@/utils/Resource/resource";

const userStore = useUserStore();

const { state, handleLogout, getUser, handleEditUser } = userStore;
const isEdit = ref(false);
onBeforeMount(async () => {
  await getUser();
  await getOrderByUserID();
});
const submitLogout = () => {
  handleLogout();
};

const handleChangeForm = () => {
  isEdit.value = !isEdit.value;
};

const handleSaveForm = () => {
  handleEditUser(state.detailInfoUser, state.detailInfoUser.userID);
  isEdit.value = false;
};
onMounted(() => {
  getOrderByUserID();
});
const appStore = useAppStore();
const { state: stateApp } = appStore;
const orders = ref([]);
const getOrderByUserID = async () => {
  try {
    const userID = state.detailInfoUser.userID;
    const res = await OrderRoom.getOrderRoomByUserID(userID);
    orders.value = res.data;
  } catch (error) {
    stateApp.typeToast = ToastMode.ERROR;
    stateApp.toastMessage = Resource.errorMessage;
    setTimeout(() => (stateApp.toastMessage = ""), 3000);
  }
};
const formatDate = (d) => {
  try {
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
a,
li,
em,
button,
input,
textarea,
select {
  text-decoration: none;
  list-style: none;
  font-style: normal;
  // outline: none;
  transition: 0.5s;
  resize: none;
}

ul li {
  color: gray;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

b {
  color: #000;
  margin-right: 10px;
  font-size: 16px;
  width: 120px;
  height: fit-content;
}
li input {
  height: 40px;
  font-size: 16px;
}
.container {
  width: 90%;
  margin: 0 auto;
}

.container table {
  width: 100%;
  height: calc(60vh + 105px);
}

.container table td {
  margin: 30px;
  border-radius: 5px;
  box-shadow: 0px 6px 16px -6px rgba(1, 1, 1, 0.5);
  padding: 30px;
  color: #000;
  vertical-align: top;
}

.container table td {
  text-align: Center;
}

.container table td .fa {
  float: right;
}

.container table td input {
  background: none;
  outline: none;
  border: 0;
  color: gray;
  pointer-events: none;
}

.container table td {
  .showEdit {
    background: none;
    outline: #ccc !important;
    border: 1px solid #ccc !important;
    pointer-events: unset;
  }
}

.container table td section {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 3vh auto;
}

.container table td .fa {
  position: absolute;
  right: 25px;
  top: 25px;
  font-size: 2em;
}

.container table td img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.container table td h3 {
  color: gray;
  font-weight: normal;
}

.container table textarea {
  width: 90%;
  resize: none;
  outline: none;
  border: 0;
  background: #1e1e1e;
  color: gray;
  padding: 20px;
}

@media (max-width: 820px) {
  .container {
    width: 100%;
  }
  .container table td {
    display: block;
    width: 90%;
    margin: 0px;
  }
}
.btn-wrapper {
  width: 30%;
  margin: 0 auto;
  .button-primary {
    margin-top: 10px;
    border-radius: 8px;
  }
}
</style>
