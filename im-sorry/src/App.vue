<script>
import ChatWindows from "./components/ChatWindows.vue";
</script>

<template>
  <div class="app-container">
    <!-- Thai flag background -->
    <div class="flag-stripe red"></div>
    <div class="flag-stripe white"></div>
    <div class="flag-stripe blue"></div>
    <div class="flag-stripe white"></div>
    <div class="flag-stripe red"></div>

    <!-- Content on top of the flag -->
    <div class="content">
      <!-- envelope without heart -->
      <button @click="showModal = true" class="open-modal">
        ✉️ อ่านข้อความ(มีการแก้ไขแล้ว) ✉️
      </button>
      <button @click="showChatModal = true" class="open-chat">
        💬 แชทส่วนตัว 💬
      </button>

      <!-- Question oui/non -->
      <div class="question">
        <p>
          เราจะกลับมาเป็นเพื่อนกันอีกครั้งไหม? ฉันควรจะรอคุณต่อไปมั้ย?
          ฉันยังสำคัญอยู่มั้ย?
        </p>
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

    <!-- Message Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="envelope animate-pop">
        <div class="letter">
          <div class="letter-background">
            <div class="letter-text">
              <p>
                สวัสดีมินนี่ หวังว่าคุณสบายดี
                ฉันเขียนถึงคุณเพราะฉันสังเกตเห็นว่าคุณบล็อกฉันจากวิดีโอ
                Instagram ของคุณ... และจริงๆ แล้ว ฉันไม่เข้าใจเลยว่าทำไม
                สำหรับฉัน มันเหมือนกับการถูกโจมตีครั้งใหม่เข้าที่หัวใจ มันเจ็บ.
                คุณบอกฉันในข้อความล่าสุดว่าให้หยุดคิดถึงคุณเพราะมันทำให้ฉันทรมาน...
                แต่สถานการณ์นี้เองที่ทำให้ฉันเจ็บปวด ฉันคิดถึงคุณตลอดเวลา.
                และฉันมีความต้องการที่จะคุยกับคุณ เพื่อชี้แจงเรื่องต่างๆ
                และเพื่อแบ่งเบาภาระที่ฉันแบกอยู่ทุกวัน
                คำพูดของคุณทำให้ฉันสบายใจเมื่อครั้งที่แล้ว
                แต่การกระทำของคุณทำให้ฉันเจ็บปวดโดยที่ฉันไม่เข้าใจว่าทำไม
                คุณต้องใช้เวลาสักพักก่อนจะคุยกับฉันได้ ฉันเคารพเรื่องนั้น
                แต่สำหรับฉัน ฉันก็ต้องคุยกับคุณด้วย
                คุณก็สามารถเคารพสิ่งนั้นได้เช่นกันไหม?
                แค่บอกฉันว่าเราจะคุยกันได้เมื่อไหร่
                เพราะระหว่างนั้นฉันก็รู้สึกเหมือนตัวเองไม่มีใครเห็น
                เหมือนว่าฉันเป็นเพียงปัญหาในชีวิตของคุณ
                ฉันสงสัยว่าเป็นเพราะฉันหรือเปล่าที่คุณตั้งค่าบัญชีของคุณเป็นส่วนตัว
                ถ้าอยากให้ฉันหายไปก็บอกฉันตรงๆเลย ฉันไม่โทษคุณ
                ฉันไม่ได้เขียนถึงคุณด้วยความโกรธ แต่เพียงด้วยความเศร้า
                ฉันหวังว่าคุณคงจะเข้าใจสิ่งที่ฉันรู้สึก...และสักวันหนึ่งจะหาความกล้าที่จะพูดคุยกับฉันอีกครั้งอย่างใจเย็นเหมือนผู้ใหญ่สองคน
                ฉันไม่ได้ใจร้าย ฉันอาจทำปฏิกิริยาไม่ดีครั้งหนึ่ง ใช่
                แต่ฉันก็รู้สึกเสียใจ และฉันจะไม่ทำผิดพลาดซ้ำสอง ฉันใส่ใจคุณมาก
                ฉันแค่อยากได้มิตรภาพนั้นกลับคืนมา ฉันอยากหยุดความทุกข์
                และฉันต้องการให้คุณรู้เป็นพิเศษว่าฉันไม่ใช่ศัตรูของคุณ ไม่เคย.
                ฉันรู้ว่าฉันกำลังกดดันฉัน และฉันขอโทษ แต่มันแข็งแกร่งกว่าฉัน
                ฉันต้องการคุยกับคุณจริงๆ
              </p>
              <p>
                ฉันแสดงข้อความของคุณให้ญาติๆ ของฉันดู
                พวกเขาบอกว่าคุณเปิดประตูให้ฉันด้วยคำพูดของคุณ
                แต่คุณกลับปิดประตูด้วยการกระทำของคุณ ฉันหลงทาง
              </p>
              <p>ขอโทษที่รบกวนคุณด้วยข้อความอีกครั้ง โปรดอย่าโกรธฉันเลย</p>
              <p>
                ฉันได้เพิ่มระบบแชทสดลงในเว็บไซต์ของฉันแล้ว
                โปรดใช้ตามต้องการหากต้องการ
                (อยู่ทางขวาของปุ่มที่คุณคลิกเพื่อดูข้อความนี้) อย่าลืมว่าฉันใช้
                Google แปล และบางประโยคอาจดูแปลกหรือแปลไม่ถูกบริบท
              </p>
              <p>ฉันหวังว่าคุณจะไม่ลืมฉันเมื่อเวลาผ่านไป 😔</p>
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
      message: pendingAnswer.value,
    }),
  })
    .then(() => {
      if (pendingAnswer.value === "yes") {
        alert("ขอบคุณสำหรับคำตอบของคุณ 🙂");
      } else {
        alert("เข้าใจแล้ว ขอบคุณที่ตอบนะครับ");
      }
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

.modal-overlay:before {
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
}

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
