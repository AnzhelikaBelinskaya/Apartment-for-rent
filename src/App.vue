<template>
  <div id="app"  >
    <NavBar :isFooter='false' :isHidden='false'/>
    <router-view class="main__container" ></router-view>
    <Footer/>
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
