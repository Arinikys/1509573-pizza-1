<template>
  <div>
    <AppLayoutHeader :sum="sum" :isAuth="isAuth" :user="user" />
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";

export default {
  name: "AppLayoutDefault",
  components: {
    AppLayoutHeader,
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
