<template>
  <div class="modal__wrapper" @click.self="hideModal">
    <div class="modal__window">
      <div class="modal__close-button" @click="hideModal">X</div>
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    hideModal: function () {
      this.$router.push({ path: this.$router.path });
    },
  },
};
</script>

<style lang="scss" scoped>
.modal__wrapper {
  display: block;
  position: fixed;
  z-index: 2;
  background-color: $modal-bg;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.modal__window {
  position: relative;
  background-color: var(--modal);
  box-shadow: 0px 0px 10px 1px $lighter-font-color;
  border-radius: 5px;
  margin: 10vw auto;
  width: 30%;
  padding: 2vw;
}
.modal__close-button {
  position: absolute;
  top: 0.5vw;
  right: 0.5vw;
  background-color: $primary-color;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
}
</style>