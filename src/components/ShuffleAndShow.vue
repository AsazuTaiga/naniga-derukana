<template>
  <div>
    <p class="title">お題</p>
    <p class="theme-text">「{{ msg }}」</p>
    <p class="reload-text">※話しづらい？リロードしましょう！</p>
  </div>
</template>

<script>
export default {
  name: "shuffle-and-show",
  data() {
    return {
      first: true,
      msg: ""
    };
  },
  props: {
    themes: {
      type: Array,
      required: true
    }
  },
  methods: {
    shuffle() {
      const shuffleOnce = () =>
        (this.msg = this.themes[
          Math.floor(Math.random() * this.themes.length)
        ]);
      if (this.first) {
        shuffleOnce();
        this.first = false;
      } else {
        const interval = setInterval(() => shuffleOnce(), 50);
        setTimeout(() => clearInterval(interval), 500);
      }
    }
  },
  mounted() {
    this.shuffle();
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";
div {
  // size and shape
  width: 60vw;
  background: var(--theme-bg);
  border: double 10px var(--theme-accent);
  border-radius: 0.5rem;
  padding: 10px;

  // font style
  color: var(--theme-text);
  .title {
    font-size: 3vh;
  }
  .theme-text {
    height: 30vh;
    font-size: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .reload-text {
    font-size: 3vh;
  }

  // outer centering
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  animation-name: show;
  animation-duration: 0.5s;
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