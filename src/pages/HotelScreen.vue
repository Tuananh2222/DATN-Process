<template>
  <div class="app-container">
    <section class="app-actions">
      <div class="app-actions-line filter-line">
        <div class="filter-action-buttons">
          <CDatePicker />
          <CDropdown :data="data" fieldDisplay="name" fieldName="id" />
          <CDropdown :data="data" fieldDisplay="name" fieldName="id" />
          <CDropdown :data="data" fieldDisplay="name" fieldName="id" />
        </div>
      </div>
      <div class="app-actions-line">
        <div class="search-wrapper">
          <button class="loaction-btn">
            <svg
              class="btn-icon feather feather-map-pin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </button>
          <input
            type="text"
            class="search-input"
          />
          <CButton :label="'Find Room'" :class-name="'button-primary button-square button-block button-effect-ujarak'"/>
        </div>
      </div>
    </section>
    <section class="app-main">
      <div class="app-main-left cards-area">
        <div class="card-wrapper main-card">
          <a class="card cardItemjs" @click="openModal()">
            <div class="card-image-wrapper">
              <img
                src="https://source.unsplash.com/featured/1200x900/?sculpture,hotel"
                alt="Hotel"
              />
            </div>
            <div class="card-info">
              <div class="card-text big cardText-js">
                The Grand Budapest Hotel
              </div>
              <div class="card-text small">Stockton Street</div>
              <div class="card-text small">
                Starts from:
                <span class="card-price"> $1000</span>
              </div>
            </div>
          </a>
        </div>
        <div class="card-wrapper main-card">
          <a class="card cardItemjs" @click="openModal()">
            <div class="card-image-wrapper">
              <img
                src="https://source.unsplash.com/featured/1200x900/?architecture,hotel"
                alt="Hotel"
              />
            </div>
            <div class="card-info">
              <div class="card-text big cardText-js">
                The Grand Canyon Hotel
              </div>
              <div class="card-text small">Stockton Street</div>
              <div class="card-text small">
                Starts from:
                <span class="card-price"> $1500</span>
              </div>
            </div>
          </a>
        </div>
        <div class="card-wrapper main-card">
          <a class="card cardItemjs" @click="openModal()">
            <div class="card-image-wrapper">
              <img
                src="https://source.unsplash.com/featured/1200x900/?hotel-room,hotel"
                alt="Hotel"
              />
            </div>
            <div class="card-info">
              <div class="card-text big cardText-js">The Beakman Spa Hotel</div>
              <div class="card-text small">Stockton Street</div>
              <div class="card-text small">
                Starts from:
                <span class="card-price"> $1300</span>
              </div>
            </div>
          </a>
        </div>
        <div class="card-wrapper main-card">
          <a class="card cardItemjs" @click="openModal()">
            <div class="card-image-wrapper">
              <img
                src="https://source.unsplash.com/featured/1200x900/?hotel,design"
                alt="Hotel"
              />
            </div>
            <div class="card-info">
              <div class="card-text big cardText-js">Paloma Hotel & Spa</div>
              <div class="card-text small">Stockton Street</div>
              <div class="card-text small">
                Starts from:
                <span class="card-price"> $700</span>
              </div>
            </div>
          </a>
        </div>
        <div class="card-wrapper main-card">
          <a class="card cardItemjs" @click="openModal()">
            <div class="card-image-wrapper">
              <img
                src="https://source.unsplash.com/featured/1200x900/?interior,design"
                alt="Hotel"
              />
            </div>
            <div class="card-info">
              <div class="card-text big cardText-js">
                The Golden Hours Hotel
              </div>
              <div class="card-text small">Stockton Street</div>
              <div class="card-text small">
                Starts from:
                <span class="card-price"> $700</span>
              </div>
            </div>
          </a>
        </div>
        <div class="card-wrapper main-card">
          <a class="card cardItemjs" @click="openModal()">
            <div class="card-image-wrapper">
              <img
                src="https://source.unsplash.com/featured/1200x900/?interior,architecture"
                alt="Hotel"
              />
            </div>
            <div class="card-info">
              <div class="card-text big cardText-js">
                The Daydream Hotel & Spa
              </div>
              <div class="card-text small">Stockton Street</div>
              <div class="card-text small">
                Starts from:
                <span class="card-price"> $1250</span>
              </div>
            </div>
          </a>
        </div>
        <div class="card-wrapper main-card">
          <a class="card cardItemjs" @click="openModal()">
            <div class="card-image-wrapper">
              <img
                src="https://source.unsplash.com/featured/1200x900/?interior,modern"
                alt="Hotel"
              />
            </div>
            <div class="card-info">
              <div class="card-text big cardText-js">The Harmony Hotel</div>
              <div class="card-text small">Stockton Street</div>
              <div class="card-text small">
                Starts from:
                <span class="card-price"> $500</span>
              </div>
            </div>
          </a>
        </div>
        <div class="card-wrapper main-card">
          <a class="card cardItemjs" @click="openModal()">
            <div class="card-image-wrapper">
              <img
                src="https://source.unsplash.com/featured/1200x900/?architecture,modern"
                alt="Hotel"
              />
            </div>
            <div class="card-info">
              <div class="card-text big cardText-js">
                The Hotel Star Pasific
              </div>
              <div class="card-text small">Stockton Street</div>
              <div class="card-text small">
                Starts from:
                <span class="card-price"> $1400</span>
              </div>
            </div>
          </a>
        </div>
        <div class="card-wrapper main-card">
          <a class="card cardItemjs" @click="openModal()">
            <div class="card-image-wrapper">
              <img
                src="https://source.unsplash.com/featured/1200x900/?hotel,modern"
                alt="Hotel"
              />
            </div>
            <div class="card-info">
              <div class="card-text big cardText-js">Hotel Roller Coaster</div>
              <div class="card-text small">Stockton Street</div>
              <div class="card-text small">
                Starts from:
                <span class="card-price"> $1800</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="app-main-right cards-area">
        <div class="app-main-right-header">
          <span>Latest Deals</span>
          <a href="#">See More</a>
        </div>
        <div class="card-wrapper main-card">
          <a class="card cardItemjs" @click="openModal()">
            <div class="card-image-wrapper">
              <img
                src="https://source.unsplash.com/featured/1200x900/?hotel-room,interior"
              />
            </div>
            <div class="card-info">
              <div class="card-text big cardText-js">Hotel Conrad</div>
              <div class="card-text small">Stockton Street</div>
              <div class="card-text small">
                Starts from:
                <span class="card-price"> $1000</span>
              </div>
            </div>
          </a>
        </div>
        <div class="card-wrapper main-card">
          <a class="card cardItemjs" @click="openModal()">
            <div class="card-image-wrapper">
              <img
                src="https://source.unsplash.com/featured/1200x900/?interior,hotel"
              />
            </div>
            <div class="card-info">
              <div class="card-text big cardText-js">The Hotel Riviera</div>
              <div class="card-text small">Stockton Street</div>
              <div class="card-text small">
                Starts from:
                <span class="card-price"> $300</span>
              </div>
            </div>
          </a>
        </div>
        <div class="card-wrapper main-card">
          <a class="card cardItemjs" @click="openModal()">
            <div class="card-image-wrapper">
              <img
                src="https://source.unsplash.com/featured/1200x900/?architecture,modern"
              />
            </div>
            <div class="card-info">
              <div class="card-text big cardText-js">
                The Hotel Star Pasific
              </div>
              <div class="card-text small">Stockton Street</div>
              <div class="card-text small">
                Starts from:
                <span class="card-price"> $1400</span>
              </div>
            </div>
          </a>
        </div>
        <div class="card-wrapper main-card">
          <a class="card cardItemjs" @click="openModal()">
            <div class="card-image-wrapper">
              <img
                src="https://source.unsplash.com/featured/1200x900/?hotel,modern"
              />
            </div>
            <div class="card-info">
              <div class="card-text big cardText-js">Hotel Instant Destiny</div>
              <div class="card-text small">Stockton Street</div>
              <div class="card-text small">
                Starts from:
                <span class="card-price"> $1800</span>
              </div>
            </div>
          </a>
        </div>
        <div class="card-wrapper main-card">
          <a class="card cardItemjs" @click="openModal()">
            <div class="card-image-wrapper">
              <img
                src="https://source.unsplash.com/featured/1200x900/?architecture,modern"
                alt="Hotel"
              />
            </div>
            <div class="card-info">
              <div class="card-text big cardText-js">The White Roses Hotel</div>
              <div class="card-text small">Stockton Street</div>
              <div class="card-text small">
                Starts from:
                <span class="card-price"> $700</span>
              </div>
            </div>
          </a>
        </div>
        <div class="card-wrapper main-card">
          <a class="card cardItemjs" @click="openModal()">
            <div class="card-image-wrapper">
              <img
                src="https://source.unsplash.com/featured/1200x900/?hotel,modern"
                alt="Hotel"
              />
            </div>
            <div class="card-info">
              <div class="card-text big cardText-js">Hotel Tom's Dinner</div>
              <div class="card-text small">Stockton Street</div>
              <div class="card-text small">
                Starts from:
                <span class="card-price"> $1500</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import CButton from "@/components/elements/CButton.vue";
