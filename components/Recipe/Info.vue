<script setup lang="ts">
const props =defineProps<{
    recipe: any,
}>();
watchEffect(() => {
    console.log(props.recipe);
})
</script>
<template>
    <div class="mb-12">
        <div class="flex flex-col-reverse lg:!flex-row justify-between gap-6 items-center">
        <div class="lg:w-[60%] max-w-[950px] h-[600px]">
            <img :src="recipe.photoUrl" class="w-[400px] lg:!w-full h-full object-cover rounded-xl" />
        </div> 
        <div class="w-auto  w-full lg:max-w-[450px] h-[600px] bg-[#E7F9FD] rounded-xl p-8 flex flex-col justify-between">
            <div>
            <h2 class="text-2xl font-bold mb-6">Nutrition Information</h2>
                <div class="flex flex-col gap-2 text-[18px]">
                    <div class="flex justify-between items-center border-b border-gray-300 pb-2">
                        <p class="text-gray-500">Calories</p>
                        <p>{{ recipe.calories }}kcal</p>
                    </div>
                    <div class="flex justify-between items-center border-b border-gray-300 pb-2">
                        <p class="text-gray-500">Total Fat</p>
                        <p>{{ recipe.fat }}</p>
                    </div>
                    <div class="flex justify-between items-center border-b border-gray-300 pb-2">
                        <p class="text-gray-500">Protein</p>
                        <p>{{ recipe.protein }}</p>
                    </div>
                    <div class="flex justify-between items-center border-b border-gray-300 pb-2">
                        <p class="text-gray-500">Carbohydrates</p>
                        <p>{{ recipe.carbohydrate }}</p>
                    </div>
                    <div class="flex justify-between items-center border-b border-gray-300 pb-2">
                        <p class="text-gray-500">Cholesterol</p>
                        <p>{{ recipe.cholesterol }}</p>
                    </div>
                </div>
                </div>
                <p class="text-gray-500">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div> 
        </div>
        <p class="text-gray-500 mt-20 lg:!w-3/4 mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</template>
