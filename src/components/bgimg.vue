<template>
  <div class="bgimg">fuck fufasl;kdjfl;kasjdf;lkjjasj;dlkfjas;l,dkfh;lja</div>
</template>

<script>
export default {
  name: "bgimg",
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/sunsetmoon.jpg")})`,
      },
    };
  },
  computed: {},
  methods: {},
  components: {},
};
</script>

<style scoped>
.bgimg {
  background-color: black;
  height: 100vh;
}
</style>
