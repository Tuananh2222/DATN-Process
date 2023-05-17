<template>
  <DefaultHeader />
  <div class="container">
    <div class="time-booking">
      <CDateSelection
        :data-disable="state.listDataDisabled"
        @click-confirm="handleChooseDateIn"
      />
      <CDateSelection
        :data-disable="state.listDataDisabled"
        @click-confirm="handleChooseDateOut"
      />
    </div>
    <div class="booking-form">
      <div class="detaile-room">
        <div class="header-detail-room">
          <div class="img-room">
            <img :src="dataDetailRoom.imgUrl" width="240" />
          </div>
          <div class="description-room">
            <div class="title-description">{{ dataDetailRoom.roomName }}</div>
            <div class="text-description">
              {{ dataDetailRoom.description }}
            </div>
            <div class="service-description">
              <div class="icon icon-bath">
                <font-awesome-icon
                  :icon="['fas', 'shower']"
                  style="color: #fff"
                />
              </div>
              <div class="icon icon-wifi">
                <font-awesome-icon
                  :icon="['fas', 'wifi']"
                  style="color: #fff"
                />
              </div>
              <div class="icon icon-conditioner">
                <font-awesome-icon
                  :icon="['fas', 'wind']"
                  style="color: #fff"
                />
              </div>
            </div>
            <div class="size-description-room">
              <div class="bed-room">Bed size: {{ dataDetailRoom.bedType }}</div>
              <div class="size-room">
                Room size {{ dataDetailRoom.roomSize }}m<sup>2</sup>
              </div>
            </div>
          </div>
        </div>
        <div class="form-booking">
          <div class="booking-item">
            <div class="title-room">
              <div class="main">{{ dataDetailRoom.roomName }}</div>
              <div class="cancel">Flexible cancellation</div>
              <div class="breakfast">
                Breakfast included
                <div class="icon">
                  <font-awesome-icon :icon="['fas', 'utensils']" size="xs" />
                </div>
              </div>
            </div>
            <div class="count-people">
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'user-group']" size="lg" />
              </div>
              2 Adult
            </div>
            <div class="price">
              <div class="count-room">1 room left</div>
              <div class="price-discount-room">
                USD {{ dataDetailRoom.price }}
              </div>
              <div class="text">per night</div>
            </div>
            <div class="room">
              <div
                v-if="
                  state.orderRoom.arrivalTime &&
                  state.orderRoom.depatureTime &&
                  dayBooking >= 2
                "
              >
                <CDropdown
                  :data="dataCountRoom"
                  fieldDisplay="name"
                  fieldName="id"
                  @changeName="changeNameRoom"
                  @changeValue="changeValueRoom"
                />
              </div>
              <div v-if="dayBooking < 2">
                <CButton
                  :label="'MIN 2 DAYS'"
                  :class-name="'button-primary button-square button-block button-disabled'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="btn-booking"
        v-if="
          state.orderRoom.arrivalTime &&
          state.orderRoom.depatureTime &&
          countRoom
        "
      >
        <CDropdown
          :data="dataDeal"
          fieldDisplay="nameDeal"
          fieldName="id"
          :placeholder="'-Chọn Khuyến Mãi-'"
          @changeName="changeNameDeal"
        />
        <div class="btn-wrapper">
          <CButton
            :label="'Booking Now'"
            :class-name="'button-primary button-square button-block button-effect-ujarak'"
            @handle-button="handleSubmitForm"
          />
        </div>
        <div class="count-room">{{ nameRoom }}</div>
        <div class="price-room">
          {{ (priceAfterDiscount * dayBooking * countRoom).toFixed(2) }}
        </div>
        <div class="count-night-rent">
          for
          {{ dayBooking }}
          night
        </div>
      </div>
    </div>
  </div>
  <CPopup :popup-title="'Method Payment'" v-if="isShowPopupPayment">
    <div class="payment-method">
      <div class="payment-method-item">
        <div class="title">Pay online with PayPal:</div>
        <CPaypal
          :price="
            (priceAfterDiscount * countRoom * dayBooking).toFixed(2).toString()
          "
          :name-room="dataDetailRoom.roomName"
          :description="dataDetailRoom.description"
          @pop-up="handleUpdateState"
          @close-popup="handleButtonPaypal"
        />
      </div>
      <div class="payment-method-item">
        <div class="title">Direct payment:</div>
        <div class="phone">
          Please contact us directly via hotline:
          <b style="font-weight: bold">0971935724</b> or go to the payment
          counter
        </div>
        <CButton
          :label="'Confirm'"
          :class-name="'button-primary button-square button-block button-effect-ujarak'"
          @handle-button="handleConfirm"
        />
      </div>
    </div>
  </CPopup>
  <DefaultFooter />
