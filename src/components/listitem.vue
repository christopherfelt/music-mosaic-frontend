<template>
  <li @click="getVideos" class="">
    <small class="d-inline p-1 list-item" :class="{ current: current }">{{
      subreddit
    }}</small>
  </li>
</template>

<script>
export default {
  name: "list-item",
  data() {
    return {
      current: false,
    };
  },
  props: ["subreddit"],
  computed: {
    currentPlaylist() {
      return this.$store.state.currentPlaylist;
    },
  },
  methods: {
    getVideos() {
      this.$store.dispatch("getSubredditVideos", this.subreddit);
    },
  },
  components: {},
  watch: {
    currentPlaylist: function() {
      if (this.currentPlaylist == this.subreddit) {
        this.current = true;
      } else {
        this.current = false;
      }
    },
  },
};
</script>

<style scoped>
.list-item {
  cursor: pointer;
  transition-duration: 250ms;
  color: gray;
}

.list-item:hover {
  background-color: lightgray;
  color: black;
}

.current {
  background-color: black;
  color: white;
}
</style>
