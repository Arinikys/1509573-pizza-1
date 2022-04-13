// import { INIT_PIZZA_SET } from "@/common/constants";
// import { cloneDeep } from "lodash";

export default {
  namespaced: true,
  state: {
    pizzaSet: [],
  },
  mutations: {
    setOption(state, { option, value }) {
      state.pizzaSet[option] = value;
    },
    reset(state) {
      // state.pizzaSet = cloneDeep(INIT_PIZZA_SET);
      state.pizzaSet = [];
    },
  },
};
