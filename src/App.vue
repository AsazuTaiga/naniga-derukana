<template>
  <div id="app">
    <div>
      <div>
        <flash-text :themes="talkThemes" />
      </div>
      <sound-cloud-player></sound-cloud-player>
      <shuffle-and-show
        ref="shuffleAndShow"
        :themes="this.talkThemes"
        v-if="shuffleAndShowVisible"
      />
      <start-button @click="onStartButtonClick()" @reload="onStartButtonReload()" />
    </div>
  </div>
</template>

<script>
// Vue Single File Components
import FlashText from "@/components/FlashText";
import StartButton from "@/components/StartButton";
import ShuffleAndShow from "@/components/ShuffleAndShow";
import SoundCloudPlayer from '@/components/SoundCloudPlayer'

// Model
import talkThemes from "@/model/talk-themes.json";

export default {
  name: "App",
  components: {
    FlashText,
    StartButton,
    ShuffleAndShow,
    SoundCloudPlayer
  },
  data: () => {
    return {
      talkThemes: talkThemes,
      shuffleAndShowVisible: false,
    };
  },
  methods: {
    onStartButtonClick() {
      this.shuffleAndShowVisible = true;
    },
    onStartButtonReload() {
      this.$refs.shuffleAndShow.shuffle();
    }
  }
};
</script>

<style>
@import "./styles/colors.scss";
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@900");

html {
  background: var(--bg);
  height: 100vh;
  overflow: hidden;
}

#app {
  font-family: "M PLUS 1p", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
