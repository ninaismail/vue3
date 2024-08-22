<script setup>
import { ref } from 'vue'
defineProps({
    data: Array
})
const isHover = ref(null)

</script>
<template>
    <section class="relative grid w-full h-full min-h-screen grid-cols-1 mx-auto lg:grid-cols-3 md:grid-cols-2">
        <div v-for="(item, key) in data" :key="key" class="relative w-full h-full"
        @mouseenter="isHover = key" @mouseleave="isHover = false">
            <img :src="item.image" :alt="item.name" center cover responsive loading="lazy" class="w-full h-full aspect-0.68/1"/>
            <Transition>
                <div class="flex flex-col justify-center items-center mx-auto gap-y-4 absolute z-[1] inset-0 w-full h-full p-2 duration-600 transition-opacity"
                :class="{'bg-black/50' : isHover === key}">
                    <h1 class="text-white 2xl:text-[36px] text-center text-[20px] font-[700]">
                        {{ item.name }}
                    </h1>
                    <h2 v-if="isHover === key" class="tracking-wide text-white font-[600] text-center lg:w-2/3">{{ item.summary }}</h2>   
                    <p v-if="isHover === key" class="tracking-wide text-white font-[600] text-center lg:w-2/3">{{ item.description }}</p>          
                </div>
            </Transition>
        </div>
        <svg width="5" height="116" viewBox="0 0 5 116" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute mx-auto transform translate-x-1/2 lg:top-[93%] top-[96%] left-1/2 z-[2]">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66675 0.85498H2.77786V114.86H1.66675V0.85498Z" fill="#CCBB99" stroke="#CCBB99"/>
        </svg>
    </section>
</template>