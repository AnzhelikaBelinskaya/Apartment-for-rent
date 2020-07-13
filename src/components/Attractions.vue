<template>
  <div class="attractions">
    <div class="attractions__header">Что посетить?</div>
    <select type="select" class="attractions__select">
      <option value class="attractions__option">Горы</option>
      <option value class="attractions__option">Парки</option>
      <option value class="attractions__option">Рестораны</option>
    </select>
    <div class="attractions__container">
      <div class="attractions__item-container">
        <AttractionItem
          class="attractions__item"
          v-for="(place, index) in places"
          :key="index"
          :title="place.header"
          :content="place.body"
          :type="place.footer"
          :address="place.address"
        />
      </div>
      <yandexMap class="attractions__map-container" :component="$options.attractions" />
    </div>
  </div>
</template>

<script>
import yandexMap from "./Map";
import AttractionItem from "./AttractionItem";
import { attractions } from "../data/attractions.data";
export default {
  attractions,
  components: {
    AttractionItem,
    yandexMap
  },
  computed: {
    places: function() {
      return attractions.places.map(item => item.balloon);
    }
  }
};
</script>


<style scoped lang='scss'>
.attractions {
  padding: 2em 5em;
}
.attractions__container {
  @include flexrow(space-between);
}
.attractions__item-container {
  @include flexrow(space-between);
  flex-wrap: wrap;
}
</style>