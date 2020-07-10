<template>
  <div class="search">
    <form class="">
      <div class="">
        <input class="mr-2" type="text" v-model="query" />
        <span @click="searchSubreddit"
          ><i class="fas fa-search fa-xs"></i
        ></span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      query: "",
    };
  },
  computed: {},
  methods: {
    searchSubreddit() {
      this.$store.dispatch("getSubredditVideos", this.query);
      this.query = "";
    },
  },
  components: {},
};
</script>

<style scoped>
input {
  height: 20px;
  width: 150px;
}
</style>
