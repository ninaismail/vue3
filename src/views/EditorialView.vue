<script setup>
import { getEditorial, getAccordion } from '../utils/api_function';
import ExpandingCarousel from '../components/ExpandingCarousel.vue';
import Accordion from '../components/Accordion.vue';


const images = getEditorial();
const accordion = getAccordion();
</script>
<template>
    <section class="w-11/12 pt-40 mx-auto space-y-3 2xl:w-8/12 lg:w-10/12">
        <h1 class="lg:text-[36px] text-[28px] md:text-[32px] font-[700] text-center lg:w-2/3 mx-auto pb-20">
            An edge of sophistication to simplicity, a whiff of modernism to the traditional.
        </h1>
    <ExpandingCarousel :images="images" :isEditorial="true"/>
    </section>
    <section class="w-11/12 pt-20 mx-auto space-y-3 2xl:w-8/12 lg:w-10/12">
        <p class="tracking-wide font-[600] text-center">
            By taking a fresh approach to design, we create viable and dynamic spaces that are as unique as the individuality of each of our clients.
        </p>          
    </section>
    <Accordion :data="accordion" pagetitle="Behind the brand"/>
</template>

