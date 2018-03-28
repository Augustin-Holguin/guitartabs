<template>
  <div>
    <v-layout>
      <v-flex xs6 class="mt-2 ml-1">
        <song-metadata :song="song"/>
      </v-flex>

      <v-flex xs6 class="ml-3 mt-2 mr-1">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout class="mt-3">
      <v-flex xs6 class="ml-1">
        <tab :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-3 mr-1">
        <lyrics :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import SongsService from '@/services/SongsService'

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
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>
</style>
