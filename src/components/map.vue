<template>
  <div class="map__container">
    <div class="map__type-switchers-wrapper">
      <div
        class="map__type-switcher"
        :class="{'map__type-switcher--active': isTypeSelected('to_see')}"
        @click="selectType('to_see')"
      >Посмотреть</div>
      <div
        class="map__type-switcher"
        :class="{'map__type-switcher--active': isTypeSelected('to_eat')}"
        @click="selectType('to_eat')"
      >Поесть</div>
    </div>
    <yandex-map
      :settings="{
        apiKey: '10588863-f27e-4023-9c46-f348f5ac6351',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
        }"
      :coords="center"
      :zoom="zoom"
      ymap-class="map__container"
    >
      <ymap-marker :coords="coords" :icon="markerIcon" markerId="1" key="mock"></ymap-marker>
      <ymap-marker
        v-for="(place, index) in points"
        :key="index"
        :coords="place"
        :icon="markerIcon"
        :markerId="index"
      ></ymap-marker>
    </yandex-map>
  </div>
</template>


<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import { sightseeings } from "../data/sightseeings.data";
export default {
  components: { yandexMap, ymapMarker },
  data: function() {
    return {
      center: [43.619479, 39.718719],
      zoom: 15,
      coords: [43.619268, 39.716908],
      markerIcon: {
        layout: "default#imageWithContent",
        imageHref: "/img/marker.png",
        imageSize: [31, 46],
        imageOffset: [0, -46]
      },
      selectedType: null
    };
  },

  computed: {
    points: function() {
      return sightseeings
        .filter(place => place.type === this.selectedType)
        .map(place => [place.long, place.lat]);
    }
  },

  methods: {
    isTypeSelected: function(type) {
      return this.selectedType === type;
    },

    selectType: function(type) {
      this.selectedType = type;
    }
  }
};
</script>
<style lang="scss">
.map__container {
  height: 400px;
  width: 500px;
  border: 1px solid white;
}
.map__type-switchers-wrapper {
  display: flex;
  justify-content: space-around;
  padding: 5px 10px;
  background: rgb(233, 193, 156);
  border-radius: 4px;
}
.map__type-switcher {
  padding: 10px;
  background: rgb(123, 198, 211);
  border-radius: 4px;
  cursor: pointer;
  &--active {
    background: rgb(218, 86, 25);
  }
}
</style>