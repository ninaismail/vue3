<script setup>
import { getEditorial, getAccordion } from '../utils/api_function';
import GalleryCarousel from '../components/GalleryCarousel.vue';
import Accordion from '../components/Accordion.vue';


const images = getEditorial();
const accordion = getAccordion();
</script>
<template>
    <section class="w-11/12 pt-40 mx-auto space-y-3 2xl:w-8/12 lg:w-10/12">
        <h1 class="lg:text-[36px] text-[28px] md:text-[32px] font-[700] text-center lg:w-2/3 mx-auto pb-20">
            Creating Bespoke Spaces that are Distinctive, Compelling and Timeless.
        </h1>
    <GalleryCarousel :images="images" :isEditorial="true"/>
    </section>
    <section class="w-11/12 pt-20 mx-auto space-y-3 2xl:w-8/12 lg:w-10/12">
        <p class="tracking-wide font-[600] text-center">
            Bissar Concepts is a Beirut-based interior design studio led by architect Zaher Bissar, and currently present in Riyadh, Saudi Arabia. With hundreds of projects spanning across the Gulf Cooperation council (GCC), mainly KSA & UAE, Levant North Africa and Europe, the studio provides fully integrated interior design services, specialized in upscale projects. The studio’s portfolio covers palaces, private residences, public buildings, offices, hotels, private seaside resorts and mosques.
        </p>          
        <p class="tracking-wide font-[600] text-center">
            Our services include space-remodeling, refinement of architectural drawings, renovation, restoration, luxury furniture , tailor-made furniture designs and customized artwork.
        </p>
    </section>
    <Accordion :data="accordion" pagetitle="Behind the brand"/>
</template>

