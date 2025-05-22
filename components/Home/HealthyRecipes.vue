<script setup lang="ts">
import type { Recipe } from '~/composables/Types.ts/recipe';
const { $recipes, $recipesError, $recipesPending } = useNuxtApp();


const recipes = computed(() => {
  const list = $recipes as Recipe[];
  return list.filter((recipe: Recipe) => recipe.title.toLowerCase().includes('h'))
    .slice(0, 8)
});
</script>

<template>
  <section class="mt-36">
    
    <div class="flex flex-col md:gap-12 md:flex-row justify-between mb-8 md:text-start">
      <h2 class="text-xl md:text-2xl xl:text-4xl font-bold mb-3 md:w-1/2 2xl:w-1/3">
        Try this delicious recipes to make your day
      </h2>
      <p class="text-gray-500 text-lg md:text-xl md:w-1/2 2xl:w-1/3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nostrum veritatis repellendus enim obcaecati ipsa.
      </p>
    </div>

  
    <div v-if="$recipesPending">
      <v-row>
        <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4">
          <v-skeleton-loader :elevation="10" type="card" />
        </v-col>
      </v-row>
    </div>

    
    <div v-else-if="$recipesError" class="p-5 rounded-xl bg-gray-100 text-center text-lg">
      <p class="text-red-600">Sorry, no recipes found now. Please try again later!</p>
    </div>


    <div v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        <div v-for="recipe in recipes" :key="recipe.id" class="w-full max-w-[290px] mx-auto h-[350px] flex flex-col">
          <NuxtLink :to="`/recipes/${recipe.id}`">
          <img :src="recipe.photoUrl" class="w-full h-[200px] object-cover rounded-xl" />

          <h2 class="text-[18px] font-bold mt-4 h-[70px]">{{ recipe.title }}</h2>

          <div class="flex gap-2 mt-auto">
            <div class="flex items-center gap-2 py-2 rounded-xl">
              <IconsClock />
              <p class="text-gray-500 text-sm">30 Minutes</p>
            </div>
            <div class="flex items-center gap-2 py-2 px-4 rounded-xl">
              <IconsKnifes />
              <p class="text-gray-500 text-sm">Chicken</p>
            </div>
          </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
