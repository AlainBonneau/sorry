<template>
  <div class="markdown-container" v-html="renderedContent" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { marked } from "marked";

const renderedContent = ref("");

onMounted(async () => {
  const response = await fetch("/minnie.md");
  const raw = await response.text();
  renderedContent.value = marked.parse(raw);
});
</script>

<style scoped>
.markdown-container {
  padding: 1rem;
  line-height: 1.6;
  text-align: left;
  max-height: 70vh;
  overflow-y: auto;
}
</style>
