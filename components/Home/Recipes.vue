<script setup lang="ts">
import type { Recipe } from '~/composables/Types.ts/recipe';

const { $recipes, $recipesError, $recipesPending } = useNuxtApp();
const count = ref(0);

const recipes = computed(() => {
  const list = $recipes as Recipe[];
 return list.slice(0, count.value + 9)
}
);

const isFavoirateRecipe = ref<boolean[]>([]);
const search = ref('');

const filteredRecipes = computed(() => {
  if (search.value) {
    const list = $recipes as Recipe[];
    return list.filter((recipe) => recipe.title.toLowerCase().includes(search.value.toLowerCase()));
  }
  return recipes.value;
});

function showMoreRecipes () {
  count.value+=3;
  isFavoirateRecipe.value.push(false);
  isFavoirateRecipe.value.push(false);
  isFavoirateRecipe.value.push(false);
}


onMounted(() => {
  isFavoirateRecipe.value = new Array(filteredRecipes.value.length).fill(false);
});

function  toggleIsFavoirate(index : number) {
  isFavoirateRecipe.value[index] = !isFavoirateRecipe.value[index];
}
</script>

<template>
  <section class="mt-36"> 
    {{ isFavoirateRecipe }}
    <div class="text-center mb-8">
      <h2 class="text-xl md:text-2xl xl:text-4xl font-bold mb-3">Simple and tasty recipes</h2>
      <p class="text-gray-500 text-lg md:text-xl">
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
      <p class="text-red-600">Sorry, no recipes found now, please try again later!</p>
    </div>

    
    <div v-else>
      <div class="max-w-[450px] mx-auto">
        <v-text-field
        v-model="search"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Search for Recipe"
        variant="solo"
        hide-details
        single-line
        color="primary"
        class="mb-6 rounded-xl"
      ></v-text-field>
      </div>
      <transition-group name="slide-up" tag="div" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12" appear>
        <div
          v-for="(recipe,index) in filteredRecipes"
          :key="recipe.id"
          class="w-full max-w-[350px] 2xl:max-w-[450px] h-[434px] bg-gradient-to-b from-[#E7F9FD00] to-[#E7F9FD] rounded-xl px-4 flex flex-col mx-auto relative"
        >
          <!-- icon favoirate-->
           <div v-if="isFavoirateRecipe[index]" class="absolute top-[10px] right-[30px] bg-gray-100 w-[48px] h-[48px] rounded-[50%] flex justify-center items-center cursor-pointer"
            @click.stop="toggleIsFavoirate(index)">
            <IconsFavoirate />
           </div>
           <div v-else class="absolute top-[10px] right-[30px] bg-gray-100 w-[48px] h-[48px] rounded-[50%] flex justify-center items-center cursor-pointer"
           @click.stop="toggleIsFavoirate(index)">
            <IconsNoFavoirate />
           </div> 
          <NuxtLink :to="`/recipes/${recipe.id}`">
          <img :src="recipe.photoUrl" class="w-full h-[250px] object-cover rounded-2xl" />

          <h2 class="text-xl  lg:text-[17px] 2xl:text-xl font-bold mt-8 h-[70px]">
            {{ recipe.title }}
          </h2>

          <div class="flex">
            <div class="flex items-center gap-2 py-3 px-5 rounded-xl">
              <IconsClock />
              <p class="text-gray-500 text-sm">30 Minutes</p>
            </div>
            <div class="flex items-center gap-2 py-3 px-5 rounded-xl">
              <IconsKnifes />
              <p class="text-gray-500 text-sm">Chicken</p>
            </div>
          </div>
          </NuxtLink>
        </div>
      </transition-group>
      <div class="text-center">
        <p class="text-gray-500" v-if="filteredRecipes.length === 0">No recipes found</p>
      </div>
      
      <div class="flex justify-center gap-4 mt-8">
        <button
          class="cursor-pointer bg-black text-white text-xl rounded-lg px-6 py-3"
          @click="showMoreRecipes"
          v-if="recipes.length < ($recipes as Recipe[]).length && search.length === 0"
        >
          Show More
        </button>

      </div>
    </div>
  </section>
</template>
<style scoped>

.slide-up-enter-from {
  transform: translateY(30px);
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-move {
  transition: all 0.5s ease;
}
</style>
