<template>
  <div class="attraction__item">
    <div class="attraction__description-container">
      <img :src="imageSrc" alt class="attraction__image" />
      <div class="attraction__text">
        <div class="attraction__title">{{ title }}</div>
        <div class="attraction__type">Категория: {{type}}</div>
        <div class="attraction__description">{{content}}</div>
        <div class="attraction__address">{{address}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "type", "address", "imageSrc"]
};
</script>

<style scoped lang="scss">
.attraction__item {
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  width: 90%;
  margin: 1em;
  box-shadow: -3px 3px 5px 0px $hover-font-color;
  &:hover {
    transform: scale(1.02);
  }
}

.attraction__text {
  padding: 0.5em;
  height: 8vw;
}
.attraction__title {
  font-size: 1.2em;
  text-align: center;
  font-weight: 700;
  background-color: $lighter-primary-color;
  border-radius: 5px;
  padding: 0.3em;
  width: 100%;
}
.attraction__description-container {
  @include flexrow(flex-start);
  align-items: center;
}

.attraction__image {
  border-radius: 5px;
  box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.5);
  width: 8vw;
  height: 8vw;
}
</style>