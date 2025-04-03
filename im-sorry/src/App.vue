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
      <button @click="showModal = true" class="open-modal">
        กดเพื่ออ่านข้อความของฉัน
      </button>

      <div class="question">
        <p>คุณยังอยากคุยกับฉันอยู่ไหม ?</p>
        <div class="buttons">
          <button @click="response('yes')">ใช่</button>
          <button @click="response('no')">ไม่</button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="envelope">
        <div class="letter">
          <div class="letter-background">
            <div class="letter-text">
              <p>
                ฉันอยากบอกว่าฉันขอโทษจริงๆ สำหรับทุกอย่างที่ผ่านมา
                ตอนนั้นฉันไม่ค่อยโอเค แต่ตอนนี้ฉันดีขึ้นแล้ว และฉันคิดถึงคุณมาก
                ฉันสร้างเว็บไซต์นี้ขึ้นมา เพราะมันเป็นวิธีของฉันในการบอกว่า
                "ฉันเสียใจ" ฉันยังคิดถึงช่วงเวลาที่เราเล่นเกมด้วยกันตอนกลางคืนบน
                Discord อยู่เสมอ ถ้าฉันมีโอกาสอีกครั้ง
                ฉันสัญญาว่าจะเป็นเพื่อนที่ดีกว่าเดิม
                ฉันเข้าใจดีถ้าคุณไม่อยากคุยกับฉันอีก
                และฉันขอโทษที่ทำให้ทุกอย่างต้องจบลงแบบนี้
                ถึงแม้ฉันจะไม่หวังว่าคุณจะกลับมา แต่สำหรับคุณ...
                ประตูของฉันจะเปิดอยู่เสมอ ฉันหวังให้คุณมีแต่สิ่งดีๆ ในชีวิต
                และถ้าคุณต้องการให้ฉันหายไปจากชีวิต ฉันจะทำตามนั้น
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);

function response(answer) {
  if (answer === "yes") {
    alert("ขอบคุณที่ให้โอกาสฉันอีกครั้ง 🙂");
    window.open("https://www.instagram.com/alaindev97/", "_blank");
  } else {
    alert("Tām thī̀ s̄ạỵỵā wị̂ c̄hạn ca mị̀ rbkwn khuṇ xīk t̀x pị c̄hạn mị̀ thos̄ʹ khuṇ ley 🙂");
  }
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
}

.question p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #fff;
}

.buttons button {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #a51931;
  color: white;
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

.envelope {
  background: white;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  overflow: hidden;
  animation: popIn 0.4s ease;
}

.letter {
  position: relative;
  padding: 0;
}

.letter-background {
  background-image: url("../bg.jpg");
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
}

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
</style>
