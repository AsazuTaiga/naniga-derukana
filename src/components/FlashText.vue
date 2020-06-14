<template>
  <div>
  <div class="flashMessage"
  >{{ textContent }}</div>
  </div>
</template>

<script>
export default {
  name: "flash-text",
  props: {
    themes: Array
  },
  computed: {
    textContent() {
      let content = "";
      for (let i = 0; i < 30; i++) {
        content = content + `${this.themes[i]} ${this.themes[i]} ${this.themes[i]} ${this.themes[i]} ${this.themes[i]}\n`;
      }
      return content;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";

.flashMessage {
  color: var(--accent);
  font-size: 5vw;
  font-style: italic;
  width: 200vw;
  overflow: hidden;
  white-space: normal;
  text-align: start;
  user-select: none;
  // animations
  animation-name: flash;
  animation-timing-function: linear;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}

@keyframes flash {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>