<template>
  <div id="modal-window" class="shadow">
    <div class="main-modal">
      <div class="modal-left">
        <div class="modal-image-wrapper">
          <img :src="dataDetail.imgUrl" />
        </div>
        <div class="modal-info-header">
          <div class="left-side">
            <h1 class="modalHeader-js"></h1>
            <p>{{ dataDetail.roomName }}</p>
          </div>
        </div>
        <div class="info-bar">
          <div class="info-wrapper">
            <div class="info-icon">
              <svg
                width="69"
                height="69"
                viewBox="0 0 69 69"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M47.698 20.346a8.356 8.356 0 0 1 5.903-2.422c2.27 0 4.39.908 5.904 2.422M38.464 7.63c8.325-8.174 21.797-8.174 29.971 0M43.308 14.14c5.752-5.752 14.985-5.752 20.586 0"
                    stroke="#f52c53"
                  ></path>
                  <path
                    d="M53.526 23.88a5.643 5.643 0 1 1 0 11.286 5.643 5.643 0 0 1 0-11.286z"
                    stroke="#1E2B31"
                  ></path>
                  <path
                    d="M53.925 67.876C24.477 67.853.522 43.897.5 14.448c-.002-2.542 2.041-4.623 4.583-4.623h10.694c2.548 0 4.58 2.086 4.583 4.635a33.185 33.185 0 0 0 1.665 10.376 4.616 4.616 0 0 1-1.134 4.675l-3.918 5.204c-.563.747-.648 1.762-.185 2.574C20.382 43.6 24.726 47.94 31.08 51.575a2.356 2.356 0 0 0 2.582-.183l5.363-4.047c1.066-1.088 2.911-1.516 4.531-.96a33.086 33.086 0 0 0 10.361 1.659c2.548.004 4.634 2.035 4.634 4.583V63.29c0 2.544-2.082 4.588-4.626 4.586z"
                    stroke="#f52c53"
                  ></path>
                </g>
              </svg>
            </div>
            <span>Direct Phone & Internet</span>
          </div>
          <div class="info-wrapper">
            <div class="info-icon">
              <svg
                width="69"
                height="68"
                viewBox="0 0 69 68"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path id="a_cassa" d="M0 67.376h67.881V0H0z"></path>
                </defs>
                <g transform="translate(1)" fill="none" fill-rule="evenodd">
                  <path
                    d="M.5 3.5v54.05a3 3 0 0 0 3 3h60.882a3 3 0 0 0 3-3V3.5a3 3 0 0 0-3-3H3.5a3 3 0 0 0-3 3z"
                    stroke="#f52c53"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <mask id="b_cassa" fill="#fff">
                    <use xlink:href="#a_cassa"></use>
                  </mask>
                  <path
                    stroke="#f52c53"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    mask="url(#b_cassa)"
                    d="M4.885 55.83h58.11V5.22H4.885zM17.772 66.876H5.882a1 1 0 0 1-1-1v-5.329h13.89v5.329a1 1 0 0 1-1 1zM61.999 66.876h-11.89a1 1 0 0 1-1-1v-5.329h13.89v5.329a1 1 0 0 1-1 1z"
                  ></path>
                  <path
                    stroke="#f52c53"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    mask="url(#b_cassa)"
                    d="M15.499 50.101h6.548v-6.548h-6.548zM25.611 50.101h6.548v-6.548h-6.548zM35.723 50.101h6.548v-6.548h-6.548zM45.836 50.101h6.548v-6.548h-6.548z"
                  ></path>
                  <path
                    d="M33.935 11.49c-7.866 0-14.245 6.38-14.245 14.245 0 7.866 6.38 14.245 14.245 14.245 7.877 0 14.256-6.379 14.256-14.245S41.812 11.49 33.935 11.49z"
                    stroke="#1E2B31"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    mask="url(#b_cassa)"
                  ></path>
                  <path
                    d="M31.521 15.736v5.55a5.213 5.213 0 0 0-1.939 1.874H23.98a10.283 10.283 0 0 1 7.542-7.424zM31.521 30.186v5.549a10.303 10.303 0 0 1-7.618-7.747h5.507a5.198 5.198 0 0 0 2.111 2.198zM36.36 21.296v-5.56a10.283 10.283 0 0 1 7.542 7.424H38.29a5.08 5.08 0 0 0-1.93-1.864zM43.977 27.987a10.303 10.303 0 0 1-7.618 7.747v-5.559a4.968 4.968 0 0 0 2.101-2.188h5.517z"
                    stroke="#1E2B31"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    mask="url(#b_cassa)"
                  ></path>
                </g>
              </svg>
            </div>
            <span>Safe & Ninibar</span>
          </div>
          <div class="info-wrapper">
            <div class="info-icon">
              <svg
                width="93"
                height="68"
                viewBox="0 0 93 68"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    stroke="#1E2B31"
                    d="M41.134 66.876h9.828v-8.619h-9.828z"
                  ></path>
                  <path
                    stroke="#f52c53"
                    d="M.5 58.257h91.096V.5H.5zM26.745 66.876H65.35"
                  ></path>
                  <path
                    stroke="#1E2B31"
                    d="M4.552 55.83h82.991V2.927H4.552z"
                  ></path>
                </g>
              </svg>
            </div>
            <span>TV LCD</span>
          </div>
          <div class="info-wrapper">
            <div class="info-icon">
              <svg
                width="117"
                height="66"
                viewBox="0 0 117 66"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M46.897 65.705c2.17-2.769 2.48-6.502.791-9.502-.02-.034-.054-.054-.077-.087-.869-1.62-.686-3.628.496-5.142M55.157 65.705c2.17-2.769 2.48-6.502.791-9.502-.02-.034-.054-.054-.077-.087-.868-1.62-.686-3.628.496-5.142M63.417 65.705c2.17-2.769 2.479-6.502.79-9.502-.02-.034-.052-.054-.076-.087-.868-1.62-.685-3.628.497-5.142M100.426 32.032H15.683a5 5 0 0 0-5 5v5.809h94.743v-5.81a5 5 0 0 0-5-5zM19.1 11.074h77.907"
                    stroke="#1E2B31"
                  ></path>
                  <path
                    stroke="#f52c53"
                    d="M115.608.5v29.853L105.425 42.84H10.682L.5 30.353V.5z"
                  ></path>
                </g>
              </svg>
            </div>
            <span>Air Conditioning</span>
          </div>
        </div>
        <div class="desc-wrapper">
          <div class="modal-info-header">
            <h1>Description</h1>
            <p>
              {{ dataDetail.description }}
            </p>
          </div>
          <div class="desc-actions">
            <div class="btn-wrapper" @click="handleBookRoom">
              <CButton
                :label="'Book Now'"
                :class-name="'button-primary button-square button-block button-effect-ujara'"
              />
            </div>
            <div class="add-favourite">
              <input type="checkbox" id="favourite" />
              <label for="favourite">
                <span class="favourite-icon">
                  <svg
                    class="btn-icon feather feather-heart"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    />
                  </svg>
                </span>
                <span>Add to favourites</span>
              </label>
            </div>
          </div>
          <div class="desc-view">
            <div class="modal-info-header">
              <h1>View</h1>
              <div class="view-main">
                <div class="view-item">
                  <font-awesome-icon :icon="['fas', 'check']" />
                  <div class="text-view">{{ dataDetail.viewRoom }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="desc-room">
            <div class="modal-info-header">
              <h1>Room Facilities</h1>
              <div class="view-main">
                <div
                  class="view-item"
                  v-for="(item, index) in state.listFacilities"
                  :key="index"
                >
                  <font-awesome-icon :icon="['fas', 'check']" />
                  <div class="text-view">{{ item.facilitiesName }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-right">
        <div class="app-main-right-header">
          <span>Reviews</span>
          <a href="#">See All</a>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="profile-info-wrapper">
              <div class="profile-img-wrapper">
                <img
                  src="https://source.unsplash.com/featured/1200x900/?woman,cool"
                  alt="Review"
                />
              </div>
              <p>Jessica Finnick</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="profile-info-wrapper">
              <div class="profile-img-wrapper">
                <img
                  src="https://source.unsplash.com/featured/1200x900/?woman,latina"
                  alt="Review"
                />
              </div>
              <p>Gloria Ramirez</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="profile-info-wrapper">
              <div class="profile-img-wrapper">
                <img
                  src="https://source.unsplash.com/featured/1200x900/?man,art"
                  alt="Review"
                />
              </div>
              <p>Luck Besson</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="profile-info-wrapper">
              <div class="profile-img-wrapper">
                <img
                  src="https://source.unsplash.com/featured/1200x900/?woman,adventure"
                  alt="Review"
                />
              </div>
              <p>Luna Rosa</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="profile-info-wrapper">
              <div class="profile-img-wrapper">
                <img
                  src="https://source.unsplash.com/featured/1200x900/?man,modern"
                  alt="Review"
                />
              </div>
              <p>John mayer</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="profile-info-wrapper">
              <div class="profile-img-wrapper">
                <img
                  src="https://source.unsplash.com/featured/1200x900/?woman"
                  alt="Review"
                />
              </div>
              <p>Tina Finnick</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="profile-info-wrapper">
              <div class="profile-img-wrapper">
                <img
                  src="https://source.unsplash.com/featured/1200x900/?woman,modern"
                  alt="Review"
                />
              </div>
              <p>July Wallock</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RoomAPI from "@/api/RoomAPI";
import CButton from "@/components/elements/CButton.vue";
import router from "@/router";
import { useHotelItemStore } from "@/stores/hotel-item";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const { state, initProcess } = useHotelItemStore();
const route = useRoute();

let dataDetail = ref({});

onMounted(async () => {
  initProcess();
  GetRoomDetails();
});

const GetRoomDetails = async () => {
  dataDetail = await (await RoomAPI.geRoomByID(route.params.id)).data;
};

const handleBookRoom = () => {
  router.push('/booking/booking-form')
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

button,
a {
  cursor: pointer;
}

.btn-icon {
  width: 16px;
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

.app-main-right-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  color: var(--main-font-color);
  background-color: var(--cards-area-bg);

  span {
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
  }

  a {
    font-size: 14px;
    color: #d84851;
    font-weight: 600;
  }
}

.main-modal {
  width: 100%;
  height: 90%;
  background: var(--app-bg);
  border-radius: 20px;
  position: relative;
  display: flex;
  padding: 0 32px;
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

.modal-image-wrapper {
  border-radius: 20px;
  overflow: hidden;
  max-height: 50%;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

.modal-left {
  flex: 5;
  overflow-y: auto;
}

.modal-image-wrapper {
  margin-bottom: 24px;
}

.modal-info-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  .view-main {
    margin-top: 10px;
    display: flex;
    .view-item {
      margin-right: 20px;
      display: flex;
      .text-view {
        margin-left: 5px;
        font-size: 16px;
      }
    }
  }
}
.desc-room {
  .view-main {
    display: flex;
    flex-wrap: wrap;
    .view-item {
      width: 270px;
      margin-top: 15px;
    }
  }
}

.left-side {
  h1 {
    margin: 0;
    font-size: 24px;
    line-height: 32px;
    color: #f3f3f3;
  }

  p {
    color: #000;
    font-size: 24px;
    line-height: 24px;
  }
}

.right-side {
  color: #f3f3f3;

  span {
    display: inline-block;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
  }
}

.info-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  span {
    display: block;
    font-weight: 500;
    font-size: 14px;
    color: var(--main-font-color);
  }
}

.info-bar {
  display: flex;
  justify-content: space-between;
}

.info-icon {
  border-radius: 50%;
  color: #d84851;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  flex-shrink: 0;
}

.desc-wrapper {
  .modal-info-header {
    margin-top: 24px;
    flex-direction: column;
  }

  h1 {
    font-size: 24px;
    margin: 0;
    line-height: 32px;
    color: var(--main-font-color);
  }

  p {
    color: var(--light-font-color);
  }
}

.desc-actions {
  display: flex;
  align-items: center;
  margin-top: 32px;
}

:deep(.button-primary) {
  border-radius: 6px;
  font-size: 16px;
  margin-right: 32px;
  padding: 10px;
  font-size: 14px;
  width: 120px;
}

.add-favourite {
  display: flex;
  align-items: center;
}

.add-favourite input {
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;

  &:checked + label {
    color: var(--buttons-color-primary);

    .btn-icon {
      transition: 0.2s;
      color: var(--buttons-color-primary);
      fill: var(--buttons-color-primary);
    }
  }
}

.add-favourite label {
  cursor: pointer;
  color: var(--light-font-color);
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;

  span {
    display: flex;
    margin-right: 4px;
  }
}

.modal-right {
  background-color: var(--cards-area-bg);
  height: 100%;
  overflow-y: auto;
  border-radius: 20px;
  padding: 0 16px;
  flex: 3;
  max-width: 320px;
  margin-left: 16px;

  .card-wrapper {
    width: 100%;
    padding: 8px 0;
  }

  .card > p {
    font-size: 12px;
    line-height: 16px;
    color: var(--light-font-color);
    margin: 0;
  }

  .card {
    padding: 8px;

    &:hover {
      transform: scale(1);
    }

    .profile-info-wrapper {
      display: flex;
      align-items: flex-start;
      margin-bottom: 16px;

      p {
        font-size: 12px;
        line-height: 16px;
        color: var(--main-font-color);
        margin: 0;
        font-weight: 600;
      }
    }
  }
}

.profile-img-wrapper {
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 8px;
  flex-shrink: 0;
  margin-right: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media screen and (max-width: 1020px) {
  .app-main-left .card-wrapper {
    width: 50%;
  }

  .app-main-right-header span {
    font-size: 14px;
  }
}

@media screen and (max-width: 780px) {
  .modal-left {
    flex-shrink: 0;
    flex-basis: auto;
  }

  h1,
  .modal-left h1 {
    font-size: 16px;
    line-height: 24px;
  }
  .info-wrapper span {
    font-size: 12px;
    white-space: nowrap;
    margin-bottom: 4px;
  }

  .main-modal {
    flex-direction: column;
    overflow-y: auto;
    height: 100%;
    width: 100%;
  }

  #modal-window {
    padding: 0;
  }

  .modal-right {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    margin-top: 16px;
    overflow-y: visible;
  }

  .btn-close {
    right: 0;
    top: 0;
  }
}

@media screen and (max-width: 520px) {
  .modal-right {
    flex: unset;
  }

  .card:hover {
    transform: scale(1);
  }
}
</style>
