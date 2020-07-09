<template>
  <li @click="getVideos">
    {{ subreddit }}
  </li>
</template>

<script>
export default {
  name: "list-item",
  data() {
    return {};
  },
  props: ["subreddit"],
  computed: {
    getVideos(subreddit) {
      this.$store.dispatch("getSubredditVideos", this.subreddit);
    },
  },
  methods: {},
  components: {},
  watch: {},
};
</script>

<style scoped></style>
