<template>
  <div class="home wrapper" :style="cssProps">
    <NavPanel />
    <!-- <bg-img /> -->
  </div>
</template>

<script>
import NavPanel from "@/components/navpanel";
import BgImg from "@/components/bgimg";
export default {
  name: "Home",
  components: {
    NavPanel,
    BgImg,
  },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/sunsetmoon.jpg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    };
  },
};
</script>

<style lang="css">
.home {
  font-family: "Open Sans", sans-serif;
}

.wrapper {
  display: flex;
  width: 100%;
  height: 100vh;
}
</style>
