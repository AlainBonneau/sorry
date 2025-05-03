<template>
  <div class="app-container">
    <!-- Thai flag stripes -->
    <div class="flag-stripe red"></div>
    <div class="flag-stripe white"></div>
    <div class="flag-stripe blue"></div>
    <div class="flag-stripe white"></div>
    <div class="flag-stripe red para-container">
      <p>Yep, thats me</p>
    </div>

    <!-- Contenu principal centré -->
    <div class="content">
      <h1 class="underline-text">เกี่ยวกับ</h1>
      <button @click="showEnglish = true" class="open-modal">
        ดูข้อความ (ภาษาอังกฤษ)
      </button>
      <button
        @click="showThai = true"
        class="open-modal"
        style="margin-left: 1rem"
      >
        ดูข้อความ (ภาษาไทย)
      </button>
      <router-link to="/" class="open-modal" style="margin-left: 1rem">
        ← กลับไปยังหน้าแรกของเว็บไซต์
      </router-link>
    </div>

    <!-- English Modal -->
    <div
      v-if="showEnglish"
      class="modal-overlay"
      @click.self="showEnglish = false"
    >
      <div class="modal-box animate-pop">
        <div class="modal-content">
          <p>
            I know you visit the site sometimes; I see it in the statistics. I
            don't know how to interpret it: is it curiosity, pity, or maybe a
            mixture of all of these? Every time I refresh the page, I hope to
            see something new, a sign that you were really there, that it wasn't
            just a coincidence.
          </p>
          <p>
            Sometimes I find myself wondering if you think of me silently. Do
            you also wonder how I'm doing? Or do you prefer to keep your
            distance, afraid I'll hurt you again?
          </p>
          <p>
            As soon as night falls, I wonder if the thought of me haunts your
            mind for a moment, if you ask yourself the same questions I do: do I
            scare you, do I sadden you, do you regret ever knowing me?
          </p>
          <p>
            Perhaps one day our paths will cross again, and we'll be able to
            talk without fear, without regret. In the meantime, I stay here,
            hoping that, somewhere, you continue to think of me, as I think of
            you.
          </p>
          <button class="close-modal" @click="showEnglish = false">
            Fermer
          </button>
        </div>
      </div>
    </div>

    <!-- Thai Modal -->
    <div v-if="showThai" class="modal-overlay" @click.self="showThai = false">
      <div class="modal-box animate-pop">
        <div class="modal-content">
          <p>
            ฉันรู้ว่าคุณเข้ามาที่ไซต์บางครั้ง ฉันเห็นมันในสถิติ
            ฉันไม่รู้ว่าจะตีความสิ่งนี้อย่างไร นี่คือความอยากรู้ ความสงสาร
            หรือบางทีอาจเป็นส่วนผสมของหลายๆ อย่าง? ทุกครั้งที่ฉันรีเฟรชหน้า
            ฉันหวังว่าจะเห็นบางสิ่งใหม่ๆ ซึ่งเป็นสัญญาณว่าคุณอยู่ที่นั่นจริงๆ
            และนี่ไม่ใช่แค่เรื่องบังเอิญ
          </p>
          <p>
            บางครั้งฉันก็พบว่าตัวเองสงสัยว่าคุณกำลังคิดถึงฉันเงียบๆ อยู่หรือไม่
            คุณสงสัยไหมว่าฉันเป็นยังไงบ้าง?
            หรือว่าคุณชอบที่จะรักษาระยะห่างไว้เพราะกลัวว่าฉันจะทำร้ายคุณอีก?
            พอตกเย็น ฉันสงสัยว่าความคิดถึงฉันจะยังวนเวียนอยู่ในใจคุณบ้างไหม
            ถ้าคุณถามตัวเองด้วยคำถามเดียวกันกับฉันว่า ฉันทำให้คุณกลัว
            ฉันทำให้คุณเสียใจไหม คุณเสียใจที่รู้จักฉันไหม
          </p>
          <p>
            บางทีวันหนึ่งเราอาจได้พบกันอีกครั้ง
            และเราจะสามารถพูดคุยกันได้โดยไม่กลัวและไม่เสียใจ
            ในระหว่างนี้ฉันอยู่ที่นี่ หวังว่าที่ไหนสักแห่ง คุณจะยังคงคิดถึงฉัน
            เหมือนที่ฉันคิดถึงคุณ
          </p>
          <button class="close-modal" @click="showThai = false">ปิด</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showEnglish = ref(false);
const showThai = ref(false);
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
.underline-text {
  text-decoration: underline;
  text-decoration-color: white;
  text-decoration-thickness: 1.5px;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #a51931;
}
.about-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
}
.open-modal {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background: #a51931;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
}
.open-modal:hover {
  background-color: #c72745;
  transform: scale(1.05);
  transition: transform 0.2s ease;
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
.modal-box {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}
.modal-content {
  max-height: 70vh;
  overflow-y: auto;
  text-align: left;
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
.animate-pop {
  animation: popIn 0.3s ease;
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
