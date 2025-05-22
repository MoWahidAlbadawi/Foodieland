<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
</script>

<template>
  <section>
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
