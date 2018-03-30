<template>
  <v-toolbar fixed dark>
    <v-toolbar-title class="mr-4">
      <router-link class="home" tag="span" :to="{name: 'root'}" style="font-weight:bold">tabtracker</router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark :to="{name: 'songs'}">Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer> <!-- puts all elements to the right -->

    <v-toolbar-items>
      <v-btn flat dark :to="{name: 'login'}" v-if="!$store.state.isUserLoggedIn">Login</v-btn>

      <v-btn flat dark :to="{name: 'register'}" v-if="!$store.state.isUserLoggedIn">Sign up</v-btn>

      <v-btn flat dark @click="logout" v-if="$store.state.isUserLoggedIn">Log out</v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>
