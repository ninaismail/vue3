<script setup>
import { ref, watch } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const props = defineProps({
  data: Array,
  initialSlug: String
})

const currentIndex = ref(0);

// Watch for changes to initialSlug to set the correct initial slide
watch(
  () => props.initialSlug,
  (newSlug) => {
    const initialIndex = props.data.findIndex(item => item.slug === newSlug);
    if (initialIndex !== -1) {
      currentIndex.value = initialIndex;
    }
  },
  { immediate: true }
);
</script>

<template>
  <Carousel 
      v-model:current-slide="currentIndex"
      :wrap-around="true" 
      :arrows="true"
  >
      <Slide v-for="(item, key) in props.data" :key="key">
          <slot :item="item"/>
      </Slide>
      <template #addons>
          <Navigation/>
          <Pagination/>
      </template>
  </Carousel>
</template>

<style scoped>
.carousel__slide{
  text-align: left !important;
}
</style>

