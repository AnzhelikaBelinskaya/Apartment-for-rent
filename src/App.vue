<template>
  <div id="app">
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

  watch: {
    dark() {
      const bg = this.dark ? "rgb(78, 62, 54)" : "rgba(255, 255, 255, 0.6)";
      const lighterbg = this.dark ? " rgba(218, 160, 73, 0.11)" : "rgba(85, 55, 10, 0.1)";
      const txt = this.dark ? "rgba(255, 255, 255, 0.6)" : "rgb(87, 56, 10)";
      const titlescolor = this.dark ? "rgba(255, 255, 255, 0.6)" : "rgb(87, 56, 10)"
      document.documentElement.style.setProperty("--bg", bg);
      document.documentElement.style.setProperty("--lighterbg", lighterbg);
      document.documentElement.style.setProperty("--txt", txt);
      document.documentElement.style.setProperty("--titles", titlescolor)
    },
  },
};
</script>

<style lang="scss">
:root {
  --bg: $lighter-primary-color;
  --txt: $font-color;
  --lighterbg: rgba(85, 55, 10, 0.1)
}

#app {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  color: var(--txt);
  background-color: var(--bg);
}
.main__container {
  margin: 10px 40px;
  background-color: var(--bg);
}
</style>
