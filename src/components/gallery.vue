<template>
  <div class="gallery__container">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
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
          '/img/apart-4.jpg',
          '/img/apart-5.jpg',
          
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
  margin: 50px 0;
  display: flex;
}
  .image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
    border-radius: 5px;
  
    &:hover {
      border: 1px solid $trans-blue;
    }
  }
</style> 