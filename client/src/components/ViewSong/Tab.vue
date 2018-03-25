<template>
  <panel title="Tab">
    <textarea
      readonly
      v-model="song.tab">
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
}

</style>