import CDatePicker from "@/components/elements/CDatePicker.vue";
import CDropdown from "@/components/elements/CDropdown.vue";
import router from "@/router";
import HotelItem from "./HotelItem.vue";

const openModal = () => {
  router.push({
    path: "/hotel-item",
    name: "Hotel Item",
    component: HotelItem,
  });
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
  padding: 0 40px 0 40px;
}

.btn-icon {
  width: 16px;
}

.search-wrapper {
  border: none;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  max-width: 420px;
  width: 100%;
  overflow: hidden;
  height: 40px;
}

.search-input {
  border-radius: 0;
  appearance: none;
  box-shadow: none;
  border-left: none;
  border-right: none;
  background-color: var(--search-bg);
  flex: 1;
  border: 1px solid var(--main-border-color);
  padding: 0 8px;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;

  .dark & {
    border-color: var(--search-bg);
    color: #fff;
  }
}

.loaction-btn {
  padding: 0;
  border: 1px solid var(--main-border-color);
  background-color: var(--button-bg-light);
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  .dark & {
    border: none;
    background-color: var(--search-bg);
  }
}

.dark .loaction-btn .btn-icon {
  color: #fff;
}

:deep(.button-primary) {
  border: 1px solid #979797;
  padding: 10px 16px;
  font-size: 14px;
  width: 103px;
}

