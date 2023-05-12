<template>
  <div class="container">
    <div class="nav">
      <NavigationAdmin />
    </div>
    <main class="main-content">
      <BaseTopAdmin :name-page="'Dashboard'" />
      <div class="bottom-container">
        <div class="bottom-container__left">
          <div class="box spending-box">
            <div class="header-container">
              <div class="tab-current">
                <div
                  :class="
                    currentTab.Value == analystTab.Value && 'analyst-tab-active'
                  "
                  class="analyst-tab"
                  v-for="(analystTab, index) in analystTabs"
                  @click="currentTab = analystTab"
                  :key="index"
                >
                  {{ analystTab.Title }}
                </div>
              </div>
              <div class="year-selector">
                <DxSelectBox
                  :data-source="timeAnalysts"
                  displayExpr="Title"
                  valueExpr="Value"
                  v-model="timeAnalyst"
                  width="200px"
                >
                </DxSelectBox>
              </div>
            </div>
            <div class="bar-chart">
              <DxChart
                v-if="dataSource.length > 0"
                id="chart"
                :data-source="dataSource"
              >
                <DxCommonSeriesSettings
                  argument-field="state"
                  type="bar"
                  hover-mode="allArgumentPoints"
                  selection-mode="allArgumentPoints"
                >
                  <DxLabel :visible="true">
                    <DxFormat :precision="0" type="fixedPoint" />
                  </DxLabel>
                </DxCommonSeriesSettings>
                <DxSeries
                  argument-field="title"
                  value-field="total"
                  type="bar"
                  color="#fac29a"
                  width="80"
                  name="Lexington Revenue"
                />

                <DxScrollBar :height="5" />
                <DxLegend
                  vertical-alignment="bottom"
                  horizontal-alignment="center"
                />
                <DxExport :enabled="true" />
              </DxChart>
              <div class="w-full flex-center" v-if="dataSource.length == 0">
                Không có dữ liệu
              </div>
            </div>
          </div>
          <div class="box total-box">
            <div class="total-box__left">
              <div class="header-container">
                <h3 class="section-header">Total Income</h3>
                <svg
                  class="up-arrow"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="42" height="42" rx="8" fill="#F6F7F9" />
                  <path
                    d="M27.0702 18.57L21.0002 12.5L14.9302 18.57"
                    stroke="#7FB519"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 29.5V12.67"
                    stroke="#7FB519"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h1 class="price">
                {{ totalPrice }}<span class="price-currency">(USD)</span>
              </h1>
            </div>
            <div class="total-box__right">
              <div class="header-container">
                <h3 class="section-header">Total Expense</h3>
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="42" height="42" rx="8" fill="#F6F7F9" />
                  <path
                    d="M27.0702 23.43L21.0002 29.5L14.9302 23.43"
                    stroke="#FF4423"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 12.5V29.33"
                    stroke="#FF4423"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h1 class="price">
                {{ totalPrice * 0.9 }}<span class="price-currency">(USD)</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import OrderRoom from "@/api/OrderRoom";
import BaseTopAdmin from "@/components/generals/BaseTopAdmin.vue";
import NavigationAdmin from "@/components/generals/NavigationAdmin.vue";
import useAppStore from "@/stores/app";
import { TabAnalyst, TimeAnalyst, ToastMode } from "@/utils/Resource/Enum";
import { Resource } from "@/utils/Resource/resource";
import {
  DxChart,
  DxCommonSeriesSettings,
  DxExport,
  DxLegend,
  DxSeries,
  DxScrollBar,
} from "devextreme-vue/chart";
import DxSelectBox from "devextreme-vue/select-box";
import { onMounted, ref, watch } from "vue";

const appStore = useAppStore();
const { state: stateApp } = appStore;
const timeAnalyst = ref(TimeAnalyst.CurrentWeek);
const currentTab = ref({
  Title: "Đơn hàng",
  Value: TabAnalyst.Order,
});

