<template>
  <panel title= "Song Metadata">
    <v-layout>
      <v-flex xs6 class="song-details">
        <div class="song-title">
          {{ song.title }}
        </div>
        <div class="song-artist">
          {{ song.artist }}
        </div>
        <div class="song-genre">
          {{ song.genre }}
        </div>
        <div class="song-album">
          {{ song.album }}
        </div>

        <v-btn
          :to="{
            name: 'song-edit',
            params () {
              return {
                songId: song.id
              }
            }
          }">
          Edit
        </v-btn>
      </v-flex>

      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl"/>
      </v-flex>
    </v-layout>
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

.song {
  padding: 20px;
  height: 180px;
  overflow: hidden;
}

.song-details {
  margin: auto;
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

.song-album {
  margin-top: 10px;
  font-size: 18px;
  opacity: 0.7;
}

.album-image {
  width: 75%;
  margin: 0 auto;
}

</style>
