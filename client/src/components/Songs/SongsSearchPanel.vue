<template>
  <panel title="Search">
    <v-text-field label="Search by song, artist, album or genre" v-model="search"></v-text-field>
  </panel>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>
</style>
