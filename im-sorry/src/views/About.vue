<template>
  <div class="app-container">
    <!-- Thai flag stripes -->
    <div class="flag-stripe red"></div>
    <div class="flag-stripe white"></div>
    <div class="flag-stripe blue"></div>
    <div class="flag-stripe white"></div>
    <div class="flag-stripe red para-container">
      <p>À propos de Minnie</p>
    </div>

    <!-- Contenu principal centré -->
    <div class="content">
      <h1 class="underline-text">À propos</h1>
      <p class="about-text">
        Bienvenue sur la page À propos !<br />
        Ici, vous trouverez des informations sur notre application, notre équipe
        et notre mission.
      </p>
      <p class="about-text">
        <strong>Notre mission :</strong> Offrir une expérience utilisateur
        immersive et bienveillante.<br />
        <strong>Notre équipe :</strong> Alice (Front), Bob (Back), Charlie
        (Design).
      </p>
      <router-link to="/" class="open-modal">← Retour à l'accueil</router-link>
    </div>
  </div>
</template>

<script setup>
// Pas de logique spécifique
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
  text-decoration-color: #a51931;
  text-decoration-thickness: 1.5px;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.about-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
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
</style>
