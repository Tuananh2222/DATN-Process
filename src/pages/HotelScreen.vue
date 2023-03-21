<template>
  <div class="app-container">
    <section class="navigation">
      <a href="#" class="app-link">Travelers</a>
      <div class="navigation-links">
        <a href="#" class="nav-link">Destinations</a>
        <a href="#" class="nav-link active">Hotels</a>
        <a href="#" class="nav-link">Camping</a>
        <a href="#" class="nav-link">Car Rent</a>
      </div>
      <div class="nav-right-side">
        <button class="mode-switch">
          <svg
            class="sun feather feather-sun"
            fill="none"
            stroke="#fbb046"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <defs />
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            />
          </svg>
          <svg
            class="moon feather feather-moon"
            fill="none"
            stroke="#ffffff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <defs />
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </button>
        <button class="profile-btn">
          <span>Ryan Evans</span>
          <img
            src="https://images.unsplash.com/photo-1492633397843-92adffad3d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80"
            alt="pp"
          />
        </button>
      </div>
    </section>
    <section class="app-actions">
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
            value="San Francisco, Stockton Street"
          />
          <button class="search-btn">Find Hotel</button>
        </div>
        <div class="contact-actions-wrapper">
          <div class="contact-actions">
            <span>Contact us: </span>
            <a href="#" class="contact-link">
              <svg
                class="btn-icon feather feather-phone"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
            </a>
            <a href="#" class="contact-link">
              <svg
                class="btn-icon feather feather-message-circle"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                />
              </svg>
            </a>
          </div>
          <div class="contact-actions socials">
            <span>Follow us: </span>
            <a href="#" class="contact-link facebook">
              <svg
                class="btn-icon feather feather-facebook"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                />
              </svg>
            </a>
            <a href="#" class="contact-link">
              <svg
                class="btn-icon feather feather-twitter"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="app-actions-line filter-line">
        <div class="filter-action-buttons">
          <button class="filter-btn">
            <div class="filter-icon">
              <svg
                class="btn-icon feather feather-calendar"
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
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <span class="filter-text">Sat,Nov 10-Fri,Nov 22</span>
          </button>
          <button class="filter-btn">
            <div class="filter-icon">
              <svg
                class="btn-icon feather feather-book"
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
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path
                  d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                />
              </svg>
            </div>
            <span class="filter-text">Rooms - 2</span>
          </button>
          <button class="filter-btn">
            <div class="filter-icon">
              <svg
                class="btn-icon feather feather-users"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <span class="filter-text">Adults - 2</span>
          </button>
          <button class="filter-btn">
            <div class="filter-icon">
              <svg
                class="btn-icon feather feather-users"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <span class="filter-text">Child - 1</span>
          </button>
          <button class="filter-btn more">
            <div class="filter-icon">
              <svg
                class="btn-icon feather feather-sliders"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"
                />
              </svg>
            </div>
            <span class="filter-text">More</span>
          </button>
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
import router from "@/router";
import HotelItem from "./HotelItem.vue";

const openModal = () => {
  router.push({
    path: "/hotel-item",
    name: "Hotel Item",
    component: HotelItem,
  });
};
</script>

<style lang="scss" scoped>
.dark:root {
  --app-bg: #0c0c0c;
  --main-font-color: #fff;
  --cards-area-bg: #20222a;
  --cards-bg: #111317;
  --filter-bg: #111317;
  --search-bg: #20222a;
  --modal-before: rgba(0, 0, 0, 0.8);
}

.nav-right-side {
  display: flex;
}

.mode-switch {
  flex-shrink: 0;
  padding: 0;
  background-color: var(--chat-background);
  border: none;
  color: #ddd;
  outline: none;
  cursor: pointer;
  box-shadow: var(--navigation-box-shadow);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  transform-origin: center;

  svg {
    width: 0;
    height: 24px;
    transition: all 0.3s ease-in;
    transform-origin: center;
  }

  .moon {
    opacity: 0;
  }
  .sun {
    width: 24px;
  }
}

.dark .moon {
  opacity: 1;
  width: 24px;
}

.dark .sun {
  opacity: 0;
  width: 0;
}

body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--app-bg);
  transition: 0.2s;
}

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

