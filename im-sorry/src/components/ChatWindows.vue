<template>
  <div class="chat-container">
    <div class="chat-header">แชทส่วนตัว</div>
    <div class="chat-messages">
      <div
        v-for="msg in messages"
        :key="msg._id"
        :class="{
          'message-me': msg.from === 'me',
          'message-her': msg.from === 'her',
        }"
        class="message"
      >
        <p>{{ msg.message }}</p>
        <span class="timestamp">{{ formatTimestamp(msg.timestamp) }}</span>
      </div>
    </div>
    <form @submit.prevent="sendMessage" class="chat-input">
      <input
        v-model="newMessage"
        type="text"
        placeholder="พิมพ์ข้อความ..."
        class="input"
      />
      <button type="submit" class="send-button">ส่ง</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io("https://chat.sparcky-dev.fr");

const messages = ref([]);
const newMessage = ref("");
const user = "me"; // changer selon qui parle

const fetchMessages = async () => {
  const res = await axios.get("https://chat.sparcky-dev.fr/chat");
  messages.value = res.data;
};

const sendMessage = () => {
  if (!newMessage.value.trim()) return;
  const messageData = {
    from: user,
    message: newMessage.value,
  };
  socket.emit("chat message", messageData);
  newMessage.value = "";
};

const formatTimestamp = (ts) => {
  return new Date(ts).toLocaleTimeString();
};

onMounted(() => {
  fetchMessages();
  socket.on("chat message", (msg) => {
    messages.value.push(msg);
  });
});
</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
  border: 1px solid #ccc;
  overflow: hidden;
}

.chat-header {
  padding: 1rem;
  background-color: #a51931;
  color: white;
  font-weight: bold;
  text-align: center;
}

.chat-messages {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background: #f9f9f9;
  min-height: 0;
}

.message {
  margin-bottom: 1rem;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  max-width: 70%;
  word-wrap: break-word;
}

.message-me {
  background-color: #d1e7dd;
  align-self: flex-end;
}

.message-her {
  background-color: #f8d7da;
  align-self: flex-start;
}

.timestamp {
  font-size: 0.7rem;
  color: #666;
  margin-top: 0.3rem;
  display: block;
}

.chat-input {
  display: flex;
  padding: 1rem;
  border-top: 1px solid #ccc;
}

.input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-right: 0.5rem;
}

.send-button {
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
