<template>
  <div class="chat-board chatbot chat new trending"></div>
  <div :class="['frame-content', isOpen && 'open']">
    <div
      class="widget-position-right sidebar-position-right onlyBubble"
      id="chatContainer"
    >
      <div class="chat no-clip-path chrome moveFromRight-enter-done">
        <div class="chat-header project-online">
          <h2 class="online"><span>Lexington Bot</span></h2>
          <button
            class="material-icons exit-chat ripple tidio-1s5t5ku"
            id="minimize-button"
            type="button"
            @click="closeModelChat"
          >
            <svg
              color="#fffff"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.3998 7.61333C24.2765 7.48973 24.1299 7.39167 23.9686 7.32476C23.8073 7.25785 23.6344 7.22341 23.4598 7.22341C23.2852 7.22341 23.1123 7.25785 22.951 7.32476C22.7897 7.39167 22.6432 7.48973 22.5198 7.61333L15.9998 14.12L9.47981 7.6C9.35637 7.47656 9.20982 7.37864 9.04853 7.31183C8.88725 7.24502 8.71438 7.21064 8.53981 7.21064C8.36524 7.21064 8.19237 7.24502 8.03109 7.31183C7.8698 7.37864 7.72325 7.47656 7.59981 7.6C7.47637 7.72344 7.37845 7.86999 7.31164 8.03128C7.24483 8.19256 7.21045 8.36543 7.21045 8.54C7.21045 8.71458 7.24483 8.88744 7.31164 9.04873C7.37845 9.21001 7.47637 9.35656 7.59981 9.48L14.1198 16L7.59981 22.52C7.47637 22.6434 7.37845 22.79 7.31164 22.9513C7.24483 23.1126 7.21045 23.2854 7.21045 23.46C7.21045 23.6346 7.24483 23.8074 7.31164 23.9687C7.37845 24.13 7.47637 24.2766 7.59981 24.4C7.72325 24.5234 7.8698 24.6214 8.03109 24.6882C8.19237 24.755 8.36524 24.7894 8.53981 24.7894C8.71438 24.7894 8.88725 24.755 9.04853 24.6882C9.20982 24.6214 9.35637 24.5234 9.47981 24.4L15.9998 17.88L22.5198 24.4C22.6433 24.5234 22.7898 24.6214 22.9511 24.6882C23.1124 24.755 23.2852 24.7894 23.4598 24.7894C23.6344 24.7894 23.8072 24.755 23.9685 24.6882C24.1298 24.6214 24.2764 24.5234 24.3998 24.4C24.5233 24.2766 24.6212 24.13 24.688 23.9687C24.7548 23.8074 24.7892 23.6346 24.7892 23.46C24.7892 23.2854 24.7548 23.1126 24.688 22.9513C24.6212 22.79 24.5233 22.6434 24.3998 22.52L17.8798 16L24.3998 9.48C24.9065 8.97333 24.9065 8.12 24.3998 7.61333Z"
              />
            </svg>
          </button>
        </div>
        <div id="conversation-group" role="log">
          <div id="messages" v-for="message in messages" :key="message.id">
            <div
              class="message message-operator"
              v-if="message.role == 'system'"
            >
              <span class="message-content">{{ message.content }}</span>
            </div>
            <div
              class="message message-operator bots-quick-replies"
              v-if="message.role == 'user'"
            >
              <div class="button-wrapper">{{ message.content }}</div>
            </div>
          </div>
          <div id="conversation-scroll">
            <div style="top: 0px; height: 55.8952px"></div>
          </div>
        </div>
        <div class="input-group">
          <hr />
          <div class="drag-active-wrapper footer-input-wrapper">
            <input
              id="chat-input"
              rows="1"
              placeholder="Hit the buttons to respond"
              v-model="newMessages"
            />

            <button
              id="SentButton"
              class="send-icon"
              title="SentButton"
              type="button"
              @click="sendMessage"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                xml:space="preserve"
              >
                <path
                  fill="#d7d7d7"
                  d="M22,11.7V12h-0.1c-0.1,1-17.7,9.5-18.8,9.1c-1.1-0.4,2.4-6.7,3-7.5C6.8,12.9,17.1,12,17.1,12H17c0,0,0-0.2,0-0.2c0,0,0,0,0,0c0-0.4-10.2-1-10.8-1.7c-0.6-0.7-4-7.1-3-7.5C4.3,2.1,22,10.5,22,11.7z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    id="chat-button"
    class="chat-closed mobile-size__medium"
    @click="showModelChat"
  >
    <div class="buttonWave"></div>
    <button id="button-body" class="chrome" tabindex="0">
      <i
        class="material-icons type1 for-closed active"
        style="color: rgb(255, 255, 255)"
      >
        <svg
          id="ic_bubble"
          fill="#FFFFFF"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
          ></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
      </i>
    </button>
  </div>
