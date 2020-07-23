<template>
  <div class="apart__container">
    <Gallery />
    <div class="description__container">
      <Description :title="$options.apartTitles.welcome | translate" :content="$options.apart.description | translate" />
      <yandexMap
        :component="$options.apart"
        :places="$options.apart.places"
        :markerIcon="$options.apart.markerIcon"
      />
    </div>
    <div class="pros__container">
      <Description
        v-for="pro in $options.pros"
        :key="pro.title|translate"
        :isRed="true"
        :title="pro.title|translate"
        :content="pro.content|translate"
      />
    </div>
    <div class="icon__title">{{$options.apartTitles.facilities | translate}}</div>
    <div class="icon__container">
      <div class="icon-block" v-for="icon in $options.icons" :key="icon.id">
        <img :src="icon.url" :alt="icon.alt | translate" :title="icon.alt | translate" />
      </div>
    </div>
    <a
      class="button__book"
      href="https://www.airbnb.ru/rooms/40915648?s=67&sharer_id=266461835&unique_share_id=c3a0e65f-921c-4d55-a16d-80b70684cdc2"
      target="_blank"
    >{{$options.apartTitles.book | translate}}</a>
  </div>
</template>

<script>
import yandexMap from "./Map";
import Description from "./Description.vue";
import { apart } from "../data/apart.data";
import { pros } from "../data/pros.data";
import { icons } from "../data/icons.data";
import { titles } from "../data/titles.data"
import Gallery from "./Gallery";
export default {
  apart,
  pros,
  icons,
  apartTitles: titles.apart,
  components: {
    yandexMap,
    Gallery,
    Description
  },
};
</script>

<style scoped lang="scss">
.apart__container {
  padding-bottom: 2vw;
}
.description__container {
  @include flexrow(space-around);
  padding: 2vw 2vw;
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