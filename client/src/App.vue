<template>
  <div id="app">
    <v-app>
      <page-header/>
      <!-- <div style="margin-top:35px" v-if="$router.name = 'root'">
        <h1 style="opacity:0.85 ; font-size:4em">Welcome to tabtracker</h1>
        <p style="font-size:2em">
          The ultimate website to find and learn your favourite songs
        </p>
        <iframe src="https://giphy.com/embed/JNMFUwShabBUQ" width="480" height="349" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div> -->
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.input-group--text-field input {
}

.toolbar__content {
  background-color: #0064ff;
}

.danger-alert {
  color: red;
  margin-top: 5px;
}

</style>
