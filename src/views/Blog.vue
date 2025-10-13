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

<style scoped>

.list-group-item {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}
.list-group-item:hover {
  transform: translateX(5px);
  box-shadow: 0 0 12px #00CFFF66;
  background-color: #111;
  color: #39FF14;
}
.btn-outline-primary {
  transition: all 0.3s ease;
}
.btn-outline-primary:hover {
  color: #0d0d0d;
  background: linear-gradient(90deg, #00CFFF, #39FF14);
  border-color: #00CFFF;
}

</style>
