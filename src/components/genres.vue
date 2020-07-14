<template>
  <div class="genre mt-2">
    <div>
      <ul
        class="nav nav-pills d-flex justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item pill-style">
          <a
            class="nav-link active py-0 px-1"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-Classical"
            role="tab"
            aria-controls="pills-Classical"
            aria-selected="true"
          >
            <small class="small-font"> {{ genres[0] }} </small></a
          >
        </li>
        <li
          v-for="genre in genres.slice(1)"
          :key="genre"
          class="nav-item pill-style"
        >
          <a
            class="nav-link py-0 px-1"
            :id="genre + '-tab'"
            data-toggle="pill"
            :href="'#pills-' + genre"
            role="tab"
            aria-controls="pills-stuff"
            aria-selected="false"
          >
            <small class="small-font"> {{ genre }} </small></a
          >
        </li>
      </ul>
    </div>
    <div>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-Classical"
          role="tabpanel"
          aria-labelledby="pills-Classical-tab"
        >
          Classical Stuff
        </div>
        <div
          class="tab-pane fade show"
          id="pills-Electronic"
          role="tabpanel"
          aria-labelledby="pills-
          Electronic-tab"
        >
          Rock and Metal stuff Need to fix genres with slashes
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "genre",
  data() {
    return {};
  },
  computed: {
    genres() {
      return this.$store.state.genres;
    },
    subreddits() {
      return this.$store.state.subreddits["Classical"];
    },
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
.small-font {
  font-size: xx-small;
}

.nav-pills .nav-link:not(.active) {
  background-color: white;
  color: gray;
}

.nav-pills .nav-link {
  background-color: black;
  color: white;
  border-radius: 0%;
}
</style>
