<template>
  <div id="app">
    <NavBar />
    <VueGallery />
    <div class="main-content">
      <MainInfo title="Добро пожаловать в Сочи!" :content="$options.description" />
      <yandexMap />
    </div>
    <div class="pros__container">
      <MainInfo
        v-for="pro in $options.pros"
        :key="pro"
        :isRed="true"
        :title="pro.title"
        :content="pro.content"
      />
    </div>
    <div class="icon__title">
        Удобства
    </div>
    <div class="icon__container">
        <div class="icon-block" v-for="icon in $options.icons" :key="icon">
        <img :src="icon.url" :alt='icon.alt' :title='icon.alt' />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import VueGallery from "./components/gallery.vue";
import yandexMap from "./components/map.vue";
import MainInfo from "./components/MainInfo.vue";
import { mainInfo } from "./data/main-info.data";

export default {
  description: mainInfo.description,
  pros: mainInfo.pros,
  icons: mainInfo.icons,
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
  margin: 10px 40px;
  font-family: "Montserrat", sans-serif;
  color: $font-color;
}
.main-content {
  @include flexrow(space-around);
  background-color: $lighter-primary-color;
  padding: 30px 10px;
}
.pros__container {
  @include flexrow(space-between);
  margin: 50px auto;
  width: 70%;
  flex-wrap: wrap;
}
.icon__title {
  color: $red;
  font-size: 20px;
  text-align: center;
  margin: 20px;
  font-weight: 600;
  

}
.icon__container {
  @include flexrow(center);

}
.icon-block {
  width: 65px;
  height: 65px;
  border: 1px solid $lighter-font-color;
  margin: 10px;
  text-align: center;
  

  img {
    width: 60%;
    height: 60%;
    margin-top: 20%;;
  }
}
</style>
