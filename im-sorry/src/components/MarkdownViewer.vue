<script setup>
import { ref, onMounted } from "vue";
import { marked } from "marked";

const markdown = ref("");

onMounted(async () => {
  const res = await fetch("/msg.md"); // <-- ton fichier dans public/
  const text = await res.text();
  markdown.value = marked(text);
});
</script>

<template>
  <div class="markdown-container" v-html="markdown"></div>
</template>

<style scoped>
.markdown-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  line-height: 1.6;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: "Segoe UI", sans-serif;
  font-size: 1rem;
  color: #333;
}

.markdown-container h1 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.3rem;
}

.markdown-container h2 {
  font-size: 1.4rem;
  margin-top: 1.5rem;
}

.markdown-container p {
  margin-bottom: 1rem;
}

.markdown-container strong {
  font-weight: bold;
}

.markdown-container em {
  font-style: italic;
}
</style>
