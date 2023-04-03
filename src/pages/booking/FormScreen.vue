<template>
  <div class="container">
    <div class="time-booking">
      <CDatePicker />
      <CDatePicker />
      <CDropdown />
      <CDropdown />
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
            <div class="title-description">Lexington King room</div>
            <div class="text-description">
              Relax and enjoy your stay in a space designed to feel just like
              home. Exquisitely prepared bed linen, an interior bathed in warm
              light, and a relaxing bathtub in a sparkling clean bathroom. An
              ideal place to enjoy a refreshment or room service.
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
              <div class="bed-room">Bed size: 1 king bed</div>
              <div class="size-room">Room size 18 m <sup>2</sup></div>
            </div>
          </div>
        </div>
        <div class="form-booking">
          <div class="booking-item">
            <div class="title-room">
              <div class="main">Sol Double/Twin Room</div>
              <div class="discount">
                Early deal 65
                <div class="icon">
                  <font-awesome-icon
                    :icon="['fas', 'dollar-sign']"
                    size="xs"
                    style="color: #fff"
                  />
                </div>
              </div>
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
              <div class="price-discount-room">VND 2.500.000</div>
              <div class="price-room"><del>VND 6.000.000</del></div>
              <div class="text">per night</div>
            </div>
            <div class="room">
              <CDropdown />
            </div>
          </div>
          <div class="booking-item">
            <div class="title-room">
              <div class="main">Sol Double/Twin Room</div>
              <div class="discount">
                Basic deal
                <div class="icon">
                  <font-awesome-icon
                    :icon="['fas', 'dollar-sign']"
                    size="xs"
                    style="color: #fff"
                  />
                </div>
              </div>
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
              <div class="price-discount-room">VND 2.500.000</div>
              <div class="price-room"><del>VND 6.000.000</del></div>
              <div class="text">per night</div>
            </div>
            <div class="room">
              <CDropdown />
            </div>
          </div>
          <div class="booking-item">
            <div class="title-room">
              <div class="main">Sol Double/Twin Room</div>
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
              <div class="price-discount-room">VND 2.500.000</div>
              <div class="price-room"><del>VND 6.000.000</del></div>
              <div class="text">per night</div>
            </div>
            <div class="room">
              <CDropdown />
            </div>
          </div>
        </div>
      </div>
      <div class="btn-booking">
        <CButton
          :label="'Booking Now'"
          :class-name="'button-primary button-square button-block button-effect-ujarak'"
        />
        <div class="count-room">1 Room</div>
        <div class="price-room">2.300.000 VND</div>
        <div class="count-night-rent">for 2 night</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CButton from "@/components/elements/CButton.vue";
import CDatePicker from "@/components/elements/CDatePicker.vue";
import CDropdown from "@/components/elements/CDropdown.vue";
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
            font-size: 12px;
          }
          .service-description {
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
    }
  }
}
</style>
