<script setup>
import { ref, watch, computed } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const props = defineProps({
  data: Array,
  initialSlug: String
});

const currentSlide = ref(0);
const carousel = ref(null);

// Watch for changes to initialSlug to set the correct initial slide
watch(
  () => props.initialSlug,
  (newSlug) => {
    const initialIndex = props.data.findIndex(item => item.slug === newSlug);
    if (initialIndex !== -1) {
      currentSlide.value = initialIndex;
    }
  },
  { immediate: true }
);

// Methods to control the carousel navigation
const goPrev = () => carousel.value.prev();
const goNext = () => carousel.value.next();

// Compute the previous and next slide titles
const prevSlideTitle = computed(() => {
  const prevIndex = (currentSlide.value - 1 + props.data.length) % props.data.length;
  return props.data[prevIndex].title;
});

const nextSlideTitle = computed(() => {
  const nextIndex = (currentSlide.value + 1) % props.data.length;
  return props.data[nextIndex].title;
});
</script>

<template>
  <Carousel
    ref="carousel" 
    v-model="currentSlide"
    :wrap-around="true" 
    :arrows="false"
    class="w-full h-full mx-auto mb-[16px]">
    <Slide v-for="(item, key) in props.data" :key="key" class="w-full h-full my-10">
      <slot :item="item"/>
    </Slide>
  </Carousel>
  <!-- Custom Navigation Buttons with Slide Titles -->
  <div class="flex items-center justify-between gap-2 mt-4 border-t border-black">
    <button @click="goPrev()" class="flex items-center gap-2 group">
      <span class="p-3 bg-gold group-hover:bg-olive focuse:bg-olive">
        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3779 19.6877L1.37793 10.1877L10.3779 0.687745" stroke="black" stroke-width="2"/>
        </svg> 
      </span>
      <span class="font-[800]">{{ prevSlideTitle }}</span>
    </button>
    <button @click="goNext()" class="flex items-center gap-2 group">
      <span class="font-[800]">{{ nextSlideTitle }}</span>
      <span class="p-3 bg-gold group-hover:bg-olive focuse:bg-olive">
        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="transform -scale-x-100">
        <path d="M10.3779 19.6877L1.37793 10.1877L10.3779 0.687745" stroke="black" stroke-width="2"/>
        </svg> 
      </span>
    </button>
  </div>
</template>

<style scoped>
.carousel__slide {
  display: block !important;
  text-align: left !important;
}

.custom-prev-btn, .custom-next-btn {
  /* Add custom styles for your navigation buttons */
  background-color: #333;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
