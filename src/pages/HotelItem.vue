<template>
  <div id="modal-window" class="shadow">
    <div class="main-modal">
      <div class="modal-left">
        <div class="modal-image-wrapper">
          <img
            src="https://source.unsplash.com/featured/1200x900/?design,hotel"
          />
        </div>
        <div class="modal-info-header">
          <div class="left-side">
            <h1 class="modalHeader-js"></h1>
            <p>Stockton Street</p>
          </div>
          <div class="right-side">
            Starts from:
            <span class="amount">$1000</span>
          </div>
        </div>
        <div class="info-bar">
          <div class="info-wrapper">
            <div class="info-icon">
              <svg
                class="btn-icon"
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
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path
                  d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                ></path>
              </svg>
            </div>
            <span>2 Bedrooms</span>
          </div>
          <div class="info-wrapper">
            <div class="info-icon">
              <svg
                class="btn-icon feather feather-wind"
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
                  d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
                />
              </svg>
            </div>
            <span>2 Bathrooms</span>
          </div>
          <div class="info-wrapper">
            <div class="info-icon">
              <svg
                class="btn-icon feather feather-square"
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
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              </svg>
            </div>
            <span>1250m2</span>
          </div>
          <div class="info-wrapper">
            <div class="info-icon">
              <svg
                class="btn-icon feather feather-shield"
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span>Highly Secured</span>
          </div>
        </div>
        <div class="desc-wrapper">
          <div class="modal-info-header">
            <h1>Description</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div class="desc-actions">
            <CButton :label="'Book Now'" :class-name="'button-primary button-square button-block button-effect-ujara'"/>
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
import CButton from '@/components/elements/CButton.vue';

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

.app-main-right {
  flex: 2;
  margin-left: 24px;
  max-width: 400px;


  .card {
    height: 160px;
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
    color: #8f859e;
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
}

.left-side {
  h1 {
    margin: 0;
    font-size: 24px;
    line-height: 32px;
    color: var(--main-font-color);
  }

  p {
    color: var(--light-font-color);
    font-size: 16px;
    line-height: 24px;
  }
}

.right-side {
  color: var(--main-font-color);

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
  background-color: #979797;
  border-radius: 50%;
  color: purple;
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
