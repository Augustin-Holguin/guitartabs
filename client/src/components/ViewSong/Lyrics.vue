<template>
  <panel title="Lyrics" color="red">
    <textarea
      readonly
      v-model="song.lyrics">
    </textarea>
  </panel>
</template>

<script>

export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>

textarea {
  width: 100%;
  height: 500px;
  border: none;
  font-family: monospace;
  border-style: none;
  overflow: auto;
  border-color: transparent;
  text-align: center;
}
</style>
