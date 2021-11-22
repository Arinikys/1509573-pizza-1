<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>
    <RadioButton
      v-for="(sauce, index) in sauces"
      :key="sauce.id"
      className="ingredients__input"
      :value="sauce.value"
      name="sauce"
      :labelText="sauce.name"
      :isChecked="index === 0"
      @setOption="setOption"
    />
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton";
export default {
  name: "BuilderSauceSelector",
  components: {
    RadioButton,
  },
  props: {
    sauces: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    setOption(value) {
      this.$emit("setOption", "sauces", value);
    },
  },
};
</script>
