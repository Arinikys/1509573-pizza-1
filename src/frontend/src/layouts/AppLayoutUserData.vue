<template>
  <div>
    <AppLayoutHeader :sum="sum" :isAuth="isAuth" :user="user" />
    <main class="layout">
      <AppLayoutSidebar />
      <div class="layout__content">
        <slot />
      </div>
    </main>
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import AppLayoutSidebar from "@/layouts/AppLayoutSidebar";

export default {
  name: "AppLayoutUserData",
  components: {
    AppLayoutHeader,
    AppLayoutSidebar,
  },
  props: {
    sum: {
      type: Number,
      default: 0,
    },
    isAuth: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/layout/layout.scss";
</style>