</template>

<script setup>
import RoomAPI from "@/api/RoomAPI";
import axios from "axios";
import { onMounted, ref } from "vue";
const messages = ref([]);
const newMessages = ref("");
const isOpen = ref(false);
const pageNumber = ref(1);
const pageSize = ref(9);
const keyword = ref("");
let listHotel = ref([]);
const canSend = ref(false);
const listMessageCanSend = ["hotel", "booking", "room", "book"];

onMounted(() => {
  getRoom();
});

const getRoom = async () => {
  const Data = await RoomAPI.filter(
    pageSize.value,
    pageNumber.value,
    keyword.value
  );
  listHotel.value = Data.data.data;
};

const sendMessage = async () => {
  if (newMessages.value.trim() != "") {
    const newMsg = {
      role: "user",
      content: newMessages.value,
    };
    messages.value.push(newMsg);
    listMessageCanSend.forEach((en) => {
      if (newMessages.value.indexOf(en) > 0) canSend.value = true;
    });

    if (canSend.value) {
      setTimeout(async () => {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",
            messages: messages.value,
            temperature: 0,
            max_tokens: 100,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer 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",
            },
          }
        );
        const messageChatbot = {
          role: "system",
          content: response.data.choices[0].message.content.replace(
            "<br/>",
            /\n/g
          ),
        };

        messages.value.push(messageChatbot);
      }, 200);
    } else {
      messages.value.push({
        role: "system",
        content:
          "Vui lòng nhập đúng chủ đề về đặt phòng khách sạn hoặc liên quan",
      });
    }

    newMessages.value = "";
  }
};

const showModelChat = () => {
  isOpen.value = !isOpen.value;
};

const closeModelChat = () => {
  isOpen.value = false;
};
</script>

<style lang="scss" scoped>
.frame-content {
  display: none;
  border: none;
  position: fixed;
  inset: auto 0px 0px auto;
  width: 450px;
  height: 647px;
  max-height: 100%;
  opacity: 1;
  color-scheme: none;
  background: none transparent !important;
  margin: 0px;
  max-width: 100vw;
  transform: translateY(0px);
  transition: none 0s ease 0s !important;
  visibility: visible;
  z-index: 999999999 !important;
}
#chat-button {
  position: fixed;
  width: 112px;
  bottom: 12px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1;
  right: 0px;
}

#chat-button:not(.sidebar) .buttonWave {
  position: absolute;
  z-index: -1;
  width: 60px;
  height: 60px;
}

#chat-button:not(.sidebar).clicked .buttonWave::after {
  animation: 0.5s ease-out 0s 1 normal none running buttonWave;
}

#chat-button:not(.sidebar) .buttonWave::after {
  content: "";
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #8f859e;
  opacity: 0.5;
}

#button-body {
  width: 60px;
  height: 60px;
  border-radius: 28px;
  display: inherit;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  pointer-events: initial;
  background-size: 130% 130%;
  transition: all 0.2s ease-in-out 0s;
  position: relative;
  color: #8f859e;
  border: 1px solid #8f859e;
}

#button-body::before {
  content: "";
  transition: opacity 0.5s ease-in-out 0s;
  position: absolute;
  inset: -1px;
  opacity: 0;
  border-radius: 50%;
  background-color: #8f859e;
}

#chat-button button i.for-closed.active {
  transform: translateX(0px);
}

#chat-button button i.for-closed {
  transform: translateX(-10px);
}

#chat-button button i.active {
  opacity: 1;
}

#chat-button button i {
  height: 26px;
  width: 26px;
  position: absolute;
  opacity: 0;
  transition: all 0.2s ease-in-out 0s;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  /* justify-content: center; */
}

i {
  user-select: none;
}

#chat-button button i.type1 svg {
  fill: currentcolor;
}

svg {
  width: 26px;
  height: 26px;
}

#chat-button button i.type1::after {
  content: "";
  position: absolute;
  width: 68px;
  height: 68px;
  border-radius: 32px;
  background: rgb(255, 255, 255);
  transition: all 0.2s ease-in-out 0s;
  transform: scale(0);
  right: -18px;
}

#chat-button button i.for-closed.active {
  transform: translateX(0px);
}

#chat-button button i.for-closed {
  transform: translateX(-10px);
}

#chat-button button i.type2 {
  width: 32px;
  height: 32px;
}

#button button i.type1.for-opened {
  width: 31px;
  height: 28px;
}

