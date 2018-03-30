<template>
  <panel title="Songs">
    <v-btn slot="action" @click="navigateTo({name: 'songs-create'})" fab small light absolute right middle>
      <v-icon>add</v-icon>
    </v-btn>
    <div class="song" v-for="song in songs" :key="song.id">
      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{ song.title }}
          </div>
          <div class="song-artist">
            {{ song.artist }}
          </div>
          <div class="song-genre">
            {{ song.genre }}
          </div>

          <v-btn @click="navigateTo({name: 'song', params: {songId: song.id}})">View</v-btn>
        </v-flex>

        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl"/>
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
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
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
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
