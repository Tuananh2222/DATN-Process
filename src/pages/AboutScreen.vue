<template>
  <DefaultHeader />
  <div class="container-wrapper">
    <div class="img-banner">
      <h2 class="text-white">About</h2>
    </div>
  </div>
  <div class="section-md text-sm-left bg-secondary-4">
    <div class="shell">
      <div class="range range-sm-middle">
        <div class="cell-sm-6">
          <div class="box-outline box-outline__mod-1">
            <figure>
              <img
                src="@/public/image/about/about-01-546x516.jpg"
                alt=""
                width="546"
                height="516"
              />
            </figure>
          </div>
        </div>
        <div class="cell-sm-6 cell-md-5">
          <h3>A Few Words About Us</h3>
          <p>
            LEXINGTON HOTEL, A VARIATION AROUND GREY AND A WELLNESS COCOON
            Lexington Hotel Hanoi is composed of 50 rooms on 9 levels including
            Family and Connecting rooms which are perfect for individual clients
            or families. All of our rooms offer the same services, their
            differences lie in their size and some extra facilities. As a rather
            unique characteristic, there are rooms have balconies or spacious
            living area. A breath of fresh air in the heart of Hanoi Old
            quarter!
          </p>
          <p>
            Inspired by Vietnamese tradtional material, combination of grey and
            beautified by black, Lexington Hotel Hanoi welcomes its guests in a
            refined and intimate atmosphere. In each room, traditional material
            is staged in different shades and subtly punctuated with touches of
            the grey, the yellow from soil and the black of furniture which we
            meet in a table, a stunning bathroom… around four atmospheres while
            offering the conveniences of today.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="section-md">
    <div class="shell text-center">
      <h3>Rooms & Suites</h3>
      <p>
        Lexington Hotel offers the finest accommodations with unique designs
        that provide both a luxurious and relaxing environment. Specially <br />
        selected fabrics and finishes vary from room to room, offering guests a
        variety of beautiful and unique atmospheres to select from.
      </p>
      <div class="range range-30">
        <div class="cell-sm-6 cell-md-4">
          <a class="thumbnail-classic">
            <figure>
              <img
                src="@/public/image/about/grid-gallery-1-370x276.jpg"
                alt=""
                width="370"
                height="276"
              />
            </figure>
            <div class="caption">
              <p class="caption-title">Single Room</p>
              <p class="caption-text">
                Each room has its own unique décor and arrangement.
              </p>
            </div></a
          >
        </div>
        <div class="cell-sm-6 cell-md-4">
          <a class="thumbnail-classic">
            <figure>
              <img
                src="@/public/image/about/grid-gallery-2-370x276.jpg"
                alt=""
                width="370"
                height="276"
              />
            </figure>
            <div class="caption">
              <p class="caption-title">Double Room</p>
              <p class="caption-text">
                Each room has its own unique décor and arrangement.
              </p>
            </div></a
          >
        </div>
        <div class="cell-sm-6 cell-md-4">
          <a class="thumbnail-classic">
            <figure>
              <img
                src="@/public/image/about/grid-gallery-3-370x276.jpg"
                alt=""
                width="370"
                height="276"
              />
            </figure>
            <div class="caption">
              <p class="caption-title">Twin Room</p>
              <p class="caption-text">
                Each room has its own unique décor and arrangement.
              </p>
            </div></a
          >
        </div>
        <div class="cell-sm-6 cell-md-4">
          <a class="thumbnail-classic">
            <figure>
              <img
                src="@/public/image/about/grid-gallery-4-370x276.jpg"
                alt=""
                width="370"
                height="276"
              />
            </figure>
            <div class="caption">
              <p class="caption-title">Family Room</p>
              <p class="caption-text">
                Each room has its own unique décor and arrangement.
              </p>
            </div></a
          >
        </div>
        <div class="cell-sm-6 cell-md-4">
          <a class="thumbnail-classic">
            <figure>
              <img
                src="@/public/image/about/grid-gallery-5-370x276.jpg"
                alt=""
                width="370"
                height="276"
              />
            </figure>
            <div class="caption">
              <p class="caption-title">Executive Suite</p>
              <p class="caption-text">
                Each room has its own unique décor and arrangement.
              </p>
            </div></a
          >
        </div>
        <div class="cell-sm-6 cell-md-4">
          <a class="thumbnail-classic">
            <figure>
              <img
                src="@/public/image/about/grid-gallery-6-370x276.jpg"
                alt=""
                width="370"
                height="276"
              />
            </figure>
            <div class="caption">
              <p class="caption-title">VIP Suite</p>
              <p class="caption-text">
                Each room has its own unique décor and arrangement.
              </p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>

  <div class="popular-post">
    <div class="shell-left">
      <div class="img_3_1 cursor"></div>
      <div class="img_3_2 cursor"></div>
      <div class="img_3_3 cursor"></div>
    </div>
    <div class="shell-right">
      <h3>A few steps from hereThe most popular spots of Hanoi</h3>
      <div class="content-shell-right">
        <p>100 step walk to Hoan Kiem Lake</p>
        <p>1 minutes walk to Old Quarters</p>
        <p>1 minutes walk to the St. Joseph's Cathedral</p>
        <p>2 minutes walk to Weekend Night Market</p>
        <p>2 minutes walk to Ngoc Son Temple</p>
        <p>2 minutes walk to Thang Long Water Puppet Theatre</p>
        <p>2 minutes walk to Dong Xuan Market</p>
      </div>
    </div>
  </div>
  <div @click="handlePayment">Thanh toán</div>
  <DefaultFooter />
