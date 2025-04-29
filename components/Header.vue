

<template>
    <header class="border-b-2 border-[rgb(239 239 239)]">
        <div class="md:px-8 py-2 flex justify-between items-center">
        <div>
            <v-img
            :width="225"
            aspect-ratio="16/9"
            cover
            src="/images/TemplateLogo.png"
            ></v-img>
        </div>
        <!-- nav in big screens -->
        <div class="hidden md:block">
            <nav>
          <ul class="flex gap-10 text-lg">
            <li><NuxtLink to='/'>Home</NuxtLink></li>
            <li>All Recipes</li>
          </ul>
        </nav>
        </div>
        <div>
            <ul class="text-xl flex flex-col sm:flex-row justify-center mt-5 sm:mt-0 gap-5 me-5 md:me-12">
                <li class="cursor-pointer"><IconsFacebook /></li>
                <li class="cursor-pointer"><IconsInstagram /></li>
                <li class="cursor-pointer"><IconsTwitter /></li>
            </ul>
        </div>
        </div>
            <!-- nav in small screens -->
            <div class="block md:hidden">
            <nav>
          <ul class="flex gap-20 text-xl justify-center items-center relative -top-5">
            <li><NuxtLink to='/'>Home</NuxtLink></li>
            <li>All Recipes</li>
          </ul>
        </nav>
        </div>
    </header>
</template>