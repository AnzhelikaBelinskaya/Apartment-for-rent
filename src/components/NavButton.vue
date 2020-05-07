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
    font-weight: normal;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 20px;
    text-decoration: none;
    padding: 5px 20px;
    border-left: 1px solid $trans-blue;
   color: $blue;
    cursor: pointer;
  }
}
</style>