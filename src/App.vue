<template>
  <div id="app" >
    <div class="main__background"></div>
    <NavBar :isFooter="false" :isHidden="false" :isDark="isDark" @switchMode='switchMode' />
    <router-view class="main__container"></router-view>
    <Modal v-if="showModal">
      <Feedback />
    </Modal>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Feedback from "./components/Feedback.vue";
import Footer from "./components/Footer.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    Feedback,
    Modal,
  },
  data() {
    return {
      isDark: false,
    };
  },
  computed: {
    showModal() {
      return this.$route.query.name == "showModal";
    },
  },
  methods: {
    switchMode() {
      this.isDark = !this.isDark;
      this.switchTheme();
    },
    switchTheme() {
      const bg = this.isDark
        ? "rgba(78, 62, 54, 0.5)"
        : "rgba(255, 255, 255, 0.5)";

      const txt = this.isDark ? "rgba(255, 255, 255, 0.6)" : "rgb(87, 56, 10)";
      const titlescolor = this.isDark
        ? "rgba(255, 255, 255, 0.6)"
        : "rgb(87, 56, 10)";
      const modal = this.isDark ? "rgb(77, 72, 70)" : "rgb(255, 255, 255)";
      document.body.style.setProperty("--bg", bg);
      document.body.style.setProperty("--txt", txt);
      document.body.style.setProperty("--titles", titlescolor);
      document.body.style.setProperty("--modal", modal);
    },
  },

  mounted: function () {
    this.isDark = window.matchMedia("(prefers-color-scheme: isDark)").matches;
    this.switchTheme();
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
