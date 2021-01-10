<template>
  <div class="attractions">
    <CustomSelect
      :select="$options.select"
      :defaultOption="this.selectedType"
      @selectOption="switchType"
    />

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
        :markerIcon="$options.attractions.icon"
        :component="$options.attractions"
        :places="places"
      />
    </div>
  </div>
</template>

<script>
import yandexMap from "./Map";
import AttractionItem from "./AttractionItem";
import CustomSelect from "./CustomSelect";
import { attractions } from "../data/attractions.data";
import { titles } from "../data/titles.data";
export default {
  attractions,
  select: titles.attractions.select,
  components: {
    AttractionItem,
    yandexMap,
    CustomSelect,
  },
  data: function () {
    return { selectedType: "Nature" };
  },
  computed: {
    places: function () {
      if (this.selectedType === "All") {
        return attractions.places;
      } else {
        return attractions.places.filter(
          (item) => item.type === this.selectedType
        );
      }
    },
  },

  methods: {
    switchType(id) {
      this.selectedType = id;
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