const dataSource = ref([]);
const totalPrice = ref(0);
const orders = ref([]);

onMounted(() => {
  getOrder();
});
watch(
  [timeAnalyst, currentTab],
  async () => {
    try {
      const res = await OrderRoom.getReport(
        timeAnalyst.value,
        currentTab.value.Value
      );
      if (res) {
        dataSource.value = res.data;
        if (currentTab.value.Value == TabAnalyst.Order) {
          dataSource.value.forEach((data) => {
            if (
              [
                TimeAnalyst.LastWeek,
                TimeAnalyst.CurrentWeek,
                TimeAnalyst.CurrentMonth,
                TimeAnalyst.LastMonth,
              ].includes(timeAnalyst.value)
            ) {
              data.title = `Ngày ${data.title}`;
            } else {
              data.title = `Tháng ${data.title}`;
            }
          });
        }
      } else {
        stateApp.typeToast = ToastMode.ERROR;
        stateApp.toastMessage = Resource.errorMessage;
        setTimeout(() => (stateApp.toastMessage = ""), 3000);
      }
    } catch (error) {
      stateApp.typeToast = ToastMode.ERROR;
      stateApp.toastMessage = Resource.errorMessage;
      setTimeout(() => (stateApp.toastMessage = ""), 3000);
    }
  },
  {
    deep: true,
    immediate: true,
  }
);
const getOrder = async () => {
  try {
    const res = await OrderRoom.getAllOrderRoom();
    orders.value = res.data;
    totalPrice.value = orders.value.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
  } catch (error) {
    stateApp.typeToast = ToastMode.ERROR;
    stateApp.toastMessage = Resource.errorMessage;
    setTimeout(() => (stateApp.toastMessage = ""), 3000);
  }
};
const timeAnalysts = [
  {
    Title: "Tuần này",
    Value: TimeAnalyst.CurrentWeek,
  },
  {
    Title: "Tuần trước",
    Value: TimeAnalyst.LastWeek,
  },
  {
    Title: "Tháng này",
    Value: TimeAnalyst.CurrentMonth,
  },
  {
    Title: "Tháng trước",
    Value: TimeAnalyst.LastMonth,
  },
  {
    Title: "Năm nay",
    Value: TimeAnalyst.CurrentYear,
  },
  {
    Title: "Năm trước",
    Value: TimeAnalyst.LastYear,
  },
];

const analystTabs = [
  {
    Title: "Đơn hàng",
    Value: TabAnalyst.Order,
  },
  {
    Title: "Thu nhập",
    Value: TabAnalyst.InCome,
  },
];
</script>

<style lang="scss" scoped>
#pivotgrid {
  margin-top: 20px;
}

.currency {
  text-align: center;
}
.container {
  display: flex;
  height: 100%;
  .nav {
    width: 15%;
  }
}

/* -------------- MAIN CONTENT -------------- */
.main-content {
  display: flex;
  flex-direction: column;
  width: 85%;
  overflow: auto;
}

/* -------------- BOTTOM CONTAINER -------------- */
.bottom-container {
  display: flex;
  gap: 24px;
  padding: 32px;
  background-color: #f3f5f7;
}

.box {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 24px;
  margin-bottom: 24px; /*fix later*/
}

.bottom-container__left {
  width: 100%;
}

/* -------------- BAR CHART -------------- */
.bar-chart {
  max-height: 523px;
  width: 100%;
  display: flex;
  justify-content: center;
}

/* -------------- HEADER -------------- */
.header-container {
  color: #1a202c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  font-weight: 600;
  letter-spacing: -2%;
  .tab-current {
    display: flex;
    width: 200px;
    justify-content: space-around;
    align-items: center;
  }
}

.section-header {
  line-height: 24px;
  font-size: 16px;
}

.header-container span {
  line-height: 21px;
  font-size: 14px;
}

.year-selector {
  display: flex;
  align-items: center;
  gap: 24px;
  max-width: 200px;
}

.total-box {
  display: flex;
}

