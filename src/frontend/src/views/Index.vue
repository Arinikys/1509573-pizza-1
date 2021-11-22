<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <BuilderDoughSelector
          :doughTypes="pizza.dough"
          @setOption="setOption"
        />
        <BuilderSizeSelector :sizeTypes="pizza.sizes" @setOption="setOption" />
        <BuilderIngredientsSelector
          :sauces="pizza.sauces"
          :ingredients="pizza.ingredients"
          :filling="pizzaSet.filling"
          @setOption="setOption"
          @setFilling="setFilling"
        />
        <BuilderPizzaView
          :pizzaSet="pizzaSet"
          @createPizza="createPizza"
          @moveFilling="moveFilling"
        />
      </div>
    </form>
  </main>
</template>

<script>
import BuilderPizzaView from "@/builder/components/BuilderPizzaView";
import BuilderDoughSelector from "@/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/builder/components/BuilderIngredientsSelector";
import { INIT_PIZZA_SET } from "@/common/constants";

export default {
  name: "IndexPage",
  components: {
    BuilderPizzaView,
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
  },
  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      pizzaSet: {},
    };
  },
  created() {
    this.resetPizzaSet();
  },
  methods: {
    setOption(option, value) {
      this.pizzaSet[option] = value;
      this.updatePrice();
    },
    resetPizzaSet() {
      this.pizzaSet = { ...INIT_PIZZA_SET };
      this.pizzaSet.filling = [];
    },
    setFilling(fill) {
      let index = this.pizzaSet.filling.findIndex(
        (item) => item.value === fill.value
      );
      if (index === -1) {
        this.pizzaSet.filling.push(fill);
      } else {
        this.pizzaSet.filling[index].count += fill.count;
        this.pizzaSet.filling[index].count =
          this.pizzaSet.filling[index].count < 0
            ? 0
            : this.pizzaSet.filling[index].count;
        this.pizzaSet.filling[index].count =
          this.pizzaSet.filling[index].count > 3
            ? 3
            : this.pizzaSet.filling[index].count;
      }
      this.updatePrice();
    },
    addFilling(value) {
      this.setFilling({ value: value, count: 1 });
    },
    updatePrice() {
      this.pizzaSet.price = 0;
      for (const property in this.pizzaSet) {
        if (property === "sauces" || property === "dough") {
          this.pizzaSet.price += this.pizza[property].find(
            (item) => item.value === this.pizzaSet[property]
          ).price;
        }
      }
      this.pizzaSet.filling.map((fill) => {
        const ingredient = this.pizza.ingredients.find(
          (item) => item.value === fill.value
        );
        const ingredientPrice = ingredient.price;
        this.pizzaSet.price += ingredientPrice * fill.count;
      });
      this.pizzaSet.price *= this.pizza.sizes.find(
        (item) => item.value === this.pizzaSet.sizes
      ).multiplier;
    },
    createPizza(name) {
      this.$emit("createPizza", this.pizzaSet.price);
      this.pizzaSet.name = name;
      this.$emit("addPizzaToOrder", this.pizzaSet);
      this.resetPizzaSet();
    },
    moveFilling(data) {
      this.addFilling(data.value);
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/mixins/mixins.scss";
@import "~@/assets/scss/layout/content.scss";
@import "~@/assets/scss/layout/sheet.scss";
@import "~@/assets/scss/blocks/ingredients.scss";
@import "~@/assets/scss/blocks/pizza.scss";
@import "~@/assets/scss/blocks/filling.scss";
@import "~@/assets/scss/blocks/diameter.scss";
@import "~@/assets/scss/blocks/dough.scss";
@import "~@/assets/scss/blocks/title.scss";
@import "~@/assets/scss/blocks/button.scss";
@import "~@/assets/scss/blocks/input.scss";
@import "~@/assets/scss/blocks/counter.scss";
</style>
