<template>
  <div class="feedback">
    <div class="feedback__header">
      {{ $options.titles.feedback.header | translate }}
    </div>

    <form action="submit" class="feedback__form">
      <div class="form__container">
        <label for="name" class="form__label">{{
          $options.titles.feedback.name | translate
        }}</label>
        <input type="text" id="name" class="form__input" />
        <label for="phone" class="form__label">{{
          $options.titles.feedback.phone | translate
        }}</label>
        <input type="tel" id="phone" class="form__input" />
        <label for="post" class="form__label">{{
          $options.titles.feedback.text | translate
        }}</label>
        <textarea id="post" class="form__input form__input-high"></textarea>
        <input type="submit" class="form__submit" />
      </div>
    </form>
  </div>
</template>


<script>
import { titles } from "../data/titles.data";
export default {
  titles,
};
</script>


<style lang="scss" scoped>
.feedback {
  padding: 5px;
}

.feedback__header {
  text-align: center;
  margin-bottom: 2vw;
  font-size: 1.8vw;
  color: $lighter-red;
  font-weight: 600;
}
.form__container {
  @include flexcol(center);
}
.form__input {
  border-radius: 5px;
  width: 80%;
  border: none;
  box-shadow: 0px 0px 10px -5px $font-color;
  margin: 1vw 0;
  padding: 1vw;
  resize: none;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.1vw;
  background-color: $lighter-white;

  &:focus {
    background-color: $primary-color;
    outline: none;
  }
  &-high {
    height: 5vw;
  }
}
.form__submit {
  width: 18vw;
  height: 4vw;
  background-color: $lighter-red;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  text-align: center;
  line-height: 4vw;
  font-size: 1.6vw;
  box-shadow: none;
  @include mobile {
    font-size: 18px;
    width: 80%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
  }
  font-family: "Montserrat", sans-serif;
}
</style>