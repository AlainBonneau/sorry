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
        placeholder="แชทสดเปิดกว้าง ไม่มีข้อแก้ตัว ไม่มีเหตุผล มีเพียงความจริงเท่านั้น"
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
  width: 100%;
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
  flex-shrink: 0;
  font-size: 1.2rem;
}

.chat-messages {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background: #f9f9f9;
  min-height: 0; /* crucial pour scrollable dans flex */
  display: flex;
  flex-direction: column;
}

.message {
  margin-bottom: 1rem;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  max-width: 80%;
  word-wrap: break-word;
  font-size: 0.95rem;
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
  padding: 0.75rem;
  border-top: 1px solid #ccc;
  flex-shrink: 0;
  background: #fff;
}

.input {
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
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
  font-size: 1rem;
}

@media screen and (max-width: 480px) {
  .chat-container {
    border: none;
    height: 100vh;
  }

  .chat-header {
    font-size: 1rem;
    padding: 0.8rem;
  }

  .message {
    font-size: 0.85rem;
    padding: 0.5rem 0.8rem;
  }

  .input {
    font-size: 0.9rem;
    padding: 0.4rem;
  }

  .send-button {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
