<template>
  <v-layout column>
    <v-flex xs6 offset-xs3 class="mt-2">
      <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel,
    SongsPanel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>

.song {
  padding: 20px;
  overflow: hidden;
  border-bottom: solid 1px grey;
}

.song-title {
  font-size: 28px;
  font-weight: bold;
  opacity: 0.85;
}

.song-artist {
  font-size: 20px;
}

.song-genre {
  font-size: 14px;
}

.album-image {
  width: 60%;
  margin: 0 auto;
}

</style>
