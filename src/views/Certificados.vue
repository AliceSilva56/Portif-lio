<template>
  <div class="container py-5">
    <h1 class="mb-4">🎓 Certificados</h1>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="(cert, i) in certificados" :key="i">
        <div class="card h-100 certificado-card">
          <img :src="cert.imagem" class="card-img-top" alt="Certificado" />
          <div class="card-body">
            <h5 class="card-title">{{ cert.titulo }}</h5>
            <!-- Efeito máquina de escrever -->
            <TypeWriter :text="cert.descricao" :speed="35" />
            <a :href="cert.link" target="_blank" class="btn btn-neon btn-sm mt-3">Ver Certificado</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TypeWriter from '@/components/TypeWriter.vue'

const certificados = ref([
  {
    titulo: 'Curso Fullstack Presencial',
    descricao: 'Aprendizado completo de front-end e back-end em ambiente presencial.',
    imagem: new URL('@/assets/img/certificados/certificado-fullstack-presencial.png', import.meta.url).href,
    link: '#'
  },
  {
    titulo: 'Curso Fullstack Online',
    descricao: 'Curso remoto de desenvolvimento completo, focado em Vue.js, Node.js e MySQL.',
    imagem: new URL('@/assets/img/certificados/certificado-fullstack-online.png', import.meta.url).href,
    link: '#'
  },
  {
    titulo: 'Curso Técnico de Desenvolvimento de Sistemas',
    descricao: 'Formação técnica em programação, banco de dados e sistemas web.',
    imagem: new URL('@/assets/img/certificados/certificado-tecnico.png', import.meta.url).href,
    link: '#'
  },
  {
    titulo: 'Design de Interfaces Web',
    descricao: 'Aprendizado em UX/UI e design responsivo para aplicações web.',
    imagem: new URL('@/assets/img/certificados/certificado-ui.png', import.meta.url).href,
    link: '#'
  },
  {
    titulo: 'JavaScript Avançado',
    descricao: 'Curso aprofundado em JavaScript moderno e boas práticas.',
    imagem: new URL('@/assets/img/certificados/certificado-js.png', import.meta.url).href,
    link: '#'
  },
  {
    titulo: 'Git e Controle de Versão',
    descricao: 'Treinamento em Git, GitHub e fluxos de trabalho colaborativos.',
    imagem: new URL('@/assets/img/certificados/certificado-git.png', import.meta.url).href,
    link: '#'
  }
])
</script>

<style scoped>
h1 {
  color: #00CFFF;
  text-shadow: 0 0 10px #00CFFF;
  margin-bottom: 40px;
}

/* Cards */
.certificado-card {
  background: #111;
  border: 1px solid #222;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 12px rgba(0, 207, 255, 0.2);
}

.certificado-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 25px #00CFFF, 0 0 40px rgba(57, 255, 20, 0.4);
}

/* Imagem */
.certificado-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom: 1px solid #00CFFF44;
}

/* Título e descrição */
.card-title {
  color: #39FF14;
  font-size: 1.2rem;
  margin-bottom: 10px;
  text-shadow: 0 0 8px #39FF14;
}

/* Botão neon */
.btn-neon {
  background: linear-gradient(90deg, #00CFFF, #39FF14);
  color: #0d0d0d;
  border: none;
  border-radius: 8px;
  padding: 6px 14px;
  font-weight: bold;
  transition: 0.3s;
  box-shadow: 0 0 8px #00CFFF, 0 0 12px #39FF14;
}

.btn-neon:hover {
  filter: brightness(1.2);
  box-shadow: 0 0 15px #00CFFF, 0 0 25px #39FF14;
}
</style>
