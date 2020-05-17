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
    <div class="icon__title">Удобства</div>
    <div class="icon__container">
      <div class="icon-block" v-for="icon in $options.icons" :key="icon">
        <img :src="icon.url" :alt="icon.alt" :title="icon.alt" />
      </div>
    </div>
    <a
      class="button__book"
      href="https://www.airbnb.ru/rooms/40915648?s=67&sharer_id=266461835&unique_share_id=c3a0e65f-921c-4d55-a16d-80b70684cdc2"
    >Бронировать</a>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import VueGallery from "./components/Gallery.vue";
import yandexMap from "./components/Map.vue";
import MainInfo from "./components/MainInfo.vue";
import { mainInfo } from "./data/main-info.data";
import Footer from "./components/Footer.vue";

export default {
  description: mainInfo.description,
  pros: mainInfo.pros,
  icons: mainInfo.icons,
  name: "App",

  components: {
    NavBar,
    VueGallery,
    yandexMap,
    MainInfo,
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
.main-content {
  margin: 10px 40px;
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
    margin-top: 20%;
  }
}
.button__book {
  display: block;
  width: 200px;
  height: 70px;
  background-color: $lighter-red;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  line-height: 70px;
  margin: 50px auto;
  font-size: 20px;

  &:hover {
    background-color: $red;
  }
}
</style>
