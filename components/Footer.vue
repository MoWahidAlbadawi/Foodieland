<template>
    <footer>
        <div class="flex flex-col md:flex-row justify-between  sm:px-10 md:px-0 lg:px-20 py-5 items-center w-full border-b-2 border-[rgb(239 239 239)]">
            <div class="relative w-full">
            <v-img
            :width="225"
            aspect-ratio="16/9"
            cover
            src="/images/TemplateLogo.png"
            class="m-auto md:m-0"
            ></v-img>
            <p class="md:absolute md:left-12 md:top-20 mt-3 z-2 text-center mb-5 md:mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div>
                <ul class="flex gap-5 md:gap-12 justify-center text-lg md:me-20 my-5 md:my-0 w-full">
                    <li><NuxtLink to='/'>Home</NuxtLink></li>
                    <li>All Recipes</li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col gap-5 md:flex-row md:justify-between lg:justify-center md:px-36 items-center pb-12 mt-5 md:relative">
            <div>
                <p>2025 , Flowbase , Powred by Webflow</p>
            </div>
            <div>
            <ul class="text-xl flex gap-5 md:absolute md:top-0 md:right-40">
                <li class="cursor-pointer"><IconsFacebook /></li>
                <li class="cursor-pointer"><IconsInstagram /></li>
                <li class="cursor-pointer"><IconsTwitter /></li>
            </ul>
        </div>
        </div>
    </footer>
</template>