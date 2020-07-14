<template>
  <nav id="sidebar" class="bg-panel">
    <div class="sidebar-header m-3 text-center">
      <h5 class="font-color stencil title-font-style">Music Mosaic</h5>
    </div>
    <div class="playback d-flex justify-content-between p-3">
      <span
        class="playback-button py-2 px-3"
        :class="{ pbActive: paused }"
        @click="playBackClick('paused')"
        ><i class="fas fa-pause"></i
      ></span>
      <span
        class="playback-button py-2 px-3"
        :class="{ pbActive: playing }"
        @click="playBackClick('playing')"
        ><i class="fas fa-play"></i
      ></span>
      <span
        class="playback-button py-2 px-3"
        :class="{ pbActive: stopped }"
        @click="playBackClick('stopped')"
        ><i class="fas fa-stop"></i
      ></span>
      <span class="playback-button py-2 px-3" @click="previousClick"
        ><i class="fas fa-backward"></i
      ></span>
      <span class="playback-button py-2 px-3" @click="nextClick"
        ><i class="fas fa-forward"></i
      ></span>
    </div>
    <div
      class="d-flex justify-content-center p-1 mt-3 animate__animated animate__faster animate__fadeInUp"
      :class="{ animate__fadeOutUp: fadeStatus }"
    >
      <ul class="nav nav-pills" id="pills-tab" role="tablist">
        <li class="nav-item pill-style m-1">
          <a
            class="nav-link p-1"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            @click="changeFadeStatus()"
          >
            <small> Browse </small></a
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
          >
            <small>Search</small></a
          >
        </li>
        <li class="nav-item pill-style m-1">
          <a
            class="nav-link p-1"
            id="pills-contact-tab"
            data-toggle="pill"
            href="#pills-about"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            <small>About</small>
          </a>
        </li>
      </ul>
    </div>

    <div class="d-flex justify-content-center">
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane animate__animated animate__fadeInUp"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <Browse />
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <SearchReddit />
        </div>
        <div
          class="tab-pane fade"
          id="pills-about"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <About />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ListItem from "@/components/listitem";
import About from "@/components/about";
import SearchReddit from "@/components/search";
import Browse from "@/components/browse";
import "animate.css";
export default {
  name: "NavPanel",
  mounted() {
    this.$store.dispatch("getSubredditsByGenre");
  },
  data() {
    return {
      paused: false,
      playing: false,
      stopped: false,
      fadeStatus: false,
    };
  },
  computed: {
    subreddits() {
      return this.$store.state.subreddits;
    },
    currentlyPlayingVideo() {
      return this.$store.state.currentlyPlayingVideo;
    },
    playBackState() {
      return this.$store.state.playBackState;
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
    changeFadeStatus() {
      this.fadeStatus = true;
    },
  },
  components: {
    ListItem,
    About,
    SearchReddit,
    Browse,
  },
  watch: {
    playBackState: function() {
      if (this.playBackState == "paused") {
        this.paused = true;
        this.playing = false;
        this.stopped = false;
      } else if (this.playBackState == "playing") {
        this.paused = false;
        this.playing = true;
        this.stopped = false;
      } else if (this.playBackState == "stopped") {
        this.paused = false;
        this.playing = false;
        this.stopped = true;
      } else {
        this.paused = false;
        this.playing = false;
        this.stopped = false;
      }
    },
  },
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
  border-radius: 0%;
}

.playback-button {
  transition-duration: 250ms;
}

.playback-button:hover {
  background-color: lightgray;
}

.pbActive {
  background-color: black;
  color: white;
}
</style>
