<template>
<div class="map__container">
<yandex-map  :settings="{
        apiKey: '10588863-f27e-4023-9c46-f348f5ac6351',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
        }"
        :coords="center"
        :zoom="zoom"
        ymap-class="map__container" >
        <ymap-marker :coords="coords" :icon="markerIcon"></ymap-marker>
</yandex-map>
</div>
</template>


<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  components: { yandexMap, ymapMarker },
  data: function() {
      return {
    center: [43.619479, 39.718719],
    zoom: 15,
    coords: [43.619268, 39.716908],
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: 'https://image.flaticon.com/icons/png/512/967/967811.png',
      imageSize: [43, 43],
      imageOffset: [0, 0],
      
    }
   
  }
  }
  }
    
</script>
<style lang="scss">
.map__container {
    height: 300px;
    width: 500px;
    border: 1px solid $trans-blue;
    
}

</style>