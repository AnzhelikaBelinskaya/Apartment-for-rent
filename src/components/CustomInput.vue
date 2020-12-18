<template>
  <div class="input__wrapper">
    <div class="input__label">{{ label }}</div>
    <input
      type="text"
      class="custom__input"
      :class="{ 'custom__input-wide': isWide }"
      @change="$emit('input', $event.target.value)"
      >
      <div class="validation__error" v-if="error">Некорректные данные</div>
  </div>
</template>

<script>
export default {
  props: ["label", "isWide", "error" ],
};
</script>


<style scoped lang="scss">
.input__wrapper {
    width: 80%;
    @include flexcol(center);
}
.input__label {
    align-self: flex-start;
    padding-top: 1vw;
}
.custom__input {
width: 100%;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 10px -5px $font-color;
  margin: 0.5vw 0;
  padding: 1vw;
  resize: none;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.1vw;
  background-color: $lighter-white;

  &:focus {
    background-color: white;
    outline: none;
  }
  &-wide {
    height: 4vw;
  }
}
.validation__error {
    color: $lighter-red;
    font-size: 12px;
    padding: 0;
    margin: 0;
    align-self: flex-start;
}
</style>