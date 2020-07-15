<template>
  <div class="attractions">
    <div class="attractions__header">Что посетить?</div>
    <select
      type="select"
      class="attractions__select"
      @change="switchType($event)"
      v-model="selectedType"
    >
      <option value="Mountains" class="attractions__option">Горы</option>
      <option value="Parks" class="attractions__option">Парки</option>
      <option value="Restaurants" class="attractions__option">Рестораны</option>
      <option value="Waterfalls" class="attraction__option">Водопады</option>
      <option value="Activities" class="attraction__option">Развлечения</option>
    </select>
    <div class="attractions__container">
      <div class="attractions__item-container">
        <AttractionItem
          v-for="(card, index) in cards"
          :imageSrc="card.imageSrc"
          :key="index"
          :title="card.header"
          :content="card.body"
          :type="card.footer"
          :address="card.address"
        />
      </div>
      <yandexMap
        class="attractions__map-container"
        :markerIcon="markerIcon"
        :component="$options.attractions"
        :places="places"
      />
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
  data: function() {
    return { selectedType: "Parks" };
  },
  computed: {
    places: function() {
      return attractions.places.filter(
        item => item.balloon.footer === this.selectedType
      );
    },
    cards: function() {
      return this.places.map(item => item.balloon);
    },
    markerIcon: function() {
      return attractions.icons.filter(icon => icon.type === this.selectedType)[0];
    }
  },

  methods: {
    switchType: function(event) {
      this.selectedType = event.target.value;
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
  height: 35vw;
}
.attractions__item-container {
  @include flexcol(flex-start);
  flex-wrap: no-wrap;
  min-width: 55%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }
}
</style>