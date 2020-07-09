<template>
  <nav id="sidebar" class="bg-panel">
    <div class="sidebar-header m-3 text-center">
      <h5 class="font-color stencil title-font-style">Music Mosaic</h5>
    </div>
    <div class="playback d-flex justify-content-between p-5">
      <span @click="playBackClick('paused')"><i class="fas fa-pause"></i></span>
      <span @click="playBackClick('playing')"><i class="fas fa-play"></i></span>
      <span @click="playBackClick('stopped')"><i class="fas fa-stop"></i></span>
      <span @click="previousClick"><i class="fas fa-backward"></i></span>
      <span @click="nextClick"><i class="fas fa-forward"></i></span>
    </div>
    <div class="d-flex justify-content-start ml-5">
      <ul class="list-unstyled components ">
        <li
          v-for="sub in subreddits"
          :key="sub"
          class=""
          @click="getVideos(sub)"
        >
          {{ sub }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavPanel",
  data() {
    return {};
  },
  computed: {
    subreddits() {
      return this.$store.state.subreddits;
    },
    currentlyPlayingVideo() {
      return this.$store.state.currentlyPlayingVideo;
    },
  },
  methods: {
    getVideos(subreddit) {
      this.$store.dispatch("getSubredditVideos", subreddit);
    },
    playBackClick(event) {
      this.$store.dispatch("changePlayBackState", event);
    },
    nextClick() {
      let nextSong = this.currentlyPlayingVideo + 1;
      this.$store.dispatch("changeSong", nextSong);
    },
    previousClick() {
      let previousSong = this.currentlyPlayingVideo - 1;
      this.$store.dispatch("changeSong", previousSong);
    },
  },
  components: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Open+Sans&display=swap");
#sidebar {
  position: fixed;
  width: 17%;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
}
.bg-panel {
  background-color: rgba(70, 19, 83, 0);
}

.title-font-style {
  /* color: #e69d75; */
  color: black;
  font-size: 2rem;
}

.stencil {
  font-family: "Allerta Stencil", sans-serif;
}

.remove-underline {
  text-decoration: none;
}
.remove-underline:hover {
  color: lightblue;
}
</style>
