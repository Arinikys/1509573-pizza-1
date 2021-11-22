<template>
  <div :class="`counter counter--orange ${className}`">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="isMin"
      @click="updateCounter(-1)"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <label>
      <input
        type="text"
        :name="name"
        class="counter__input"
        :value="initValue"
        max="3"
        readonly
      />
    </label>
    <button
      type="button"
      class="counter__button counter__button--plus"
      :disabled="isMax"
      @click="updateCounter(1)"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
import { MAX_COUNT, MIN_COUNT } from "@/common/constants";

export default {
  name: "RadioButton",
  props: {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    initValue: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    isMin() {
      return this.initValue === MIN_COUNT;
    },
    isMax() {
      return this.initValue === MAX_COUNT;
    },
  },
  methods: {
    updateCounter(count) {
      this.$emit("updateCount", this.value, count);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mixins/mixins.scss";
@import "~@/assets/scss/blocks/counter.scss";
</style>
