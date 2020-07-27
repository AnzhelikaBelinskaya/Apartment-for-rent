<template>
  <div class="share__container">
    {{ $options.shareTitles.header | translate }}:
    <div v-for="social in $options.socials" :key="social.network">
      <ShareNetwork
        class="share__link"
        :url="path"
        :network="social.network"
        :title="$options.shareTitles.title | translate"
        :description="$options.shareTitles.text | translate"
      >
        <img class="social__icon" :src="social.img" />
        {{ social.tag }}
      </ShareNetwork>
    </div>
  </div>
</template>

<script>
import { socials } from '../data/socials.data'
import { titles } from '../data/titles.data'
export default {
  socials,
  shareTitles: titles.share,
  computed: {
    path: function() {
      return window.location.href
    },
  },
}
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
