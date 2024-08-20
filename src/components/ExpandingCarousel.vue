<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { onMounted } from 'vue';
defineProps({
  images: Array,
  alt: String,
  isEditorial: Boolean
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
    <Carousel class="w-full h-full mx-auto rounded-[2px]" 
    :wrapAround="true"
    :loop="true"
    :Infinity="true"
    :mouseDrag="false"     
    ariaGallery 
    :itemsToShow="getItemsToShow()">
        <Slide v-for="(item, key) in images" :key="key">
          <img :src="isEditorial ? item.image : item" :alt="'Bissar Concepts - ' + (isEditorial ? item.title : alt)" class="object-none object-left w-full h-full" responsive loading="eager"/>
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />              
        </template>
    </Carousel>
</template>

<style scoped>
.carousel__slide--sliding {
  transition: transform 0.6s ease-in-out, width 0.6s ease-in-out;
}

.carousel__slide--active {
  /* Use a percentage or fixed width value */
  width: fit-content !important;
  transition: width 0.6s ease-in-out;
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
  transition: width 0.6s ease-in-out; /* Apply the same transition */
}

.carousel__slide--active img {
  transform: scale(1.05);
  transition: transform 0.6s ease-in-out;
}
</style>
