<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>
      <div class="sheet__content ingredients">
        <BuilderSauceSelector :sauces="sauces" @setOption="setOption" />
        <BuilderFillingSelector
          :ingredients="ingredients"
          :filling="filling"
          @setFilling="setFilling"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BuilderFillingSelector from "@/builder/components/BuilderFillingSelector";
import BuilderSauceSelector from "@/builder/components/BuilderSauceSelector";

export default {
  name: "BuilderIngredientsSelector",
  components: {
    BuilderFillingSelector,
    BuilderSauceSelector,
  },
  props: {
    sauces: {
      type: Array,
      default: () => [],
    },
    ingredients: {
      type: Array,
      default: () => [],
    },
    filling: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    setOption(optionName, value) {
      this.$emit("setOption", optionName, value);
    },
    setFilling(value) {
      this.$emit("setFilling", value);
    },
  },
};
</script>
