<template>
  <component
    :is="layout"
    :sum="sum"
    :isAuth="true"
    :user="user"
    :pizza="pizza"
    @createPizza="createPizza"
    @addPizzaToOrder="addPizzaToOrder"
  >
    <slot />
  </component>
</template>

<script>
const defaultLayout = "AppLayoutDefault";

export default {
  name: "AppLayout",
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
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
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
