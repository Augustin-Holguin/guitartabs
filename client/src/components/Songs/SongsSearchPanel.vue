<template>
  <div class="searchBar">
    <v-text-field label="Search by song, artist, album or genre" v-model="search"></v-text-field>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 500), // only does server request after 700ms
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>
.searchBar {
  background: #d7d7d8;
  height: 60px;
  padding: 0px 15px;
}
</style>
