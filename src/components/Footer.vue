<template>
  <div class="footer__container">
    <NavBar :lang="lang" :isFooter="true" :isHidden="true" />
    <a class="ad__container" target="_blank" href="https://www.instagram.com/dimphoto_/">
      <div class="ad__image"></div>
      <img src="/img/icons/instagram.png" class="ad__icon" />
      {{titlesText.ad}}
    </a>
    <SocialSharing />
    <div class="footer__contacts"></div>
  </div>
</template>

<script>
export default {
  components: {
    NavBar,
    SocialSharing
  },
  props: ["lang"],
  data: function() {
    return {
      titles: {
        "ru-RU": {
          ad: "Фотограф в Сочи и Красной Поляне"
        },
        "en-US": {
          ad: "Photographer in Sochi & Krasnaya Polyana"
        }
      }
    };
  },
  computed: {
    titlesText: function() {
      return this.titles[this.$store.state.lang];
    }
  }
};
import NavBar from "./NavBar";
import SocialSharing from "./SocialSharing";
</script>

<style scoped lang="scss">
.footer__container {
  margin-top: 70px;
  @include flexrow(space-between);
  width: 100%;
  background-color: $lighter-primary-color;
}
.ad__image {
  background: url("/img/collage2.png") no-repeat;
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