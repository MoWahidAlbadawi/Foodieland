<template>
    <div class="flex flex-col-reverse lg:flex-row  lg:justify-between rounded-xl overflow-hidden h-[900px] lg:h-[640px]">
      <!-- first section -->
      <div class="flex flex-col gap-8 bg-gradient-to-b from-[#E7FAFE] to-[#B0E3F0] p-4 md:p-8 lg:w-1/2">
        <div class="bg-white py-3 px-8 rounded-xl flex items-center gap-2 w-fit mt-8">
          <img src="assets/images/recipces-book.png" />
          <h4 class="font-bold text-lg">Hot Recipes</h4>
        </div>
  
        <h2 class="text-3xl lg:text-5xl xl:text-[50px] 2xl:!text-[60px] 2xl:mt-5 font-bold lg:w-full xl:w-3/4">
          Spicy delicious chicken wings
        </h2>
  
        <p class="text-gray-600 lg:w-full xl:s-3/4 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, deserunt repellendus. Fuga eveniet officia a?
        </p>

        <div class="flex gap-3">
            <div class="flex gap-2 py-3 px-5 bg-[#efeaea66] rounded-xl text-[rgba(0, 0, 0, 0.6)]">
                <IconsClock />
                <p class="text-gray-500">30 Minutes</p>
            </div>
            <div class="flex gap-3 py-3 px-5 bg-[#efeaea66] rounded-xl text-[rgba(0, 0, 0, 0.6)]">
               <IconsKnifes />
                <p class="text-gray-500">Chicken</p>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 sm:gap-0 lg:gap-4 xl:gap-0 justify-between items-start sm:items-center lg:items-start xl:items-center">
            <div class="flex gap-2">
                <v-avatar>
                <v-img
                    alt="Mohammad"
                    src="assets/images/Mohammad.jpg"
                ></v-img>
                </v-avatar>
                <div>
                    <h6 class="font-bold text-sm sm:text-lg">Mohammad Albadawi</h6>
                    <p class="text-gray-500">19 April 2025</p>
                </div>
            </div>
            <button class="flex xl:g  ap-2 cursor-pointer bg-black text-white p-3 px-8 rounded-xl">
                <p class="mt-1">View Recipces</p>
                <p><IconsView /></p>
            </button>
        </div>

      </div>
      <!-- second section -->
      <div class="lg:w-1/2 bg-white relative">
        <img src="/images/Mask_Group.png" class="object-cover lg:w-full h-full " />
        <!-- Badge -->
         <div class="hidden lg:block absolute  lg:top-5 lg:-left-20">
          <v-img
          alt="ok"
          src="/assets/images/Badge.png"
          :width="125"></v-img>
          </div>
      </div>
    </div>
  </template>
  