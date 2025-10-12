<template>
  <div class="container py-5">
    <h1 class="mb-4">✍️ Blog & Artigos</h1>
    <div class="list-group">
      <div v-for="(post, i) in posts" :key="i" class="list-group-item list-group-item-action">
        <h5>{{ post.titulo }}</h5>
        <p class="mb-1">{{ post.descricao }}</p>
        <a :href="post.link" target="_blank" class="btn btn-sm btn-outline-primary mt-2">Ler mais</a>
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
    link: '#'
  },
  {
    titulo: 'Dicas de produtividade com Vue.js',
    descricao: 'Pequenos truques que agilizam o dia a dia no front.',
    link: '#'
  }
])
</script>
