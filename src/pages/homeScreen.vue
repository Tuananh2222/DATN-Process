<template>
  <div class="container-main">
    <div class="banner-wrapper">
      <div class="banner-slide">
        <Swiper
          class="container-swipper"
          :slides-per-view="1"
          :modules="[Autoplay, EffectFade]"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :effect="'fade'"
          :fade="true"
          :fade-effect="{
            crossFade: false,
          }"
          :speed="1000"
        >
          <SwiperSlide>
            <div class="img-banner">
              <img class="img-slide" src="@/public/image/slide-01.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="img-banner">
              <img class="img-slide" src="@/public/image/slide-02.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="img-banner">
              <img class="img-slide" src="@/public/image/slide-03.jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="banner-item">
          <div class="box-banner-text">
            <div class="box-text">
              <h1>Your Ideal Retreat</h1>
              <div class="slider-subtitle-group">
                <h4>Indulge in our top-notch</h4>
                <h3>Spa resort</h3>
              </div>
            </div>
            <div class="btn-wrapper">
              <CButton
                :label="'Learn more'"
                :class-name="'button-effect-ujarak button-lg button-white-outline button-square'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hotel-booking-form">
      <h3>Book a Room</h3>
      <!-- RD Mailform-->
      <div class="rd-mailform">
        <div class="cell-lg-12 cell-md-4">
          <TextBox :label="'Your Name'" :placeholder="'Your Full Name'" />
        </div>
        <div class="cell-sm-6">
          <p class="text-uppercase">Arrival</p>
          <CDatePicker />
        </div>
        <div class="cell-sm-6">
          <p class="text-uppercase">Departure</p>
          <CDatePicker />
        </div>
        <div class="cell-xs-6">
          <p class="text-uppercase">Adults</p>
          <CDropdown :data="data" fieldDisplay="name" fieldName="id" />
        </div>
        <div class="cell-xs-6">
          <p class="text-uppercase">Children</p>
          <CDropdown :data="data" />
        </div>
        <div class="btn-wrapper">
          <CButton
            :label="'check availability'"
            class-name="button-primary button-square button-block button-effect-ujarak"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="content-video">
    <iframe
      width="1020"
      height="525"
      src="https://www.youtube.com/embed/IijKvP-vJDo?autoplay=1&mute=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <div class="box-text-about">
      <div class="section-wrap-content-var-1-inner">
        <h2>About Us</h2>
        <p>
          Committed to everyone seeking energy and excitement, we offer endless
          possibilities to unwind and reenergize.
        </p>
        <div class="group">
          <dl class="list-desc">
            <dt>Weekdays:</dt>
            <dd><span>8:00–20:00</span></dd>
          </dl>
          <dl class="list-desc">
            <dt>Weekends:</dt>
            <dd><span>9:00–18:00</span></dd>
          </dl>
        </div>
        <CButton
          :label="'book now'"
          :class-name="'button-effect-ujarak button-lg button-secondary-outline button-square'"
          @handle-button="handleEventRoom"
        />
      </div>
    </div>
  </div>
  <div class="guide-content">
    <div class="shell">
      <div class="text-guide">
        <h3>Indoor Hotel Pool</h3>
        <p>
          The indoor heated pool has vaulted wood beam ceilings. The whirlpool
          features bay windows and overlooks the pond and the north face of the
          local beauty spot. For the safety and health reasons, children must be
          accompanied by an adult when visiting the pool.
        </p>
        <p>
          The serene pool at Royal Villas spa resort and hotel boasts sleek
          décor that features striking floor-to-ceiling teak columns set against
          a cool black tile floor. Poolside dining is also available, featuring
          a selection of dishes from any cuisine you desire that are both
          healthy and delicious. Daily aqua aerobics classes help keep guests
          fit while on the road.
        </p>
        <div class="btn-wrapper">
          <CButton
            :label="'read more'"
            :class-name="'button-primary button button-square button-effect-ujarak button-lg'"
          />
        </div>
      </div>
      <div class="img-guide">
        <div class="box-outline box-outline__mod-1">
          <figure>
            <img
              src="@/public/image/img-content.jpg"
              alt=""
              width="546"
              height="516"
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
  <div class="gallery-content">
    <div class="header-gallery">
      <div class="cell-sm-6">
        <h3>Our Gallery</h3>
      </div>
      <div class="cell-sm-6 text-sm-right">
        <a class="heading-link link-gray-darker" href="#">See All Photos</a>
      </div>
    </div>
    <hr />
    <div class="gallery-wrapper">
      <div class="gallery-item" tabindex="0">
        <img
          src="@/public/image/gallery-1-420x584.jpg"
          class="gallery-image"
          alt=""
        />

        <div class="gallery-item-info">
          <ul>
            <li class="gallery-item-likes">
              <font-awesome-icon icon="fa-solid fa-heart" /> 56
            </li>
            <li class="gallery-item-comments">
              <font-awesome-icon icon="fa-solid fa-eye" /> 2
            </li>
          </ul>
        </div>
      </div>
      <div class="gallery-item" tabindex="1">
        <img
          src="@/public/image/gallery-2-420x278.jpg"
          class="gallery-image"
          alt=""
        />

        <div class="gallery-item-info">
          <ul>
            <li class="gallery-item-likes">
              <font-awesome-icon icon="fa-solid fa-heart" /> 56
            </li>
            <li class="gallery-item-comments">
              <font-awesome-icon icon="fa-solid fa-eye" /> 2
            </li>
          </ul>
        </div>
      </div>
      <div class="gallery-item" tabindex="2">
        <img
          src="@/public/image/gallery-3-584x800_original.jpg"
          class="gallery-image"
          alt=""
        />

        <div class="gallery-item-info">
          <ul>
            <li class="gallery-item-likes">
              <font-awesome-icon icon="fa-solid fa-heart" /> 56
            </li>
            <li class="gallery-item-comments">
              <font-awesome-icon icon="fa-solid fa-eye" /> 2
            </li>
          </ul>
        </div>
      </div>
      <div class="gallery-item" tabindex="3">
        <img
          src="@/public/image/gallery-4-1200x800_original.jpg"
          class="gallery-image"
          alt=""
        />

        <div class="gallery-item-info">
          <ul>
            <li class="gallery-item-likes">
              <font-awesome-icon icon="fa-solid fa-heart" /> 56
            </li>
            <li class="gallery-item-comments">
              <font-awesome-icon icon="fa-solid fa-eye" /> 2
            </li>
          </ul>
        </div>
      </div>
      <div class="gallery-item" tabindex="4">
        <img
          src="@/public/image/gallery-5-1200x800_original.jpg"
          class="gallery-image"
          alt=""
        />

        <div class="gallery-item-info">
          <ul>
            <li class="gallery-item-likes">
              <font-awesome-icon icon="fa-solid fa-heart" /> 56
            </li>
            <li class="gallery-item-comments">
              <font-awesome-icon icon="fa-solid fa-eye" /> 2
            </li>
          </ul>
        </div>
      </div>
      <div class="gallery-item" tabindex="5">
        <img
          src="@/public/image/gallery-6-1200x798_original.jpg"
          class="gallery-image"
          alt=""
        />

        <div class="gallery-item-info">
          <ul>
            <li class="gallery-item-likes">
              <font-awesome-icon icon="fa-solid fa-heart" /> 56
            </li>
            <li class="gallery-item-comments">
              <font-awesome-icon icon="fa-solid fa-eye" /> 2
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="blog-content">
    <div class="header-content">
      <h3>Our Blog</h3>
    </div>
    <hr />
    <div class="blog-wrapper">
      <div class="card" v-for="(item, index) in state.listBlog" :key="index">
        <div class="image-data">
          <div class="background-image">
            <img :src="item.img_blog" alt="" />
          </div>
          <div class="publication-details">
            <spam class="date"
              ><font-awesome-icon icon="fa-solid fa-clock" /> March 30,
              2020</spam
            >
          </div>
        </div>
        <div class="post-data">
          <h1 class="title">{{ item.title }}</h1>
          <div class="cta">
            <a @click="handleClickReadBlog(item.id)">Read more &rarr;</a>
          </div>
        </div>
      </div>
      <!-- <div class="card">
        <div class="image-data">
          <div class="background-image">
            <img src="@/public/image/blog-02-460x369.jpg" alt="" />
          </div>
          <div class="publication-details">
            <a href="" class="author">
              <font-awesome-icon icon="fa-regular fa-thumbs-up" />
              40
            </a>
            <spam class="date"
              ><font-awesome-icon icon="fa-solid fa-clock" /> October 26,
              2017</spam
            >
          </div>
        </div>
        <div class="post-data">
          <h1 class="title">Long Bien bridge - A peaceful and romantic</h1>
          <div class="cta">
            <a href="#">Read more &rarr;</a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="image-data">
          <div class="background-image">
            <img src="@/public/image/blog-03-460x369.jpg" alt="" />
          </div>
          <div class="publication-details">
            <a href="" class="author">
              <font-awesome-icon icon="fa-regular fa-thumbs-up" />
              15
            </a>
            <spam class="date"
              ><font-awesome-icon icon="fa-solid fa-clock" /> August 23,
              2017</spam
            >
          </div>
        </div>
        <div class="post-data">
          <h1 class="title">Bat Trang – Truly a worth-visiting traditional</h1>
          <div class="cta">
            <a href="#">Read more &rarr;</a>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script setup>
