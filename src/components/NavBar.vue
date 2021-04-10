<template>
  <div class="nav-bar" :class="{ 'nav-bar_column': isFooter }">
    <div class="nav-bar__logo" :class="{ 'nav-bar__logo_hidden': isFooter }">
      <router-link :to="$options.routes[0]">
        <img class="nav-bar__logo-img" src="/img/Logo3.png" />
      </router-link>
    </div>
    <router-link
      v-for="route in $options.routes"
      :key="route.name"
      :to="route"
      class="nav-bar__button"
      
    >
      {{ $options.navTitles[route.name] | translate }}
    </router-link>
    <div class="nav-bar__button" @click="showModal">
      {{ $options.navTitles.feedback | translate }}
    </div>
    <lang-switcher v-if="!isFooter" />
    <theme-switcher v-if="!isFooter" />
  </div>
</template>

<script>
import { titles } from "../data/titles.data";
import { routes } from "../router/router.js";
import ThemeSwitcher from "./ThemeSwitcher.vue";
import LangSwitcher from "./LangSwitcher.vue";
export default {
  props: ["isFooter"],
  components: {
    ThemeSwitcher,
    LangSwitcher,
  },
  navTitles: titles.nav,
  routes,
  methods: {
    showModal() {
      this.$router.push({
        path: this.$router.path,
        query: { name: "showModal" },
      });
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
.router-link-exact-active {
  text-decoration: none;
}
</style>
