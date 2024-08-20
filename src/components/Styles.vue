<script setup>
import { ref } from 'vue'
defineProps({
    data: Array
})
const isHover = ref(null)

</script>
<template>
    <section class="relative grid w-full h-full grid-cols-1 mx-auto lg:grid-cols-3 md:grid-cols-2">
        <div v-for="(item, key) in data" :key="key" class="relative"
        @mouseenter="isHover = key" @mouseleave="isHover = false">
            <img :src="item.image" :alt="item.name" width="100%" height="100%" center cover responsive loading="lazy" class="aspect-[0.68/1]"/>
            <Transition>
                <div class="flex flex-col items-center mx-auto gap-y-4 absolute z-[1] inset-0 w-full h-full px-6 duration-600 transition-all"
                :class="isHover === key ? 'justify-center bg-black/50' : 'justify-start pt-10'">
                    <h1 class="text-white lg:text-[36px] text-[28px] md:text-[32px] font-[700]">
                        {{ item.name }}
                    </h1>
                    <h2 v-if="isHover === key" class="tracking-wide text-white font-[600] text-justify lg:w-2/3" style="text-align-last: center;">{{ item.summary }}</h2>   
                    <p v-if="isHover === key" class="tracking-wide text-white font-[600] text-justify lg:w-2/3" style="text-align-last: center;">{{ item.description }}</p>          
                </div>
            </Transition>
        </div>
        <svg width="5" height="116" viewBox="0 0 5 116" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute mx-auto transform translate-x-1/2 lg:top-[93%] top-[96%] left-1/2 z-[2]">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66675 0.85498H2.77786V114.86H1.66675V0.85498Z" fill="#CCBB99" stroke="#CCBB99"/>
        </svg>
    </section>
</template>