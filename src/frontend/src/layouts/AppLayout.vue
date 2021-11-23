<template>
  <div>
    <AppLayoutHeader :sum="sum" :isAuth="true" :user="user" />
    <Index
      :pizza="pizza"
      @createPizza="createPizza"
      @addPizzaToOrder="addPizzaToOrder"
    />
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import Index from "@/views/Index";
export default {
  name: "AppLayout",
  components: {
    AppLayoutHeader,
    Index,
  },
  props: {
    pizza: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      default: () => [],
    },
  },
  data() {
    return {
      sum: 0,
      order: [],
    };
  },
  methods: {
    createPizza(sum) {
      this.sum = sum;
    },
    addPizzaToOrder(pizza) {
      this.order.push(pizza);
    },
  },
};
</script>
