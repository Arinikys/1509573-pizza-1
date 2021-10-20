<template>
  <div>
    <Header />
    <Index />
  </div>
</template>

<script>
import Index from "@/views/Index";
import Header from "@/layouts/Header";

export default {
  name: "App",
  components: {
    Index,
    Header,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/libs/normalize.scss";
@import "~@/assets/scss/fonts.scss";
@import "~@/assets/scss/scaffolding.scss";
@import "~@/assets/scss/visually-hidden.scss";
</style>
