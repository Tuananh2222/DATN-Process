<template>
  <DefaultHeader />
  <div class="container-wrapper">
    <div class="img-banner">
      <h2 class="text-white">Evaluate</h2>
    </div>
    <div class="about-wrapper">
      <div class="about-content">
        <div class="header-container">Get in Evaluate</div>

        <div class="box-container">
          <TextBox
            v-model.trim="state.userName"
            placeholder="Full Name"
            :required="false"
          />
          <textarea
            class="form-input"
            id="contact-message"
            name="message"
            placeholder="Your message"
            v-model="state.description"
          ></textarea>
          <div class="btn-wrapper">
            <CButton
              :label="'send message'"
              :class-name="'button-primary button-square button-block button-effect-ujarak'"
              @handle-button="sendEvaluate"
            />
          </div>
        </div>
      </div>
      <div class="address-contact">
        <div class="cell-xs-6">
          <p class="aside-title">get Social</p>
          <hr class="divider divider-left divider-custom" />
          <ul class="list-inline">
            <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
            <li><font-awesome-icon icon="fa-brands fa-facebook" /></li>
            <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
            <li><font-awesome-icon icon="fa-brands fa-youtube" /></li>
          </ul>
        </div>
        <div class="cell-xs-6">
          <p class="aside-title">Phone</p>
          <hr class="divider divider-left divider-custom" />
          <div class="unit-horizontal">
            <div class="unit__left">
              <font-awesome-icon icon="fa-solid fa-phone" />
            </div>
            <div class="unit__body">
              <a class="text-middle link link-gray-dark" href="tel:#"
                >0971935724</a
              >
            </div>
          </div>
        </div>
        <div class="cell-xs-6">
          <p class="aside-title">Address</p>
          <hr class="divider divider-left divider-custom" />
          <div class="unit-horizontal">
            <div class="unit__left">
              <font-awesome-icon icon="fa-solid fa-location-dot" />
            </div>
            <div class="unit__body">
              <a class="text-middle link link-gray-dark" href="contacts.html"
                >298 Cau Dien Street</a
              >
            </div>
          </div>
        </div>
        <div class="cell-xs-6">
          <p class="aside-title">opening hours</p>
          <hr class="divider divider-left divider-custom" />
          <div class="unit-horizontal">
            <div class="unit__left">
              <font-awesome-icon icon="fa-solid fa-clock" />
            </div>
            <div class="unit__body text-gray-darker">
              <p>We work every day 9:00–23:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
  <CPopup
    :popup-title="'Lexington Hotel'"
    :popup-content="'We are happy to receive your feedback. Thank you for evaluating the system so we can make it better. Have a nice day and see you soon!'"
    v-if="isShowPopup"
  >
    <div class="btn-confirm">
      <CButton
        :label="'Confirm'"
        :class-name="'button-primary button-square button-block button-effect-ujarak'"
        @handle-button="handleClose"
      />
    </div>
  </CPopup>
</template>

<script setup>
import CButton from "@/components/elements/CButton.vue";
import CPopup from "@/components/elements/CPopup.vue";
import TextBox from "@/components/elements/textBox.vue";
import DefaultFooter from "@/components/generals/defaultFooter.vue";
import DefaultHeader from "@/components/generals/defaultHeader.vue";
import useEvaluateStore from "@/stores/evaluate";
import { ref } from "vue";

const evaluateStore = useEvaluateStore();
const { state, insertEvaluate } = evaluateStore;
const isShowPopup = ref(false)
const sendEvaluate = async () => {
  insertEvaluate();
  isShowPopup.value = true
};

const handleClose = () => {
  isShowPopup.value = false
}
</script>

<style lang="scss" scoped>
.container-wrapper {
  width: 100%;
  position: relative;

  .about-wrapper {
    display: flex;
    width: 62.5%;
    margin: 0 auto;
    padding-top: 55px;
    padding-bottom: 70px;
  }
  .img-banner {
    height: 304px;
    width: 1920px;
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
.about-content {
  margin: 0 auto;
  flex-basis: 66.66667%;
  max-width: 66.66667%;
  .header-container {
    font-size: 36px;
    font-weight: 700;
    color: #000;
    text-align: center;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
  }
}
.address-contact {
  flex-basis: 33.33333%;
  max-width: 33.33333%;
  margin-top: 20px;
  padding: 0 20px;
  .cell-xs-6 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
    margin-top: 20px;
    .aside-title {
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      color: #151515;
    }
    .list-inline {
      list-style: none;
      display: flex;
      padding-inline-start: 0;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-top: 5px;
      li {
        padding: 0 5px;
        cursor: pointer;
      }
    }
    .unit-horizontal {
      display: flex;
      margin-top: 5px;
      .unit__body {
        padding-top: 0;
        padding-left: 10px;
      }
      a {
        color: #363d41;
        text-decoration: none;
      }
    }
  }
}
.box-container {
  padding-bottom: 40px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  .header-container {
    color: #dc3545;
    font-weight: 700;
    margin-bottom: 1.5em;
  }
  .text-container {
    margin-bottom: 1rem;
    padding-top: 10px;
  }
  .btn-primary {
    display: flex;
    transition: all 0.5s;
    justify-content: center;
    font-weight: bold;
    border: none;
    background-color: green;
    border-radius: 8px;
    margin: auto;
    cursor: pointer;
    color: white;

    width: 100px;
    height: 40px;
    padding: 0;
  }
  .btn-primary:hover {
    background-color: green;
    opacity: 0.9;
  }
  .btn-disable {
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    font-weight: bold;
    border: none;
    border-radius: 8px;

    background: #ccc;
    pointer-events: none;
  }
  .form-input {
    margin-top: 7px;
    display: block;
    width: 100%;
    height: 200px;
    min-height: 158px;
    max-height: 229.5px;
    resize: vertical;
    padding: 12px 15px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #9b9b9b;
    background-color: #f5f5f5;
    background-image: none;
    border: 1px solid #f5f5f5;
    border-radius: 0;
    -webkit-appearance: none;
    letter-spacing: 0.05em;
  }
  .btn-wrapper {
    margin-top: 7px;
  }
}
.btn-confirm{
  margin-top: 10px;
}
:deep(.button-primary){
  border-radius: 8px;
}
</style>
