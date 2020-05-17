 <template>
  <div class="share__container">
    Поделиться:
    <div v-for="social in $options.socials" :key="social">
      <ShareNetwork
        class="share__link"
        url="https://mail.ru"
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
import { mainInfo } from "../data/main-info.data";
export default {
  socials: mainInfo.socials,
  prop: ["url"]
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