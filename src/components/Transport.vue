<template>
  <div class="routes">
    <div class="routes__button-container">
      <div
        v-for="(tab, index) in $options.transport"
        :key="tab.id"
        class="routes__button"
        :class="{ 'routes__button-active': index == currentTab.id }"
        @click="switchTab(index)"
      >
        {{ tab.type | translate }}
      </div>
    </div>
    <div class="transport__description-container">
      <img class="routes__image" src="/img/road.jpg" alt />
      <div class="transport__instructions">
        {{ currentTab.instructions | translate }}
      </div>
      <div class="transport__time">
        {{ $options.titles.transport.time | translate }} :
        {{ currentTab.time | translate }}
      </div>
      <div class="transport__cost">
        {{ $options.titles.transport.cost | translate }} :
        {{ currentTab.cost | translate }}
      </div>
      <a class="transport__link" target="_blank" :href="currentTab.link">{{
        currentTab.buttonName | translate
      }}</a>
    </div>
  </div>
</template>

<script>
import { transport } from '../data/transport.data'
import { titles } from '../data/titles.data'
export default {
  transport,
  titles,
  data: function() {
    return {
      currentTab: transport[0],
    }
  },
  methods: {
    switchTab(index) {
      this.currentTab = transport[index]
    },
  },
}
</script>

<style scoped lang="scss">
.routes {
  padding: 2vw;
  background-color: var(--bg);
  @include flexrow(space-around);

  &__button-container {
    @include flexcol(flex-start);
    padding: 5vw 0;

  }

  &__button {
    display: block;
    padding: 1.5vw;
    box-shadow: 4px 4px 20px -2px $lighter-font-color;
    text-align: center;
    margin: 1vw 2vw;
    border-radius: 4px;
    width: 8vw;
    height: 1.2vw;
    cursor: pointer;
    &-active {
      background-color: $lighter-font-color;
    }
  }
  &__image {
    float: right;
    width: 30%;
    height: 40vw;
    border-radius: 2px;
  }
}
.transport {
  &__description-container {
    position: relative;
   
    width: 70%;
    height: 40vw;
    border-radius: 4px;
    padding: 3vw 3vw;
  }
  &__instructions {
    padding: 3vw;
    line-height: 3vw;
    text-align: justify;
    text-indent: 2vw;
    max-width: 60%;
  }
  &__time {
    padding: 1vw;
    color: var(--titlescolor);
  }
  &__cost {
    padding: 1vw;
    color: var(--titlescolor);
  }
  &__link {
    position: absolute;
    bottom: 3vw;
    right: 40%;
    display: block;
    width: 18vw;
    height: 5vw;
    background-color: $lighter-red;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
    line-height: 5vw;
    font-size: 1.4vw;
    &:hover {
      background-color: $red;
    }
  }
}
</style>
