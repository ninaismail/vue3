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
      <link  v-for="(image, index) in item.images" rel="preload" :href="iimage" as="image" type="image/jpg">
      <link rel="preload" :href="item.banner" as="image" type="image/jpg">
    <head>
        <title>Bissar Consepts - {{item.title}}</title>
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
                
            </div>
            <div class="w-full h-full lg:w-3/12">
                <div class="border-[2px] border-gold flex flex-col gap-3 px-4 py-10 h-full w-full">
                    <div v-if="item.client" class="flex items-center justify-between">
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