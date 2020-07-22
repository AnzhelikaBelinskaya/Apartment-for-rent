<template>
  <div class="apart__container">
    <Gallery />
    <div class="description__container">
      <Description :title="titlesText.welcome" :content="descriptionText.description" />
      <yandexMap
        :component="$options.apart"
        :places="$options.apart.places"
        :markerIcon="$options.apart.markerIcon"
      />
    </div>
    <div class="pros__container">
      <Description
        v-for="pro in prosText"
        :key="pro.title"
        :isRed="true"
        :title="pro.title"
        :content="pro.content"
      />
    </div>
    <div class="icon__title">{{titlesText.facilities}}</div>
    <div class="icon__container">
      <div class="icon-block" v-for="icon in $options.icons" :key="icon.id">
        <img :src="icon.url" :alt="icon.alt" :title="icon.alt" />
      </div>
    </div>
    <a
      class="button__book"
      href="https://www.airbnb.ru/rooms/40915648?s=67&sharer_id=266461835&unique_share_id=c3a0e65f-921c-4d55-a16d-80b70684cdc2"
      target="_blank"
    >{{titlesText.book}}</a>
  </div>
</template>

<script>
import yandexMap from "./Map";
import Description from "./Description.vue";
import { apart } from "../data/apart.data";
import { pros } from "../data/pros.data";
import { icons } from "../data/icons.data";
import Gallery from "./Gallery";
export default {
  apart,
  pros,
  icons,
  description: apart.description,
  components: {
    yandexMap,
    Gallery,
    Description
  },
  data: function() {
    return {
      titles: {
        "ru-RU": {
          welcome: "Добро пожаловать в Сочи!",
          facilities: "Удобства",
          book: "Бронировать"
        },
        "en-US": {
          welcome: "Welcome to Sochi!",
          facilities: "Facilities",
          book: "Book now!"
        }
      }
    };
  },
  computed: {
    descriptionText: function() {
      return apart[this.$store.state.lang];
    },
    titlesText: function() {
      return this.titles[this.$store.state.lang];
    },
    prosText: function() {
      return pros[this.$store.state.lang];
    }
  }
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