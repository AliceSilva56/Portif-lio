<script>
import NavBar from './components/NavBar.vue';
import Card from './components/Card.vue';
import Rodape from './components/Rodape.vue';
import Timeline from './components/Timeline.vue';
import My from './components/My.vue';

export default {
  name: 'App',
  components: { NavBar, My, Timeline, Card, Rodape}
}
</script>

<template>
  <div>

    <NavBar />
    <My />
    <Timeline />
    <Card />
    <Rodape />


  </div>
</template>

<style scoped>
</style>
