<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
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
    Footer
  }
};
</script>


<style lang="scss">
#app {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  color: $font-color;
}
</style>
