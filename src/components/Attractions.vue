<template>
  <div class="attractions">
    <div class="attractions__header">{{ $options.attrTitles.header | translate }}</div>
    <select
      type="select"
      class="attractions__select"
      @change="switchType($event)"
      v-model="selectedType"
    >
      <option
        value="Nature"
        class="attractions__option"
      >{{ $options.attrTitles.select.nature | translate }}</option>
      <option
        value="City"
        class="attractions__option"
      >{{ $options.attrTitles.select.city | translate }}</option>
      <option
        value="Restaurants"
        class="attractions__option"
      >{{ $options.attrTitles.select.restaurants | translate }}</option>
      <option
        value="Activities"
        class="attraction__option"
      >{{ $options.attrTitles.select.activities | translate }}</option>
      
    </select>
    <div class="attractions__container">
      <div class="attractions__item-container">
        <AttractionItem
          v-for="(place, index) in places"
          :imageSrc="place.imageSrc"
          :key="index"
          :title="place.title | translate"
          :content="place.description | translate"
          :address="place.address | translate"
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
import { titles } from "../data/titles.data";
export default {
  attractions,
  attrTitles: titles.attractions,
  components: {
    AttractionItem,
    yandexMap,
  },
  data: function () {
    return { selectedType: "Nature" };
  },
  computed: {
    places: function () {
      return attractions.places.filter(
        (item) => item.type === this.selectedType
      );
    },
    markerIcon: function () {
      return attractions.icons.filter(
        (icon) => icon.type === this.selectedType
      )[0];
    },
  },

  methods: {
    switchType: function (event) {
      this.selectedType = event.target.value;
    },
  },
};
</script>

<style scoped lang="scss">
.attractions {
  padding: 2vw 5vw;
  @include mobile {
    @include flexcol(flex-start);
  }
}
.attractions__container {
  @include flexrow(space-between);
  height: 35vw;
   @include mobile {
    @include flexcol(flex-start);
    height: auto;
    
  }
}
.attractions__item-container {
  @include flexcol(flex-start);
  flex-wrap: no-wrap;
  min-width: 55%;
  overflow-y: scroll;
  margin: 1vw;
  @include mobile {
    height: 25vh;
    width: 100%;
    margin: 20px 0;
  }

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }
}
</style>
