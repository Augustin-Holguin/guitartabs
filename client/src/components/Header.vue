<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span class="home" @click="navigateTo({name: 'root'})">Tab Tracker</span>
    </v-toolbar-title>

    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer> <!-- puts all elements to the right -->

    <v-toolbar-items>
      <v-btn flat dark @click="navigateTo({name: 'login'})">Login</v-btn>

      <v-btn flat dark @click="navigateTo({name: 'register'})">Sign up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route) // this.$router => access router
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>
