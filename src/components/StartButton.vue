<template>
  <div :class="{clicked:isClicked}" @click="onClick()">
    <v-fa ref="icon" :class="{rotate: isRotate}" :icon="iconName" />
  </div>
</template>

<script>
import passBySoundMp3 from "@/assets/pass_by.mp3";

export default {
  name: "start-button",
  data: () => {
    return {
      isClicked: false,
      isRotate: false,
      iconName: "question",
      sound: new Audio(passBySoundMp3)
    };
  },
  methods: {
    onClick() {
      if (!this.isClicked) {
        this.$emit("click");
        this.isClicked = true;
        this.iconName = "undo";
      } else {
        this.$emit("reload");
        this.sound.currentTime = 0;
        this.sound.play();
        this.isRotate = true;
        setTimeout(() => {
          this.isRotate = false;
        }, 300);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";
div {
  // shape and size
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  font-size: 5vh;

  // colors
  background: var(--button-primary);
  color: var(--button-text);

  // outer centering
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  // inner centering
  line-height: 10.5vh;

  // other
  display: block;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  :hover {
    color: var(--button-secondary);
  }

  .clicked {
    transition: 0.5s;
    top: 10%;
  }

  .rotate {
    transform: rotate(-360deg);
    transition: transform 0.3s ease;
  }
}
</style>