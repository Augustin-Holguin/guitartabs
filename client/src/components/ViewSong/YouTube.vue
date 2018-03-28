<template>
  <panel title="Youtube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="400"
      :player-height="208">
    </youtube>
  </panel>
</template>

<script>

export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
</style>
