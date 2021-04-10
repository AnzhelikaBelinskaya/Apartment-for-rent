<template>
  <div
    class="lang-switcher__container"
  >
    <img
      src="/img/icons/ru.png"
      class="lang-switcher__button"
      @click="setLang('ru-RU')"
    />
    <img
      src="/img/icons/eng.png"
      class="lang-switcher__button"
      @click="setLang('en-US')"
    />
  </div>
</template>
<script>
export default {
methods: {
    setLang: function (lang) {
      this.$store.commit("setLang", lang);
    },
}
}
</script>
<style lang="scss" scoped>
.lang-switcher__container {
  @include flexrow(stretch);
}
.lang-switcher__button {
  box-sizing: border-box;
  width: 3vw;
  height: 2vw;
  padding: 0 0.5vw;
  @include mobile {
    width: 46px;
    height: 40px;
    margin: 20px 10px;
  }
  cursor: pointer;
  &:active {
    border: 1px solid $bg-red;
  }
}
</style>