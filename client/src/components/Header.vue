<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span class="home" @click="navigateTo({name: 'root'})" style="font-weight:bold">tabtracker</span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer> <!-- puts all elements to the right -->

    <v-toolbar-items>
      <v-btn flat dark @click="navigateTo({name: 'login'})" v-if="!$store.state.isUserLoggedIn">Login</v-btn>

      <v-btn flat dark @click="navigateTo({name: 'register'})" v-if="!$store.state.isUserLoggedIn">Sign up</v-btn>

      <v-btn flat dark @click="logout" v-if="$store.state.isUserLoggedIn">Log out</v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route) // this.$router => access router
    },
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
