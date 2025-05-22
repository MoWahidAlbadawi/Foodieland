<script setup lang="ts">
const props = defineProps({
    recipe: {
        type: Object,
        required: true
    }
});
</script>

<template>
<div class="flex flex-col lg:flex-row justify-between mt-12 md:mt-20 mb-16">
                <div class="text-center lg:!text-start">
                    <h2 class="text-xl md:text-3xl lg:text-4xl 2xl:text-[64px] font-bold md:text-start">Health Japanese Fried Rice</h2>
                    <div class="flex flex-col sm:flex-row items-center flex-wrap gap-4 mt-6">
                        <div class="w-[180px] flex gap-3 sm:border-r sm:border-gray-200 pr-4">
                            <div class="flex items-center">
                            <img src="/assets/images/Mohammad.jpg" class="w-12 h-12 rounded-full" />
                            </div>
                            <div>
                                <h5 class="text-lg font-bold">Jhon Smith</h5>
                                <p class="text-gray-500">28 April 2025</p>
                            </div>
                        </div>
                        <div class="w-[170px] flex gap-3 items-center sm:border-r sm:border-gray-200 pr-4">
                            <IconsClock />
                            <div class="text-center">
                                <h5 class="text-lg font-bold mb-1">PREP TIME</h5>
                                <p class="text-gray-500">{{ recipe.prepTime }} Minutes</p>
                            </div>
                        </div>
                        <div class="w-[170px] flex items-center gap-3 sm:border-r sm:border-gray-200 pr-4">
                            <IconsClock />
                            <div class="text-center">
                                <h5 class="text-lg font-bold mb-1">COOK TIME</h5>
                                <p class="text-gray-500">{{recipe.cookTime}} Minutes</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 py-3 px-5 rounded-xl text-[20px]">
                            <IconsKnifes />
                            <p class="text-gray-500">Chicken</p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center gap-6 mt-12">
                    <div>
                        <div class="bg-[#E7F9FD] rounded-xl p-4"><IconsPrint /></div>
                            <p class="mt-2">PRINT</p>
                    </div>
                    <div>
                        <div class="bg-[#E7F9FD] rounded-xl p-4"><IconsShare /></div>
                        <p class="mt-2">SHARE</p>
                    </div>
                </div>
            </div>
</template>
