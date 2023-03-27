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
            <div class="title-room">Sol Double/Twin Room</div>
            <div class="count-people">
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'user-group']" size="lg" />
              </div>
              2 Adult
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
        .booking-item {
          display: grid;
          grid-template-columns: 1fr 1fr 125px 1fr;
          .count-people {
            text-align: center;
          }
        }
      }
    }
    .btn-booking {
      width: 20%;
      padding: 0 20px;
      text-align: center;
      .price-room {
        font-weight: 300;
        font-size: 19px;
      }
    }
  }
}
</style>