#chat-button button i.for-opened {
  transform: translateX(10px);
}

button,
button.material-icons {
  background: none;
  border: 0px;
  color: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0px;
  user-select: none;
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

#chat-button button i.type2 svg {
  width: 32px;
  height: 32px;
  fill: rgb(0, 125, 252);
  transform: scale(0);
}

svg:not(:root) {
  overflow-clip-margin: content-box;
  overflow: hidden;
}

#button-body {
  box-shadow: #8f859e 0px 4px 24px;
}

body:not(.mobile) #button button:not(.disabled):hover i.type1 svg,
body:not(.mobile) #button button:not(.disabled):focus i.type1 svg {
  transform: scale(1.4);
}

body:not(.mobile) #button button:not(.disabled):hover i.type1::after,
body:not(.mobile) #button button:not(.disabled):focus i.type1::after {
  transform: scale(1);
}

#chat-button button i.for-closed.active {
  transform: translateX(0px);
}

.chat.chrome,
.start-group.chrome {
  box-shadow: rgba(0, 18, 46, 0.16) 0px 8px 36px 0px;
}

.chat {
  max-height: calc(100% - 47px);
  display: flex;
  flex-direction: column;
}

.chat,
.start-group {
  width: 372px;
  position: fixed;
  bottom: 26px;
  border-radius: 16px;
  pointer-events: auto;
  overflow: hidden;
  z-index: 999;
  right: 48px;
  left: auto;
  background-color: white;
}

.message-operator.bots-quick-replies {
  width: 85%;
  background-color: rgb(255, 255, 255);
  margin-top: 0px;
  float: right;
}

.message-operator.bots-quick-replies .button-wrapper {
  margin-top: 0px;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: end;
  justify-content: flex-end;
  width: 100%;
  border: none;
}

.message-operator {
  color: rgb(6, 19, 43);
  background: rgb(240, 242, 247);
  float: left;
}

.message {
  padding: 10px 16px;
  border-radius: 20px;
  margin: 2px 0px;
  font-size: 15px;
  line-height: 20px;
  overflow-wrap: break-word;
  display: inline-block;
  max-width: 85%;
  clear: both;
  position: relative;
  transition: margin 0.28s ease-in-out 0s;
}

.input-group {
  padding: 0px 28px 6px;
  width: 100%;
  position: relative;
  background: rgb(255, 255, 255);
  z-index: 3;
  flex: 0 0 auto;
}
.input-group .footer-input-wrapper,
.input-group .footer-icons-wrapper {
  transition: all 0.5s ease-in-out 0s;
  opacity: 1;
  transform: translateY(0px);
}

input {
  border: 0px;
  width: 100%;
  font-size: 17px;
  margin: 20px 0px 14px;
  resize: none;
  line-height: 24px;
  overflow: hidden;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 0px;
  flex: 1 0 0;
}

.send-icon {
  width: 26px;
  height: 26px;
  line-height: 26px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 26px;
  flex: 0 0 26px;
  -webkit-backface-visibility: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
}

hr {
  margin: 0px;
  border-width: 0px 0px 1px;
  border-top-style: initial;
  border-right-style: initial;
  border-left-style: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-left-color: initial;
  border-image: initial;
  border-bottom-style: solid;
  border-bottom-color: rgb(219, 223, 230);
}

#conversation-group {
  padding: 0px 28px;
  width: 100%;
  height: 357px;
  overflow: hidden auto;
  background: rgb(255, 255, 255);
  transition: all 0.3s ease 0s;
  max-height: 357px;
  min-height: 160px;
  flex: 0 1 auto;
}
.message-operator.bots-quick-replies button {
  font-size: 15px;
  padding: 8px 16px;
  border: 1px solid;
  border-radius: 20px;
  margin: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: inherit;
}

.message-operator.message-with-buttons .button-wrapper,
.message-operator .message-with-buttons .button-wrapper,
.message-operator.bots-quick-replies .button-wrapper {
  background: rgb(255, 255, 255);
  width: 100%;
  margin-top: 10px;
  border-image: initial;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-style: initial;
  border-top-color: initial;
  position: relative;
}

#chat-button button i.for-opened.active {
  transform: translateX(0px);
}
.message-operator.bots-quick-replies .sent {
  font-size: 15px;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  margin: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: inherit;
}
.message-operator.message-with-buttons .sent,
.message-operator .message-with-buttons .sent,
.message-operator.bots-quick-replies .sent {
  margin: 0px auto;
  min-width: 100%;
  display: block;
  font-size: 16px;
  line-height: 19px;
  padding: 8px 16px;
  color: rgb(0, 125, 252);
  background: #f2f9ff;
  position: relative;
  z-index: 2;
  outline: none;
  border-radius: 20px;
  font-weight: normal;
}

