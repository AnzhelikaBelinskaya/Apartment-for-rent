<template>
  <div id="app" >
    <div class="main__background"></div>
    <NavBar :isFooter="false" :isHidden="false" />
    <router-view class="main__container"></router-view>
    <Modal v-if="showModal">
      <Feedback />
    </Modal>
    <Footer :isHidden="true"/>
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
  
  computed: {
    showModal() {
      return this.$route.query.name == "showModal";
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
  @include mobile {
    width: auto;
  }
}

.main__background {
  background-image: url("/img/paralax.jpg");
  background-repeat: no-repeat;
  background-size: 150%;
  position: fixed;
  width: 100%;
  height: 110vh;
  z-index: -5;
  @include mobile {
    height: 100vh;
    background-size: cover;
  }
}
</style>
