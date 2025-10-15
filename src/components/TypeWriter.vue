
<template>
  <p class="typewriter" v-html="displayedText"></p>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  speed: { type: Number, default: 40 }
})

const displayedText = ref('')

const typeWriter = async () => {
  displayedText.value = ''
  for (let i = 0; i < props.text.length; i++) {
    displayedText.value += props.text[i]
    await new Promise(r => setTimeout(r, props.speed))
  }
}

onMounted(typeWriter)
watch(() => props.text, typeWriter)
</script>

<style scoped>
.typewriter {
  color: #ccc; /* mesma cor do seu card-text */
  font-size: 0.95rem;
  line-height: 1.5;
  white-space: pre-wrap;
  overflow: hidden;
  border-right: 2px solid #00CFFF; /* azul neon */
  animation: blink 0.8s infinite; /* piscar cursor */
  text-shadow: 0 0 10px #00CFFF; /* efeito neon */
}

@keyframes blink {
  0%, 50% { border-color: #00CFFF; }
  51%, 100% { border-color: transparent; }
}
</style>
