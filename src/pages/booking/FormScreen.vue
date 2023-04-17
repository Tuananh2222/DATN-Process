<template>
  <DefaultHeader />
  <div class="container">
    <div class="time-booking">
      <div class="dx-field-value">
        <DxDateBox
          :value="checkinDate"
          show-clear-button="true"
          :onValueChanged="handleCheckinChanged"
          pickerType="calendar"
          :disabled-dates="disabledDates"
        />
      </div>
      <div class="dx-field-value">
        <DxDateBox
          :value="checkoutDate"
          show-clear-button="true"
          pickerType="calendar"
          :onValueChanged="handleCheckoutChanged"
          :disabled-dates="disabledDates"
        ></DxDateBox>
      </div>
    </div>
    <div class="booking-form">
      <div class="detaile-room">
        <div class="header-detail-room">
          <div class="img-room">
            <img
              src="https://new-hls.s3.amazonaws.com/hbe/data/59d2d63d-b813-1541484722-4ff0-a98b-70a19e5d04fa/gallery/room/thumbs/sm_thumb_37940f85-ad3c-409a-b5e6-a72452535e58_1650034054.jpeg"
              alt=""
            />
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
              <div v-if="checkinDate && checkoutDate">
                <CDropdown
                  :data="dataCountRoom"
                  fieldDisplay="name"
                  fieldName="id"
                  @changeName="changeNameRoom"
                  @changeValue="changeValueRoom"
                />
              </div>
              <div v-if="!checkoutDate">
                <CButton
                  :label="'MIN 2 NIGHTS'"
                  :class-name="'button-primary button-square button-block button-disabled'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-booking" v-if="checkinDate && checkoutDate && coutnRoom">
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
          />
        </div>
        <div class="count-room">{{ nameRoom }}</div>
        <div class="price-room">
          {{ priceAfterDiscount * dayBooking * coutnRoom }}
        </div>
        <div class="count-night-rent">
          for
          {{ dayBooking }}
          night
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>

<script setup>
import RoomAPI from "@/api/RoomAPI";
import RoomRegisFormAPI from "@/api/RoomRegisFormAPI";
import CButton from "@/components/elements/CButton.vue";
// import CDatePicker from "@/components/elements/CDatePicker.vue";
import CDropdown from "@/components/elements/CDropdown.vue";
import { useHotelItemStore } from "@/stores/hotel-item";
import DxDateBox from "devextreme-vue/date-box";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { getDatesInRange } from "@/utils/functions/date-fn";
import DefaultHeader from "@/components/generals/defaultHeader.vue";
import DefaultFooter from "@/components/generals/defaultFooter.vue";

const { initProcess } = useHotelItemStore();
const route = useRoute();
const checkinDate = ref(null);
const checkoutDate = ref(null);
const disabledDates = ref([new Date("4/4/2023"), new Date("4/6/2023")]);
const nameRoom = ref("");
const nameDeal = ref("");
const priceRoom = ref(0);
const coutnRoom = ref(0);

const dayBooking = computed(() => {
  return Math.ceil(
    (checkoutDate.value - checkinDate.value) / (1000 * 60 * 60 * 24)
  );
});

let dataDetailRoom = ref({});
let dataTimeRoom = ref({});

//xem sự thay đổi của thời gian check in
watch(checkinDate, (newValue, oldValue) => {
  const newDisabledDates = [...disabledDates.value];
  if (newValue) {
    newDisabledDates.push(
      new Date(newValue.getFullYear(), newValue.getMonth(), newValue.getDate())
    );
    disabledDates.value = newDisabledDates;
  }
  if (oldValue) {
    newDisabledDates.splice(0, 1);
    disabledDates.value = newDisabledDates;
  }
});

onMounted(async () => {
  initProcess();
  GetRoomDetails();
  await GetTimeRoom();
});
const GetRoomDetails = async () => {
  const { data } = await RoomAPI.getRoomByID(route.params.id);
  dataDetailRoom.value = data;
  priceRoom.value = data.price;
};

const GetTimeRoom = async () => {
  const dataTime = await RoomRegisFormAPI.getRoomRegisFormById(route.params.id);
  dataTimeRoom.value = dataTime.data;
  disabledDates.value = getDatesInRange(
    new Date(dataTime.data.arrivalTime),
    new Date(dataTime.data.departureTime)
  );
};

const discountPriceEarly = (price) => {
  return (price * 0.35).toFixed(2);
};
const discountPriceNormal = (price) => {
  return (price * 0.5).toFixed(2);
};

const priceAfterDiscount = computed(() => {
  if (nameDeal.value == "Early deal 65") {
    return discountPriceEarly(priceRoom.value);
  }
  if (nameDeal.value == "Basic deal") {
    return discountPriceNormal(priceRoom.value);
  }
  return priceRoom.value;
});

const handleCheckinChanged = (e) => {
  checkinDate.value = e.value;
};

const handleCheckoutChanged = (e) => {
  checkoutDate.value = e.value;
};

const changeNameRoom = (name) => {
  nameRoom.value = name;
};
const changeValueRoom = (index) => {
  coutnRoom.value = index;
};

const changeNameDeal = (deal) => {
  nameDeal.value = deal;
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
