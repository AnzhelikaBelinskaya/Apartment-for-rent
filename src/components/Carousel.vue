<template>
<carousel>
    <slide  class="carousel-slide">
      <img src="/img/IMG_4.jpg">
    </slide>
    <slide class="carousel-slide">
       <img src="\img\IMG_1.jpg">
    </slide>
    <slide class="carousel-slide">
     <img src="\img\IMG_2.jpg">
    </slide>
    
</carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide
}
};
</script>

<style>
  .carousel-slide {
    height: 300px;
    width: 50%;
    border-radius: 15px;
  }

  img {
    max-width: 100%;
  }
</style>