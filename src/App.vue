<template>
  <div id="app">
    <NavBar />
    <Carousel />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Carousel from './components/Carousel.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Carousel
  }
}
</script>