.total-box__left {
  border-right: 1px solid #f0f0f0;
  flex: 1;
}

.total-box__right {
  flex: 1;
}

.up-arrow,
.total-box__left {
  margin-right: 24px;
}

.price {
  line-height: 150%;
  margin-bottom: 14px;
}

.price-currency {
  line-height: 21px;
  font-size: 14px;
  font-weight: 600;
  color: #90a3bf;
  margin-left: 8px;
}

.total-box p,
.box p {
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #90a3bf;
}

.percentage-increase {
  color: #7fb519;
}

.percentage-decrease {
  color: #ff4423;
}

.date-selector {
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #c3d4e9;
  border-radius: 6px;
}

.date-selector span {
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  margin-left: 8px;
}

.transaction-box {
  margin-bottom: 0;
}

.transaction-history {
  width: 100%;
  text-align: left;
  vertical-align: middle;
  margin-top: 24px;
}

/* -------------- TABLE -------------- */
tr > th {
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #90a3bf;
  padding-bottom: 24px;
}

tr > td {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -2%;
  padding: 8px 0;
}

tr > td:first-child {
  display: flex;
  align-items: center;
  gap: 9px;
}

.status {
  margin-right: 8px;
}

/* -------------- BUTTON -------------- */
.button-box {
  display: flex;
  justify-content: space-between;
  margin-top: 56px;
}

.btn {
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.btn-purple {
  background-color: #7c5cfc;
  color: white;
}

.btn-white {
  background-color: white;
  color: black;
  border: 2px solid #7c5cfc;
}

/* -------------- PIE CHART -------------- */
.pie-chart {
  height: 220px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spending-box {
  position: relative;
}

.overall-spending {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 32%;
  left: 50%;
  text-align: center;
}

.overall-spending > h4 {
  color: #596780;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
}

.overall-spending > span {
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
}

.pie-chart__labels {
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-top: 40px;
}

.pie-chart__labels-item {
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
}

.pie-chart__labels-item,
.label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label {
  gap: 12px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #596780;
}

.label__color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.first {
  background: #eb7ca6;
}

.second {
  background: #ffacc8;
}

.third {
  background: #cc6ff8;
}

.fourth {
  background: #7c5cfc;
}

.fifth {
  background: #5caffc;
}

.sixth {
  background: #a1a9fe;
}

@media (max-width: 1300px) {
  .bottom-container {
    flex-direction: column;
    height: auto;
  }

  .btn {
    width: 45%;
  }
}

@media (max-width: 900px) {
  .top-container {
    gap: 24px;
  }
  .total-box {
    flex-direction: column;
  }

  .total-box__left {
    margin-right: 0;
    border-right: none;
    border-bottom: 1px solid #f3f5f7;
    padding-bottom: 24px;
    margin-bottom: 24px;
  }

  .up-arrow {
    margin-right: 0;
  }
}

@media (max-width: 780px) {
  .section-header {
    font-size: 18px;
  }

  table,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  tr > th {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #f3f5f7;
    position: relative;
    padding-left: 50%;
  }

  td::before {
    position: absolute;
    left: 0;
  }

  tr > td {
    text-align: end;
  }

  tr > td:first-child {
    justify-content: end;
  }

  td:nth-of-type(1):before {
    content: "Transactions";
  }
  td:nth-of-type(2):before {
    content: "Date";
  }
  td:nth-of-type(3):before {
    content: "Amount";
  }
  td:nth-of-type(4):before {
    content: "Status";
  }

  .total-box p,
  .box p {
    font-size: 14px;
  }

  .pie-chart__labels-item {
    font-size: 16px;
  }
}

@media (max-width: 600px) {
  .year-selector {
    gap: 12px;
  }
}
:deep(.dx-visibility-change-handler) {
  width: 800px;
}

.analyst-tab-active {
  color: #8f859e;
  font-weight: 700;
}
.analyst-tab {
  cursor: pointer;
  font-size: 16px;
}
</style>
