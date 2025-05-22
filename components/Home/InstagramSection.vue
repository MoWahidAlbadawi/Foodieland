<script setup lang="ts">
import instaPhotoOne from 'assets/images/Instagram/insta_photo_one.png';
import instaPhotoTwo from 'assets/images/Instagram/insta_photo_two.png';
import instaPhotoThree from 'assets/images/Instagram/insta_photo_three.png';
import instaPhotoFour from 'assets/images/Instagram/insta_photo_four.png';

const posts = ref([
    {id : 1 , image : instaPhotoOne},
    {id : 2 , image : instaPhotoTwo},
    {id : 3 , image : instaPhotoThree},
    {id : 4 , image : instaPhotoFour},
]);
</script>

<template>
    <section class="mt-36 bg-gradient-to-b from-[white] pb-20 to-[#E7F9FD] ">
        <div class="text-center mb-8">
            <h2 class="text-xl md:text-2xl xl:text-4xl font-bold mb-3">Check out @foodieland on Instagram</h2>
            <p class="text-gray-500 text-lg md:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nostrum veritatis repellendus enim obcaecati ipsa.</p>
        </div>   
        <div class="px-4">
            <v-row>
                <v-col v-for="post in posts" :key="post.id" cols="12" sm="6"  lg="3">
                    <div class="flex justify-between items-center bg-white"> 
                        <div class="flex gap-2">
                            <img src="assets/images/Instagram/Oval.png" alt="oval" class="w-10 h-10">
                            <div class="flex flex-col gap-1">
                                <p class="flex items-center gap-1">foodieland <IconsCheck /></p>
                                <p>Tokyo , Japan</p>
                            </div>
                        </div>
                        <p class="text-4xl -mt-8">...</p>
                    </div>
                    <v-img :src="post.image" class="rounded-sm relative">
                        <p class="absolute top-2 right-2 bg-[rgba(0,0,0,0.5)] text-white rounded-full px-2 py-1">1/3</p>
                    </v-img>
                    <div class="bg-white flex flex-col gap-4 p-2">
                        <div class="flex justify-between ">
                            <div class="flex justify-center items-center gap-1 text-gray-700">
                                <img src="assets/images/Instagram/Like.png" alt="like" class="w-5 h-5">
                                <img src="assets/images/Instagram/Comment.png" alt="comment" class="w-5 h-5">
                                <img src="assets/images/Instagram/Messanger.png" alt="messanger" class="w-5 h-5">
                            </div>
                            <div class="flex justify-center items-center gap-1 text-gray-700">
                            <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
                            <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
                            </div>
                            <img src="assets/images/Instagram/Shape.png" alt="shape" class="w-5 h-5">
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex items-center gap-2">
                                <img src="assets/images/Mohammad.jpg" alt="oval" class="w-10 h-10 rounded-full">
                                <p class="mt-2">Liked by <span class="font-bold">Mohammad</span> and <span class="font-bold">44,686 others</span></p>
                            </div>
                            <p><span class="font-bold">Foodieland.</span>The vegtebales dishes need to have certian vetamin for those people</p>
                        </div>
                        <p class="text-gray-500">September 19</p>
                    </div>
                </v-col>
                <div class="mx-auto pt-20 pb-10">
                <button class="cursor-pointer bg-black text-white rounded-lg  py-4 px-12 flex gap-2 items-center text-xl">
                    View our Instagram <IconsInstagram /></button>
                </div>
            </v-row>
        </div>        
    </section>
</template>