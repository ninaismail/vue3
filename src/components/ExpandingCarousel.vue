<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { onMounted } from 'vue';
defineProps({
  images: Array,
  alt: String,
})
// Calculate the number of items to show based on screen width
const getItemsToShow = () => {
  if (typeof window !== 'undefined') {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1280) {
    return 3; // Desktop
  } else if (screenWidth >= 1024) {
    return 3; // smaller  Desktop
  } else if (screenWidth >= 768) {
    return 2; // Tablet
  } else if (screenWidth >= 640) {
    return 1; // big mobile
  } else if (screenWidth < 640) {
    return 1; // Mobile
  }
  }};

onMounted(() => {
    window.addEventListener('resize', () => {
      getItemsToShow()
    });
});
</script>

<template>
    <Carousel class="w-full h-full mx-auto" 
    :wrapAround="true"
    :Infinity="true"
    :mouseDrag="false"        
    :items-to-show="getItemsToShow()">
        <Slide v-for="(item, key) in images" :key="key" class="rounded-[2px] my-10">
            <img :src="item" :alt="'Bissar Concepts - ' + alt"  class="carousel-image"  center cover responsive loading="eager"/>
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />              
        </template>
    </Carousel>
</template>

<style scoped>
.carousel-image {
    width: 100px; /* Set a fixed width for non-centered images */
    height: auto;
    transition: width 0.5s ease-in-out;
}

.carousel__slide--active .carousel-image {
    width: auto; /* Expand to original width for the centered image */
}

.carousel__pagination {
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);
}

.carousel__slide {
    display: block !important;
    width: fit-content !important;
    margin: 10px !important;  
}
</style>