.navigation {
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-link {
  font-weight: 600;
  font-size: 20px;
  color: var(--main-font-color);
  line-height: 24px;
}

.navigation-links {
  width: 60%;
  display: flex;
  justify-content: space-between;
  max-width: 420px;
}

.nav-link {
  color: var(--light-font-color);
  font-weight: 500;
  font-size: 14px;
  margin: 0 8px;
  transition: 0.2s;

  &.active {
    color: var(--main-font-color);
  }

  &:not(.active):hover {
    color: var(--buttons-color-primary);
  }
}

.profile-btn {
  border: 1px solid var(--secondary-border-color);
  background-color: transparent;
  border-radius: 20px;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;

  .dark & {
    background-color: var(--cards-area-bg);
    border-color: var(--cards-area-bg);
  }

  &:hover {
    border-color: var(--buttons-color-primary);
  }

  span {
    padding: 0 8px;
    font-weight: 500;
    color: var(--buttons-color-primary);
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }
}

section.app-actions {
  padding: 32px 40px 0 40px;
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

.search-btn {
  background-color: var(--buttons-color-primary);
  color: #fff;
  border: 1px solid var(--buttons-color-primary);
  padding: 10px 16px;
  font-size: 14px;

  .dark & {
    border: none;
  }
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

.filter-btn {
  background-color: transparent;
  border: 1px solid var(--main-border-color);
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 0;
  padding-right: 8px;
  margin: 0 16px;
  color: var(--buttons-color-primary);
  position: relative;

  .dark & {
    border-color: var(--cards-area-bg);
    background-color: var(--cards-area-bg);
  }

  &.more {
    padding: 0 12px;
    span {
      color: var(--buttons-color-primary);
      padding: 0 4px;

      &:before {
        display: none;
      }
    }

    .filter-icon {
      background-color: transparent;
    }
  }
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

.main-modal {
  width: 98%;
  max-width: 1200px;
  height: 90%;
  background: var(--app-bg);
  border-radius: 20px;
  position: relative;
  display: flex;
  padding: 32px;
}

.btn-close {
  border: none;
  background-color: transparent;
  position: absolute;
  right: 4px;
  top: 4px;
  padding: 0;
  color: #b9b9b9;
}

.hideModal {
  z-index: -1;
  opacity: 0;
  animation: hide 0.25s;
  transform: scale(0);
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

.showModal {
  top: 0;
  left: 0;
  opacity: 1;
  z-index: 2;
  animation: show 0.2s;
  transform: scale(1);
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 56px;
  background-color: var(--modal-before);
  width: 100%;
  height: 100%;
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
  background-color: var(--buttons-color-secondary);
  border-radius: 50%;
  color: var(--buttons-color-primary);
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

.btn-book {
  background-color: var(--buttons-color-primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  margin-right: 32px;
  padding: 10px;
  font-size: 14px;
  min-width: 120px;
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

.contact-actions-wrapper {
  display: flex;
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
  .filter-line-text {
    margin-right: 10px;
  }

  .filter-btn {
    margin: 0 8px;
  }

  .modal-left {
    flex-shrink: 0;
    flex-basis: auto;
  }

  .app-actions-line:not(.filter-line) {
    flex-direction: column;
    align-items: flex-start;
  }

  .app-actions-line {
    margin: 16px 0;
  }

  .contact-actions-wrapper {
    margin-top: 12px;

    .contact-actions:first-child {
      margin-left: 0;
    }
  }

  .app-main-left .card-wrapper {
    width: 100%;
  }

  .cards-area {
    padding: 0 8px;
  }

  .navigation {
    padding: 24px;
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
  .info-wrapper span {
    font-size: 12px;
    white-space: nowrap;
    margin-bottom: 4px;
  }
}

@media screen and (max-width: 660px) {
  .navigation-links {
    display: none;
  }
}

@media screen and (max-width: 520px) {
  .app-container {
    overflow: auto;
  }

  .app-main {
    flex: unset;
  }

  .modal-right {
    flex: unset;
  }

  .card:hover {
    transform: scale(1);
  }

  section.app-main {
    overflow: visible;
  }

  .contact-actions span {
    display: none;
  }
}
</style>
