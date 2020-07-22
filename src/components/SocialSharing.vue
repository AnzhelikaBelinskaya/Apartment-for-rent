 <template>
  <div class="share__container">
    {{titlesText.share}}:
    <div v-for="social in $options.socials" :key="social.network">
      <ShareNetwork
        class="share__link"
        :url="path"
        :network="social.network"
        :title="titlesText.shareTitle"
        :description="titlesText.shareText"
      >
        <img class="social__icon" :src="social.img" />
        {{social.tag}}
      </ShareNetwork>
    </div>
  </div>
</template>

<script>
import { socials } from "../data/socials.data";
export default {
  socials,
  data: function() {
    return {
      titles: {
        'ru-RU': {
          share: 'Поделиться',
          shareTitle: "Отличная квартира в Сочи",
          shareText: "Отличный вариант жилья в Сочи"
        },
        'en-US': {
           share: 'Share',
            shareTitle: "Nice apart in Sochi",
          shareText: "Look at this apart"
        }
      }
    }
  },
  computed:  {
    titlesText: function() {
      return this.titles[this.$store.state.lang];
    },
    path: function() {
      return window.location.href
    }
  }
};
</script>

<style scoped lang="scss">
.share {
  &__container {
    margin-top: 30px;
    font-weight: 600;
    line-height: 30px;
  }
  &__link {
    font-weight: 500;
    cursor: pointer;
  }
}
.social__icon {
  padding: 0 3px;
}
</style>