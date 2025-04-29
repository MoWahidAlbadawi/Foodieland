<script setup lang="ts">
import type { Recipe } from '~/composables/Types.ts/recipe';
import noImage from '~/assets/images/image-not-found.jpg';

const { $recipes, $error, $pending } = useNuxtApp();

const recipes = computed(() => {
  const list = $recipes as Recipe[];

  const randomRecipes = [...list].sort(() => Math.random() - 0.5);
  return randomRecipes.slice(0, 3);
});
</script>

<template>
  <div>
    <div v-if="$pending">
        <p>Loading...</p>
    </div>

    
    <div v-else-if="$error" class="p-5 rounded-xl bg-gray-100 text-center text-lg">
      <p class="text-red-600">Sorry, no recipes found now. Please try again later!</p>
    </div>

    <div v-else>
      <div class="flex flex-col gap-6">
        <div v-for="recipe in recipes" :key="recipe.id" class="w-full max-w-[400px] h-[120px] flex gap-2">
          
          <img :src="recipe.photoUrl ? recipe.photoUrl : noImage" class="w-[180px] object-cover rounded-xl" />
            <div>
          <h2 class="text-xl font-bold my-2"><NuxtLink :to="`/recipes/${recipe.id}`">{{ recipe.title }}</NuxtLink></h2>
          <p class="text-gray-500 text-md">by Mohammad Albadawi</p>
          </div>

        </div>
      </div>
    </div>
</div>
</template>
