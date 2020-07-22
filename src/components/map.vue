<template>
  <div class="map__container" :component="component" :places="places" >
    <yandex-map
      :settings="{
        apiKey: '10588863-f27e-4023-9c46-f348f5ac6351',
        lang: this.$store.state.lang,
        coordorder: 'latlong',
        version: '2.1'
        }"
      :coords="center"
      :zoom="zoom"
      :markerIcon="markerIcon"
      ymap-class="map__container"
    >
      <ymap-marker
        v-for="(point,index) in places"
        :key="point.id"
        :coords="point.coords"
        :icon="markerIcon"
        :markerId="index"
        :balloon="point.balloon"
      ></ymap-marker>
    </yandex-map>
  </div>
</template>


<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
  props: ["component", "places", "markerIcon"],
  components: { yandexMap, ymapMarker },
  data: function() {
    return this.component.mapSettings;
  }
};
</script>
<style lang="scss">
.map__container {
  height: 35vw;
  width: 35vw;
  border: 1px solid white;
  box-shadow: -4px 4px 10px -2px rgba(85, 55, 10, 0.302);
}
</style>