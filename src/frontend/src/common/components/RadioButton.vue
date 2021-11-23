<template>
  <label :class="[hasRadio ? 'radio' : '', className]">
    <input
      type="radio"
      :name="name"
      :value="value"
      :checked="isChecked"
      class="visually-hidden"
      @click="$emit('setOption', value)"
    />
    <b v-if="labelBoldText">{{ labelBoldText }}</b>
    <span v-if="labelText">{{ labelText }}</span>
  </label>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
    labelText: {
      type: String,
    },
    labelBoldText: {
      type: String,
    },
    hasRadio: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/mixins/mixins.scss";
@import "~@/assets/scss/blocks/radio.scss";
</style>
