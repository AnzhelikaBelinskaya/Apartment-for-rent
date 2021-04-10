<template>
  <div class="footer__container">
    <NavBar :isFooter="true" :isHidden="true" />
    <a class="ad__container" target="_blank" href="https://www.instagram.com/dimphoto_/">
      <div class="ad__image"></div>
      <img src="/img/icons/instagram.png" class="ad__icon" />
      {{ $options.adTitles | translate }}
    </a>
    <SocialSharing />
  </div>
</template>

<script>
import { titles } from "../data/titles.data";
import NavBar from "./NavBar";
import SocialSharing from "./SocialSharing";
export default {
  adTitles: titles.ad,
  components: {
    NavBar,
    SocialSharing,
  },
};
</script>

<style scoped lang="scss">
.footer__container {
  padding: 0 5vw;
  @include flexrow(space-between);
  @include mobile {
    @include flexcol(flex-start);
    align-items: center;
  }
}
.ad__image {
  background: url("/img/collage2.png") no-repeat;
  background-size: contain;
  width: 25vw;
  height: 5vw;
  @include mobile {
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }
}

.ad__container {
  display: block;
  margin-top: 2vw;
  padding: 2vw;
  width: 25vw;
  height: 5vw;
  text-decoration: none;
  color: var(--txt);
  font-size: 1vw;
  @include mobile {
    width: auto;
    height: 20vw;
    font-size: 16px;
  }
}

.ad__icon {
  padding-left: 0.5vw;
  padding-right: 0.5vw;
}
</style>
