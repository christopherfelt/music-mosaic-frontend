<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <Home />
  </div>
</template>
<script>
import NavPanel from "@/components/navpanel";
import Home from "./views/Home";

export default {
  name: "App",
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/sunsetmoon.jpg")})`,
      },
    };
  },
  // async beforeCreate() {
  //   await onAuth();
  //   if (this.$auth.isAuthenticated) {
  //     this.$store.dispatch("setBearer", this.$auth.bearer);
  //     this.$store.dispatch("getProfile");
  //   }
  // },
  components: {
    NavPanel,
    Home,
  },
};
</script>

<style>
.wrapper {
  display: flex;
  width: 100%;
}

.appStuff {
  font-family: "Open Sans", sans-serif;
  background: black;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
