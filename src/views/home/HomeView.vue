<script setup lang="ts">
import GeneralCarousel from "@/components/General/GeneralCarousel.vue";
import GeneralSlide from "@/components/General/GeneralSlide.vue";

const carouselSlides = ["bg-1", "bg-2", "bg-3"];
</script>

<template>

  <div class="content">
    <div class="home-content" style="z-index: 4">
      <h1>Home page</h1>
    </div>

    <GeneralCarousel
        :navigation="true"
        :pagination="true"
        :startAutoPlay="false"
        :timeout="5000"
        class="carousel"
        v-slot="{ currentSlide }"
    >
      <GeneralSlide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="`../src/assets/images/home/${slide}.jpg`" alt="" />
        </div>
      </GeneralSlide>
    </GeneralCarousel>

  </div>
</template>

<style scoped lang="sass">
.home-content
  position: absolute


.carousel
  position: relative
  max-height: 100vh
  height: 100svh

  .slide-info
    position: absolute
    top: 0
    left: 0
    width: 100%
    max-height: 100%
    height: 100%

    img
      min-width: 100%
      height: 100%
      object-fit: cover



</style>
