<template>
  <div id="app">
    <loading-image v-show="loading" />
    <div v-show="!loading">
      <div>
        <flash-text :themes="talkThemes" />
      </div>
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
import LoadingImage from "@/components/LoadingImage";

// Model
import talkThemes from "@/model/talk-themes.json";

export default {
  name: "App",
  components: {
    FlashText,
    StartButton,
    ShuffleAndShow,
    LoadingImage
  },
  data: () => {
    return {
      talkThemes: talkThemes,
      shuffleAndShowVisible: false,
      loading: true
    };
  },
  methods: {
    onStartButtonClick() {
      this.shuffleAndShowVisible = true;
    },
    onStartButtonReload() {
      this.$refs.shuffleAndShow.shuffle();
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
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
