<template>
  <div id="app">
    <div class="main__background"></div>
    <NavBar :isFooter="false" :isHidden="false" />

    <router-view class="main__container"></router-view>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  computed: {
    dark: function () {
      return this.$store.state.dark;
    },
  },
  mounted: function () {
    this.$store.state.dark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  },
  watch: {
    dark() {
      const bg = this.dark
        ? "rgba(78, 62, 54, 0.5)"
        : "rgba(255, 255, 255, 0.3)";

      const txt = this.dark ? "rgba(255, 255, 255, 0.6)" : "rgb(87, 56, 10)";
      const titlescolor = this.dark
        ? "rgba(255, 255, 255, 0.6)"
        : "rgb(87, 56, 10)";
      document.documentElement.style.setProperty("--bg", bg);
      document.documentElement.style.setProperty("--txt", txt);
      document.documentElement.style.setProperty("--titles", titlescolor);
    },
  },
};
</script>

<style lang="scss">
:root {
  --bg: rgba(255, 255, 255, 0.3);
  --txt: $font-color;
}

#app {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  color: var(--txt);
  background-color: var(--bg);
   width: auto;
}

.main__container {
 margin: 0 auto;
  background-color: var(--bg);
  @include mobile {
    
    width: auto;
  }
}

.main__background {
  background-image: url("/img/paralax.jpg");
  background-repeat: no-repeat;
  background-size: 110%;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: -5;
  @include mobile {
    height: 100vh;
    background-size: cover;
  }
}
</style>
