<template>
  <div class="layout__sidebar sidebar">
    <a href="/" class="logo layout__logo">
      <img
        src="@/assets/img/logo.svg"
        alt="V!U!E! Pizza logo"
        width="90"
        height="40"
      />
    </a>
    <a class="layout__link" href="/orders">История заказов</a>
    <a class="layout__link layout__link--active" href="/profile">Мои данные</a>
  </div>
</template>

<script>
export default {
  name: "AppLayoutSidebar",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/layout/layout.scss";
@import "~@/assets/scss/layout/sidebar.scss";
</style>
