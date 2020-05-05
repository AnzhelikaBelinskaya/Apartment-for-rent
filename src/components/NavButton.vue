<template>
    <a class="nav-button__container" :href="url">
        {{ title }}
    </a>
</template>

<script>
export default {
    props: ['title', 'url']
}
</script>

<style scoped lang="scss">
.nav-button {
    &__container {
        padding: 4px 8px;
        font-weight: bold;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: #652387;
        cursor: pointer;
    }
}
</style>