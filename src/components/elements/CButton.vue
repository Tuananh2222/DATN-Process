<template>
  <div :class="['button', props.className]">
    <span>{{ props.label }}</span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  className: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  position: relative;
  padding: 15px 38px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-style: solid;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  user-select: none;
  transition: 250ms all ease-in-out;
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  font-weight: 500;
  border-width: 0;
}

.button:focus,
.button:active,
.button:active:focus {
  outline: none;
}

.button .caret {
  margin-left: 8px;
}

.button.button-effect-ujarak span {
  position: relative;
  z-index: 2;
}

.button.button-effect-ujarak:before {
  content: "";
  display: inline-block;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 10%;
  right: 10%;
  transition: all 250ms ease-in;
  opacity: 0;
  z-index: 0;
}

.button.button-effect-ujarak:after {
  content: "";
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: -3px;
  right: -3px;
  z-index: 1;
  transition: all 250ms ease-in;
}

.button.button-effect-ujarak:hover {
  background: transparent;
}

.button.button-effect-ujarak:hover:before {
  opacity: 1;
  left: -1px;
  right: -1px;
}

.button.button-effect-ujarak:hover:after {
  opacity: 0;
  left: 10%;
  right: 10%;
}

.button[class*="-outline"] {
  padding: 11px 38px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 0;
}

.button-block {
  display: block;
  width: 100%;
}

.button-default {
  color: #151515;
  background-color: transparent;
  border-color: #9b9b9b;
}

.button-default:hover,
.button-default:focus,
.button-default:active,
.button-default:hover {
  color: #fff;
  background-color: #151515;
  border-color: #151515;
}

.button-transparent {
  color: #151515;
  background-color: transparent;
  border-color: transparent;
}

.button-transparent:hover,
.button-transparent:focus,
.button-transparent:active,
.button-transparent:hover {
  color: #fff;
  background-color: #151515;
  border-color: #151515;
}

.button-default-outline {
  border-width: 3px;
  color: #151515;
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.2);
}

.button-default-outline:hover,
.button-default-outline:focus,
.button-default-outline:active,
.button-default-outline:hover {
  color: #fff;
  background-color: #151515;
  border-color: #151515;
}

.button-gray-dark-outline {
  border-width: 3px;
  color: #151515;
  background-color: transparent;
  border-color: #151515;
}

.button-gray-dark-outline:hover,
.button-gray-dark-outline:focus,
.button-gray-dark-outline:active,
.button-gray-dark-outline:hover {
  color: #fff;
  background-color: #151515;
  border-color: #151515;
}

.button-gray-dark-outline.button-effect-ujarak {
  border-width: 0;
  padding: 14px 38px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 0;
}

.button-gray-dark-outline.button-effect-ujarak:before {
  background-color: #151515;
}

.button-gray-dark-outline.button-effect-ujarak:after {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 3px solid #151515;
}

.button-gray-dark-outline.button-effect-ujarak:hover {
  background: transparent;
}

.button-white-outline {
  border-width: 3px;
  color: #fff;
  background-color: transparent;
  border-color: #fff;
}

.button-white-outline:hover,
.button-white-outline:focus,
.button-white-outline:active,
.button-white-outline:hover {
  color: #fff;
  background-color: #8f859e;
  border-color: #8f859e;
}

.button-white-outline.button-effect-ujarak {
  border-width: 0;
  padding: 14px 38px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 0;
}

.button-white-outline.button-effect-ujarak:before {
  background-color: #8f859e;
}

.button-white-outline.button-effect-ujarak:after {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 3px solid #fff;
}

.button-white-outline.button-effect-ujarak:focus,
.button-white-outline.button-effect-ujarak:active {
  background: #8f859e;
  border-color: #8f859e;
}

.button-white-outline.button-effect-ujarak:focus:after,
.button-white-outline.button-effect-ujarak:active:after {
  border: 0;
}

.button-white-outline.button-effect-ujarak:hover {
  background: transparent;
}

.button-white-outline.button-lg.button-square {
  border-radius: 0;
}

.button-secondary-outline {
  border-width: 3px;
  color: #fff;
  background-color: transparent;
  border-color: #dcd1d5;
}

.button-secondary-outline:hover,
.button-secondary-outline:focus,
.button-secondary-outline:active,
.button-secondary-outline:hover {
  color: #000;
  background-color: #fff;
  border-color: #fff;
}

.button-secondary-outline.button-effect-ujarak {
  border-width: 0;
  padding: 14px 38px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 0;
}

.button-secondary-outline.button-effect-ujarak:before {
  background-color: #fff;
}

.button-secondary-outline.button-effect-ujarak:after {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 3px solid #dcd1d5;
}

.button-secondary-outline.button-effect-ujarak:focus,
.button-secondary-outline.button-effect-ujarak:active {
  background: #8f859e;
  border-color: #8f859e;
}

.button-secondary-outline.button-effect-ujarak:focus:after,
.button-secondary-outline.button-effect-ujarak:active:after {
  border: 0;
}

.button-secondary-outline.button-effect-ujarak:hover {
  background: transparent;
}

.button-secondary-outline.button-lg.button-square {
  border-radius: 0;
}

.button-gray-6-outline {
  border-width: 2px;
  color: #dcd1d5;
  background-color: transparent;
  border-color: #ddd;
}

.button-gray-6-outline:hover,
.button-gray-6-outline:focus,
.button-gray-6-outline:active,
.button-gray-6-outline:hover {
  color: #fff;
  background-color: #8f859e;
  border-color: #8f859e;
}

.button-gray-6-outline.button-effect-ujarak {
  border-width: 0;
  padding: 14px 38px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 0;
}

