<script setup lang="ts">
interface Props {
    category : {
        id : number,
        title : string,
        image : string,
        bgGradient : string,
    }
}
defineProps<Props>()
</script>
<template>
    <div :class="`${category.bgGradient} text-center rounded-xl w-[150px] h-[130px]  sm:w-[180px] sm:h-[152px] relative bg-gradient-to-b`">
      <img :src="category.image" :class="`veg-img-${category.id} animate-up-to-down absolute -top-[30%] left-[25%] veg-img`" />
      <p class="text-[18px] font-bold pt-24">{{ category.title }}</p> 
    </div>  
  </template>
  <style scoped>
</style>
  
  