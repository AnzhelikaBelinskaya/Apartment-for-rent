<template>
  <div id="app"  >
    <NavBar @switchLang="onSwitchLang" :lang="lang"/>
    <router-view class="main__container" :lang="lang"></router-view>
    <Footer :lang="lang"/>
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
  },

  data: function() {
    return {
      lang: "ru"
    }
  },
  methods: {
    onSwitchLang(data) {
      return this.lang = data;
    }
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
.main__container {
  margin: 10px 40px;
  background-color: $lighter-primary-color;
}
</style>
