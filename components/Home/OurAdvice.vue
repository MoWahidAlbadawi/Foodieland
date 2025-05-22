<template>
    <section class="mt-60">
        <div class="flex flex-col-reverse lg:flex-row lg:justify-between lg:gap-10 items-center">
            <div class="lg:w-[40%] flex flex-col gap-12 mt-12 lg:mt-0 text-center lg:!text-start">
                <h2 class="text-3xl sm:text-5xl font-bold">Everyone can be a chef in their own Kitchen</h2>
                <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus quia id nulla a, voluptate illum nam minus consectetur! Odit, quam reprehenderit! Earum dolore aspernatur vero animi inventore modi nihil!</p>
                <button class="cursor-pointer bg-black text-white  rounded-xl w-fit py-4 px-12 self-center lg:self-start lg:ms-6">Learn More</button>
            </div>
            <div class="bg-gradient-to-b from-[white] to-[#B0E3F0] lg:mt-12 rounded-xl relative w-[300px] sm:!w-[600px] h-[180px] sm:!h-[400px]">
                    <img src="assets/images/chef/chef.png" class="absolute -top-[50%] "/>
                <!-- vegtables -->
             <img src="assets/images/chef/meat.png" class="absolute -top-[40%] sm:!-top-[25%] left-[5%] sm:!left-[5%] animate-up-to-down"/>
             <img src="assets/images/chef/tomato.png" class="absolute top-[65%] -left-[2%] animate-up-to-down"/>
             <img src="assets/images/chef/onion.png" class="absolute -top-[25%] right-[10%] sm:!right-[20%] animate-up-to-down"/>
             <img src="assets/images/chef/vegan.png" class="hidden sm:!block absolute top-0 right-[2%] animate-up-to-down"/>
            </div>
        </div>
    </section>
</template>