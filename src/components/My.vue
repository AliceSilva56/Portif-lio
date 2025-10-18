<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'My',
  setup() {
    const frases = [
      '🚀 Explorando o universo do código e criando experiências incríveis.',
      '💡 Criando soluções com criatividade e um toque de magia digital.',
      '⚙️ Aprendendo e evoluindo todos os dias com cada linha de código.',
      '🌈 Transformando ideias em interfaces e projetos que inspiram.'
    ]
    const fraseAtual = ref('')
    let indexFrase = 0
    let indexLetra = 0

    const digitar = () => {
      if (indexLetra < frases[indexFrase].length) {
        fraseAtual.value += frases[indexFrase].charAt(indexLetra)
        indexLetra++
        setTimeout(digitar, 70)
      } else {
        setTimeout(apagar, 2000)
      }
    }

    const apagar = () => {
      if (indexLetra > 0) {
        fraseAtual.value = frases[indexFrase].substring(0, indexLetra - 1)
        indexLetra--
        setTimeout(apagar, 35)
      } else {
        indexFrase = (indexFrase + 1) % frases.length
        setTimeout(digitar, 500)
      }
    }

    onMounted(() => {
      digitar()
    })

    return { fraseAtual }
  }
}
</script>

<template>
  <div id="sobre-mim" class="sobre-mim-container">
    <!-- Texto à esquerda -->
    <div class="sobre-mim-texto">
      <h2>Sobre Mim</h2>
      <p>
        Olá! Meu nome é <strong>Alice Pinheiro da Silva</strong>. <br>
       Iniciei minha jornada no 
        <strong>desenvolvimento de sistemas</strong> <br>
        exatamente no dia 19/03/2024, desde então venho explorando novas tecnologias e criando projetos para evoluir minhas habilidades.
        <br>Estou animada para compartilhar meu progresso e aprender cada vez mais!
      </p>
    </div>

    <!-- Card animado à direita -->
    <div class="sobre-mim-card">
      <div class="card animado">
        <div class="avatar-container">
          <img src="@/assets/img/Alice.png" class="card-img-top flutuante" alt="Alice">
        </div>

        <div class="card-body">
          <h5 class="card-title">Essa sou eu (;-)</h5>
          <p class="typewriter">{{ fraseAtual }}</p>

          <div class="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style="width: 25%">Progresso de Aprendizagem</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <br>
</template>

<style scoped>
/* ==========================
   Estilos principais
========================== */
.progress {
  background: #c0c0c0ff;
  border-radius: 8px;
  height: 20px;
  overflow: hidden;
}

.progress-bar {
  background: linear-gradient(90deg, #00CFFF, #39FF14);
  height: 100%;
  max-width: 0;
  animation: loadBar 1.8s ease-out forwards;
}

@keyframes loadBar {
  from { max-width: 0; }
  to   { max-width: 100%; }
}

/* Avatar circular com brilho */
.card-img-top {
  width: 200px;
  height: auto;
  display: block;
  margin: 0 auto 15px auto;
  border-radius: 50%;
  border: 3px solid #00CFFF;
  box-shadow: 0 0 15px #00CFFF;
}

/* Animação flutuante do avatar */
.flutuante {
  animation: flutuar 3s ease-in-out infinite;
}

@keyframes flutuar {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.card {
  background: #ffffff;
  border: 1px solid #222;
  border-radius: 12px;
  padding: 20px;
  width: 280px;
  box-shadow: 0 0 12px rgba(0, 207, 255, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  color: #181717ff;
  margin: 20px auto;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 20px rgba(0, 207, 255, 0.5);
}

.card-title {
  font-size: 1.3rem;
  color: #00CFFF;
  margin-bottom: 10px;
  text-shadow: 0 0 8px #00CFFF;
}

/* Texto digitado com quebra de linha */
.typewriter {
  font-size: 0.95rem;
  font-weight: 500;
  color: #181717;
  min-height: 48px; /* Mantém o espaço fixo */
  overflow: hidden;
  border-right: 2px solid #39FF14;
  white-space: normal; /* Permite quebrar linha */
  word-break: break-word;
  animation: blink 0.8s infinite;
  line-height: 1.5;
  text-align: center;
  padding: 0 8px;
}

@keyframes blink {
  50% { border-color: transparent; }
}

/* Container principal */
.sobre-mim-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin: 40px 0;
}

/* Texto à esquerda */
.sobre-mim-texto {
  flex: 1;
  color: #000000;
  padding: 0 80px;
}

.sobre-mim-texto h2 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #145effff;
  text-shadow: 0 0 8px #1462ffff;
}

.sobre-mim-texto p {
  font-size: 1rem;
  line-height: 1.6;
  color: #000000ff;
}

/* Card à direita */
.sobre-mim-card {
  flex: 0 0 500px;
}

/* ==========================
   Responsividade
========================== */
@media (max-width: 900px) {
  .sobre-mim-container {
    flex-direction: column;
    padding: 0 20px;
    text-align: center;
  }

  .sobre-mim-texto {
    padding: 0;
  }

  .card {
    width: 90%;
  }

  .card-img-top {
    width: 150px;
  }

  .typewriter {
    font-size: 0.9rem;
  }
}
</style>
