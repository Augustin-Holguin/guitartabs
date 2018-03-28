<template>
  <v-layout column>
    <v-flex xs6 offset-xs3 class="mt-2">
      <panel title="Register">
        <form name="tab-tracker-form" autocomplete="off">
          <v-text-field label="email" v-model="email"></v-text-field>
          <v-text-field type="password" label="password" v-model="password" autocomplete="new-password"></v-text-field>
        </form>
        <div class="error" v-html="error"></div>
        <v-btn class="sign" @click="register">Sign up</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  margin-top: 10px;
  background-color: inherit!important;
  color: crimson;
  font-size: 0.9em;
}
</style>