</template>

<script setup>
import RoomAPI from "@/api/RoomAPI";
import CButton from "@/components/elements/CButton.vue";
import CDropdown from "@/components/elements/CDropdown.vue";
import { useHotelItemStore } from "@/stores/hotel-item";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getDatesInRange } from "@/utils/functions/date-fn";
import DefaultHeader from "@/components/generals/defaultHeader.vue";
import DefaultFooter from "@/components/generals/defaultFooter.vue";
import useOrderRoom from "@/stores/orderRoom";
import CDateSelection from "@/components/elements/CDateSelection.vue";
import CPopup from "@/components/elements/CPopup.vue";
import CPaypal from "@/components/elements/CPaypal.vue";
import router from "@/router";
import useAppStore from "@/stores/app";
import { Resource } from "@/utils/Resource/resource";
import useUserStore from "@/stores/user";

const { initProcess } = useHotelItemStore();
const userStore = useUserStore();
const orderRoomStore = useOrderRoom();
const { getUser, state: stateUser } = userStore;
const {
  state,
  getDataOrder,
  formatDate,
  updateStatePayment,
  checkDateRange,
  submitForm,
} = orderRoomStore;
const route = useRoute();
const nameRoom = ref("");
const nameDeal = ref("");
const countRoom = ref(0);
const isShowPopupPayment = ref(false);
const appStore = useAppStore();
const { state: stateApp } = appStore;

const dayBooking = computed(() => {
  return Math.ceil(
    (state.orderRoom.depatureTime - state.orderRoom.arrivalTime) /
      (1000 * 60 * 60 * 24)
  );
});

let dataDetailRoom = ref({});

onMounted(async () => {
  await initProcess();
  await GetRoomDetails();
  await getDataOrder();
  await getUser();
});

const GetRoomDetails = async () => {
  const { data } = await RoomAPI.getRoomByID(route.params.id);
  dataDetailRoom.value = data;
  state.orderRoom.price = data.price;
};

const discountPriceEarly = (price) => {
  return (price * 0.35).toFixed(2);
};
const discountPriceNormal = (price) => {
  return (price * 0.5).toFixed(2);
};

const priceAfterDiscount = computed(() => {
  if (nameDeal.value == "Early deal 65") {
    return discountPriceEarly(state.orderRoom.price);
  }
  if (nameDeal.value == "Basic deal") {
    return discountPriceNormal(state.orderRoom.price);
  }
  return state.orderRoom.price;
});

const changeNameRoom = (name) => {
  nameRoom.value = name;
};
const changeValueRoom = (index) => {
  countRoom.value = index;
};

const changeNameDeal = (deal) => {
  nameDeal.value = deal;
};

const handleChooseDateIn = (date) => {
  if (date) {
    const dateFormat = new Date(date);
    state.orderRoom.arrivalTime = dateFormat;
  }
};
const handleChooseDateOut = (date) => {
  state.orderRoom.depatureTime = date;
};

const handleSubmitForm = async () => {
  isShowPopupPayment.value = true;
};

