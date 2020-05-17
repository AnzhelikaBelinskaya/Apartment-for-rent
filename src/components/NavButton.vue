<template>
  <a class="nav-button__container" :href="url">{{ title }}</a>
</template>

<script>
export default {
  props: ["title", "url"]
};
</script>

<style scoped lang="scss">
.nav-button {
  &__container {
    padding: 4px 8px;
    font-size: 20px;
    text-decoration: none;
    padding: 5px 20px;
    border-left: 1px solid $lighter-primary-color;
    color: $font-color;
    cursor: pointer;
    &:hover {
      background-color: $hover-font-color;
      border-radius: 5px;
    }
  }
}
</style>