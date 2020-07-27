<template>
  <div class="nav-bar" :class="{ 'nav-bar_column': isFooter }">
    <div class="nav-bar__logo" :class="{ 'nav-bar__logo_hidden': isHidden }">
      <router-link :to="{ name: 'Apart' }">
        <img src="/img/Logo3.png" />
      </router-link>
    </div>
    <router-link :to="{ name: 'Apart' }" class="nav-bar__button">{{
      $options.navTitles.home | translate
    }}</router-link>
    <router-link :to="{ name: 'Transport' }" class="nav-bar__button">{{
      $options.navTitles.transport | translate
    }}</router-link>
    <router-link :to="{ name: 'Attractions' }" class="nav-bar__button">{{
      $options.navTitles.attractions | translate
    }}</router-link>
    <div
      class="lang-switcher__container"
      :class="{ 'lang-switcher__container--hidden': isHidden }"
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
    <div
      class="theme-switcher__container"
      :class="{ 'theme-switcher__container--hidden': isHidden }"
    >
      <div class="theme-switcher__toggler"></div>
      <div class="theme-switcher__modes">
        <p class="theme-switcher__mode theme-switcher__mode--light">
          {{ $options.navTitles.lightTheme | translate }}
        </p>
        <p class="theme-switcher__mode theme-switcher__mode--dark">
          {{ $options.navTitles.darkTheme | translate }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { titles } from '../data/titles.data'
export default {
  props: ['isFooter', 'isHidden'],
  navTitles: titles.nav,
  methods: {
    setLang: function(lang) {
      this.$store.commit('setLang', lang)
    },
  },
}
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
.nav-bar__logo {
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
}
.nav-bar__button {
  font-size: 16px;
  text-decoration: underline;
}
.lang-switcher__container {
  @include flexrow(stretch);
}
.lang-switcher__button {
  box-sizing: border-box;
  width: 3vw;
  height: 2vw;
  padding: 0 0.5em;
  &:active {
    border: 1px solid $bg-red;
  }
}
.lang-switcher__container--hidden {
  display: none;
}

.theme-switcher__container {
  display: inline-block;
  position: relative;
  border-radius: 100px;
  box-shadow: -4px 4px 10px -2px rgba(85, 55, 10, 0.302);
  width: 7vw;
  height: 2vw;
  margin: 0 0.5vw;
}

.theme-switcher__container--hidden {
  display: none;
}

.theme-switcher__modes {
  @include flexrow(space-between);
  height: 2em;
}
.theme-switcher__mode {
  text-align: center;
  margin: 0;
  line-height: 2vw;
  padding: 0 0.5vw;
  font-size: 12px;
}

.theme-switcher__toggler {
  background-color: $lighter-primary-color;
  width: 3.5vw;
  height: 2vw;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 100px;
  &:active {
    left: 50%;
  }
}
</style>
