<script setup lang="ts">
import vegan from 'assets/images/Categories/vegan.png';
import meat from 'assets/images/Categories/meat.png';
import dessert from 'assets/images/Categories/dessert.png';
import lunch from 'assets/images/Categories/lunch.png';
import chocolate from 'assets/images/Categories/chocalate.png';
import break_fast from 'assets/images/Categories/break_fast.png';


const categories = ref([
    {id : 1 , title : 'break fast' , image : break_fast , bgGradient : 'from-[white] to-[#f8f8f8]' },
    {id : 2 , title : 'vegan' , image : vegan , bgGradient : 'from-[white] to-[#E3FFE3]' },
    {id : 3 , title : 'meat' , image : meat , bgGradient : 'from-[white] to-[#FFEAEA]' },
    {id : 4 , title : 'dessert' , image : dessert , bgGradient : 'from-[white] to-[#FFF2DB]' },
    {id : 5 , title : 'lunch' , image : lunch , bgGradient : 'from-[white] to-[#F6F4F4]' },
    {id : 6 , title : 'chocolate' , image : chocolate, bgGradient : 'from-[white] to-[#FFEEEE]' },
]);
</script>

<template>
    <section class="mt-36">
        <div class="flex  items-center justify-between text-black font-bold px-6 md:px-0">
            <h2 class="text-xl md:text-2xl xl:text-4xl">Categories</h2>
            <button class="bg-gradient-to-b from-[#E7FAFE] to-[#B0E3F0] py-4 px-4 sm:px-6 lg:px-8 rounded-lg">View All Categories</button>
        </div>
        <div class="mt-8 categories">
            <v-row>
                <v-col v-for="category in categories" :key="category.id" cols="6" sm="4" md="3" lg="2" class="mt-16 lg:mt-0">
                    <HomeCategoryCard :category="category"/>
                </v-col>
            </v-row>
            </div>
    </section>
</template>
<style scoped>
@media(min-width:400px) and (max-width : 600px) {
    .categories {
        margin-inline-start: 10%;
    }
} 
</style>