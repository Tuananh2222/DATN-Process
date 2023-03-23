<template>
  <div class="popup">
    <div class="popup-inner">
      <div class="popup__text">
        <h1>{{ props.textTitle }}</h1>
        <p>{{ description }}</p>
      </div>
      <div class="popup__close" @click="handleClose()">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

const emits = defineEmits(["closePopup"]);

const props = defineProps({
  textTitle: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});

const handleClose = () => {
  emits("closePopup");
};
</script>

<style lang="scss" scoped>
.popup {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  transition: 0.64s ease-in-out;
  &-inner {
    position: relative;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    max-width: 800px;
    max-height: 600px;
    width: 40%;
    height: 30%;
    background-color: #fff;
    // transform: rotate(32deg);
    transition: 0.64s ease-in-out;
    border-radius: 12px;
  }
  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2rem;
    h1 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 2rem;
      text-transform: uppercase;
      color: #0a0a0a;
    }
    p {
      font-size: 0.875rem;
      color: #686868;
      line-height: 1.5;
    }
  }
  &__close {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    width: 3rem;
    height: 3rem;
    font-size: 0.875rem;
    font-weight: 300;
    border-radius: 100%;
    background-color: #0a0a0a;
    z-index: 4;
    color: #fff;
    line-height: 3rem;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
  }
}
</style>
