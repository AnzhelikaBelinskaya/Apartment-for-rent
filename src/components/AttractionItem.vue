<template>
  <div class="attraction__item">
    <div class="attraction__title">{{ title }}</div>
    <div class="attraction__type">{{type}}</div>
    <img src="" alt="" class="attrction__image">
    <div class="attraction__description">{{content}}</div>
    <div class="attraction__address">{{address}}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "type", "address"]
};
</script>

<style scoped lang="scss">
.attraction__item {
  padding: 1em;
  line-height: 2em;
  white-space: pre-wrap;
  text-align: justify;
  max-width: 45%;

  .attraction__title {
    margin: 0 1em 1em 1em;
    font-size: 20px;
    text-align: center;
    font-weight: 500;
  }
 
}
</style>