<script setup lang="ts">
const lorem = ref<string>('lorem1');
</script>
<template>
            <div>
             <h2 class="text-2xl font-bold mt-8">For main dish</h2>

            <div class="flex gap-2 border-b border-gray-300 pb-2 pb-6 px-8 pt-5">
            <label class="text-[18px]">
              <input type="radio"  value="lorem1" v-model="lorem" checked/>
              Lorem ipsum dolor sit amet</label>
             </div>

            <div class="flex gap-2 border-b border-gray-300 pb-2 pb-6 px-8 pt-5">
            <label class="text-[18px]">  
              <input type="radio"  value="lorem2" v-model="lorem"/>
              Lorem ipsum dolor sit amet</label>
            </div> 

            <div class="flex gap-2 border-b border-gray-300 pb-2 pb-6 px-8 pt-5">
            <label class="text-[18px]"> 
              <input type="radio"  value="lorem3" v-model="lorem"/>
              Lorem ipsum dolor sit amet</label>
            </div>

            <div class="flex gap-2 border-b border-gray-300 pb-2 pb-6 px-8 pt-5">
            <label class="text-[18px]">
              <input type="radio"  value="lorem4" v-model="lorem"/>
              Lorem ipsum dolor sit amet</label>
            </div>

            </div>
</template>
