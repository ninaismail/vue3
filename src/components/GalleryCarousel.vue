<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

defineProps({
  images: Array,
})
</script>

<template>
    <Carousel class="w-full h-full mx-auto" 
    :wrapAround="true"     
    ariaGallery
    :transition="600">
        <Slide v-for="(item, key) in images" :key="key" class="rounded-[2px]">
            <img :src="item.image" :alt="'Bissar Concepts - ' + item.title" width="1440" height="568" center cover responsive loading="eager"/>
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
