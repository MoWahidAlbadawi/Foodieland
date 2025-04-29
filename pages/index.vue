<script setup lang="ts">
useHead({
    title : 'Foodieland',
    meta : [
        {name : 'description' , content : 'Foodieland is a website that allows you to find and share recipes.'},
        {name : 'keywords' , content : 'recipes, cooking, food, chicken recipes, easy meals, healthy recipes, quick dinners'},
    ]
})
</script>

<template>
    <section>
        <HomeSlides />

        <HomeCategories />

        <HomeRecipes />  

        <HomeOurAdvice />

        <HomeInstagramSection />

        <HomeHealthyRecipes />

        <ContactUs />

    </section>
</template>