<template>
  <div id="app">
    <NavBar />
    <VueGallery />
    <div class="main-content">
      <MainInfo />
      <yandexMap/>
    </div>
    

  
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import VueGallery from "./components/gallery.vue";
import yandexMap from "./components/map.vue";
import MainInfo from "./components/MainInfo.vue"



export default {
  name: "App",
  components: {
    NavBar,
    VueGallery,
    yandexMap,
    MainInfo
   
   
  }
};
</script>
<style lang="scss">
#app {
  margin: 10px 50px;
}
.main-content {
  display: flex;
  justify-content: space-between;
}
</style>