const handleUpdateState = async () => {
  try {
    state.orderRoom.userID = stateUser.detailInfoUser.userID;
    state.orderRoom.roomID = route.params.id;
    state.orderRoom.price =
      priceAfterDiscount.value * countRoom.value * dayBooking.value.toFixed(2);
    await updateStatePayment();
    isShowPopupPayment.value = false;
  } catch (error) {
    stateApp.typeToast = ToastMode.ERROR;
    stateApp.toastMessage = Resource.errorMessage;
    setTimeout(() => (stateApp.toastMessage = ""), 3000);
  }
};

const handleConfirm = async () => {
  try {
    state.orderRoom.roomID = route.params.id;
    state.orderRoom.userID = stateUser.detailInfoUser.userID;
    state.orderRoom.price =
      priceAfterDiscount.value * countRoom.value * dayBooking.value;
    await submitForm();
    isShowPopupPayment.value = false;
  } catch (error) {
    stateApp.typeToast = ToastMode.ERROR;
    stateApp.toastMessage = Resource.errorMessage;
    setTimeout(() => (stateApp.toastMessage = ""), 3000);
  }
};

const dataCountRoom = [
  {
    id: 1,
    name: "1 Room",
  },
  {
    id: 2,
    name: "2 Room",
  },
];
const dataDeal = [
  {
    id: 1,
    nameDeal: "Early deal 65",
  },
  {
    id: 2,
    nameDeal: "Basic deal",
  },
  {
    id: 3,
    nameDeal: "No deal",
  },
];
</script>

<style lang="scss" scoped>
.container {
  width: 75%;
  margin: 0 auto;
  .time-booking {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 20px 40px;
    background-color: #c5c5c5;
  }
  .booking-form {
    width: 100%;
    display: flex;
    margin-top: 20px;
    .detaile-room {
      width: 80%;
      background-color: #f8f8f8;
      padding: 20px;
      .header-detail-room {
        display: flex;
        .description-room {
          padding-left: 20px;
          .title-description {
            font-weight: 600;
            font-size: 16px;
          }
          .text-description {
            margin-top: 10px;
            font-size: 12px;
          }
          .service-description {
            margin-top: 10px;
            display: flex;
            .icon {
              background-color: #008000;
              margin-right: 5px;
              width: 30px;
              height: 30px;
              border-radius: 50%;
              text-align: center;
              line-height: 30px;
            }
          }
          .size-description-room {
            display: flex;
            align-items: center;
            font-size: 12px;
            margin-top: 10px;
            .bed-room {
              margin-right: 10px;
            }
            .size-room {
              text-align: center;
            }
          }
        }
      }
      .form-booking {
        margin-top: 50px;
        .booking-item {
          display: grid;
          grid-template-columns: 1fr 1fr 125px 1fr;
          margin-top: 30px;
          .main {
            font-size: 13px;
            line-height: 1;
            font-weight: 600;
          }
          .discount,
          .cancel,
          .breakfast {
            display: flex;
            margin-top: 5px;
            .icon {
              margin-left: 5px;
            }
          }
          .discount {
            display: flex;
            align-items: center;
            .icon {
              background-color: red;
              width: 15px;
              height: 15px;
              text-align: center;
              line-height: 17px;
              border-radius: 50%;
            }
          }

          .count-people {
            text-align: center;
          }
          .price {
            text-align: center;
            .count-room {
              color: red;
              font-size: 10px;
            }
            .price-discount-room {
              margin-top: 5px;
              font-size: 18px;
            }
            .price-room {
              font-size: 12px;
              color: #ccc;
              margin: 2px 0 5px 0;
            }
            .text {
              font-size: 10px;
            }
          }
          .room {
            padding-left: 50px;
          }
        }
      }
    }
    .btn-booking {
      width: 20%;
      padding: 0 20px;
      text-align: center;
      .count-room {
        margin-top: 5px;
      }
      .price-room {
        margin: 5px 0;
        font-weight: 300;
        font-size: 19px;
      }
      .btn-wrapper {
        margin-top: 10px;
      }
    }
  }
}
</style>
