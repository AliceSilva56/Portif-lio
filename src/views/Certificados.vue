<template>
  <div class="container py-5">
    <h1 class="mb-4">🎓 Certificados</h1>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="(cert, i) in certificados" :key="i">
        <div class="card h-100 shadow-sm">
          <img :src="cert.imagem" class="card-img-top" alt="Certificado" />
          <div class="card-body">
            <h5 class="card-title">{{ cert.titulo }}</h5>
            <p class="card-text">{{ cert.descricao }}</p>
            <a :href="cert.link" target="_blank" class="btn btn-primary btn-sm">Ver Certificado</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const certificados = ref([
  {
    titulo: 'Vue.js Avançado',
    descricao: 'Curso completo de Vue.js e Vue Router',
    imagem: '/img/certificado-vue.png',
    link: '#'
  },
  {
    titulo: 'Flutter Básico',
    descricao: 'Fundamentos do Flutter e Dart',
    imagem: '/img/certificado-flutter.png',
    link: '#'
  }
])
</script>
