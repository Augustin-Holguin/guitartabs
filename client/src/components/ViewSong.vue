<template>
  <v-layout>
    <v-flex xs6 class="mt-2 ml-1">
      <panel title= "Song Metadata">
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
          </v-flex>

          <v-flex xs6>
            <img class="album-image" :src="song.albumImageUrl"/>
            <br>
            {{ song.album }}
          </v-flex>
        </v-layout>
      </panel>
    </v-flex>
    <v-flex xs6 class="ml-3 mt-2 mr-1">
      <panel title="Tabs">
        {{ song.tab }}
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Panel
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
