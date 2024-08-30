<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { onMounted } from 'vue';

defineProps({
  images: Array,
  alt: String,
});

const getItemsToShow = () => {
  if (typeof window !== 'undefined') {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      return 5; // Desktop
    } else if (screenWidth >= 1024) {
      return 3;  // Smaller Desktop
    } else if (screenWidth >= 768) {
      return 3; // Tablet
    } else if (screenWidth >= 640) {
      return 1; // Big Mobile
    } else if (screenWidth < 640) {
      return 1; // Mobile
    }
  }
};

onMounted(() => {
  window.addEventListener('resize', () => {
    getItemsToShow();
  });
});
</script>

<template>
  <Carousel class="my-20 mx-auto rounded-[2px]" 
    :wrapAround="true"
    :mouseDrag="false"   
    ariaGallery 
    :transition="false"
    :itemsToShow="getItemsToShow()">
    <Slide v-for="(item, key) in images" :key="key">
      <img 
        :src="item" 
        :alt="'Bissar Concepts - ' + alt" 
        loading="eager" 
        decoding="async"
        class="carousel-image"
      />
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

.carousel__slide--visible {
  width: 13% !important;
}

.carousel__slide {
  position: relative !important;
  height: auto !important;
  transition: width 0.4s ease-in-out;
  overflow: hidden !important;
}

.carousel-image {
  width: 105% !important;
  height: 100% !important;
  transform: scale(1.05) !important;
  object-fit: cover !important;
  transition: transform 0.4s ease-in-out;
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

.carousel__slide--active .carousel-image {
  transform: scale(1) !important;
}

.carousel__slide--active::before {
  display: none;
}

@media only screen and (max-width: 640px) { 
  .carousel__slide {
    max-height: 350px!important;
  }  
}
</style>
