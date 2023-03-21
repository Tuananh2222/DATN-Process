<template>
  <div>
    <ChatWidget
      :title="title"
      :messages="messages"
      :sendText="sendText"
      :placeholder="placeholder"
      :onMessage="handleMessage"
    />
  </div>
</template>

<script setup>
import ChatWidget from "vue-chat-widget";
import dialogflow from "@google-cloud/dialogflow";
import { createBotpress } from "botpress";
import { ref } from "vue";
const messages = ref([]);
const title = ref("ChatBot");
const sendText = ref("Send");
const placeholder = ref("Type your message...");

onMounted(async () => {
  bot = await createBotpress();
});

const sendMessage = async () => {
  const response = await this.bot.sendText(inputMessage);
  messages.push(response);
  inputMessage = "";
};
</script>

<style lang="scss" scoped></style>
