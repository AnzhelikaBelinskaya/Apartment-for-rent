<template>
  <div class="map__container" :component="component" :places="places">
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
      <ymap-marker
        v-for="(point,index) in places"
        :key="index"
        :coords="point.coords"
        :icon="point.markerIcon"
        :markerId="index"
        :balloon="point.balloon"
      ></ymap-marker>
    </yandex-map>
  </div>
</template>


<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
  props: ["component", "places"],
  components: { yandexMap, ymapMarker },
  data: function() {
    return this.component.mapSettings;
  }
};
</script>
<style lang="scss">
.map__container {
  height: 35em;
  width: 35em;
  border: 1px solid white;
}
</style>