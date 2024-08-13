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
    <Carousel class="w-full h-full mx-auto mb-[16px]">
        <Slide v-for="(item, key) in images" :key="key" class="rounded-[2px] my-10">
            <img :src="isEditorial ? item.image : item" :alt="'Bissar Concepts - ' + (isEditorial ? item.title : alt)" width="1440" height="568" center cover responsive loading="eager"/>
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

.carousel__arrow--prev,
.carousel__arrow--next {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
}
.carousel__prev, .carousel__next {
    margin:0 !important;
}
.carousel__arrow--prev {
    left: 0px;
}

.carousel__arrow--next {
    right: 0px;
}
</style>
