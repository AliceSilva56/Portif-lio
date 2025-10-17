<script>
import NavBar from './components/NavBar.vue'
import Card from './components/Card.vue'
import Rodape from './components/Rodape.vue'
import Timeline from './components/Timeline.vue'
import My from './components/My.vue'
import router from './router/index.js'
import TelaBoot from './components/TelaBoot.vue'

export default {
  name: 'App',
  components: { router, NavBar, My, Timeline, Card, Rodape, TelaBoot },
  data() {
    return {
      glitchAtivo: false,
      mensagemAtiva: false,
    }
  },
  methods: {
    iniciarGlitchDepoisDoBoot() {
      // começa o glitch logo após o fim do boot (sem delay)
      this.ativarGlitch()
    },
    ativarGlitch() {
      this.mensagemAtiva = true
      this.glitchAtivo = true
      document.body.classList.add('modo-glitch')

      // remove a mensagem antes do glitch acabar
      setTimeout(() => {
        this.mensagemAtiva = false
      }, 1800)

      // desativa o glitch depois de 3 segundos
      setTimeout(() => {
        this.glitchAtivo = false
        document.body.classList.remove('modo-glitch')
      }, 3000)
    },
  },
}
</script>

<template>
  <div>
    <!-- Escuta o evento "fimBoot" -->
    <TelaBoot @fimBoot="iniciarGlitchDepoisDoBoot" />
    <NavBar />
    <router-view />
    <Rodape />

    <div v-if="glitchAtivo" class="glitch-overlay"></div>
    <div v-if="mensagemAtiva" class="glitch-msg">⚡ Falha detectada...</div>
  </div>
</template>

<style>
.glitch-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 0, 255, 0.12),
    rgba(0, 255, 255, 0.12) 2px,
    rgba(0, 0, 0, 0.06) 4px
  );
  animation: glitchBreak 0.2s steps(2, end) infinite;
  pointer-events: none;
  mix-blend-mode: screen;
}

body.modo-glitch {
  filter: hue-rotate(200deg) saturate(1.5) contrast(1.2);
  transition: filter 0.3s ease;
}

@keyframes glitchBreak {
  0%   { transform: translate(0,0); opacity: 1; }
  20%  { transform: translate(8px,-4px); opacity: 0.9; }
  40%  { transform: translate(-6px,6px); opacity: 0.8; }
  60%  { transform: translate(4px,-3px); opacity: 1; }
  80%  { transform: translate(-2px,2px); opacity: 0.9; }
  100% { transform: translate(0,0); opacity: 1; }
}

.glitch-msg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  color: #00CFFF;
  text-shadow: 0 0 10px #00CFFF, 0 0 25px #ff00d9;
  animation: blink 0.4s alternate infinite;
  z-index: 999999;
}

@keyframes blink {
  from { opacity: 1; }
  to { opacity: 0.4; }
}
</style>
