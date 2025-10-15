
<template>
  <div class="container py-5">
    <h1 class="mb-4">✍️ Blog & Artigos</h1>

    <div class="list-group">
      <div v-for="(post, i) in posts" :key="i" class="list-group-item list-group-item-action">
        <h5>{{ post.titulo }}</h5>
        <p class="mb-1">{{ post.descricao }}</p>
        <router-link :to="post.link" class="btn btn-sm btn-outline-primary mt-2">Ler mais</router-link>
      </div>
    </div>

    <hr class="my-5" />

    <h2 style="color:#00CFFF;text-shadow:0 0 8px #00CFFF;">📘 Artigos sobre Flutter</h2>
    <p style="margin-bottom:20px;">Tutoriais e experiências no universo Flutter — do básico ao avançado.</p>

    <div class="list-group">
      <div v-for="(flutter, i) in flutterPosts" :key="i" class="list-group-item list-group-item-action">
        <h5>{{ flutter.titulo }}</h5>
        <p class="mb-1">{{ flutter.descricao }}</p>
        <router-link :to="flutter.link" class="btn btn-sm btn-outline-primary mt-2">Ler mais</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    titulo: 'Como comecei no desenvolvimento',
    descricao: 'Um pouco da minha trajetória como dev.',
    link: '/inicio-dev'
  },
  {
    titulo: 'Dicas de produtividade com Vue.js',
    descricao: 'Pequenos truques que agilizam o dia a dia no front.',
    link: '/vue-dicas'
  }
])

const flutterPosts = ref([
  {
    titulo: 'Primeiros Passos com Flutter',
    descricao: 'O que é o Flutter e como começar do zero.',
    link: '/flutter-basico'
  },
  {
    titulo: 'Design Futurista no Flutter (Dark Tech)',
    descricao: 'Como criei temas neon e efeitos de luz em apps Flutter.',
    link: '/flutter-dark-tech'
  }
])
</script>

<style scoped>
.section-title {
  color: #39ff14;
  margin-bottom: 16px;
}

.list-group-item {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}
.list-group-item:hover {
  transform: translateX(5px);
  box-shadow: 0 0 12px #00cfff66;
  background-color: #111;
  color: #39ff14;
}
.btn-outline-primary {
  transition: all 0.3s ease;
}
.btn-outline-primary:hover {
  color: #0d0d0d;
  background: linear-gradient(90deg, #00cfff, #39ff14);
  border-color: #71ddf6;
}
</style>