</template>

<script setup>
import DefaultFooter from "@/components/generals/defaultFooter.vue";
import DefaultHeader from "@/components/generals/defaultHeader.vue";
import { payment } from "@/stores/momo";
import { ref } from "vue";

const orderId = ref("");
const amount = ref(0);

const handlePayment = async () => {
  const response = await payment(orderId.value, amount.value);
  // xử lý dữ liệu trả về
  console.log(response);
};
</script>

<style lang="scss" scoped>
.container-wrapper {
  width: 100%;
  position: relative;

  .img-banner {
    height: 304px;
    width: 100%;
    background: url("@/public/image/about/breadcrumbs-01.jpg");
    padding-top: 95px;
    padding-bottom: 110px;
    .text-white {
      position: absolute;
      color: white;
      font-size: 60px;
      font-weight: 700;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
.bg-secondary-4 {
  background: #f3f3f3;
}
@media (min-width: 768px) {
  .text-sm-left {
    text-align: left;
  }
  .box-outline {
    position: relative;
    z-index: 1;
    display: inline-block;
    padding-top: 20px;
  }
  .box-outline > *:nth-child(1):before {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    border: 5px solid #dcd1d5;
    content: "";
    transform: translate(-22px, -20px);
    transition: 550ms ease-in-out;
  }

  .section-md {
    padding-top: 95px;
    padding-bottom: 110px;
  }
  .range > .cell-sm-6 {
    flex-basis: 50%;
    max-width: 50%;
  }
  .box-outline {
    position: relative;
    z-index: 1;
    display: inline-block;
    padding-top: 20px;
  }
  .box-outline > *:nth-child(1):before {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    border: 5px solid #dcd1d5;
    content: "";
    transform: translate(-22px, -20px);
    transition: 550ms ease-in-out;
  }
  .thumbnail-classic {
    max-width: 370px;
    margin-left: auto;
    margin-right: auto;
  }
  .box-outline {
    position: relative;
    z-index: 1;
    display: inline-block;
    padding-top: 20px;
  }
  .box-outline > *:nth-child(1):before {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    border: 5px solid #dcd1d5;
    content: "";
    transform: translate(-22px, -20px);
    transition: 550ms ease-in-out;
  }
  .box-outline-fullwidth {
    width: 100%;
  }
  .box-outline__mod-1 > *:nth-child(1):before {
    left: 6px;
  }
  .box-outline__mod-2 > *:nth-child(1):before {
    top: 20px;
    right: 40px;
    transform: translate(65px, -25px);
  }
  .team-caption {
    text-align: left;
  }
}
@media (min-width: 1200px) {
  .shell {
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  .box-outline__mod-1 > *:nth-child(1) {
    margin-left: 27px;
  }
  .box-outline__mod-1 > *:nth-child(1):before {
    left: 17px;
  }
  .box-outline__mod-1 > *:nth-child(1) {
    margin-left: 27px;
  }
  .box-outline__mod-1 > *:nth-child(1):before {
    left: 17px;
  }
  .team-image-caption {
    filter: blur(5px);
    opacity: 0;
    transform: scale(1.05);
    transition: all 250ms ease-in;
  }
  .team-image-caption .icon {
    transform: rotateY(90deg);
    transition-delay: 250ms;
  }
  h2 {
    line-height: 0.93333;
    font-size: 60px;
    margin-bottom: 0;
    font-weight: 700;
    letter-spacing: 0;
    color: #151515;
  }
  .team-caption {
    padding-left: 27px;
  }
}
.range {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  transform: translateY(-50px);
  margin-bottom: -50px;
  pointer-events: none;
  justify-content: space-between;
}
@media (min-width: 992px) {
  .range > .cell-md-5 {
    flex-basis: 41.66667%;
    max-width: 41.66667%;
  }
  .range > .cell-md-4 {
    flex-basis: 33.33333%;
    max-width: 33.33333%;
  }
  .thumbnail-classic .caption {
    transition: 0.4s all ease;
    opacity: 0;
  }
  .thumbnail-classic .caption-title,
  .thumbnail-classic .caption-text {
    transition: 300ms 50ms ease-in-out;
    transform: scale3d(0.7, 0.7, 0);
  }
  .thumbnail-classic:hover figure {
    transform: scale3d(1.05, 1.05, 1.05);
  }
  .thumbnail-classic:hover .caption {
    opacity: 1;
  }
  .thumbnail-classic:hover .caption:before,
  .thumbnail-classic:hover .caption:after {
    opacity: 1;
    transform: scale(1);
  }
  .thumbnail-classic:hover .caption-title,
  .thumbnail-classic:hover .caption-text {
    transform: scale3d(1, 1, 1);
  }
  .range-75 {
    margin-top: 100px;
    display: flex;
    justify-content: center;
  }
}
figure {
  margin: 0;
}
h3 {
  margin-bottom: 0;
  font-weight: 700;
  letter-spacing: 0;
  color: #151515;
  line-height: 1;
  font-size: 36px;
}
p {
  margin-top: 20px;
}
:deep(.button-primary) {
  margin-top: 20px;
}
.text-center {
  text-align: center;
}
.range-30 {
  position: relative;
  transform: translateY(-30px);
  margin-bottom: -30px;
  pointer-events: auto;
  margin-top: 50px;
}
.thumbnail-classic {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  width: 100.01%;
  will-change: transform;
  cursor: pointer;
}

.thumbnail-classic figure {
  width: 100%;
  transform: translate3d(0, 0, 0);
  transition: 0.33s all ease-in-out;
}

.thumbnail-classic img {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  height: auto;
  max-width: none;
  min-width: 101.5%;
}
.thumbnail-classic .caption {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: 0.33s all ease-in-out;
  pointer-events: none;
  background: rgba(41, 41, 41, 0.53);
  will-change: transform;
}

.thumbnail-classic .caption::before,
.thumbnail-classic .caption::after {
  pointer-events: none;
  position: absolute;
  top: 30px;
  right: 30px;
  bottom: 30px;
  left: 30px;
  content: "";
  opacity: 0;
  transition: opacity 0.35s, transform 0.35s;
  will-change: opacity;
}

.thumbnail-classic .caption::before {
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  transform: scale(0, 1);
}

.thumbnail-classic .caption::after {
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
  transform: scale(1, 0);
}

.thumbnail-classic .caption > * {
  position: relative;
  z-index: 2;
}

.thumbnail-classic .caption-title,
.thumbnail-classic .caption-text {
  color: #fff;
}

.thumbnail-classic .caption-title {
  position: relative;
  font-size: 18px;
  line-height: 1.25;
  margin-bottom: 0;
  padding: 0 15px;
}

.thumbnail-classic .caption-text {
  max-width: 100%;
  margin-top: 15px;
  padding: 0 15px;
  color: #fff;
}

.thumbnail-classic .caption-text:before {
  width: 45px;
  margin-left: auto;
  margin-right: auto;
  border-top: 2px solid;
  content: "";
  display: block;
  margin-bottom: 15px;
}
[class*="cell-"] {
  padding-left: 15px;
  padding-right: 15px;
}

.popular-post {
  display: flex;
  padding: 0 50px;
  .shell-left {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    height: 700px;
    .img_3_1 {
      background-image: url("https://solariahotel.com/UploadFile/Gallery/Overview/5.jpg");
      height: 50%;
      width: 100%;
      background-position: center;
    }
    .img_3_2 {
      background-image: url("https://solariahotel.com/UploadFile/Gallery/Rooms/Solarium-double-twin-room/1.jpg");
      height: 50%;
      width: 50%;
      background-position: center;
      background-size: cover;
    }
    .img_3_3 {
      background-image: url("https://solariahotel.com/UploadFile/Gallery/Bar/2.jpg");
      height: 50%;
      width: 50%;
      background-position: center;
      background-size: cover;
    }
  }
  .shell-right {
    width: 50%;
    padding: 100px 65px;
    .content-shell-right {
      margin-top: 20px;
      p {
        font-size: 19px;
      }
    }
  }
}

a:hover {
  color: #695f77;
  text-decoration: none;
  outline: none;
}
.team-box.box-outline:hover > *:nth-child(1):before {
  transform: translate(-12px, -10px);
}
ul {
  padding-inline-start: 0;
}
</style>
