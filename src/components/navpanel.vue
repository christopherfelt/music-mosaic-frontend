<template>
  <nav id="sidebar" class="bg-panel">
    <div class="sidebar-header m-3">
      <h5 class="font-color ">Music Mosaic</h5>
    </div>
    <div class="d-flex justify-content-start ml-5">
      <ul class="list-unstyled components ">
        <li class="active ">
          <router-link
            class="remove-underline font-weight-bolder"
            :to="{ name: 'Home' }"
            >Reports</router-link
          >
          <!-- <ul class="list-unstyled pl-2" id="homeSubmenu">
            <li>
              <router-link class="remove-underline" :to="{ name: 'Home' }"
                >All Reports</router-link
              >
            </li>
            <li>
              <a href="#" class="remove-underline">Open Reports</a>
            </li>
            <li>
              <a href="#" class="remove-underline">Closed Reports</a>
            </li>
          </ul> -->
        </li>
        <li>
          <router-link
            class="remove-underline font-weight-bolder"
            :to="{ name: 'Profile' }"
            >Profile</router-link
          >
          <!-- <ul class="list-unstyled pl-2" id="pageSubmenu">
            <li>
              <router-link class="remove-underline" :to="{ name: 'Profile' }"
                >Open Reports</router-link
              >
            </li>
            <li>
              <a href="#" class="remove-underline">Closed Report</a>
            </li>
            <li>
              <a href="#" class="remove-underline">Notes</a>
            </li>
            <li>
              <a href="#" class="remove-underline">Collaborations</a>
            </li>
          </ul> -->
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
  computed: {},
  methods: {},
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
  background-color: rgba(70, 19, 83, 0.01);
}

.font-color {
  color: #e69d75;
}

.stencil {
  font-family: "Allerta Stencil", sans-serif;
}

.remove-underline {
  text-decoration: none;
  color: white;
}
.remove-underline:hover {
  color: lightblue;
}
</style>
