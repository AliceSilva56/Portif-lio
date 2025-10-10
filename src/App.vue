<script>
import NavBar from './components/NavBar.vue';
import Card from './components/Card.vue';
import Rodape from './components/Rodape.vue';
import Timeline from './components/Timeline.vue';
import My from './components/My.vue';
import router from './router/index.js';

export default {
  name: 'App',
  components: { router, NavBar, My, Timeline, Card, Rodape}
}
</script>

<template>
  <div>
  <NavBar />
  <router-view />
  <Rodape />


  </div>
</template>

<style scoped>
</style>
