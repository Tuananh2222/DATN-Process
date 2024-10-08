<template>
  <DefaultHeader />
  <div class="app-container">
    <section class="app-actions">
      <div class="app-actions-line">
        <CInput
          @changeValue="handleValueSearch"
          :value="keyword"
          :placeholder="'Tìm kiếm phòng...'"
        />
      </div>
      <div class="app-actions-line">
        <CDropdown
          :data="countPeopleData"
          field-display="value"
          field-name="value"
          :value-init="countValues"
          placeholder="Number of people in 1 room"
          @changeValue="handleChangeValue"
          width="280px"
        />
      </div>
      <div class="app-actions-line">
        <div class="wrapper">
          <header>
            <h2>Price Range</h2>
            <p>Choose your desired price</p>
          </header>
          <CRadio
            :value="150"
            v-model="selectedValue"
            :name="'Price'"
            :label="'Under $150'"
          />
          <CRadio
            :value="300"
            v-model="selectedValue"
            :name="'Price'"
            :label="'Between $150 & $300'"
          />
          <CRadio
            :value="500"
            v-model="selectedValue"
            :name="'Price'"
            :label="'Over $300'"
          />
          <CRadio
            :value="0"
            v-model="selectedValue"
            :name="'Price'"
            :label="'Reset'"
          />
        </div>
      </div>

      <CButton
        @handle-button="handleSearch"
        :label="'Find Room'"
        :class-name="'button-primary button-square button-block button-effect-ujarak'"
      />
    </section>
    <section class="app-main">
      <div class="app-main-left cards-area">
        <div
          v-for="(item, index) in listHotel.data"
          :key="index"
          class="card-wrapper main-card"
        >
          <a class="card cardItemjs" @click="openModal(item.roomID)">
            <div class="card-image-wrapper">
              <img :src="item.imgUrl" alt="Hotel" />
            </div>
            <div class="card-info">
              <div class="card-text big cardText-js">
                {{ item.roomName }}
              </div>
              <div class="card-text small">
                Max People:
                <span class="card-price">{{ item.countPeople }}</span>
              </div>
              <div class="card-text small">
                Room Size:
                <span class="card-price">{{ item.roomSize }}m<sup>2</sup></span>
              </div>
              <div class="card-text small">
                Bed Type:
                <span class="card-price"> {{ item.bedTypeName }}</span>
              </div>
              <div class="card-text small">
                Bathroom:
                <span class="card-price">{{ item.bathroomName }}</span>
              </div>
            </div>
          </a>
        </div>
        <!-- Paging -->
        <div class="msp-user-paging w-full flex-center flex-column">
          <div
            class="msp-user-paging-content w-full flex align-items-center flex-between"
          >
            <div class="msp-user-paging-content-left text-nowrap">
              Total number of records : <b>{{ totalRecord }}</b>
            </div>

            <div class="msp-user-paging-content-right flex align-items-center">
              <div class="text-nowrap m-r-8">Number of records per page</div>

              <div class="msp-user-paging-info text-nowrap">
                <b>{{ rowStart }}</b> - <b>{{ rowEnd }}</b> record
              </div>

              <div class="msp-user-paging-arrow-gr flex flex-between">
                <div class="msp-icon-36 flex-center msp-user-paging-arrow">
                  <div
                    :style="{ opacity: rowStart == 1 ? '.6' : '' }"
                    class="msp-icon-24 msp-icon-arrow-left cursor-pointer"
                    @click="
                      rowStart != 1 && handleChangePageNumber(pageNumber - 1)
                    "
                  >
                    <font-awesome-icon
                      :icon="['fas', 'chevron-left']"
                      style="color: #fafafa"
                    />
                  </div>
                  <div class="msp-user-paging-arrow-tooltip">Come back</div>
                </div>

                <div class="msp-icon-36 flex-center msp-user-paging-arrow">
                  <div
                    :style="{ opacity: rowEnd == totalRecord ? '.6' : '' }"
                    class="msp-icon-24 msp-icon-arrow-right cursor-pointer"
                    @click="
                      rowEnd != totalRecord &&
                        handleChangePageNumber(pageNumber + 1)
                    "
                  >
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      style="color: #fafafa"
                    />
                  </div>
                  <div class="msp-user-paging-arrow-tooltip">Continue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <DefaultFooter />
  <CLoading v-if="isLoading" />
</template>

<script setup>
import RoomAPI from "@/api/RoomAPI";
import CButton from "@/components/elements/CButton.vue";
import CDropdown from "@/components/elements/CDropdown.vue";
import CInput from "@/components/elements/CInput.vue";
import CLoading from "@/components/elements/CLoading.vue";
import CRadio from "@/components/elements/CRadio.vue";
import DefaultFooter from "@/components/generals/defaultFooter.vue";
import DefaultHeader from "@/components/generals/defaultHeader.vue";
import router from "@/router";
import useAppStore from "@/stores/app";
import { ToastMode } from "@/utils/Resource/Enum";
import { Resource } from "@/utils/Resource/resource";
import { onMounted, ref, watch } from "vue";

const pageNumber = ref(1);
const pageSize = ref(9);
const keyword = ref("");
let listHotel = ref([]);
let totalRecord = ref(0);
let rowStart = ref(0);
let rowEnd = ref(0);
const isLoading = ref(false);
const selectedValue = ref(null);
const minPrice = ref(0);
const maxPrice = ref(0);
const countValues = ref(0);
const appStore = useAppStore();
const { state: stateApp } = appStore;

onMounted(async () => {
  isLoading.value = true;
  await getRoom();
  isLoading.value = false;
});

