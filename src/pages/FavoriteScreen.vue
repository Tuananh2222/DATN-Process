<template>
  <div class="body">
    <section class="cart_wrapper">
      <div class="cart_lists">
        <div class="cart_title">
          <span><font-awesome-icon :icon="['fas', 'heart']" size="xl" /></span>
          Your Room Favorite
        </div>

        <div class="cart_list_wrap">
          <div class="cart_overflow">
            <div
              class="cart_responsive"
              v-for="(item, index) in data"
              :key="index"
            >
              <CCartItem
                :title="item.title"
                :bed_type="item.bed_type"
                :view_detail="item.view"
                :people="item.people"
                :room_size="item.room_size"
                :img_url="item.img_url"
                @remove-item="handleRemove(index)"
                @move-detail="handleMoveItem(index)"
              />
            </div>
          </div>
          <div class="footer">
            <div class="back_cart">
              <a href="#back">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
                Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import CCartItem from "@/components/elements/CCartItem.vue";
import router from "@/router";

const data = [
  {
    title: "Solaria Balcony Double/Twin Room",
    view: "Inland views. Higher floor might on offer clear view",
    people: "2",
    bed_type: "Double bed & Twin beds",
    room_size: "32m",
    img_url:
      "https://solariahotel.com/UploadFile/Gallery/Rooms/Solaria-balcony-double-twin-room/2.jpg",
  },
  {
    title: "Solaria Balcony Double/Twin Room",
    view: "Inland views. Higher floor might on offer clear view",
    people: "2",
    bed_type: "Double bed & Twin beds",
    room_size: "32m",
    img_url:
      "https://solariahotel.com/UploadFile/Gallery/Rooms/Solaria-balcony-double-twin-room/2.jpg",
  },
  {
    title: "Solaria Balcony Double/Twin Room",
    view: "Inland views. Higher floor might on offer clear view",
    people: "2",
    bed_type: "Double bed & Twin beds",
    room_size: "32m",
    img_url:
      "https://solariahotel.com/UploadFile/Gallery/Rooms/Solaria-balcony-double-twin-room/2.jpg",
  },
  {
    title: "Solaria Balcony Double/Twin Room",
    view: "Inland views. Higher floor might on offer clear view",
    people: "2",
    bed_type: "Double bed & Twin beds",
    room_size: "32m",
    img_url:
      "https://solariahotel.com/UploadFile/Gallery/Rooms/Solaria-balcony-double-twin-room/2.jpg",
  },
];

const handleRemove = (index) => {
  data.splice(index, 1);
};

const handleMoveItem = () => {
  router.push({
    path: "/hotel-item",
    name: "Hotel Item",
    component: () => import("@/pages/HotelItem.vue"),
  });
};
</script>

<style lang="scss" scoped>
@mixin size($point) {
  @if $point == lg-device {
    @media (min-width: 1024px) and (max-width: 1600px) {
      @content;
    }
  } @else if $point == md-device {
    @media (min-width: 768px) and (max-width: 1023px) {
      @content;
    }
  } @else if $point == sm-device {
    @media (max-width: 767px) {
      @content;
    }
  }
}
@font-face {
  font-family: "Material Icons Outlined";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v54/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2)
    format("woff2");
}
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap");

.body {
  font-family: "Jost", sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #34302d;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  min-width: 360px;
  @include size(sm-device) {
    align-items: baseline;
  }
  @include size(md-device) {
    align-items: baseline;
  }
}

