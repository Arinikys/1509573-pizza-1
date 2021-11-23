<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>
    <ul class="ingredients__list">
      <li
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        class="ingredients__item"
      >
        <AppDrag
          :class="`filling filling--${ingredient.class}`"
          :transferData="ingredient"
          @click="$emit('click', ingredient.id)"
        >
          {{ ingredient.name }}
        </AppDrag>
        <ItemCounter
          :name="ingredient.name"
          :value="ingredient.value"
          :initValue="getCurrCount(ingredient.value)"
          className="ingredients__counter"
          @updateCount="setFilling"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ItemCounter from "@/common/components/ItemCounter";
import AppDrag from "@/common/components/AppDrag";

export default {
  name: "BuilderFillingSelector",
  components: {
    ItemCounter,
    AppDrag,
  },
  props: {
    ingredients: {
      type: Array,
      default: () => [],
    },
    filling: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    getCurrCount() {
      return (name) => {
        const index = this.filling.findIndex((item) => {
          return item.value === name;
        });
        return index < 0 ? 0 : this.filling[index].count;
      };
    },
  },
  methods: {
    setFilling(value, count) {
      this.$emit("setFilling", { value: value, count: count });
    },
  },
};
</script>
