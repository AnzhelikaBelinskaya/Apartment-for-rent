<template>
  <div class="nav-bar" :class="{'nav-bar_column':isFooter}">
    <div class="nav-bar__logo" :class="{'nav-bar__logo_hidden': isHidden}">
      <img src="/img/Logo3.png" />
    </div>
    <router-link :to="{name:'Apart'}" class="nav-bar__button">Главная</router-link>
   <router-link :to="{name:'Transport'}" class="nav-bar__button">Как добраться</router-link>
    <router-link :to="{name:'Sightseeings'}" class="nav-bar__button">Что посетить</router-link>
  </div>
</template>

<script>
export default {
  props: ["isFooter", "isHidden"],
 
};
</script>

<style scoped lang="scss">
.nav-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid $lighter-primary-color;
    padding: 1em;

&__button {
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
.nav-bar__logo{
  justify-self: flex-end;
  margin-right: auto;
  &_hidden {
    display: none;
  }
}
.no-border {
  border: none;
}
.nav-bar_column {
  @include flexcol(flex-start);

  padding: 50px 20px;
  .nav-bar__button {
    font-size: 16px;
    text-decoration: underline;
  }
}
</style>