 <template>
  <div class="share__container">
    Поделиться:
    <div v-for="social in $options.socials" :key="social.network">
      <ShareNetwork
        class="share__link"
        :url="path"
        :network="social.network"
        title="Отличная квартира в Сочи"
        description="Отличный вариант жилья в Сочи"
      >
        <img class="social__icon" :src="social.img" />
        {{social.tag}}
      </ShareNetwork>
    </div>
  </div>
</template>

<script>
import { content } from "../data/content.data";
export default {
  socials: content.socials,
  computed: {
    path: function() {
      return window.location.href + this.$route.path
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