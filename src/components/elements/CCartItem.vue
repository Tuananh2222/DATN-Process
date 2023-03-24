<template>
  <div class="tr_item">
    <div class="td_item item_img">
      <img :src="props.img_url" />
    </div>
    <div class="td_item item_name">
      <label class="main">{{ props.title }}</label>
      <label class="sub">View: {{ props.view_detail }}</label>
    </div>
    <slot />

    <div class="td_item item_detail" @click="handleDetailItem">Detail</div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  img_url: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  view_detail: {
    type: String,
    default: "",
  },
  people: {
    type: Number,
    default: 0,
  },
  bed_type: {
    type: String,
    default: "",
  },
  room_size: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["move-detail"]);

const handleDetailItem = () => {
  emits("move-detail");
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
.tr_item {
  display: grid;
  grid-template-columns: 80px 1fr 125px 1fr 150px 50px 50px;
  margin-bottom: 15px;
  transition: all 0.3s linear;
  position: relative;
  transform: scale(0.995);
  @for $i from 1 through 50 {
    &:nth-last-child(#{$i}) {
      animation: listshow linear;
      animation-duration: 1000ms - 180ms * $i;
      transform-origin: top;
      @keyframes listshow {
        0% {
          opacity: 0;
          transform: scaleY(0);
          transform-origin: top;
        }
        50% {
          transform: scaleY(0);
        }
        100% {
          opacity: 1;
          transform: scaleY(1);
        }
      }
    }
  }

  @include size(sm-device) {
    grid-template-columns: 80px auto 80px auto;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: 0px;
    height: 2px;
    background-color: #d9d9d9;
    width: 0px;
    margin: auto;
  }
  @keyframes line {
    0% {
      width: 0px;
    }
    100% {
      width: calc(100% - 50px);
    }
  }
  &:hover {
    transform: scale(1);
    &::after {
      width: calc(100% - 50px);
      animation: line 0.5s linear;
    }
  }
  .td_item {
    padding: 10px;
    background-color: #e5e9ea;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 400;
    font-size: 16px;
    color: #666;
    transition: all 0.3s linear;
    @include size(sm-device) {
      padding: 5px;
    }
    &.item_img {
      @include size(sm-device) {
        grid-row-start: 1;
        grid-row-end: 3;
      }
      img {
        height: 60px;
        width: 60px;
        overflow: hidden;
        border-radius: 100px;
        max-width: 100%;
      }
    }
    &.item_name {
      @include size(sm-device) {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 2;
        grid-column-end: 5;
        width: 100%;
      }
      .main {
        font-size: 16px;
        font-weight: 400;
        color: #666;
      }
      .sub {
        font-size: 12px;
        color: #666;
      }
    }
    &.item_qty {
      select {
        height: 30px;
        background-color: transparent;
        border-color: transparent;
        border-width: 2px;
        outline: none;
        color: #666;
        font-weight: 400;
        font-size: 16px;
        transition: all 0.3s linear;
        &:focus {
          background-color: #e2e2e2;
        }
        &:hover {
          border-bottom: solid 2px #e2e2e2;
        }
      }
    }
    &.item_price {
      label {
        margin: auto;
      }
    }
    &.item_detail {
      cursor: pointer;
      background-color: transparent;
      padding: 0;
    }
    &.item_detail:hover {
      color: #bbb;
      padding: 0;
    }

    &.item_remove {
      cursor: pointer;
      font-size: 18px;
      opacity: 0.6;
      padding: 5px;
      cursor: pointer;
      transition: all 0.2s linear;
      padding-left: 10px;
      &:hover {
        opacity: 1;
        transform: scale(1.1);
      }
      background-color: transparent;
      @include size(sm-device) {
        position: absolute;
        right: 0px;
        top: 0px;
      }
    }
  }
}
</style>
