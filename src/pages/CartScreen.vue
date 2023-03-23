<template>
  <div class="body">
    <section class="cart_wrapper">
      <div class="cart_lists">
        <div class="cart_title">
            <span><font-awesome-icon :icon="['fas', 'heart']" size="xl" /></span>
            Your Room Favorite</div>

        <div class="cart_list_wrap">
          <div class="cart_responsive">
            <CCartItem/>

            <div class="tr_item">
              <div class="td_item item_img">
                <img
                  src="https://i.ibb.co/R6rN96C/b5e11480e047426019842f1ebc019d52.jpg"
                />
              </div>
              <div class="td_item item_name">
                <label class="main">Denim Pant</label>
                <label class="sub">Ref. 007891987</label>
              </div>
              <div class="td_item item_color">
                <label>Blue</label>
              </div>
              <div class="td_item item_qty">
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="more">More</option>
                </select>
              </div>
              <div class="td_item item_price">
                <label>$ 260.00</label>
              </div>
              <div class="td_item item_remove">
                <span class="material-icons-outlined">close</span>
              </div>
            </div>

            <div class="tr_item">
              <div class="td_item item_img">
                <img
                  src="https://i.ibb.co/XYx3YTH/6cd360618204b6d2fe6e3dc75d3f6f9e.jpg"
                />
              </div>
              <div class="td_item item_name">
                <label class="main">Denim Jacket Men</label>
                <label class="sub">Ref. 007891987</label>
              </div>
              <div class="td_item item_color">
                <label>Blue</label>
              </div>
              <div class="td_item item_qty">
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="more">More</option>
                </select>
              </div>
              <div class="td_item item_price">
                <label>$ 260.00</label>
              </div>
              <div class="td_item item_remove">
                <span class="material-icons-outlined">close</span>
              </div>
            </div>

            <div class="tr_item">
              <div class="td_item item_img">
                <img
                  src="https://i.ibb.co/R6rN96C/b5e11480e047426019842f1ebc019d52.jpg"
                />
              </div>
              <div class="td_item item_name">
                <label class="main">Denim Pant</label>
                <label class="sub">Ref. 007891987</label>
              </div>
              <div class="td_item item_color">
                <label>Blue</label>
              </div>
              <div class="td_item item_qty">
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="more">More</option>
                </select>
              </div>
              <div class="td_item item_price">
                <label>$ 260.00</label>
              </div>
              <div class="td_item item_remove">
                <span class="material-icons-outlined">close</span>
              </div>
            </div>
          </div>
          <div class="footer">
            <div class="back_cart">
              <a href="#back">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
                Back to Shop
              </a>
            </div>
            <div class="subtotal">
              <label>Subtotal: </label>
              <strong>$2451.00</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import CCartItem from '@/components/elements/CCartItem.vue';

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
  height: 100vh;
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
  box-shadow: 0 6px 32px rgba(0, 0, 0, 0.4);
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
      .cart_responsive {
        overflow-x: auto;
        overflow-y: auto;
        max-height: 380px;
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


}
</style>
