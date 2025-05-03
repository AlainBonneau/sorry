<script>
import ChatWindows from "../components/ChatWindows.vue";
import MarkdownViewer from "../components/MarkdownViewer.vue";
import MinnieMessage from "../components/MinnieMessage.vue";
</script>

<template>
  <div class="app-container">
    <!-- Thai flag background -->
    <div class="flag-stripe red"></div>
    <div class="flag-stripe white"></div>
    <div class="flag-stripe blue"></div>
    <div class="flag-stripe white"></div>
    <div class="flag-stripe red para-container">
      <p>I still care 🥲</p>
    </div>

    <!-- Content on top of the flag -->
    <div class="content">
      <!-- envelope without heart -->
      <button @click="showModal = true" class="open-modal">
        ✉️ อ่านข้อความ(ข้อความสุดท้าย) ✉️
      </button>

      <!-- <button @click="showMarkdownModal = true" class="open-markdown">
        📄 การสนทนากับเพื่อนที่ดีที่สุดของฉัน 📄
      </button> -->

      <button @click="showImageModal = true" class="open-image">
        🖼️ ภาพ 🖼️
      </button>

      <!-- <button @click="showMinnieModal = true" class="open-markdown">
        📝 English text 📝
      </button> -->

      <button @click="showChatModal = true" class="open-chat">
        💬 แชทส่วนตัว 💬
      </button>

      <div
        v-if="showMinnieModal"
        class="modal-overlay"
        @click.self="showMinnieModal = false"
      >
        <div class="envelope animate-pop">
          <div class="letter">
            <div class="">
              <MinnieMessage />
              <button class="close-modal" @click="showMinnieModal = false">
                ปิด
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Question oui/non -->
      <div class="question">
        <p>วันหนึ่งคุณจะกลับมาไหม? ฉันจะเคารพการเลือกของคุณถ้าคุณปฏิเสธ 😌</p>

        <!-- New textarea for her message -->
        <textarea
          v-model="userMessage"
          class="user-message"
          placeholder="อยากพูดอะไรก็พิมพ์ตรงนี้ได้นะ..."
        ></textarea>

        <div class="buttons">
          <button @click="prepareResponse('yes')">ใช่</button>
          <button @click="prepareResponse('no')">ไม่</button>
        </div>
      </div>

      <div
        v-if="showChatModal"
        class="chat-modal-overlay"
        @click.self="showChatModal = false"
      >
        <div class="chat-modal-box animate-pop">
          <ChatWindows />
          <button @click="showChatModal = false" class="close-chat">
            ปิดแชท
          </button>
        </div>
      </div>
    </div>

    <!-- Image Modal -->
    <div
      v-if="showImageModal"
      class="modal-overlay"
      @click.self="showImageModal = false"
    >
      <div class="image-modal-box animate-pop">
        <img src="/msg.png" alt="Image" class="image-modal-content" />
        <button class="close-image" @click="showImageModal = false">
          ปิดภาพ
        </button>
      </div>
    </div>

    <!-- Markdown Modal -->
    <!-- <div
      v-if="showMarkdownModal"
      class="modal-overlay"
      @click.self="showMarkdownModal = false"
    >
      <div class="markdown-modal-box animate-pop">
        <MarkdownViewer />
        <button @click="showMarkdownModal = false" class="close-markdown">
          ปิดบทสนทนา
        </button>
      </div>
    </div> -->

    <!-- Message Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="envelope animate-pop">
        <div class="letter">
          <div class="letter-background">
            <div class="letter-text">
              <p>
                I think after everything I’ve done to you, you deserve to know
                the truth about me.
              </p>
              <p>
                I’m someone who’s always been quite solitary. I studied for a
                long time, 7 years, but throughout that time, I didn’t really
                have anyone to talk to. That was a choice I made for myself.
                Often, I feel like I don’t belong in this world. I’m not sure
                how to explain it. It’s just that what I’m searching for in
                life… I haven’t been able to find it. I’m surrounded by a lot of
                fake people. And when someone asks me if I’m okay, I smile and
                say “yes.” A fake smile, but no one ever notices. I told you
                before, I feel emotions too strongly. It’s how I was born.
              </p>
              <p>
                When I first started talking to you, you barely replied. So I
                put you in the same category as everyone else who didn’t care
                about me, and I blocked you on Discord, forgetting to block you
                on Instagram. At that moment, I thought we’d never talk again.
              </p>
              <p>
                But then you did something very few people would do. You reached
                out. And it touched me deeply. You ended up saying you didn’t
                want to lose me. Those words… I don’t hear them often. So yes, I
                started to believe that maybe I had found someone who could
                understand me. And then I made the mistake of putting enormous
                pressure on you. I imagine, from your side, that pressure must
                have felt overwhelming, and I completely understand.
              </p>
              <p>
                Since I often gave my emotions to the wrong people, I just
                decided to close myself off and stop giving them. You were just
                there, at a time when it had been several years since I had
                opened up to someone. That's why I gave so much, way too much I
                know. Forgive me, it's just that I felt a lot of sincerity in
                the way you spoke and that's not something I'm used to here in
                France.
              </p>
              <p>
                I just want you to know: I’m not a bad person. And I truly,
                sincerely apologize for the pain I caused you. I acted horribly
                toward you, and I feel terribly guilty for it. I hurt you so
                much that you couldn’t even speak when you were in front of me.
                I often think about you… and I’m filled with regret. I wish I
                could go back in time and start everything over. But of course,
                I can’t.
              </p>
              <p>
                So this is who I am: Harry. A 27-year-old French man living in
                Paris. With one close friend (sorry again, Yuriko) and only my
                mother by my side. A man who doesn’t really understand the world
                around him. A sensitive man — something that isn’t very accepted
                in our society. A man who sometimes wonders what life is really
                for.
              </p>
              <p>
                I wanted you to know who I am and why I acted the way I did. I’m
                not asking you to forgive me. I know that’s impossible, and
                probably better for you. But I just wanted you to know the
                reasons behind everything I did. With honesty and deep regret,
              </p>
              <p>
                You are a very beautiful person, I'm sorry you came across my
                path.
              </p>
              <p>a fool named Harry 🙄</p>
              <div class="close-modal" @click.self="showModal = false">ปิด</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Simple Confirmation Modal -->
    <div v-if="confirmModal" class="simple-modal">
      <div class="simple-modal-box animate-pop">
        <p style="margin-bottom: 1rem">คุณแน่ใจหรือไม่?</p>
        <div class="buttons">
          <button @click="confirmResponse">ยืนยัน</button>
          <button @click="confirmModal = false">ยกเลิก</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
