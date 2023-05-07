<template>
  <div class="page-loader">
    <div class="loader">
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="window"></div>
      <div class="door"></div>
      <div class="hotel-sign">
        <span>L</span><span>E</span><span>X</span><span>I</span><span>N</span
        ><span>G</span><span>T</span><span>O</span><span>N</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@keyframes flicker {
  0% {
    background: transparent;
  }
  50% {
    background: white;
  }
  100% {
    background: transparent;
  }
}
// @keyframes neon {
//   0% {
//     @include text-shadow(none);
//   }
//   50% {
//     @include text-shadow(rgba(white, 0.8) 0 0 8px);
//   }
//   100% {
//     @include text-shadow(none);
//   }
// }
.page-loader {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 9;
  background: #fff;
  transition: 0.3s all ease;
}
.loader {
  padding: 0.5em;
  width: 5.5em;
  height: 9.5em;
  margin: 100px auto;
  background: #444444;
  position: relative;
  box-shadow: #2b2b2b 0 0 20px inset;
  border-radius: 4px;
  color: #fff;
  font-size: 24px;
}

span {
  display: block;
}
.hotel-sign {
  padding: 0.25em 0;
  position: absolute;
  right: -1.5em;
  width: 1.3em;
  content: " ";
  text-align: center;
  background: #444444;
  font-weight: 700;
  border-radius: 4px;
  box-shadow: #2b2b2b 0 0 10px inset;
  span {
    line-height: 1;
    font-size: 18px;
  }
}

.window {
  background: white;
  width: 0.5em;
  height: 1em;
  float: left;
  margin: 0 0.5em 0.5em 0;
  border-radius: 2px;
  animation: flicker 1s infinite ease;
}
.window:nth-of-type(5n) {
  margin: 0 0 0.5em 0;
}
.window:nth-child(1) {
  animation-delay: 0.5s;
  animation-duration: 0.5s;
}

.window:nth-child(3) {
  animation-delay: 1.5s;
  animation-duration: 1.5s;
}

.window:nth-child(4) {
  animation-delay: 2s;
  animation-duration: 2s;
}

.window:nth-child(5) {
  animation-delay: 2.5s;
  animation-duration: 2.5s;
}

.window:nth-child(5) {
  animation-delay: 1.25s;
  animation-duration: 1.25s;
}

.window:nth-child(6) {
  animation-delay: 1.5s;
  animation-duration: 1.5s;
}

.window:nth-child(7) {
  animation-delay: 1.75s;
  animation-duration: 1.75s;
}

.window:nth-child(8) {
  animation-delay: 2s;
  animation-duration: 2s;
}

.window:nth-child(9) {
  animation-delay: 2.25s;
  animation-duration: 2.25s;
}

.window:nth-child(10) {
  animation-delay: 2.5s;
  animation-duration: 2.5s;
}

.window:nth-child(10) {
  animation-delay: 1s;
  animation-duration: 1s;
}

.window:nth-child(11) {
  animation-delay: 1.1s;
  animation-duration: 1.1s;
}

.window:nth-child(12) {
  animation-delay: 1.2s;
  animation-duration: 1.2s;
}

.window:nth-child(13) {
  animation-delay: 1.3s;
  animation-duration: 1.3s;
}

.window:nth-child(14) {
  animation-delay: 1.4s;
  animation-duration: 1.4s;
}

.window:nth-child(15) {
  animation-delay: 1.5s;
  animation-duration: 1.5s;
}

.window:nth-child(16) {
  animation-delay: 1.6s;
  animation-duration: 1.6s;
}

.window:nth-child(17) {
  animation-delay: 1.7s;
  animation-duration: 1.7s;
}

.window:nth-child(18) {
  animation-delay: 1.8s;
  animation-duration: 1.8s;
}

.window:nth-child(19) {
  animation-delay: 1.9s;
  animation-duration: 1.9s;
}

.window:nth-child(20) {
  animation-delay: 2s;
  animation-duration: 2s;
}

.window:nth-child(20) {
  animation-delay: 1.33333s;
  animation-duration: 1.66667s;
}

.window:nth-child(21) {
  animation-delay: 1.4s;
  animation-duration: 1.75s;
}

.window:nth-child(22) {
  animation-delay: 1.46667s;
  animation-duration: 1.83333s;
}

.window:nth-child(23) {
  animation-delay: 1.53333s;
  animation-duration: 1.91667s;
}

.window:nth-child(24) {
  animation-delay: 1.6s;
  animation-duration: 2s;
}

.window:nth-child(25) {
  animation-delay: 1.66667s;
  animation-duration: 2.08333s;
}

.window:nth-child(26) {
  animation-delay: 1.73333s;
  animation-duration: 2.16667s;
}

.window:nth-child(27) {
  animation-delay: 1.8s;
  animation-duration: 2.25s;
}

.window:nth-child(28) {
  animation-delay: 1.86667s;
  animation-duration: 2.33333s;
}

.window:nth-child(29) {
  animation-delay: 1.93333s;
  animation-duration: 2.41667s;
}

.window:nth-child(30) {
  animation-delay: 2s;
  animation-duration: 2.5s;
}

.door {
  background: white;
  position: absolute;
  bottom: 0;
  width: 1em;
  height: 1.5em;
  left: 50%;
  margin-left: -0.5em;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
</style>
