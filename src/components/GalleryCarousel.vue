<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

defineProps({
  item: Array,
})
</script>

<template>
    <link v-for="(image, index) in item.images" rel="preload" :href="image" as="image"  type="image/jpg">
    <section class="w-11/12 pt-40 mx-auto space-y-3 2xl:w-8/12 lg:w-10/12">
        <h1 class="lg:text-[36px] text-[28px] md:text-[32px] font-[700] text-center lg:w-2/3 mx-auto pb-20">
           {{ item.title }}
        </h1>
        <Carousel class="relative w-full h-full mx-auto rounded-[2px]" 
        :wrapAround="true"     
        ariaGallery
        :transition="600">
            <Slide v-for="(image, key) in item.images" :key="key" class="relative w-full h-full">
                <img :src="image" :alt="'Bissar Concepts - ' + item.title" width="1226" height="728" center cover responsive loading="eager" class="w-full h-full aspect-1.68/1"
                :style="{ backgroundSize:'cover', backgroundPosition:'center', imageRendering: 'crisp-edges', imageResolution: '300dpi' }"/>
            </Slide>
            <template #addons>
                <Navigation />
                <Pagination />              
            </template>
        </Carousel>
        <p class="tracking-wide font-[600] text-center pt-20">
            {{ item.description }}
        </p>          
    </section>
</template>

<style scoped>
.carousel__pagination {
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);
}
</style>
