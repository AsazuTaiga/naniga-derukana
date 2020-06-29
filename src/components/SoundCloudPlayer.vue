<template>
  <div id="wrapper">
    <iframe
      v-show="iframeShown"
      id="player"
      ref="player"
      width="100%"
      height="166"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1073831818&color=%2337a3ce&auto_play=false&downloading=false&buying=false&sharing=false&hide_related=true&liking=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
    ></iframe>
    <div id="toggle" @click="toggleIframeShown()">
      <v-fa :icon="['fab', 'soundcloud']"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "sound-cloud-player",
  data() {
    return {
      iframeShown: false
    };
  },
  methods: {
    toggleIframeShown() {
      this.iframeShown = !this.iframeShown;
    }
  }
};
</script>

<style lang="scss" scoped>
#wrapper {
  position: fixed;
  bottom: 2%;
  left: 2%;
  animation-name: show;
  animation-duration: 0.5s;

  iframe {
    animation-name: show;
    animation-duration: 0.5s;
  }

  #toggle {
      // shape and size
      width: 5vh;
      height: 5vh;
      border-radius: 50%;
      font-size: 2.5vh;

      // colors
      background: var(--button-primary);
      color: var(--button-text);

      cursor: pointer;
  }
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}
</style>