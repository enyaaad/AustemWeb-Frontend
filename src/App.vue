<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from "@/components/AppNavbar.vue";
</script>

<template id="app">
  <div class="d-flex-column">
    <app-navbar/>
    <div style="width: 100%">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
