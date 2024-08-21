<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

defineProps({
  images: Array,
})
</script>

<template>
    <Carousel class="relative w-full h-full mx-auto rounded-[2px]" 
    :wrapAround="true"     
    ariaGallery
    :transition="600">
        <Slide v-for="(item, key) in images" :key="key" class="relative w-full h-full">
            <img :src="item.image" :alt="'Bissar Concepts - ' + item.title" width="1226" height="728" center cover responsive loading="eager" class="w-full h-full aspect-1.68/1"/>
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />              
        </template>
    </Carousel>
</template>

<style scoped>
.carousel__pagination {
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);
}
</style>
