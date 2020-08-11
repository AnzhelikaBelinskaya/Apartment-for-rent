<template>
  <div class="attractions">
    <div class="attractions__header">
      {{ $options.attrTitles.header | translate }}
    </div>
    <select
      type="select"
      class="attractions__select"
      @change="switchType($event)"
      v-model="selectedType"
    >
      <option value="Mountains" class="attractions__option">
        {{ $options.attrTitles.select.mountains | translate }}
      </option>
      <option value="Parks" class="attractions__option">
        {{ $options.attrTitles.select.parks | translate }}
      </option>
      <option value="Restaurants" class="attractions__option">
        {{ $options.attrTitles.select.restaurants | translate }}
      </option>
      <option value="Waterfalls" class="attraction__option">
        {{ $options.attrTitles.select.waterfalls | translate }}
      </option>
      <option value="Activities" class="attraction__option">
        {{ $options.attrTitles.select.activities | translate }}
      </option>
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
import yandexMap from './Map'
import AttractionItem from './AttractionItem'
import { attractions } from '../data/attractions.data'
import { titles } from '../data/titles.data'
export default {
  attractions,
  attrTitles: titles.attractions,
  components: {
    AttractionItem,
    yandexMap,
  },
  data: function() {
    return { selectedType: 'Parks' }
  },
  computed: {
    places: function() {
      return attractions.places.filter(
        (item) => item.balloon.footer === this.selectedType
      )
    },
    cards: function() {
      return this.places.map((item) => item.balloon)
    },
    markerIcon: function() {
      return attractions.icons.filter(
        (icon) => icon.type === this.selectedType
      )[0]
    },
  },

  methods: {
    switchType: function(event) {
      this.selectedType = event.target.value
    },
  },
}
</script>

<style scoped lang="scss">
.attractions {
  padding: 2vw 5vw;
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
  margin: 1vw;

  &::-webkit-scrollbar {
    width: 1vw;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }
}
</style>
