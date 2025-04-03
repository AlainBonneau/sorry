<template>
  <div class="app-container">
    <!-- Thai flag background as full-screen background -->
    <div class="flag-background">
      <div class="flag-band red"></div>
      <div class="flag-band white"></div>
      <div class="flag-band blue"></div>
      <div class="flag-band white"></div>
      <div class="flag-band red"></div>
    </div>

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
      <div class="modal">
        <p>
          ฉันขอโทษจริงๆ สำหรับทุกอย่างที่ผ่านมา ตอนนั้นฉันไม่ค่อยโอเค
          แต่ตอนนี้ฉันดีขึ้นแล้ว และฉันคิดถึงคุณมาก
          ฉันอยากกลับไปช่วงเวลาที่เราเล่นเกมด้วยกันตอนกลางคืนบน Discord
          ฉันสัญญาว่าจะเป็นเพื่อนที่ดีกว่าเดิม
          ฉันเข้าใจถ้าคุณไม่อยากคุยกับฉันอีก
          และฉันขอโทษที่ทำให้ทุกอย่างต้องจบลงแบบนี้
          แม้ฉันจะคิดว่าคุณคงไม่กลับมาแล้ว แต่ประตูของฉันจะเปิดอยู่เสมอสำหรับคุณ
          ฉันหวังให้คุณมีแต่สิ่งดีๆ ในชีวิตนี้
          และฉันจะหายไปจากชีวิตคุณตามที่สัญญา
        </p>
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
  } else {
    alert("ฉันเข้าใจ และขอให้คุณโชคดีในทุกๆ อย่าง");
  }
}
</script>

<style scoped>
.app-container {
  height: 100vh;
  width: 100vw;
  background-image: url(../bg.jpg);
  overflow: hidden;
  position: relative;
  font-family: sans-serif;
  color: #333;
}

.flag-background {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 0;
}

.flag-band {
  flex: 1;
}

.red {
  background-color: #a51931;
}
.white {
  background-color: #ffffff;
}
.blue {
  background-color: #2d2a4a;
  flex: 2;
}

.content {
  position: relative;
  z-index: 10;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
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
  font-weight: bold;
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

.modal {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  line-height: 1.6;
  text-align: center;
}
</style>
