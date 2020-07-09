<template>
  <div class="home wrapper">
    <NavPanel />
    <div class="mosaic-container py-2">
      <yt-video
        v-for="(videoId, index) in videoIds"
        :key="videoId"
        :videoId="videoId"
        :playlistIndex="index"
      />
    </div>
  </div>
</template>

<script>
import NavPanel from "@/components/navpanel";
import ytVideo from "@/components/ytvideo";

export default {
  name: "Home",
  components: {
    NavPanel,
    ytVideo,
  },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/sunsetmoon.jpg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      navPanelValue: "",
    };
  },
  computed: {
    videoIds() {
      return this.$store.state.activeVideos;
    },
  },
  methods: {
    onClickNavPanel(value) {
      this.navPanelValue = value;
    },
  },
};
</script>

<style lang="css">
.home {
  font-family: "Open Sans", sans-serif;
}

.mosaic-container {
  position: absolute;
  top: 0;
  left: 18%;
  width: 80%;
  height: auto;
  /* border: 5px solid red; */
}

.wrapper {
  display: flex;
  width: 100%;
  height: 100vh;
}
</style>
