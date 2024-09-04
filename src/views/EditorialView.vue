<script setup>
import { getAccordion } from '../utils/api_function';
import GalleryCarousel from '../components/GalleryCarousel.vue';
import Accordion from '../components/Accordion.vue';

import { getEditorial } from '../utils/laravel_api_functions';
import { onMounted, ref } from 'vue';

const editorialhero = ref([]);

const accordion = getAccordion();

const fetchHero = async () => {
    editorialhero.value = await getEditorial();
    console.log(editorialhero.value);
};

onMounted(() => {
  fetchHero();
});
</script>
<template>
    <head>  
    <title>Bissar Consepts - Editorial</title>
    </head>
    <div v-if="editorialhero[0]">
        <GalleryCarousel :item="editorialhero[0]"/>
    </div>
    <Accordion :data="accordion" pagetitle="Behind the brand"/>
</template>

