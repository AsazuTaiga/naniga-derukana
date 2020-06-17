<template>
  <div id="wrapper">
    <iframe
      id="player"
      ref="player"
      width="100%"
      height="166"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/20718099&color=%23ddb1f2&auto_play=false&buying=false&sharing=false&hide_related=true&liking=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "sound-cloud-player"
};
</script>

<style lang="scss" scoped>
#wrapper {
  position: fixed;
  bottom: 2%;
  left: 2%;
}
</style>