<template>
  <panel title="Lyrics">
    <textarea
      readonly
      v-model="song.lyrics">
    </textarea>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>

textarea {
  width: 100%;
  height: 300px;
  border: none;
  font-family: monospace;
  border-style: none;
  overflow: auto;
  border-color: transparent;
  text-align: center;
}

</style>
