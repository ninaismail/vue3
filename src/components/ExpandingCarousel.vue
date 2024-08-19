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
    return 3.95; // Desktop
  } else if (screenWidth >= 1024) {
    return 3.95; // smaller  Desktop
  } else if (screenWidth >= 768) {
    return 3; // Tablet
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
    :loop="true"
    :Infinity="true"
    :mouseDrag="false"        
    :items-to-show="getItemsToShow()">
        <Slide v-for="(item, key) in images" :key="key" class="rounded-[2px] my-10">
            <img :src="item" :alt="'Bissar Concepts - ' + alt" class="w-full h-full" center cover responsive loading="eager"/>
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />              
        </template>
    </Carousel>
</template>

<style scoped>
.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide--active{
  width: fit-content !important;
}


.carousel__pagination {
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
}

.carousel__slide {
  position: static !important;
  height: auto !important;
  margin: 10px !important;
}
</style>