<script setup>
import { ref } from 'vue'
defineProps({
    data: Array
})
const isHover = ref(null)

</script>
<template>
    <section class="relative grid w-full h-full grid-cols-3">
        <div v-for="(item, key) in data" :key="key" class="relative col-span-3 duration-500 transform bg-center bg-cover lg:col-span-1 md:col-span-2"
        @mouseenter="isHover = key" @mouseleave="isHover = false">
            <img :src="item.image" :alt="item.name" width="100%" height="100%" center cover responsive loading="lazy"/>
            <h1 v-if="isHover === false" class="text-white lg:text-[36px] text-[28px] md:text-[32px] font-[700] text-center absolute mx-auto w-full top-10">
                {{ item.name }}
            </h1>
            <div v-else-if="isHover === key" class="flex flex-col justify-center items-center mx-auto gap-y-4 min-h-[20vh] absolute z-1 inset-0 w-full h-full z-1 bg-black/50 px-6">
                <h1 class="text-white lg:text-[36px] text-[28px] md:text-[32px] font-[700]">
                    {{ item.name }}
                </h1>
                <h2 class="tracking-wide text-white font-[600] text-justify lg:w-2/3" style="text-align-last: center;">{{ item.summary }}</h2>   
                <p class="tracking-wide text-white font-[600] text-justify lg:w-2/3" style="text-align-last: center;">{{ item.description }}</p>          
            </div>
        </div>
        <svg width="5" height="116" viewBox="0 0 5 116" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute mx-auto transform translate-x-1/2 lg:top-[93%] top-[96%] left-1/2 z-[2]">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66675 0.85498H2.77786V114.86H1.66675V0.85498Z" fill="#CCBB99" stroke="#CCBB99"/>
        </svg>
    </section>
</template>