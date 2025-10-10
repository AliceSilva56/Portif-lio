<template>
  <div>
    <My />
    <Timeline />
    <Card />
  </div>
</template>

<script>
import My from '@/components/My.vue'
import Card from '@/components/Card.vue'
import Timeline from '@/components/Timeline.vue'

export default {
  name: 'Home',
  components: { My, Card, Timeline }
}
</script>

<style scoped>
</style>
