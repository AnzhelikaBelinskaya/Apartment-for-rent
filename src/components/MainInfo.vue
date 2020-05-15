<template>
  <div class="info__container">
    <div class="info__title" :class="{'info__title-red': isRed}">{{title}}</div>
    <div class="info__content">{{content}}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "isRed"]
};
</script>

<style scoped lang="scss">
.info {
  &__container {
    padding: 1em;
    line-height: 2em;
    white-space: pre-wrap;
    text-align: justify;
    max-width: 45%;
  }
  &__title {
    margin: 0 1em 1em 1em;
    font-size: 20px;
    text-align: center;
    font-weight: 500;
  }
  &__title-red {
    color: $red;
    font-weight: 600;
  }
}
</style>