.chat-header {
  padding: 0px 28px;
  background: linear-gradient(-61deg, rgb(0, 224, 216), rgb(32, 29, 142));
  position: relative;
  z-index: 4;
  flex: 0 0 auto;
  color: rgb(255, 255, 255);
  background: #8f859e;
}

.avatars-wrapper {
  width: 52px;
  height: 52px;
  margin: 0px 18px 0px 0px;
  float: left;
}

.chat h2.online {
  margin-top: 0px;
  line-height: 52px;
  min-height: 52px;
}

.chat h2 {
  font-size: 22px;
  font-weight: 600;
  color: currentcolor;
  margin: 4px 0px 0px;
  padding: 0px;
  display: inline-block;
  position: relative;
  max-width: calc(100% - 145px);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: bottom;
}

.chat h2 .emoji {
  width: 31px;
  height: 31px;
}

button.material-icons.exit-chat,
label.material-icons.exit-chat {
  margin-right: -3px;
}
button.material-icons.options,
button.material-icons.exit-chat,
label.material-icons.options,
label.material-icons.exit-chat {
  z-index: unset;
}

button.material-icons,
label.material-icons {
  position: relative;
  z-index: 1;
  margin: 15px 0px 8px 11px;
  float: right;
}
button.material-icons.options::before,
button.material-icons.exit-chat::before,
label.material-icons.options::before,
label.material-icons.exit-chat::before {
  background: rgba(0, 36, 92, 0.16);
}
button.material-icons::before,
label.material-icons::before {
  content: "";
  position: absolute;
  background: rgb(239, 242, 246);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: -1;
  transition: all 0.16s ease-in-out 0s;
  transform: scale(0);
  top: calc(50% - 20px);
  left: calc(50% - 20px);
}
button.material-icons svg#ic-minimize,
button.material-icons svg.options-icon,
label.material-icons svg#ic-minimize,
label.material-icons svg.options-icon {
  fill: currentcolor;
}
.tidio-1s5t5ku span {
  background: rgb(255, 255, 255);
  padding: 6px 8px;
  border-radius: 2px;
  box-shadow: rgba(0, 18, 46, 0.32) 0px 2px 8px 0px;
  font-size: 13px;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
  transition: all 0.16s ease-in-out 0s;
  z-index: 1;
  right: calc(100% + 10px);
  top: 50%;
  transform: translate(5px, -50%);
  color: rgb(6, 19, 43);
}

.input-group .footer-input-wrapper,
.input-group .footer-icons-wrapper {
  transition: all 0.5s ease-in-out 0s;
  opacity: 1;
  transform: translateY(0px);
}

.send-icon:hover svg path {
  fill: #8f859e;
}

.message-operator {
  color: rgb(6, 19, 43);
  background: rgb(240, 242, 247);
  float: left;
}
.message span.message-content {
  white-space: pre-line;
}
#chatContainer {
  transition: all 0.3s ease-in-out;
  right: -300px;
}

.onlyBubble {
  display: block;
  transition: all 0.3s ease-in-out;
}

.open {
  display: block;
  transition: all 0.3s ease-in-out;
}

#chatContainer.open {
  right: 0;
}

.footer-input-wrapper {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.clicked {
  display: none !important;
}

#button:not(.sidebar).clicked .buttonWave::after {
  animation: 0.5s ease-out 0s 1 normal none running buttonWave;
}
#button:not(.sidebar) .buttonWave::after {
  content: "";
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgb(20, 127, 255);
  opacity: 0.5;
}

.sentText {
  margin: 0px auto;
  min-width: 100%;
  display: block;
  font-size: 16px;
  line-height: 19px;
  padding: 8px 16px;
  color: rgb(0, 125, 252);
  background: #f2f9ff;
  position: relative;
  z-index: 2;
  outline: none;
  border-radius: 20px;
  font-weight: normal;
  margin: 10px;
}

.botText {
  color: rgb(6, 19, 43);
  background: rgb(240, 242, 247);
  padding: 10px 16px;
  border-radius: 20px;
  margin: 2px 0px;
  font-size: 15px;
  line-height: 20px;
  overflow-wrap: break-word;
  display: inline-block;
  max-width: 85%;
  clear: both;
  position: relative;
  transition: margin 0.28s ease-in-out 0s;
}

.svgsent svg path {
  fill: #1775ec;
}
.chat-closed .chrome {
  background: #8f859e;
  box-shadow: #8f859e 0px 4px 24px;
}
</style>
