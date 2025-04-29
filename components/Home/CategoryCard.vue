<script setup lang="ts">
interface Props {
    category : {
        id : number,
        title : string,
        image : string,
        bgGradient : string,
    }
}
const props = defineProps<Props>()
</script>
<template>
    <div class="text-center rounded-xl w-[150px] h-[130px]   sm:w-[180px] sm:h-[152px] relative bg-gradient-to-b" :class="category.bgGradient">
      <img :src="category.image" class="absolute -top-[25%] left-[25%] veg-img" :class="`veg-img-${category.id} animate-up-to-down`" />
      <p class="text-lg font-bold pt-24">{{ category.title }}</p> 
    </div>  
  </template>
  <style scoped>
</style>
  
  