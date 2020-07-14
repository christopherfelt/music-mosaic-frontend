<template>
  <div class="browse">
    <div class="">
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
            href="#pills-genre"
            role="tab"
            aria-controls="pills-genre"
            aria-selected="true"
          >
            <small class="small-font"> Genre </small></a
          >
        </li>
        <li class="nav-item pill-style">
          <a
            class="nav-link py-0 px-1"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-subscribers"
            role="tab"
            aria-controls="pills-subscribers"
            aria-selected="false"
          >
            <small class="small-font"> Popular </small></a
          >
        </li>
        <li class="nav-item pill-style">
          <a
            class="nav-link py-0 px-1"
            id="pills-contact-tab"
            data-toggle="pill"
            href="#pills-info"
            role="tab"
            aria-controls="pills-info"
            aria-selected="false"
          >
            <small class="small-font">Info</small>
          </a>
        </li>
      </ul>
    </div>
    <div class="">
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-genre"
          role="tabpanel"
          aria-labelledby="pills-genre-tab"
        >
          <Genres />
        </div>
        <div
          class="tab-pane fade"
          id="pills-subscribers"
          role="tabpanel"
          aria-labelledby="pills-subscribers-tab"
        >
          <h6>Subscribers</h6>
        </div>
        <div
          class="tab-pane fade"
          id="pills-info"
          role="tabpanel"
          aria-labelledby="pills-info-tab"
        >
          <h6>Info</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Genres from "@/components/genres";
export default {
  name: "browse",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    Genres,
  },
};
</script>

<style scoped>
.small-font {
  font-size: x-small;
}

.pbActive {
  background-color: black;
  color: white;
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
