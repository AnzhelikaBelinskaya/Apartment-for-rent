<template>
  <div class="gallery__container">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="gallery__image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>
 
<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    data: function () {
      return {
        images: [
          '/img/main-2.jpg',
          '/img/apart-1.jpg',
          '/img/apart-5.jpg',
          '/img/apart-4.jpg',
          
        ],
        index: null
      };
    },
 
    components: {
      'gallery': VueGallery
    },
  }
</script> 
 
<style scoped lang="scss">
.gallery__container {
  padding: 40px 0;
  margin: 10px 40px;
  display: flex;

}
  .gallery__image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0px 8px 7px -1px rgba(255,255,255,1);
    margin: 5px;
    border-radius: 5px;
  
    &:hover {
     box-shadow: 0px 8px 7px -1px $lighter-primary-color;
    }
  }
</style> 