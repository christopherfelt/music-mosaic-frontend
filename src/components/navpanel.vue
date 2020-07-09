<template>
  <nav id="sidebar" class="bg-panel">
    <div class="sidebar-header m-3 text-center">
      <h5 class="font-color stencil title-font-style">Music Mosaic</h5>
    </div>
    <div class="playback d-flex justify-content-between p-3">
      <span class="playback-button py-2 px-3" @click="playBackClick('paused')"
        ><i class="fas fa-pause"></i
      ></span>
      <span class="playback-button py-2 px-3" @click="playBackClick('playing')"
        ><i class="fas fa-play"></i
      ></span>
      <span class="playback-button py-2 px-3" @click="playBackClick('stopped')"
        ><i class="fas fa-stop"></i
      ></span>
      <span class="playback-button py-2 px-3" @click="previousClick"
        ><i class="fas fa-backward"></i
      ></span>
      <span class="playback-button py-2 px-3" @click="nextClick"
        ><i class="fas fa-forward"></i
      ></span>
    </div>
    <div class="d-flex justify-content-center p-3">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item pill-style">
          <a
            class="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            >Playlists</a
          >
        </li>
        <li class="nav-item pill-style">
          <a
            class="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
            >Playing</a
          >
        </li>
        <li class="nav-item pill-style">
          <a
            class="nav-link"
            id="pills-contact-tab"
            data-toggle="pill"
            href="#pills-contact"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
            >About</a
          >
        </li>
      </ul>
    </div>

    <div class="d-flex justify-content-start ml-5">
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
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
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          ...
        </div>
      </div>
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

.nav-pills .nav-link:not(.active) {
  background-color: white;
  color: black;
}

.nav-pills .nav-link {
  background-color: black;
  color: white;
}

.playback-button {
  transition-duration: 250ms;
}

.playback-button:hover {
  background-color: lightgray;
}
</style>
