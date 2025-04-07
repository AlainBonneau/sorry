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
        ✉️ กดเพื่ออ่านข้อความของฉัน ✉️
      </button>

      <div class="question">
        <p>คุณสามารถส่งข้อความถึงฉันที่นี่หากคุณต้องการ</p>
        <textarea
          v-model="userMessage"
          placeholder="คุณสามารถเขียนข้อความถึงฉันตรงนี้ได้นะ..."
          class="user-message"
        />
        <div class="buttons">
          <button @click="prepareResponse('yes')">ใช่</button>
          <button @click="prepareResponse('no')">ไม่</button>
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
                ฉันเขียนข้อความนี้ด้วยใจที่สงบ แม้ว่าฉันจะไม่ได้นอนเลยทั้งคืน
                ตอนนี้เป็นเวลา 5 โมงเช้าที่ปารีส ฉันเคยมีความหวัง
                แต่ตอนนี้ฉันรู้แล้วว่าฉันเป็นเพียงคนบริสุทธิ์คนหนึ่ง
                ฉันควรจะรู้ตั้งนานแล้วว่าความเงียบของคุณ หมายถึง "ไม่"
                ขอโทษอีกครั้งจากใจ ฉันเป็นคนที่รู้สึกกับสิ่งต่าง ๆ ได้ลึกมาก
                ฉันเข้าใจว่าบางครั้งมันอาจดูมากเกินไปหรือทำให้รู้สึกไม่สบายใจ
                แต่นั่นไม่เคยเป็นความตั้งใจของฉันเลย
                ฉันไม่เคยอยากทำให้คุณรู้สึกกลัว หรือกดดัน รู้ไว้นะว่า
                ถ้าวันหนึ่งคุณอยากกลับมาคุยกับฉันอีก ฉันก็ยินดีที่จะรับฟังเสมอ
                (แม้จะอีก 3 เดือนก็ตาม) แต่ถ้าคุณไม่ต้องการกลับมาอีก ฉันก็เข้าใจ
                และจะเคารพการตัดสินใจของคุณ ขอบคุณจริง ๆ สำหรับทุกช่วงเวลาดี ๆ
                ที่เราเคยมีร่วมกัน 🙂
              </p>
              <p>
                ในใจลึก ๆ ฉันก็ยังหวังว่าสักวันหนึ่ง... คุณจะสามารถให้อภัยคนโง่
                ๆ อย่างฉันได้ เพื่อที่ฉันจะได้มีโอกาสแสดงให้คุณเห็น
                ว่าฉันเป็นใคร..จริง ๆ
              </p>
              <p>
                ฉันหวังว่าสักวันฉันจะสามารถพูดคุยกับคุณโดยปราศจากการตำหนิ
                เพียงแค่เพื่อทำความเข้าใจและสามารถพลิกหน้าต่อไปได้
                เพราะฉันไม่สามารถทำมันได้
              </p>
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
const confirmModal = ref(false);
const pendingAnswer = ref("");
const userMessage = ref(""); // Nouveau champ texte

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
      note: userMessage.value, // On envoie le contenu de la zone texte
    }),
  })
    .then(() => {
      if (pendingAnswer.value === "yes") {
        alert(
          "ได้รับการตอบกลับแล้ว ฉันจะติดต่อคุณอีกครั้ง (คุณสามารถปลดบล็อกฉันบนอินสตาได้ไหม) 🙂"
        );
      } else {
        alert("ฉันเข้าใจแล้ว ฉันจะไม่รบกวนคุณอีกแล้ว ขอบคุณสำหรับทุกอย่าง");
      }
      userMessage.value = ""; // Réinitialise le champ texte après envoi
    })
    .catch((err) => {
      alert("Oops, something went wrong 😢");
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
</style>