.button-gray-6-outline.button-effect-ujarak:before {
  background-color: #8f859e;
}

.button-gray-6-outline.button-effect-ujarak:after {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 2px solid #ddd;
}

.button-gray-6-outline.button-effect-ujarak:focus,
.button-gray-6-outline.button-effect-ujarak:active {
  background: #8f859e;
  border-color: #8f859e;
}

.button-gray-6-outline.button-effect-ujarak:focus:after,
.button-gray-6-outline.button-effect-ujarak:active:after {
  border: 0;
}

.button-gray-6-outline.button-effect-ujarak:hover {
  background: transparent;
}

.button-gray-6-outline.button-lg.button-square {
  border-radius: 0;
}

.button-primary {
  color: #fff;
  background-color: #8f859e;
  border-color: #8f859e;
}

.button-primary:hover,
.button-primary:focus,
.button-primary:active,
.button-primary:hover {
  color: #fff;
  background-color: #dcd1d5;
  border-color: #dcd1d5;
}

.button-primary.button-effect-ujarak:before {
  background-color: #dcd1d5;
}

.button-primary.button-effect-ujarak:after {
  background-color: #8f859e;
}

.button-primary.button-effect-ujarak:hover {
  background: transparent;
}

.button-primary-2 {
  color: #fff;
  background-color: #8f859e;
  border-color: #8f859e;
}

.button-primary-2:hover,
.button-primary-2:focus,
.button-primary-2:active,
.button-primary-2:hover {
  color: #fff;
  background-color: #dcd1d5;
  border-color: #dcd1d5;
}

.button-primary-2.button-effect-ujarak:before {
  background-color: #dcd1d5;
}

.button-primary-2.button-effect-ujarak:after {
  background-color: #8f859e;
}

.button-primary-2.button-effect-ujarak:hover {
  background: transparent;
}

.button-secondary {
  color: #fff;
  background-color: #dcd1d5;
  border-color: #dcd1d5;
}

.button-secondary:hover,
.button-secondary:focus,
.button-secondary:active,
.button-secondary:hover {
  color: #fff;
  background-color: #8f859e;
  border-color: #8f859e;
}

.button-secondary.button-effect-ujarak:before {
  background-color: #8f859e;
}

.button-secondary.button-effect-ujarak:after {
  background-color: #dcd1d5;
}

.button-secondary.button-effect-ujarak:hover {
  background: transparent;
}

.button-steel-blue {
  color: #fff;
  background-color: #547abb;
  border-color: #547abb;
}

.button-steel-blue:hover,
.button-steel-blue:focus,
.button-steel-blue:active,
.button-steel-blue:hover {
  color: #fff;
  background-color: #3f629d;
  border-color: #3f629d;
}

.button-cerulean {
  color: #fff;
  background-color: #00bbf2;
  border-color: #00bbf2;
}

.button-cerulean:hover,
.button-cerulean:focus,
.button-cerulean:active,
.button-cerulean:hover {
  color: #fff;
  background-color: #00a7d9;
  border-color: #00a7d9;
}

.button-mandy {
  color: #fff;
  background-color: #e75854;
  border-color: #e75854;
}

.button-mandy:hover,
.button-mandy:focus,
.button-mandy:active,
.button-mandy:hover {
  color: #fff;
  background-color: #e12c27;
  border-color: #e12c27;
}

.button-shadow {
  box-shadow: 0 3px 11px 0 rgba(0, 0, 0, 0.15);
}

.button-shadow:hover {
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.15);
}

.button-xs {
  padding: 12px 30px;
  font-size: 14px;
  line-height: 18px;
  border-radius: 3px;
}

.button-xs[class*="-outline"] {
  padding: 10px 15px;
  font-size: 14px;
  line-height: 18px;
  border-radius: 3px;
  padding-bottom: 7px;
}

.button-sm {
  padding: 13px 22px;
  font-size: 14px;
  line-height: 16px;
  border-radius: 3px;
  min-width: auto;
}

.button-sm[class*="-outline"] {
  padding: 13px 22px;
  font-size: 14px;
  line-height: 16px;
  border-radius: 3px;
}

.button-lg {
  padding: 19px 65px;
  font-size: 18px;
  line-height: 20px;
  border-radius: 3px;
}

.button-lg[class*="-outline"] {
  padding: 19px 65px;
  font-size: 18px;
  line-height: 20px;
  border-radius: 3px;
}

.button-xl {
  padding: 25px 70px;
  font-size: 24px;
  line-height: 24px;
  border-radius: 3px;
}

.button-xl[class*="-outline"] {
  padding: 25px 70px;
  font-size: 24px;
  line-height: 24px;
  border-radius: 3px;
}

.button-circle {
  border-radius: 30px;
}

.button-round {
  border-radius: 8px;
}

.button-square {
  border-radius: 0;
}

.button-ellipse-md {
  border-radius: 5px;
}

.button-ellipse-lg {
  border-radius: 10px;
}

.button.button-icon {
  padding-left: 35px;
  padding-right: 35px;
}

.button.button-icon .icon {
  line-height: inherit;
  vertical-align: middle;
  transition: 0s;
}

.button.button-icon-left .icon {
  float: left;
  padding-right: 10px;
}

.button.button-icon-right .icon {
  float: right;
  padding-left: 10px;
}

.page .button-tags {
  font-size: 12px;
  border-width: 1px;
  font-weight: 500;
  text-transform: uppercase;
}

.button-link {
  font: 700 16px "Poppins", Helvetica, Arial, sans-serif;
  color: #dcd1d5;
}
</style>
