<template>
  <v-layout column>
    <v-flex xs6 offset-xs3 class="mt-2">
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
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
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
  height: 180px;
  overflow: hidden;
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
