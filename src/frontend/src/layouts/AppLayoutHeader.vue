<template>
  <header class="header">
    <div class="header__logo">
      <a href="/" class="logo">
        <img
          src="@/assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </a>
    </div>
    <div class="header__cart">
      <a href="/card">{{ sum }} ₽</a>
    </div>
    <div v-if="isAuth" class="header__user">
      <a href="/profile">
        <img :src="user.avatar" :alt="user.name" width="32" height="32" />
        <span>{{ user.name }}</span>
      </a>
      <a href="#" class="header__logout"><span>Выйти</span></a>
    </div>
    <div v-else class="header__user">
      <a class="header__login">
        <span>Войти</span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppLayoutHeader",
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
@import "~@/assets/scss/layout/header.scss";
</style>
