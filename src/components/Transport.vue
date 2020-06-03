<template>
  <div class="routes">
    <div class="routes__button-container">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['routes__button', {'routes__button-active': tab===currentTab}]"
        @click="onClick(index, tab)"
      >{{tab}}</div>
    </div>
    <div class="transport__description-container">
      <div class="transport__instructions">{{instructions}}</div>
      <div class="transport__time">Время в пути: {{time}}</div>
      <div class="transport__cost">Стоимость: {{cost}}</div>
      <a class="transport__link"></a>
    </div>
  </div>
</template>

<script>
import { content } from "../data/content.data";
export default {
  data: function() {
    return {
      transport: content.transport,
      currentTab: "Такси",
      currentIndex: 0,
      tabs: ["Такси", "Ласточка", "Автобус", "Каршеринг"]
    };
  },
  methods: {
    onClick(index, tab) {
      this.currentIndex = index;
      this.currentTab = tab;
    }
  },
  computed: {
    instructions() {
      return this.transport[this.currentIndex].instructions;
    },
    time() {
      return this.transport[this.currentIndex].time;
    },
    cost() {
      return this.transport[this.currentIndex].cost;
    }
  }
};
</script>

<style lang='scss'>
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
}
.transport {
  &__description-container {
    background-color: $lighter-primary-color;
    width: 70%;
    border-radius: 4px;
    padding: 50px 20px;
  }
  &__instructions {
    padding: 1em;
    line-height: 2em;
    white-space: pre-wrap;
    text-align: justify;
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
      display: block;
  width: 200px;
  height: 70px;
  background-color: $lighter-red;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  line-height: 70px;
  margin: 50px auto;
  font-size: 20px;
  }
}
</style>