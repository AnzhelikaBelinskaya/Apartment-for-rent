<template>
  <div class="attraction__item">
    <div class="attraction__description-container">
      <img :src="imageSrc" alt class="attraction__image" />
      <div class="attraction__text">
        <div class="attraction__title">{{ title }}</div>
        <div class="attraction__type">{{ $options.attrTitles.category | translate }} : {{ type }}</div>
        <div class="attraction__description">{{ content }}</div>
        <div class="attraction__address">{{ address }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { titles } from "../data/titles.data";
export default {
  props: ["title", "content", "type", "address", "imageSrc"],
  attrTitles: titles.attractions,
};
</script>

<style scoped lang="scss">
.attraction__item {
  background-color: var(--bg);
  border-radius: 10px;
  padding: 1vw;
  width: 90%;
  margin: 1vw;
  box-shadow: -3px 3px 5px 0px $hover-font-color;
  &:hover {
    transform: scale(1.02);
  }
  @include mobile {
    width: 95%;
    padding: 10px;
    margin: 5px 0;
  }
}

.attraction__text {
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }
  padding: 0.5vw;
  height: 8vw;
  @include mobile {
    padding: 5px;
    height: 80%;
  }
}
.attraction__title {
  font-size: 1.2vw;
  text-align: center;
  font-weight: 700;
  background-color: var(--ligherbg);
  border-radius: 5px;
  padding: 0.3vw;
  width: 100%;
  @include mobile {
    font-size: 18px;
    padding: 3px;
  }
}
.attraction__description-container {
  @include flexrow(flex-start);
  align-items: flex-start;
}

.attraction__image {
  border-radius: 5px;
  box-shadow: 0px 0px 3px 3px rgba(255, 255, 255, 0.5);
  width: 8vw;
  height: 8vw;
  @include mobile {
    width: 20vw;
    height: 20vw;
    box-shadow: none;
  }
  .attraction__description {
    font-size: 14px;
    text-align: justify;
  }
}
</style>
