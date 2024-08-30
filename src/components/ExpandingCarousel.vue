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
    return 3;  // smaller  Desktop
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
    <Carousel class="absolute inset-0 w-full h-full mx-auto rounded-[2px]" 
    :wrapAround="true"
    :mouseDrag="false"     
    ariaGallery 
    :transition="false"
    :itemsToShow="getItemsToShow()">
        <Slide v-for="(item, key) in images" :key="key" >
          <img :src="item" :alt="'Bissar Concepts - ' + alt" loading="eager" decoding="async"
          width="100%" height="100%" 
          responsive cover center
          :style="{ imageRendering: 'crisp-edges', imageResolution: '300dpi' }"/>
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />              
        </template>
    </Carousel>
</template>

<style scoped>
.carousel__slide--sliding {
  transition: width 0.6s ease-in-out;
}

.carousel__slide--visible.carousel__slide--active {
  width: fit-content !important;
  opacity: 1 !important;
}

.carousel__pagination {
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
}

.carousel__slide--visible{
  width: 13% !important;
}

.carousel__slide {
  position: relative !important; /* Ensure relative positioning for the overlay */
  height: auto !important;
  transition: width 0.4s ease-in-out;
  overflow: hidden !important;   /* Hide any overflow caused by the scaled image */
}

.carousel__slide img {
  width: 100% !important;
  height: 100% !important;
}

.carousel__slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 1; 
} 

.carousel__slide--active::before {
  display: none; /* Remove overlay for active slide */
}

@media only screen and (max-width: 640px) { 
  .carousel__slide {
   max-height: 350px!important;
  }  
}
</style>
