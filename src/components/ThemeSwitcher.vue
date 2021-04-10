<template>
  <div
    class="theme-switcher__container"
  >
    <div
      class="theme-switcher__toggler"
      :class="{ 'theme-switcher__toggler-dark': isDark }"
      @click="switchMode"
    ></div>
    <div class="theme-switcher__modes">
      <img class="theme-switcher__icon" src="img/icons/sun.png" />
      <img class="theme-switcher__icon" src="img/icons/moon.png" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["isFooter"],
  data() {
    return {
      isDark: "",
    };
  },
  methods: {
    switchMode() {
      this.isDark = !this.isDark;
      this.switchTheme();
    },
    switchTheme() {
      const bg = this.isDark
        ? "rgba(78, 62, 54, 0.4)"
        : "rgba(255, 255, 255, 0.5)";

      const txt = this.isDark ? "rgba(255, 255, 255, 0.6)" : "rgb(87, 56, 10)";
      const titlescolor = this.isDark
        ? "rgba(255, 255, 255, 0.6)"
        : "rgb(87, 56, 10)";
      const modal = this.isDark ? "rgb(112, 106, 104)" : "rgb(255, 255, 255)";
      document.body.style.setProperty("--bg", bg);
      document.body.style.setProperty("--txt", txt);
      document.body.style.setProperty("--titles", titlescolor);
      document.body.style.setProperty("--modal", modal);
    },
  },
  mounted: function () {
    this.isDark = window.matchMedia("(prefers-color-scheme: isDark)").matches;
    this.switchTheme();
  },
};
</script>
<style lang="scss" scoped>
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