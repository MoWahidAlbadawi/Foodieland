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
                <div class="text-center lg:!text-left">
                    <h2 class="text-4xl font-bold">Health Japanese Fried Rice</h2>
                    <div class="flex flex-col sm:flex-row items-center flex-wrap gap-4 mt-6">
                        <div class="w-[170px] flex gap-3 sm:border-r sm:border-gray-200 pr-4">
                            <img src="/assets/images/Mohammad.jpg" class="w-10 h-10 rounded-full" />
                            <div>
                                <h5 class="text-lg font-bold">Jhon Smith</h5>
                                <p class="text-gray-500">28 April 2025</p>
                            </div>
                        </div>
                        <div class="w-[170px] flex gap-3 sm:border-r sm:border-gray-200 pr-4">
                            <IconsClock />
                            <div>
                                <h5 class="text-lg font-bold">PREP TIME</h5>
                                <p class="text-gray-500">{{ recipe.prepTime }} Minutes</p>
                            </div>
                        </div>
                        <div class="w-[170px] flex gap-3 sm:border-r sm:border-gray-200 pr-4">
                            <IconsClock />
                            <div>
                                <h5 class="text-lg font-bold">COOK TIME</h5>
                                <p class="text-gray-500">{{recipe.cookTime}} Minutes</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 py-3 px-5 rounded-xl text-[20px] -mt-3">
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
