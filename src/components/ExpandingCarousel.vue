<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const props = defineProps({
  images: Array,
  alt: String,
});

</script>

<template>
  <Carousel 
    class="w-full h-full mx-auto rounded-[2px]" 
    :wrapAround="true"
    :mouseDrag="false"     
    ariaGallery 
    :transition="600"
    :itemsToShow="1">
    <Slide v-for="(item, key) in props.images" :key="key">
      <img 
        :src="item"
        :alt="'Bissar Concepts - ' + props.alt" 
        loading="eager" 
        decoding="async"        
        class="carousel-image-blurry" 
      />
      <img 
        :src="item" 
        :alt="'Bissar Concepts - ' + props.alt" 
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
.carousel__slide {
  height: auto !important;
  max-height: 1200px !important;
}

.carousel-image {
  width: 75%;
  height: auto;
  object-fit: contain; /* Display image with full content */
  position: relative;
  z-index: 1; /* Ensure image is above the blurry background */
}

.carousel-image-blurry {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(20px); /* Adjust blur intensity as needed */
  z-index: 0; /* Place background behind the image */
}
.carousel__pagination {
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
}


</style>
