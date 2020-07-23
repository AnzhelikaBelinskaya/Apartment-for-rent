<template>
  <div class="footer__container">
    <NavBar :isFooter="true" :isHidden="true" />
    <a
      class="ad__container"
      target="_blank"
      href="https://www.instagram.com/dimphoto_/"
    >
      <div class="ad__image"></div>
      <img src="/img/icons/instagram.png" class="ad__icon" />
      {{ $options.adTitles | translate }}
    </a>
    <SocialSharing />
    <div class="footer__contacts"></div>
  </div>
</template>

<script>
import { titles } from '../data/titles.data'
import NavBar from './NavBar'
import SocialSharing from './SocialSharing'
export default {
  adTitles: titles.ad,
  components: {
    NavBar,
    SocialSharing,
  },
}
</script>

<style scoped lang="scss">
.footer__container {
  margin-top: 70px;
  @include flexrow(space-between);
  width: 100%;
  background-color: $lighter-primary-color;
}
.ad__image {
  background: url('/img/collage2.png') no-repeat;
  background-size: contain;
  width: 462px;
  height: 100px;
}

.ad__container {
  display: block;
  background-color: $lighter-primary-color;
  margin-top: 30px;
  padding: 15px;
  width: 462px;
  height: 120px;
  text-decoration: none;
  color: $font-color;
}

.ad__icon {
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
