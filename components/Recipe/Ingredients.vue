<template>
    <section>
        <div class="flex flex-col-reverse lg:!flex-row justify-between gap-6 lg:items-center mb-20">
            <div class="lg:w-[60%] max-w-[950px]">
                <h2 class="text-[36px] font-bold mb-6 ms-2">Ingredients</h2>
                <div clas="flex flex-col max-h-[900px] gap-4">
                    <RecipeFormLagel />
                    <RecipeFormLagel />
                </div>
            </div>

            <div>
                <h2 class="text-[36px] font-bold mb-6 ms-2">Other Recipes</h2>
                <div class="flex flex-col gap-4">
                    <RecipeOtherRecipeces />
                    <div class="mt-6 flex flex-col justify-center items-center  device-photo max-w-[400px] h-[430px]">
                        <h3 class="text-white text-[24px] font-bold w-1/2 device-image-title">don't forget to eat healthy food</h3>
                        <img src="/assets/images/device-eat.png" class="max-w-[300px] h-[300px] rounded-xl"/>
                        <p class="cursor-pointer text-[14px] text-gray-400">www.foodieland.com</p>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>