<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

defineProps({
  images: Array,
  alt: String,
  isEditorial: Boolean
})
</script>


<template>
    <Carousel :wrap-around="true" :arrows="true" class="w-full h-full mx-auto mb-[16px]">
        <Slide v-for="(item, key) in images" :key="key" class="rounded-[2px] my-10">
            <img :src="isEditorial ? item.image : item" :alt="'Bissar Concepts -' + isEditorial ? item.title : alt" width="1440" height="568" center cover responsive loading="eager"/>
        </Slide>
        <template #addons>
            <Navigation/>
            <Pagination/>              
        </template>
    </Carousel>
</template>

<!-- <style scoped>
.carousel__slide{
  display: block !important;
  text-align: left !important;
  margin: 10px !important;  
}
.maskleft {
  -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0));
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0));
  mask-size: cover; 
  mask-position: center;
}


@media (max-width: 640px) {
  .carousel__slide {
    width: 97% !important;
    margin: 5px !important;  
  }
}
</style> -->