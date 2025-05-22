<script setup>
const route = useRoute();
const recipeId = route.params.id;

const { data: recipe, error, pending } = useAsyncData('recipe', () => 
  $fetch(`https://api.sampleapis.com/recipes/recipes/${recipeId}`)
);


watchEffect(() => {
  if (recipe.value) {
    useHead({
      title: recipe.value.title,
      meta: [
        { name: 'description', content: `${recipe.value.description}` },
        { name: 'keywords', content: `${recipe.value.title} recipes, cooking, food, chicken recipes, easy meals, healthy recipes, quick dinners` },
      ],
    });
  }
});
</script>

<template>
    <div v-if="pending" class="text-center py-10">
        Loading...
  </div>

    <div v-else-if="error" class="text-center py-10 text-red-500">
        {{ error }}
     </div>

    <section v-else class="w-[95%] md:w-[90%] mx-auto">
      <div >
        <RecipeHeader :recipe="recipe" />

        <RecipeInfo :recipe="recipe" />
      </div>

      <RecipeIngredients />
      <RecipeDirections />
    
    <ContactUs />
    <RecipeSimilar />
  </section>
</template>
