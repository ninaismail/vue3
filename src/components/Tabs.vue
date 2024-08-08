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
        <div class="w-11/12 mx-auto 2xl:w-8/12 lg:w-10/12">
            <nav class="items-center justify-center flex-wrap gap-8 min-h-[42px] mb-[16px] flex">
                <button
                id="all" 
                :aria-label="'show all'" 
                class="relative uppercase cursor-pointer font-[500] hover:font-[700] text-center group py-2 flex flex-col justify-center items-center">
                    <span class="group-hover:font-[700]">All</span>
                    <span class="w-12 h-[1px] mx-auto bg-gold group-hover:h-[2px] transition-[height] duration-600"></span>        
                </button>
                <RouterLink v-for="(item, key) in uniqueCats" :key="key" 
                :id="item + (isClicked === item.id ? '-active' : '')" 
                :aria-label="'show ' + item" :to="'#'+item" 
                class="relative uppercase cursor-pointer font-[500] hover:font-[700] text-center group py-2 flex flex-col justify-center items-center">
                    <span class="group-hover:font-[700]">{{ item }}</span>
                    <span class="w-12 h-[1px] mx-auto bg-gold group-hover:h-[2px] transition-[height] duration-600"></span>        
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
    </section>
</template>