watch(
  () => selectedValue.value,
  (newV, oldV) => {
    console.log(newV, oldV);
    if (oldV == null) {
      minPrice.value = 0;
    } else {
      minPrice.value = oldV;
    }
    if (newV == 0) {
      maxPrice.value = 500;
      minPrice.value = 0;
    } else {
      maxPrice.value = newV;
    }
    getRoom();
  }
);
const openModal = (id) => {
  router.push("/hotel-detail/" + id);
};
const getRoom = async () => {
  try {
    const Data = await RoomAPI.filter(
      pageSize.value,
      pageNumber.value,
      keyword.value,
      minPrice.value,
      maxPrice.value,
      countValues.value
    );
    listHotel = Data.data;
    rowEnd.value = Data.data.rowEnd;
    rowStart.value = Data.data.rowStart;
    totalRecord.value = Data.data.totalRecord;
  } catch (error) {
    stateApp.typeToast = ToastMode.ERROR;
    stateApp.toastMessage = Resource.errorMessage;
    setTimeout(() => (stateApp.toastMessage = ""), 3000);
  }
};

/**
 * Thay đổi page number
 * @param {*} pageNumber trang muốn chuyển
 */
const handleChangePageNumber = async (numberPage) => {
  // this.loading = true;
  pageNumber.value = numberPage;
  await getRoom();
  // this.loading = false;
};

const handleValueSearch = (kword) => {
  keyword.value = kword;
};

const handleSearch = async () => {
  console.log(selectedValue.value);
  if (!keyword.value || keyword.value.trim()) {
    pageNumber.value = 1;
    await getRoom();
  }
};

const handleChangeValue = async (count) => {
  isLoading.value = true;
  countValues.value = count;
  pageNumber.value = 1;
  await getRoom();
  isLoading.value = false;
};

const countPeopleData = [
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
  {
    value: 6,
  },
  {
    value: 7,
  },
];
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

button,
a {
  cursor: pointer;
}

.app-container {
  display: flex;
  width: 100%;
  height: 100%;
}

section.app-actions {
  width: 20%;
}

:deep(.container-input) {
  width: 69%;
  margin: 0 auto;
}

:deep(.sub-container) {
  margin-top: 0;
}
:deep(.input-border) {
  height: 40px;
  border-radius: 0;
}

.loaction-btn {
  padding: 0;
  border: 1px solid var(--main-border-color);
  background-color: var(--button-bg-light);
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.button-primary) {
  border: 1px solid #979797;
  padding: 10px 16px;
  font-size: 14px;
  width: 75%;
  margin: 0 auto;
  border-radius: 8px;
}

.app-actions-line {
  display: flex;
  align-items: center;
  width: 75%;
  margin: 32px auto;
}

.app-main {
  flex: 1;
  overflow: hidden;
}

.cards-area {
  background-color: var(--cards-area-bg);
  padding: 24px;
  height: 100%;
  overflow-y: auto;
  border-radius: 20px;
}

.app-main-left {
  flex: 4;
  display: flex;
  flex-wrap: wrap;
}

.card-wrapper {
  width: 33.3%;
  height: auto;
  padding: 8px;
}

.card {
  background-color: var(--cards-bg);
  border: 3px solid var(--cards-bg);
  border-radius: 10px;
  overflow: hidden;
  display: block;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
}

.card-image-wrapper {
  max-height: 40%;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid var(--cards-bg);
  overflow: hidden;
  height: 0;
  padding-top: calc(591.44 / 1127.34 * 100%);
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);

  img {
    width: 100%;
    object-fit: cover;
    z-index: 1;
    position: relative;
    z-index: 1;
    position: relative;
    margin-top: -60.25%;
  }
}

.card-info {
  background-color: var(--cards-bg);
  padding: 8px 16px;
}

.card-text {
  line-height: 24px;

  &.big {
    font-size: 16px;
    font-weight: 600;
    color: var(--main-font-color);
  }

  &.small {
    font-size: 12px;
    color: var(--light-font-color);
    font-weight: 600;

    span {
      font-size: 12px;
      color: var(--main-font-color);
      font-weight: 600;
      display: inline-block;
      margin-left: 8px;
    }
  }
}

@keyframes hide {
  from {
    z-index: 2;
    transform: scale(1);
    opacity: 1;
  }

  to {
    z-index: -1;
    transform: scale(0);
    opacity: 0;
  }
}

@keyframes show {
  from {
    transform: scale(0);
    opacity: 0;
    z-index: -1;
  }
  to {
    transform: scale(1);
    opacity: 1;
    z-index: 2;
  }
}

.filter-action-buttons {
  display: flex;
  justify-content: space-around;
  overflow-x: auto;
  position: relative;
  margin: 0 auto;
  width: 70%;

  button {
    margin-bottom: 4px;
  }
}

@media screen and (max-width: 1020px) {
  .app-main-left .card-wrapper {
    width: 50%;
  }
}

@media screen and (max-width: 990px) {
}

@media screen and (max-width: 780px) {
  .app-actions-line {
    margin: 16px 0;
  }

  .app-main-left .card-wrapper {
    width: 100%;
  }

  .cards-area {
    padding: 0 8px;
  }

  .app-main,
  .app-actions {
    padding: 24px;
  }

  section.app-actions {
    padding: 0 24px;
  }
}

@media screen and (max-width: 520px) {
  .app-container {
    overflow: auto;
  }

  .app-main {
    flex: unset;
  }

  .card:hover {
    transform: scale(1);
  }

  section.app-main {
    overflow: visible;
  }
}
.wrapper {
  width: 400px;
  background: #fff;
  border-radius: 10px;
  padding: 20px 25px 40px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
  header {
    margin-bottom: 50px;
  }
}
header h2 {
  font-size: 24px;
  font-weight: 600;
}
header p {
  margin-top: 5px;
  font-size: 16px;
}
:deep(.input-wrapper) {
  width: 100%;
}
</style>
