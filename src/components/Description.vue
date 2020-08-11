<template>
  <div class="description">
    <div class="description__title" :class="{ 'description__title-red': isRed }">{{ title }}</div>
    <div class="description__content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "isRed"],
};
</script>

<style scoped lang="scss">
.description {
  padding: 1.5vw;
  line-height: 2vw;
  white-space: pre-wrap;
  text-align: justify;
  max-width: 45%;
  @include mobile {
    max-width: 90%;
    padding: 20px;
    line-height: 16px;
  }

  &__title {
    margin: 0 1vw 1vw 1vw;
    font-size: 1.8vw;
    text-align: center;
    font-weight: 500;
    @include mobile {
      font-size: 18px;
      margin: 0 18px 18px 18px;
    }
  }
  &__title-red {
    color: $red;
    font-weight: 600;
  }
}
</style>
