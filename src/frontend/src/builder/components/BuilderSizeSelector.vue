<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <RadioButton
          v-for="sizeType in sizeTypes"
          :key="sizeType.id"
          :className="`diameter__input diameter__input--${sizeType.class}`"
          :value="sizeType.value"
          name="size"
          :labelText="sizeType.name"
          :hasRadio="false"
          @setOption="setOption"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton";
export default {
  name: "BuilderSizeSelector",
  components: {
    RadioButton,
  },
  props: {
    sizeTypes: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    setOption(value) {
      this.$emit("setOption", "sizes", value);
    },
  },
};
</script>
