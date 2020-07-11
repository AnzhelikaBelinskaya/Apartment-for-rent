<template>
  <div class="gallery__container">
    <gallery :images="images" :index="index" @close="index = null" :options="galleryOptions"></gallery>
    <div class="gallery__preview-wrapper">
      <div
        class="gallery__preview-img"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
      ></div>
    </div>
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
          '/img/main-2.jpg',
          '/img/apart-1.jpg',
          '/img/apart-5.jpg',
          '/img/apart-4.jpg',
          '/img/main-2.jpg',
          '/img/apart-1.jpg',
          '/img/apart-5.jpg',
          '/img/apart-4.jpg',
          
        ],
        index: null,
        galleryOptions: {
          'disableScroll': false
        }
      };
    },
 
    components: {
      'gallery': VueGallery
    },
  }
</script> 
 
<style scoped lang="scss">
.gallery__container {
  width: 100vw;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 40px 0;
  margin: 10px 40px;
  display: flex;

}
  .gallery__preview-img {
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
  .gallery__preview-wrapper {
    display: flex;
  }
  .gallery__preview-img {
    
  }
</style> 