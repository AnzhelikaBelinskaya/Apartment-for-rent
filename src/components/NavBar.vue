<template>
  <div class="nav-bar__container">
    <div class="logo__container">
      <img src="/img/Logo3.png" />
    </div>
    <NavButton class="no-border" title="Главная" url="#" />
    <NavButton title="Как добраться" url="https://www.mail.ru" />
    <NavButton title="Что посетить" url="#" />
  </div>
</template>

<script>
import NavButton from "./NavButton";
export default {
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
    margin-top: 10px;
    border-bottom: 1px solid $primary-color;
  }
}
.logo__container {
  justify-self: flex-end;
  margin-right: auto;
}
.no-border {
  border: none;
}
</style>