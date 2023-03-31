<template>
  <div class="app-container">
    <section class="app-actions">
      <div class="app-actions-line">
        <div class="filter-action-buttons">
          <CDropdown
            :data="data"
            fieldDisplay="name"
            fieldName="id"
            :placeholder="'-People-'"
          />
          <CDropdown
            :data="data"
            fieldDisplay="name"
            fieldName="id"
            :placeholder="'-Room Size-'"
          />
          <CDropdown
            :data="data"
            fieldDisplay="name"
            fieldName="id"
            :placeholder="'-Bed Type-'"
          />
          <CDropdown
            :data="data"
            fieldDisplay="name"
            fieldName="id"
            :placeholder="'-Bathroom-'"
          />
        </div>
      </div>
      <div class="app-actions-line">
        <TextBox />
      </div>
      <CButton
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
                <span class="card-price"> {{ item.bedType }}</span>
              </div>
              <div class="card-text small">
                Bathroom:
                <span class="card-price">{{ item.bathroom }}</span>
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
              Tổng số bản ghi : <b>{{ totalRecord }}</b>
            </div>

            <div class="msp-user-paging-content-right flex align-items-center">
              <div class="text-nowrap m-r-8">Số bản ghi trên trang</div>

              <div class="msp-user-paging-info text-nowrap">
                <b>{{ rowStart }}</b> - <b>{{ rowEnd }}</b> bản ghi
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
                  <div class="msp-user-paging-arrow-tooltip">Quay lại</div>
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
                  <div class="msp-user-paging-arrow-tooltip">Tiếp tục</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import RoomAPI from "@/api/RoomAPI";
import CButton from "@/components/elements/CButton.vue";
import CDropdown from "@/components/elements/CDropdown.vue";
import TextBox from "@/components/elements/textBox.vue";
import router from "@/router";
import { onMounted, ref } from "vue";

const pageNumber = ref(1);
const pageSize = ref(9);
const keyword = ref("");
const roomID = ref("");
let listHotel = ref([]);
let totalRecord = ref(0);
let rowStart = ref(0);
let rowEnd = ref(0);
onMounted(() => {
  getRoom();
});

const openModal = (id) => {
  router.push("/hotel-detail/" + id);
};
const getRoom = async () => {
  const Data = await await RoomAPI.filter(
    pageSize.value,
    pageNumber.value,
    keyword.value,
    roomID.value
  );
  listHotel = Data.data;
  console.log(Data);
  rowEnd.value = Data.data.rowEnd;
  rowStart.value = Data.data.rowStart;
  totalRecord.value = Data.data.totalRecord;
};

/**
 * Thay đổi page number
 * @param {*} pageNumber trang muốn chuyển
 */
const handleChangePageNumber = async (pageNumber) => {
  // this.loading = true;
  pageNumber.value = pageNumber;
  await getRoom();
  // this.loading = false;
};
const data = [
  {
    id: 1,
    name: "HD Video Player",
  },
  {
    id: 2,
    name: "SuperHD Video Player",
  },
  {
    id: 3,
    name: "SuperPlasma 50",
  },
  {
    id: 4,
    name: "SuperLED 50",
  },
  {
    id: 5,
    name: "SuperLED 42",
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
  flex-direction: column;
  width: 100%;
  height: 100%;
}

section.app-actions {
  padding: 0 40px 40px 40px;
  background-color: #f0ede8;
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
  width: 69%;
  margin: 0 auto;
}

.app-actions-line {
  display: flex;
  align-items: center;
  margin: 32px 0;
}

.app-main {
  flex: 1;
  overflow: hidden;
  padding: 24px 40px;
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
</style>
