<script setup lang="ts">
import vegan from 'assets/images/Categories/vegan.png';
import meat from 'assets/images/Categories/meat.png';
import dessert from 'assets/images/Categories/dessert.png';
import lunch from 'assets/images/Categories/lunch.png';
import chocolate from 'assets/images/Categories/chocalate.png';
import break_fast from 'assets/images/Categories/break_fast.png';


const categories = ref([
    {id : 1 , title : 'break fast' , image : break_fast , bgGradient : 'from-[white] to-[#f8f8f8]' },
    {id : 2 , title : 'vegan' , image : vegan , bgGradient : 'from-[#EAF6EA] to-[#E3FFE3]' },
    {id : 3 , title : 'meat' , image : meat , bgGradient : 'from-[#FFF2F2] to-[#FFEAEA]' },
    {id : 4 , title : 'dessert' , image : dessert , bgGradient : 'from-[#FFF9ED] to-[#FFF2DB]' },
    {id : 5 , title : 'lunch' , image : lunch , bgGradient : 'from-[#FDFDFD] to-[#F6F4F4]' },
    {id : 6 , title : 'chocolate' , image : chocolate, bgGradient : 'from-[#FDFDFD] to-[#FFEEEE]' },
]);
</script>

<template>
    <section class="my-20 mx-2 sm:!mx-4 md:!mx-12 lg:!mx-4 xl:!mx-32">
        <div class="flex  items-center justify-between text-black font-bold">
            <h2 class="text-xl md:text-2xl xl:text-4xl">Categories</h2>
            <button class="bg-gradient-to-b from-[#E7FAFE] to-[#B0E3F0] py-4 px-4 sm:px-6 lg:px-8 rounded-lg">View All Categories</button>
        </div>
        <div class="my-12 sm:ms-6 lg:ms-6 2xl:ms-32">
            <v-row class="space-y-8 mt-6 sm:mt-0">
                <v-col v-for="category in categories" :key="category.id" cols="6" sm="4" md="3" lg="2" class="mt-8">
                    <HomeCategoryCard :category="category"/>
                </v-col>
            </v-row>
            </div>
    </section>
</template>