<template>
  <div class="feedback">
    <div class="feedback__header">{{ $options.titles.feedback.header | translate }}</div>
    <form action="submit" class="feedback__form">
      <div class="form__container">
        <label for="name" class="form__label">{{ $options.titles.feedback.name | translate }}</label>
        <input type="text" id="name" class="form__name" />
        <label for="phone" class="form__label">{{ $options.titles.feedback.phone | translate }}</label>
        <input type="number" id="phone" class="forn__phone" />
        <label for="post" class="form__label">{{ $options.titles.feedback.text | translate }}</label>
        <textarea id="post" class="form__post"></textarea>
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
.feedback__header {
  text-align: center;
}
.form__container {
  @include flexcol(center);
}
</style>