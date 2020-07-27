<template>
  <div class="description">
    <div
      class="description__title"
      :class="{ 'description__title-red': isRed }"
    >
      {{ title }}
    </div>
    <div class="description__content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'content', 'isRed'],
}
</script>

<style scoped lang="scss">
.description {
  padding: 1em;
  line-height: 2em;
  white-space: pre-wrap;
  text-align: justify;
  max-width: 45%;

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
