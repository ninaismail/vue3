<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import BackgroundTitle from './BackgroundTitle.vue'

 defineProps({
    data: Array,
    title: String,
    subtitle: String,
    bg: String,
    uniqueCats: Array
})
const isClicked = ref(false);
const isHover = ref(null)

</script>
<template>
    <section class="flex flex-col items-center justify-center w-full h-full py-20 sm:py-40 bg-bg2">
        <BackgroundTitle :bg="bg" :title="title"/>
        <div class="w-11/12 mx-auto 2xl:w-8/12 lg:w-10/12 mb-[16px]">
            <nav class="items-center justify-center flex-wrap gap-8 min-h-[42px] mb-[16px] flex">
                <button
                id="all" 
                :aria-label="'show all'" 
                class="relative uppercase cursor-pointer font-[600] hover:font-[700] text-center py-2 flex flex-col justify-center items-center before:bg-gold before:transition-all before:duration-600 before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 hover:before:w-12 hover:before:h-[2px]"
                >
                 All
                </button>
                <RouterLink v-for="(item, key) in uniqueCats" :key="key" 
                :id="item + (isClicked === item.id ? '-active' : '')" 
                :aria-label="'show ' + item" :to="'#'+item" 
                :activeClass="'font-[700] before:absolute before:bottom-0 before:left-1/2 before:w-12 before:h-[2px] before:bg-gold before:transform before:-translate-x-1/2'"
                :exactActiveClass="'font-[700] before:absolute before:bottom-0 before:left-1/2 before:w-12 before:h-[2px] before:bg-gold before:transform before:-translate-x-1/2'"
                class="relative uppercase cursor-pointer font-[600] hover:font-[700] text-center py-2 flex flex-col justify-center items-center before:bg-gold before:transition-all before:duration-600 before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 hover:before:w-12 hover:before:h-[2px]"
                >
                    {{ item }}
                </RouterLink>
            </nav>
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                <RouterLink v-for="(item, key) in data" :key="key" 
                :id="item.title + (isClicked === item.id ? '-active' : '')" 
                :aria-label="'go to ' + item.title" :to="item.slug" 
                class="relative col-span-3 duration-500 transform bg-center bg-cover lg:col-span-1 md:col-span-2"
                @mouseenter="isHover = key" @mouseleave="isHover = false">
                    <img :src="item.image" :alt="item.title"  width="340" height="348" center cover responsive loading="lazy"/>
                    <div v-if="isHover === key" class="flex flex-col justify-center items-center mx-auto gap-y-4 min-h-[20vh] absolute z-1 inset-0 w-full h-full z-1 bg-black/50 px-6">
                        <h1 class="text-white lg:text-[32px] text-[28px] font-[700]">
                            {{ item.title }}
                        </h1>
                        <h2 class="tracking-wide text-white font-[600]">{{ item.subtitle }}</h2>   
                    </div>
                </RouterLink>
            </div>
        </div>
        <RouterLink
        id="go-to-portfolio-page"
        aria-label="go to portfolio page"
        to="/portfolio"

        class="w-fit cursor-pointer px-4 py-3 font-[400] text-center rounded-[2px] bg-gold hover:bg-olive hover:text-white uppercase"
        >View Projects</RouterLink>
    </section>
</template>