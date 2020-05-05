<template>
    <div class="nav-bar__container">
        <NavButton title="Главная" url="https://www.yandex.ru" />
        <NavButton title="Контакты" url="https://www.mail.ru" />
    </div>
</template>

<script>
import NavButton from './NavButton';
export default {
    components: {
        NavButton
    }
}
</script>

<style scoped lang="scss">
.nav-bar {
    &__container {
        display: flex;
    }
}
</style>