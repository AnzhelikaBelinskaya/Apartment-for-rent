<template>
  <div class="routes">
    <div class="routes__button-container">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['routes__button', {'routes__button-active': index==currentIndex}]"
        @click="onClick(index, tab)"
      >{{tab}}</div>
    </div>
    <div class="transport__description-container">
      <img class="routes__image" src="/img/road.jpg" alt />
      <div class="transport__instructions">{{currentTransport.instructions}}</div>
      <div class="transport__time">Время в пути: {{currentTransport.time}}</div>
      <div class="transport__cost">Стоимость: {{currentTransport.cost}}</div>
      <a
        class="transport__link"
        target="_blank"
        :href="currentTransport.link"
      >{{currentTransport.buttonName}}</a>
    </div>
  </div>
</template>

<script>
import { transport } from "../data/transport.data";
export default {
  transport,
  props: ["lang"],
  data: function() {
    return {
      currentTab: "Такси",
      currentIndex: 0
    };
  },
  methods: {
    onClick(index, tab) {
      this.currentIndex = index;
      this.currentTab = tab;
    }
  },
  computed: {
    tabs() {
      return this.currentDescription.tabs;
    },
    currentTransport() {
      return this.currentDescription.description[this.currentIndex];
    },
    currentDescription() {
      return transport[this.lang];
    }
  }
};
</script>

<style scoped lang='scss'>
.routes {
  padding: 2em;
  background-color: $lighter-white;
  @include flexrow(space-around);

  &__button-container {
    @include flexcol(flex-start);
    padding: 50px 0;
  }

  &__button {
    display: block;
    padding: 20px;
    box-shadow: 4px 4px 20px -2px $lighter-font-color;
    text-align: center;
    margin: 20px 40px;
    border-radius: 4px;
    width: 100px;
    height: 20px;
    cursor: pointer;
    &-active {
      background-color: $lighter-font-color;
    }
  }
  &__image {
    float: right;
    width: 30%;
    height: 400px;
    border-radius: 2px;
  }
}
.transport {
  &__description-container {
    position: relative;
    background-color: $lighter-primary-color;
    width: 70%;
    height: 400px;
    border-radius: 4px;
    padding: 30px 30px;
  }
  &__instructions {
    padding: 1em;
    line-height: 2em;
    text-align: justify;
    text-indent: 2em;
    max-width: 60%;
  }
  &__time {
    padding: 1em;
    color: $lighter-red;
  }
  &__cost {
    padding: 1em;
    color: $lighter-red;
  }
  &__link {
    position: absolute;
    bottom: 30px;
    right: 40%;
    display: block;
    width: 200px;
    height: 50px;
    background-color: $lighter-red;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    &:hover {
      background-color: $red;
    }
  }
}
</style>