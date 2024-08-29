<script setup>
import ExpandingCarousel from './ExpandingCarousel.vue';
import SocialSharing from './SocialSharing.vue';
import { useRoute } from 'vue-router';

 defineProps({
  item: Object,
});
const route = useRoute();
console.log(`https://bissarconcepts.com${route.fullPath}`)
</script>
<template>
    <head>
        <meta property="og:title" :content="item.title">
        <meta property="og:description" :content="item.description">
        <meta property="og:url" :content="`https://bissarconcepts.com${route.fullPath}`">
    </head>
    <section class="flex flex-col items-center justify-center w-11/12 h-full pt-20 mx-auto lg:w-10/12 2xl:w-8/12">
        <ExpandingCarousel :images="item.images" :alt="item.title"/>
        <div class="flex flex-wrap items-center justify-between w-full h-full gap-6 mt-[32px] lg:gap-0">
            <div class="space-y-3 2xl:mb-[64px] mb-[32px] w-full lg:w-8/12">
                <h1 class="lg:text-[36px] text-[28px] md:text-[32px] font-[700]">
                    {{ item.title }}
                </h1>
                <h2 class="lg:text-[24px] md:text-[20px] text-[18px] font-[100]">{{ item.location }}&nbsp;{{ item.year }}</h2>
                <p v-if="item.description" class="tracking-wide font-[400]">{{ item.description }}</p>
                <p v-else class="tracking-wide font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    <br/><br/>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    <br/><br/>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.
                </p> 
            </div>
            <div class="w-full h-full lg:w-3/12">
                <div class="border-[2px] border-gold flex flex-col gap-3 px-4 py-10 h-full w-full">
                    <div class="flex items-center justify-between">
                        <h2 class="tracking-wide font-[700]">Client:</h2>
                        <h2 class="tracking-wide font-[700]">{{ item.client }}</h2>
                    </div>                   
                    <div class="flex items-center justify-between">
                        <h2 class="tracking-wide font-[700]">Project Year:</h2>
                        <h2 class="tracking-wide font-[700]">{{ item.year }}</h2>
                    </div>                   
                    <div class="flex items-center justify-between">
                        <h2 class="tracking-wide font-[700]">Category:</h2>
                        <h2 class="tracking-wide font-[700]">{{ item.type }}</h2>
                    </div>                    
                    <!-- <div class="flex flex-wrap items-center justify-between">
                        <h2 class="tracking-wide font-[700]">Architects:</h2>
                        <h2  v-for="(architect, key) in item.architects" :key="key" class="tracking-wide font-[700]">{{ architect }}</h2>
                    </div> -->
                    <hr class="h-[2px] mx-auto bg-gold w-full"/>
                    <div class="flex items-center justify-between">
                        <h2 class="tracking-wide font-[700]">Share:</h2>
                        <SocialSharing
                    :url="`https://bissarconcepts.com${route.fullPath}`"
                    :title="item.title"
                    :description="item.description"
                    /></div>     

                </div>
            </div>
        </div>
    </section>
</template>