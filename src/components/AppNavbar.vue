<template>
  <nav>
    <RouterLink class="nav-link" to="/">Каталог</RouterLink>
    <RouterLink class="nav-link" to="/about">О компании</RouterLink>
    <RouterLink class="nav-link" to="/services">Наши услуги</RouterLink>
    <RouterLink class="nav-link" to="/delivery">Оплата и доставка</RouterLink>
    <RouterLink class="nav-link" to="/contacts">Контакты</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_variables.sass"

nav
  display: flex
  width: 60%
  justify-content: space-around

  .nav-link
    color: black
    text-decoration: none
    font-weight: 500
    transition: 0.3s ease

    //font-family: $family-main

  .nav-link:hover
    color: $color-attention

</style>