const showChatModal = ref(false);
const confirmModal = ref(false);
const pendingAnswer = ref("");
const showImageModal = ref(false);
const showMarkdownModal = ref(false);
const showMinnieModal = ref(false);
const userMessage = ref("");

function prepareResponse(answer) {
  pendingAnswer.value = answer;
  confirmModal.value = true;
}

function confirmResponse() {
  confirmModal.value = false;

  fetch("https://formspree.io/f/xdkewgjp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: pendingAnswer.value,
      message: userMessage.value,
    }),
  })
    .then(() => {
      if (pendingAnswer.value === "yes") {
        alert("ขอบคุณสำหรับคำตอบของคุณ 🙂");
      } else {
        alert("เข้าใจแล้ว ขอบคุณที่ตอบนะครับ");
      }
      userMessage.value = "";
    })
    .catch((err) => {
      alert("เกิดข้อผิดพลาดในการส่ง 😢");
      console.error(err);
    });
}
</script>

<style scoped>
.app-container {
  height: 100vh;
  overflow: hidden;
  font-family: sans-serif;
  color: #333;
  position: relative;
}

.flag-stripe {
  height: 20vh;
  width: 100%;
}

.red {
  background-color: #a51931;
}
.white {
  background-color: #ffffff;
}
.blue {
  background-color: #2d2a4a;
}

.para-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.para-container > p {
  font-size: 1rem;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 0 1rem;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
}

.open-modal {
  margin-bottom: 2rem;
  padding: 0.6rem 1.2rem;
  background: #a51931;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1rem;
}

.close-modal {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #a51931;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.question p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #fff;
}

.user-message {
  width: 100%;
  max-width: 400px;
  height: 100px;
  padding: 0.6rem;
  font-size: 1rem;
  border-radius: 6px;
  border: none;
  resize: none;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.underline-text {
  text-decoration: underline;
  text-decoration-color: #a51931;
  text-decoration-thickness: 1.5px;
}

.buttons button {
  margin: 0 0.5rem;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #a51931;
  color: white;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.buttons button:hover {
  background-color: #c72745;
  transform: scale(1.05);
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}

/* .modal-overlay:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("../bg.jpg");
  background-size: cover;
  background-position: center;
  filter: blur(5px);
} */

.envelope {
  background: white;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  overflow: hidden;
}

.letter {
  position: relative;
  padding: 0;
}

.letter-background {
  background-image: url("../modal-bg.png");
  background-size: cover;
  background-position: center;
  padding: 2rem;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.letter-text {
  background-color: rgba(255, 255, 255, 0.85);
  padding: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  max-height: 80vh;
  overflow-y: auto;
}

/* Simple modal confirmation */
.simple-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
}

.simple-modal-box {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

/* Animations */
@keyframes popIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-pop {
  animation: popIn 0.3s ease;
}

.open-chat {
  margin-top: 1rem;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background: #a51931;
  color: #fff;
  border: 2px solid #a51931;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.chat-modal-box {
  background: white;
  border-radius: 12px;
  max-width: 650px;
  width: 95%;
  height: 90vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;
}

.chat-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30; /* supérieur à l'autre */
}

.close-chat {
  margin: 0.5rem auto;
  background-color: #a51931;
  color: white;
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* Nouveau bouton image */
.open-image {
  margin-top: 1rem;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background: #a51931;
  color: #fff;
  border: 2px solid #a51931;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* Modale image */
.image-modal-box {
  background: white;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  max-width: 650px;
  width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.image-modal-content {
  max-width: 100%;
  border-radius: 10px;
}

.close-image {
  margin-top: 1rem;
  padding: 0.4rem 1rem;
  background-color: #2d2a4a;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.open-markdown {
  margin-top: 1rem;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background: #a51931;
  color: #fff;
  border: 2px solid #a51931;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.markdown-modal-box {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  max-width: 700px;
  width: 90%;
  max-height: 85vh;
  overflow-y: auto;
  text-align: left;
  font-family: "Segoe UI", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.close-markdown {
  margin-top: 1rem;
  background: #2d2a4a;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .chat-modal-box {
    width: 95%;
    height: 95vh;
    border-radius: 10px;
  }

  .chat-container {
    height: 100%;
    max-height: 100%;
    border-radius: 0;
  }

  .letter-text {
    font-size: 0.95rem;
    padding: 0.6rem;
  }

  .user-message {
    height: 80px;
  }

  .open-modal,
  .open-chat {
    width: 90%;
    margin: 0.5rem auto;
  }
}
</style>
