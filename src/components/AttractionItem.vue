<template>
  <div class="attraction__item">
    <div class="attraction__title">{{ title }}</div>
    <div class="attraction__type">Категория: {{type}}</div>
    <img src="" alt="" class="attraction__image">
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
  background-color: $bg-red;
  border-radius: 4px;
  padding: 1em;
  height: 10em;
  width: 90%;
  margin: 1em;

  .attraction__title {
    margin: 0 1em 1em 1em;
    font-size: 1.2em;
    text-align: center;
    font-weight: 500;
  }
 
}
</style>