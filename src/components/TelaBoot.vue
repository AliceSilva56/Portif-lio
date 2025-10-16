<template>
  <transition name="fade">
    <div v-if="show" class="loading-screen">
      <!-- ==== Tela inicial ==== -->
      <div v-if="!iniciou" class="start-screen">
        <h1 class="title">🌌 Portfólio de <span>Alice Pinheiro da Silva</span></h1>
        <button class="start-btn" @click="iniciarAnimacao">▶ Iniciar</button>
      </div>

      <!-- ==== Carregamento / Partículas ==== -->
      <div v-else-if="!bootTerminalConcluido" class="loading-content">
        <div id="particles-bg"></div>
        <h1 class="glow-text">
          Portfólio de <span>Alice Pinheiro da Silva</span>
        </h1>
        <p class="sub">{{ subtitle }}</p>
        <div class="loading-bar">
          <div class="progress" :style="{ width: progress + '%' }"></div>
        </div>
      </div>

      <!-- ==== Sequência Terminal IA ==== -->
      <div v-else class="terminal-screen">
        <pre>{{ terminalText }}</pre>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'
import soundFile from '@/assets/sounds/robotic.mp3'

const show = ref(true)
const iniciou = ref(false)
const progress = ref(0)
const subtitle = ref('Preparando sequência criativa...')
let audioCtx = null
let buffer = null
let source = null
let gainNode = null

// Terminal IA
const bootTerminalConcluido = ref(false)
const terminalText = ref('')
const terminalLines = [
  "Initializing Cyber Portfólio...",
  "Loading modules...",
  "Connecting neural network...",
  "AI assistant online.",
  "Welcome, Alice."
]
let lineIndex = 0

async function iniciarAnimacao() {
  iniciou.value = true
  createParticles()
  tocarSom()

  const frases = [
    'Iniciando sequência criativa...',
    'Carregando ideias brilhantes...',
    'Conectando ao fluxo imaginativo...',
    'Liberando energia neural...'
  ]

  const fraseInterval = setInterval(() => {
    subtitle.value = frases[Math.floor(Math.random() * frases.length)]
  }, 800)

  const progressInterval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 5
    } else {
      clearInterval(progressInterval)
      clearInterval(fraseInterval)
      iniciarTerminal()
    }
  }, 100)
}

// ==== Som do boot ====
async function tocarSom() {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    const response = await fetch(soundFile)
    const arrayBuffer = await response.arrayBuffer()
    buffer = await audioCtx.decodeAudioData(arrayBuffer)

    gainNode = audioCtx.createGain()
    gainNode.gain.value = 0.8

    source = audioCtx.createBufferSource()
    source.buffer = buffer
    source.connect(gainNode)
    gainNode.connect(audioCtx.destination)
    source.start(0)

    setTimeout(() => pararSomSuave(), 2900)
  } catch (err) {
    console.error('Erro ao tocar som:', err)
  }
}

function pararSomSuave() {
  if (!gainNode || !audioCtx) return
  const fadeTime = 0.6
  gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + fadeTime)
  setTimeout(() => {
    source?.stop(0)
    audioCtx?.close()
  }, fadeTime * 1000)
}

// ==== Partículas ====
function createParticles() {
  const container = document.getElementById('particles-bg')
  if (!container) return
  container.innerHTML = ''
  for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div')
    particle.classList.add('particle')
    particle.style.left = `${Math.random() * 100}%`
    particle.style.top = `${Math.random() * 100}%`
    particle.style.animationDelay = `${Math.random() * 3}s`
    particle.style.setProperty('--move-x', `${Math.random() * 40 - 20}px`)
    particle.style.setProperty('--move-y', `${Math.random() * 40 - 20}px`)
    container.appendChild(particle)
  }
}

// ==== Sequência Terminal IA ====
function iniciarTerminal() {
  let interval = setInterval(() => {
    if (lineIndex < terminalLines.length) {
      terminalText.value += terminalLines[lineIndex] + '\n'
      lineIndex++
    } else {
      clearInterval(interval)
      setTimeout(() => (show.value = false), 500) // fim do boot, mostra portfólio
      bootTerminalConcluido.value = true
    }
  }, 500)
}
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, #0a0a0a 70%, #000);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  overflow: hidden;
  font-family: 'Orbitron', sans-serif;
}

/* ==== Tela inicial ==== */
.start-screen {
  text-align: center;
  color: #fff;
}

.title {
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #00e6ff, 0 0 20px #ff00d9;
}
.title span { color: #ff00d9; }

.start-btn {
  background: linear-gradient(90deg, #00e6ff, #ff00d9);
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: 0 0 15px #00e6ff;
  transition: transform 0.2s, box-shadow 0.2s;
}
.start-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 0 25px #ff00d9;
}

/* ==== Carregamento ==== */
#particles-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, #00e6ff, #ff00d9);
  border-radius: 50%;
  opacity: 0.7;
  animation: float 4s infinite ease-in-out alternate;
}
@keyframes float {
  from { transform: translate(0, 0); opacity: 0.5; }
  to { transform: translate(var(--move-x), var(--move-y)); opacity: 1; }
}

.loading-content {
  text-align: center;
  color: #fff;
  z-index: 2;
}

.glow-text {
  font-size: 1.8rem;
  color: #00e6ff;
  text-shadow: 0 0 10px #00e6ff, 0 0 30px #0077ff;
  animation: flicker 1.5s infinite alternate;
}
.glow-text span {
  color: #ff00d9;
  text-shadow: 0 0 10px #ff00d9, 0 0 30px #8b00ff;
}

.sub {
  margin-top: 10px;
  font-size: 1rem;
  color: #ccc;
  font-style: italic;
  opacity: 0.8;
}

.loading-bar {
  width: 220px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin: 25px auto 0;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #00e6ff, #ff00d9);
  transition: width 0.1s linear;
}

/* ==== Terminal IA ==== */
.terminal-screen {
  color: #00FFEE;
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
  text-align: left;
  font-size: 1.2rem;
}
.fade-enter-active,
.fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

@keyframes flicker {
  0% { opacity: 0.9; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
}
</style>
