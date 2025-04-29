<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
</script>

<template>
  <section class="mx-2 sm:!mx-4 md:!mx-12 lg:!mx-4 xl:!mx-32">
<Swiper
  :modules="[Autoplay]"
  :slidesPerView="'auto'"
  :centeredSlides="true"
  :spaceBetween="110"
  :loop="true"
  :autoplay="{
  delay: 5000,
  disableOnInteraction: false,
}"

>
  <SwiperSlide>
    <div class="md:shadow-md lg:shadow-none"><HomeSlide /></div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="md:shadow-md lg:shadow-none"><HomeSlide /></div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="md:shadow-md lg:shadow-none"><HomeSlide /></div>
  </SwiperSlide>
</Swiper>
</section>
</template>

<style scoped>
.swiper {
  overflow: visible;
}
</style>
