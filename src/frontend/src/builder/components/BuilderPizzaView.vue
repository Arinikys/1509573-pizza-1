<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        @change="updatePizzaName"
        :value="pizzaName"
      />
    </label>

    <AppDrop class="content__constructor" @drop="addFilling">
      <div
        :class="`pizza pizza--foundation--${pizzaSet.dough}-${pizzaSet.sauces}`"
      >
        <div class="pizza__wrapper">
          <template v-for="filling in filteredFillingList">
            <div
              v-for="number in filling['count']"
              :key="`${filling.value}-${number}`"
              :class="`pizza__filling pizza__filling--${
                filling.value
              } ${amountClass(number)}`"
            ></div>
          </template>
        </div>
      </div>
    </AppDrop>

    <div class="content__result">
      <p>Итого: {{ pizzaSet.price }} ₽</p>
      <button
        type="button"
        class="button"
        :disabled="isBtnDisabled"
        @click="createPizza"
      >
        Готовьте!
      </button>
    </div>
  </div>
</template>

<script>
import AppDrop from "@/common/components/AppDrop";

export default {
  name: "BuilderPizzaView",
  components: { AppDrop },
  props: {
    pizzaSet: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      pizzaName: this.pizzaSet.name,
    };
  },
  computed: {
    filteredFillingList() {
      return this.pizzaSet.filling.filter((item) => item.count > 0);
    },
    amountClass() {
      return (number) => {
        let className = "";
        switch (number) {
          case 2:
            className = "pizza__filling--second";
            break;
          case 3:
            className = "pizza__filling--third";
            break;
          default:
            className = "";
        }
        return className;
      };
    },
    isBtnDisabled() {
      const filling = this.pizzaSet.filling.find((item) => item.count !== 0);
      return this.pizzaName === "" || !filling;
    },
  },
  methods: {
    updatePizzaName(event) {
      this.pizzaName = event.target.value;
    },
    createPizza() {
      this.$emit("createPizza", this.pizzaName);
      this.pizzaName = "";
    },
    addFilling(data) {
      this.$emit("moveFilling", data);
    },
  },
};
</script>
