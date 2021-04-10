<template>
  <div class="select__wrapper">
    <div class="select__header">
      {{ select.header | translate }}
    </div>
    <div class="select__options-container"  >
      <div class="select__option-selected" @click="toggleOptions">
        {{defaultOption | translate}}
      </div>
      <div class="select__options-expanded" v-if="isExpanded"
      >
        <div
          class="select__options-list"
          v-for="option in select.options"
          :key="option.id"
          @click="selectOption(option.id)"
          :class="{'select__options-list-selected': option.id===defaultOption.id}"
          
          
        >
          {{ option | translate }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["select", "defaultOption"],
  data: function () {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleOptions() {
      this.isExpanded = !this.isExpanded;
    },
    selectOption(id) {
      this.isExpanded = false;
      this.$emit("selectOption", id);
    },
  },
};
</script>
<style scoped lang="scss">
.select__wrapper {
  padding: 2vw;
}
.select__header {
  padding: 10px;
}
.select__options-container {
  position: relative;
}
.select__option-selected {
  position: relative;
  text-align: center;
  background-color: var(--modal);
  border-radius: 5px;
  padding: 10px;
  border: 1px solid rgba(194, 184, 184, 0.5);
  width: 20vw;
  &::after {
    position: absolute;
    right: 10px;
    top: 16px;
    content: " ";
    border: 5px solid transparent;
    border-top: 5px solid black;
  }
}
.select__options-expanded {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: var(--modal);
  border: 1px solid rgba(194, 184, 184, 0.5);
  border-radius: 5px;
  width: 20vw;
  padding: 10px;
}
.select__options-list {
  padding: 10px;
  text-align: center;
  &:hover {
    color: $red;
    cursor: default;
  }
  &-selected {
    background-color: $lighter-primary-color;
  }
}
</style>
