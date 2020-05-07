<template>
  <div class="nav-bar__container">
    <div class="logo__container">
      <img src="/img/Logo2.png" />
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
    align-items: flex-end;
    margin-top: 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid $trans-blue;
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