<template>
  <div class="nav-bar__container" :class="{'footer__nav-bar':footer}">
    <div class="logo__container" :class="{'logo__container-hidden': isHidden}">
      <img src="/img/Logo3.png" />
    </div>
    <NavButton class="no-border" title="Главная" url="#" />
    <NavButton title="Как добраться" :class="{'no-border':footer}" url="https://www.mail.ru" />
    <NavButton title="Что посетить" :class="{'no-border':footer}" url="#" />
  </div>
</template>

<script>
import NavButton from "./NavButton";
export default {
  props: ["footer", "isHidden"],
  components: {
    NavButton
  }
};
</script>

<style scoped lang="scss">
.nav-bar {
  &__container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid $lighter-primary-color;
  }
}
.logo__container {
  justify-self: flex-end;
  margin-right: auto;
  &-hidden {
    display: none;
  }
}
.no-border {
  border: none;
}
.footer__nav-bar {
  @include flexcol(flex-start);

  padding: 50px 20px;
  .nav-button__container {
    font-size: 16px;
    text-decoration: underline;
  }
}
</style>