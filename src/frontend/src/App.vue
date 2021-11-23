<template>
  <div>
    <AppLayout :pizza="pizza" :user="user" />
  </div>
</template>

<script>
import pizza from "@/static/pizza.json";
import user from "@/static/user.json";

import AppLayout from "@/layouts/AppLayout";

export default {
  name: "App",
  components: {
    AppLayout,
  },
  data() {
    return {
      pizza: pizza,
      user: user,
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/libs/normalize.scss";
@import "~@/assets/scss/fonts.scss";
@import "~@/assets/scss/scaffolding.scss";
@import "~@/assets/scss/visually-hidden.scss";
</style>
