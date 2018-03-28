<template>
  <panel title="Tab">
    <textarea
      readonly
      v-model="song.tab">
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
}

</style>
