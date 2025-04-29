<script setup>
const route = useRoute();
const recipeId = route.params.id;

const { data: recipe, error, pending } = await useAsyncData('recipe', () => 
  $fetch(`https://api.sampleapis.com/recipes/recipes/${recipeId}`)
);


watchEffect(() => {
  if (recipe.value) {
    useHead({
      title: recipe.value.title,
      meta: [
        { name: 'description', content: `${recipe.value.title} recipe` },
        { name: 'keywords', content: 'recipes, cooking, food, chicken recipes, easy meals, healthy recipes, quick dinners' },
      ],
    });
  }
});
</script>

<template>
  <section>
    <section class="md:w-[90%] mx-auto">
      <div v-if="pending" class="text-center py-10">
        Loading...
      </div>

      <div v-else-if="error" class="text-center py-10 text-red-500">
        {{ error }}
      </div>

      <div v-else>
        <RecipeHeader :recipe="recipe" />

        <RecipeInfo :recipe="recipe" />
      </div>

      <RecipeIngredients />
      <RecipeDirections />
    </section>

    <ContactUs />
    <RecipeSimilar />
  </section>
</template>
