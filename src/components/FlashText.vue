<template>
  <div>
  <div v-for="n of 30" :key="n"
    class="flashMessage"
  >{{ repeat5Times(themes[n]) }}</div>
  </div>
</template>

<script>
export default {
  name: "flash-text",
  props: {
    themes: Array
  },
  methods: {
    repeat5Times(str) {
      return `${str} ${str} ${str} ${str} ${str}`
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
  white-space: nowrap;
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