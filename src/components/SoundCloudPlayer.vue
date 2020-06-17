<template>
  <div id="wrapper">
    <!-- the below tags are copied from sound cloud -->
    <iframe
      id="player"
      ref="player"
      width="100%"
      height="166"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/20718099&color=%23ddb1f2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    ></iframe>
    <div
      style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
    >
      <a
        href="https://soundcloud.com/atlanticrecords"
        title="Atlantic Records"
        target="_blank"
        style="color: #cccccc; text-decoration: none;"
      >Atlantic Records</a> ·
      <a
        href="https://soundcloud.com/atlanticrecords/jason-mraz-im-yours"
        title="Jason Mraz - I&#x27;m Yours"
        target="_blank"
        style="color: #cccccc; text-decoration: none;"
      >Jason Mraz - I&#x27;m Yours</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "sound-cloud-player",
  mounted() {
    const SoundcloudWidget = require("soundcloud-widget");
    const iframe = "player"; // can also pass in an iframe node
    const widget = new SoundcloudWidget(iframe);
    widget.setVolume(0);
  }
};
</script>

<style lang="scss" scoped>
#wrapper {
  position: fixed;
  top: 2%;
  left: 2%;
}
</style>