// import CardProduct from "~~/components/generals/cardProduct.vue";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper";
import CDropdown from "@/components/elements/CDropdown.vue";
import CButton from "@/components/elements/CButton.vue";
import TextBox from "@/components/elements/textBox.vue";
import CDatePicker from "@/components/elements/CDatePicker.vue";
import router from "@/router";
import useBlogStore from "@/stores/blog";
import { onMounted } from "vue";

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

const { state, initProcess } = useBlogStore();

onMounted(() => {
  initProcess();
});

const handleEventRoom = () => {
  router.push("/hotel");
};

const handleClickReadBlog = (id) => {
  router.push("blog-item/" + id);
};
</script>

<style lang="scss" scoped>
.container-main {
  width: 93%;
  margin: 0 auto;
  display: flex;
  padding: 0 15px;
  .banner-wrapper {
    position: relative;
    width: 70%;
    height: 657px;
    @media not screen and (min-width: 1280px) {
      margin-top: -79px;
      width: 50%;
    }

    .banner-slide {
      position: relative;
      display: flex;
      align-items: center;
      .img-banner {
        box-sizing: border-box;
        @media not screen and (min-width: 1280px) {
          width: 100%;
        }
        .img-slide {
          width: 100%;
          height: 657px;
          background-size: cover;
          object-fit: cover;
        }
      }
      .banner-item {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        z-index: 2;
        @media not screen and (min-width: 1280px) {
        }
        .box-banner-text {
          display: flex;
          flex-direction: column;
          width: 96%;
          @media not screen and (min-width: 1280px) {
            width: 94.6%;
          }
          .box-text {
            color: white;
            h1 {
              font-weight: 700;
              font-size: 55px;
            }
            .slider-subtitle-group {
              margin-left: 58px;
              h4 {
                font-size: 24px;
                line-height: 1.25;
                font-weight: 300;
              }
              h3 {
                font-weight: 700;
                font-size: 36px;
              }
            }
          }
        }
      }
    }
  }

  .hotel-booking-form {
    width: 100%;
    height: 657px;
    text-align: left;
    padding: 70px 50px 60px;
    color: #000;
    background: #e3e3e3;
    @media not screen and (min-width: 1280px) {
      padding: 30px 20px 30px;
    }
    .cell-sm-6 {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      :deep(.dx-field-value) {
        width: 100%;
      }
    }
    .cell-xs-6 {
      margin-top: 10px;
    }
    .cell-md-4 {
      margin-top: 10px;
      :deep(.input-border) {
        height: 38px;
      }
    }
  }

  .hotel-booking-form h3 {
    font-size: 36px;
    color: inherit;
    font-weight: 700;
  }

  .hotel-booking-form .form-label {
    left: 22px;
    letter-spacing: 0.05em;
  }

  .hotel-booking-form .form-input {
    padding-left: 22px;
    background-color: #fff;
  }

  .hotel-booking-form .select2-container .select2-choice {
    padding-left: 0;
    padding-right: 0;
    background: #fff;
  }

  .hotel-booking-form .select2-arrow b:before {
    color: #cbcbcb;
  }
}
.content-video {
  display: flex;
  width: 93%;
  margin: 0 auto;
  padding: 55px 15px 70px 15px;
  .box-text-about {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 30px;
    background-color: #8f859e;
    margin-left: 30px;
    color: white;
    .section-wrap-content-var-1-inner {
      max-width: 420px;
      h2 {
        font-size: 60px;
        font-weight: 700;
      }
      p {
        font-size: 14px;
        font-weight: 400;
      }
      .group {
        display: flex;
        .list-desc {
          margin-right: 10px;
          dt {
            color: #dcd1d5;
            @media not screen and (min-width: 1280px) {
              font-size: 14px;
            }
          }
          dd {
            font-size: 12px;
            display: flex;
            align-items: center;
            @media not screen and (min-width: 1280px) {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
.guide-content {
  background-color: #f3f3f3;
  .shell {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 75px;
    padding-bottom: 90px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    .text-guide {
      margin-top: 50px;
      pointer-events: auto;
      max-width: 41.66667%;
      h3 {
        line-height: 1;
        font-size: 36px;
        font-weight: 700;
        letter-spacing: 0;
        color: #151515;
      }
      p {
        font-size: 14px;
        margin-top: 20px;
      }
    }
    .img-guide {
      max-width: 50%;
      margin-left: 50px;
      .box-outline {
        width: 543px;
        height: 523px;
        position: relative;
        z-index: 1;
        display: inline-block;
        padding-top: 20px;
      }
      .box-outline:before {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
        border: 5px solid #dcd1d5;
        content: "";
        transform: translate(-12px, 5px);
        transition: 550ms ease-in-out;
      }
      .box-outline__mod-1:before {
        left: 27px;
        @media not screen and (min-width: 1280px) {
          left: 6px;
        }
      }
    }
  }
}
.gallery-content {
  margin: 0 auto;
  padding: 95px 15px 60px 15px;
  width: 93%;

  .header-gallery {
    display: flex;
    justify-content: space-between;
    color: #000;
    .cell-sm-6 {
      max-width: 50%;
      h3 {
        line-height: 1;
        font-size: 36px;
        font-weight: 700;
      }
      a {
        color: #000;
        text-decoration: none;
        transition: all 250ms ease-in;
      }
      a:hover {
        color: #8f859e;
      }
    }
  }
  hr {
    border: none;
    margin-top: 20px;
    border-top: 1px solid #ebebeb;
  }
  .gallery-wrapper {
    display: flex;
    flex-wrap: wrap;
    .gallery-item {
      position: relative;
      flex: 1 0 22rem;
      margin: 1rem;
      color: #fff;
      cursor: pointer;
    }

    .gallery-item:hover .gallery-item-info,
    .gallery-item:focus .gallery-item-info {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
    }

    .gallery-item-info {
      display: none;
    }

    .gallery-item-info li {
      display: inline-block;
      font-size: 1.7rem;
      font-weight: 600;
    }

    .gallery-item-likes {
      margin-right: 2.2rem;
    }
    .gallery-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.blog-content {
  margin: 0 auto;
  padding: 0 15px 50px 15px;
  width: 93%;
  .header-content {
    color: #000;

    h3 {
      line-height: 1;
      font-size: 36px;
      font-weight: 700;
    }
  }
  hr {
    border: none;
    margin-top: 20px;
    border-top: 1px solid #ebebeb;
  }
  .blog-wrapper {
    display: flex;
    margin-top: 50px;
    .card {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      box-shadow: 2px 0.8rem 1rem rgba(0, 0, 0, 0.5);
      background-color: white;
      margin-right: 30px;
      width: calc(100% / 3);
      .image-data {
        position: relative;
        z-index: 1;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-size: cover;
          z-index: -1;
          transition: transform 5s;
        }

        .publication-details {
          width: 100%;
          height: 100%;
          background: #8f859e;
          font-size: 1rem;
          color: white;
          font-weight: bold;
          position: absolute;
          top: 0;
          left: 0;
          padding: 1rem;
          opacity: 0.5;
          i {
            margin-right: 1rem;
          }
          .author {
            display: inline-block;
            margin-bottom: 0.5rem;
            transition: all 0.5s;

            transform: translateY(-3rem);
            opacity: 0;
            transition-delay: 0.3s;

            &:hover {
              color: rgba(white, 0.75);
            }
          }
          .date {
            display: block;

            transform: translateY(3rem);
            opacity: 0;
            transition: all 0.5s 0.3s;
          }

          transform: translateX(-100%);
          transition: transform 0.5s;
        }

        flex-basis: 40%;
        height: unset;
      }
      .post-data {
        background-color: white;
        padding: -1rem 3rem;
        position: relative;
        .title {
          color: #000;
          font-size: 18px;
          line-height: 1;
          padding-left: 15px;
          padding-top: 10px;
          height: 80px;
        }
        .cta {
          text-align: right;
          font-weight: bold;
          margin-top: 10px;
          padding-bottom: 10px;
          a {
            background: #8f859e;
            -webkit-background-clip: text;
            color: transparent;
            position: relative;
            &:before {
              content: "";
              position: absolute;
              left: 0;
              bottom: -0.5rem;
              width: 100%;
              height: 3px;
              background: #8f859e;
              transform: scaleX(0);
              transform-origin: left;
              transition: transform 0.5s;
            }
            &:hover {
              &:before {
                transform: scaleX(1);
              }
            }
          }
        }
        &:before {
          content: "";
          width: 2rem;
          height: 100%;
          background-color: white;
          position: absolute;
          top: 0;
          left: -1.5rem;
          z-index: 10;
          transform: skewx(-5deg);
        }

        flex-basis: 55%;
      }
      &:hover {
        img {
          transform: scale(1.5);
        }
        .publication-details {
          transform: translateX(0%);

          .author,
          .date {
            transform: translateY(0%);
            opacity: 1;
          }
        }
      }

      flex-direction: row;
      max-width: 55rem;
    }
    .card:nth-child(3) {
      margin-right: 0;
    }
  }
}
.list-desc {
  display: flex;
  dd {
    margin-inline-start: 5px;
  }
}
.btn-wrapper {
  margin-top: 40px;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
