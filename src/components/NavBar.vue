<template>
  <div class="nav-bar" :class="{ 'nav-bar_column': isFooter }">
    <div class="nav-bar__logo" :class="{ 'nav-bar__logo_hidden': isHidden }">
      <router-link :to="{ name: 'Apart' }">
        <img class="nav-bar__logo-img" src="/img/Logo3.png" />
      </router-link>
    </div>
    <router-link :to="{ name: 'Apart' }" class="nav-bar__button">
      {{
      $options.navTitles.home | translate
      }}
    </router-link>
    <router-link :to="{ name: 'Transport' }" class="nav-bar__button">
      {{
      $options.navTitles.transport | translate
      }}
    </router-link>
    <router-link :to="{ name: 'Attractions' }" class="nav-bar__button">
      {{
      $options.navTitles.attractions | translate
      }}
    </router-link>
    <div class="nav-bar__button" @click="showModal">
      {{
      $options.navTitles.feedback | translate
      }}
    </div>
    <div class="lang-switcher__container" :class="{ 'lang-switcher__container--hidden': isHidden }">
      <img src="/img/icons/ru.png" class="lang-switcher__button" @click="setLang('ru-RU')" />
      <img src="/img/icons/eng.png" class="lang-switcher__button" @click="setLang('en-US')" />
    </div>
    <div
      class="theme-switcher__container"
      :class="{ 'theme-switcher__container--hidden': isHidden }"
    >
      <div
        class="theme-switcher__toggler"
        :class="{'theme-switcher__toggler-dark': isDark}"
        @click="switchMode"
      ></div>
      <div class="theme-switcher__modes">
        <img class="theme-switcher__icon" src="img/icons/sun.png" />
        <img class="theme-switcher__icon" src="img/icons/moon.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { titles } from "../data/titles.data";
export default {
  props: ["isFooter", "isHidden"],
  navTitles: titles.nav,
  computed: {
    isDark: function () {
      return this.$store.state.dark;
    },
  },
  methods: {
    setLang: function (lang) {
      this.$store.commit("setLang", lang);
    },
    switchMode: function () {
      this.$store.commit("switchMode");
    },
     showModal: function () {
      this.$router.push({path: this.$router.path, query:{name: 'showModal'}});
    },
  },
};
</script>

<style scoped lang="scss">
.nav-bar {
  @include flexrow(flex-end);
  align-items: center;
  border-bottom: 1px solid $lighter-primary-color;
  padding: 1vw;
  background-color: var(--bg);
  @include mobile {
    @include flexcol(flex-start);
    align-items: center;
  }

  &__button {
    padding: 0.4vw 0.8vw;
    font-size: 1.2vw;
    padding: 0.5vw 1.5vw;
    border-left: 1px solid $lighter-primary-color;
    color: var(--titles);
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      background-color: $hover-font-color;
      border-radius: 5px;
    }
    @include mobile {
      border: none;
      font-size: 16px;
      line-height: 50px;
      text-decoration: none;
    }
  }
}
.nav-bar__logo {
  justify-self: flex-end;
  margin-right: auto;
  &_hidden {
    display: none;
  }
  @include mobile {
    margin-right: 0;
  }
  &-img {
    @include mobile {
      width: 50vw;
    }
  }
}
.no-border {
  border: none;
}
.nav-bar_column {
  @include flexcol(flex-start);
  padding: 4vw 2vw;
  background-color: transparent;
}

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
.lang-switcher__container--hidden {
  display: none;
}

.theme-switcher__container {
  display: inline-block;
  position: relative;
  border-radius: 30px;
  box-shadow: -4px 4px 10px -2px rgba(85, 55, 10, 0.302);
  width: 4vw;
  height: 1.5vw;
  margin: 0 0.5vw;
  @include mobile {
    width: 80px;
    height: 40px;
  }
}

.theme-switcher__container--hidden {
  display: none;
}

.theme-switcher__modes {
  @include flexrow(space-between);
  vertical-align: middle;
  height: 1.5vw;
  @include mobile {
    height: 40px;
  }
}

.theme-switcher__toggler {
  background-color: $lighter-font-color;
  width: 2vw;
  height: 1.5vw;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 100px;
  @include mobile {
    width: 40px;
    height: 40px;
  }
  cursor: pointer;
  &-dark {
    left: 50%;
  }
}

.theme-switcher__icon {
  width: 1.2vw;
  height: 1.2vw;
  margin: auto;
  @include mobile {
    width: 16px;
    height: 16px;
  }
}
</style>
