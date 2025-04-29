<script setup lang="ts">
defineProps({
  stepTitle: String,
  stepDescription: String,
})
</script>

<template>
    <div class="border-b border-gray-300 pb-6 lorem-details-recipe ps-8 lg:ps-0">
      <h2 class="text-[24px] font-bold mb-6">{{ stepTitle }}</h2>
      <p class="text-[18px] text-gray-500">{{ stepDescription }}</p>
      <slot />
    </div>
  </template>
 
 
  