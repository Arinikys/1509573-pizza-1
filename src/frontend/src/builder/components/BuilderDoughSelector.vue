<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <RadioButton
          v-for="(doughType, index) in doughTypes"
          :key="doughType.id"
          :className="`dough__input dough__input--${doughType.class}`"
          :value="doughType.value"
          name="dough"
          :labelBoldText="doughType.name"
          :labelText="doughType.description"
          :isChecked="index === 0"
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
  name: "BuilderDoughSelector",
  components: {
    RadioButton,
  },
  props: {
    doughTypes: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    setOption(value) {
      this.$emit("setOption", "dough", value);
    },
  },
};
</script>
