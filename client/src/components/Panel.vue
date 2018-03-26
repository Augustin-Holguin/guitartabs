<!-- SUBCOMPONENT WHICH WE CALL ON OTHER PARTS OF THE APP TO HAVE CLEANER CODE -->
<template>
  <div class="white elevation-2">
    <v-toolbar flat dense dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action"/>
    </v-toolbar>

    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>  <!-- Whenever I change content of Panel component in other parts of my app, it will replace content of slot -->
        No slot content
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