.app-actions-line {
  display: flex;
  align-items: center;
  margin: 32px 0;
}

.contact-actions {
  display: flex;
  align-items: center;
  margin-left: 32px;

  span {
    display: block;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    margin-right: 8px;

    .dark & {
      color: #fff;
    }
  }

  &.socials .contact-link {
    color: #b9b9b9;
  }
}

.contact-link {
  border: 1px solid var(--main-border-color);
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--buttons-color-primary);
  margin: 0 4px;
  flex-shrink: 0;
}

.filter-text {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  padding: 0 24px 0 8px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    right: 0;
    top: 50%;
    transform: translatey(-50%);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .dark & {
    &:before {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
    }
  }
}

.filter-icon {
  background-color: var(--buttons-color-secondary);
  border-radius: 50%;
  color: var(--buttons-color-primary);
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.filter-line-text {
  font-size: 14px;
  font-weight: 600;
  margin-right: 32px;
  color: var(--main-font-color);
}

.app-main {
  flex: 1;
  overflow: hidden;
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
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

.app-main-right {
  flex: 2;
  margin-left: 24px;
  max-width: 400px;

  .card-image-wrapper {
    max-height: 100%;
    padding: 0;
    height: 100%;
  }

  .card {
    height: 160px;
  }

  .card-image-wrapper img {
    margin: 0;
  }
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
    color: var(--buttons-color-primary);
    font-weight: 600;
  }
}

.app-main-right {
  position: relative;
  padding-top: 0;

  .card-wrapper {
    width: 100%;
    padding: 8px 0;
  }

  .card {
    display: flex;
  }

  .card-image-wrapper {
    flex-basis: 40%;
    flex-shrink: 0;

    img {
      height: 100%;
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
  overflow-x: auto;
  position: relative;

  button {
    margin-bottom: 4px;
  }
}

.filter-line {
  align-items: flex-start;
}

@media screen and (max-width: 1020px) {
  .app-main-left .card-wrapper {
    width: 50%;
  }

  .app-main-right-header span {
    font-size: 14px;
  }
}

@media screen and (max-width: 990px) {
  .app-main-right {
    display: none;
  }
}

@media screen and (max-width: 780px) {
  .app-actions-line:not(.filter-line) {
    flex-direction: column;
    align-items: flex-start;
  }

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

  h1,
  .modal-left h1 {
    font-size: 16px;
    line-height: 24px;
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
