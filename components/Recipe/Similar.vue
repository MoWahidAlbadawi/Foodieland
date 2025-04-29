<script setup lang="ts">
import type { Recipe } from '~/composables/Types.ts/recipe';

const { $recipes, $error, $pending } = useNuxtApp();

const recipes = computed(() => ($recipes as Recipe[]).slice(0, 4));
</script>

<template>
  <section class="mt-32 sm:mx-20 sm:mx-4 md:mx-12 lg:mx-4 xl:mx-32 ">
    <h2 class="text-[36px] text-center mb-10 font-bold">You may like these recipes too!</h2>
    <div v-if="$pending">
      <v-row>
        <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="3">
          <v-skeleton-loader :elevation="10" type="card" />
        </v-col>
      </v-row>
    </div>

    
    <div v-else-if="$error" class="p-5 rounded-xl bg-gray-100 text-center text-lg">
      <p class="text-red-600">Sorry, no recipes found now. Please try again later!</p>
    </div>


    <div v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        <div v-for="recipe in recipes" :key="recipe.id" class="w-full max-w-[290px] mx-auto h-[350px] flex flex-col">
          
          <img :src="recipe.photoUrl" class="w-full h-[200px] object-cover rounded-xl" />

          <h2 class="text-xl font-bold my-4"><NuxtLink :to="`/recipes/${recipe.id}`">{{ recipe.title }}</NuxtLink></h2>

          <div class="flex gap-2 mt-auto">
            <div class="flex items-center gap-2 py-2 px-4 rounded-xl">
              <IconsClock />
              <p class="text-gray-500 text-sm">30 Minutes</p>
            </div>
            <div class="flex items-center gap-2 py-2 px-4 rounded-xl">
              <IconsKnifes />
              <p class="text-gray-500 text-sm">Chicken</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
