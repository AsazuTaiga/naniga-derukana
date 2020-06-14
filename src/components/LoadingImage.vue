<template>
    <vue-loading id="loading" type="bars" color="#993d99" :size="{ width: '10vw', height: '10vw' }" />
</template>

<script>
import { VueLoading } from "vue-loading-template";

export default {
  name: "loading-image",
  components: {
    VueLoading
  }
};
</script>

<style lang="scss" scoped>
#loading {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
}
</style>