.cart_wrapper {
  max-width: 1200px;
  width: 100%;
  max-height: 800px;
  background-color: white;
  margin: 30px;
  overflow: hidden;
  @include size(md-device) {
    max-height: 1000px;
  }
  @include size(sm-device) {
    max-height: unset;
    max-width: 100%;
    margin: 15px;
  }

  // cart_lists
  .cart_lists {
    border-radius: 8px;
    background-color: #ecf0f1;
    padding: 30px;
    .cart_title {
      display: flex;
      align-items: center;
      font-size: 22px;
      font-weight: 400;
      height: 50px;

      span {
        padding-right: 8px;
        line-height: 18px;
      }
    }
    .cart_list_wrap {
      padding: 25px 40px;
      overflow: hidden;
      @include size(sm-device) {
        padding-left: 0px;
        padding-right: 0px;
      }
      .cart_overflow {
        overflow-x: auto;
        overflow-y: auto;
        max-height: 380px;
        .cart_responsive {
          @include size(md-device) {
            max-height: 380px;
          }
          @include size(sm-device) {
            // max-height: 800px;
          }
          &::-webkit-scrollbar {
            width: 4px;
            height: 4px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #ddd;
          }
          &::-webkit-scrollbar-track {
            background-color: #eee;
          }
        }
      }
      .footer {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 20px 5px;
        .back_cart {
          width: 50%;
          flex: 0 0 50%;
          a {
            color: #303030;
            vertical-align: middle;
            font-size: 14px;
            font-weight: 400;
            text-decoration: none;
            transition: all 0.3s;
            &:hover {
              color: #111;
              span {
                animation: arrow 1.5s infinite ease;
              }
            }
            span {
              vertical-align: sub;
              font-size: 18px;
              margin-right: 5px;
            }
            @keyframes arrow {
              0% {
                transform: translateX(0px);
              }
              25% {
                transform: translateX(-2px);
              }
              75% {
                transform: translateX(2px);
              }
              100% {
                transform: translateX(0px);
              }
            }
          }
        }
        .subtotal {
          width: calc(50% - 80px);
          flex: 0 0 calc(50% - 50px);
          text-align: right;
          font-size: 16px;
          @include size(sm-device) {
            width: 50%;
            flex: 0 0 50%;
          }
          label {
            margin-right: 15px;
          }
        }
      }
    }
  }

  // cart_details
  .cart_details {
    background: linear-gradient(45deg, #303030, #4b4643);
    padding: 30px 40px;
    width: 330px;
    flex: 0 0 330px;
    box-shadow: -8px 0px 32px rgba(0, 0, 0, 0.36);
    position: relative;
    @include size(md-device) {
      width: 100%;
      flex: 0 0 100%;
    }
    @include size(sm-device) {
      width: 100%;
      flex: 0 0 100%;
      padding: 30px;
    }
    .cart_title {
      font-size: 22px;
      color: #f1c40f;
      font-weight: 400;
      margin-bottom: 60px;
      @include size(md-device) {
        margin-bottom: 40px;
      }
    }

    .form_row {
      display: flex;
      flex-wrap: wrap;
      @include size(md-device) {
        margin-bottom: 40px;
      }
      .form_group {
        display: flex;
        flex-wrap: wrap;
        margin: 0px;
        margin-bottom: 35px;
        padding: 0px 10px;
        width: 100%;
        @include size(md-device) {
          &:nth-child(2) {
            width: 50%;
          }
          &:nth-child(3) {
            width: 30% !important;
            flex: 0 0 30% !important;
          }
          &:nth-child(4) {
            width: 20% !important;
            flex: 0 0 20% !important;
          }
        }
        &.w_75 {
          width: 65%;
          flex: 0 0 65%;
        }
        &.w_25 {
          width: 35%;
          flex: 0 0 35%;
        }
        .input_label {
          color: #f3f3f3;
          font-weight: 300;
          font-size: 16pxx;
          width: 100%;
          flex: 0 0 100%;
          letter-spacing: 0.5px;
        }
        .input {
          width: 100%;
          flex: 0 0 100%;
          background-color: transparent;
          border: none;
          outline: none;
          color: #eee;
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0.5px;
          border-bottom: solid 2px #999;
          height: 32px;
          transition: all 0.3s linear;
          &::placeholder {
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.1);
            transition: all 0.2s linear;
          }
          &:focus {
            &::placeholder {
              opacity: 0;
            }
          }
        }
        &.cart_type {
          justify-content: space-between;
          @include size(md-device) {
            justify-content: left;
          }
          .type {
            width: calc(100% / 3 - 15px);
            padding: 0px;
            margin-top: 5px;
            cursor: pointer;
            transition: all 0.3s linear;
            @include size(md-device) {
              width: 75px;
            }
            &:hover {
              svg {
                fill: #bbb;
              }
            }
            svg {
              width: 42px;
              fill: #7f7a76;
              transition: all 0.3s linear;
            }
            &.paypal {
              svg {
                width: 62px;
                margin-top: -10px;
              }
            }
          }
          input {
            display: none;
            &#master {
              &:checked ~ {
                .master {
                  svg {
                    fill: #f4f4f4;
                  }
                }
              }
            }
            &#visa {
              &:checked ~ {
                .visa {
                  svg {
                    fill: #f4f4f4;
                  }
                }
              }
            }
            &#paypal {
              &:checked ~ {
                .paypal {
                  svg {
                    fill: #f4f4f4;
                  }
                }
              }
            }
          }
        }
      }

      .btn {
        width: calc(100%);
        height: 65px;
        margin: 0px -40px;
        background-color: #f1c40f;
        border: none;
        color: #333;
        font-size: 15px;
        font-weight: 400;
        position: absolute;
        bottom: 0px;
        transition: all 0.3s linear;
        @include size(sm-device) {
          position: static;
          margin: auto;
        }
        &:hover {
          background-color: darken($color: #f1c40f, $amount: 4);
        }
        &:active {
          box-shadow: inset 0 0 28px 0px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
}
</style>
