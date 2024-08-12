<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';

defineProps({
   data: Array,
   filter: String
})
const isHover = ref(null)
</script>

<template>
    <section class="w-11/12 h-full mx-auto space-y-3 lg:w-10/12 2xl:w-8/12">
        <h1 class="lg:text-[36px] text-[28px] md:text-[32px] font-[700]">
            Related Projects
        </h1>
        <div class="w-full lg:columns-3 md:columns-2 columns-1">
            <div v-for="(item, key) in data" :key="key">
            <RouterLink v-if="filter === item.location"
            :id="item.title + (isHover === key ? '-active' : '')" 
            :aria-label="'go to ' + item.title" :to="`/${item.category.toLowerCase()}/${item.slug}`"
            class="relative w-full aspect-square"
            @mouseenter="isHover = key" @mouseleave="isHover = false">
                <img :src="item.thumbnail" :alt="item.title"  width="340" height="348" center cover responsive loading="lazy" class="w-full h-full"/>
                <div v-if="isHover === key" class="flex flex-col justify-center mx-auto gap-y-4 min-h-[20vh] absolute z-1 inset-0 w-full h-full z-1 bg-black/50 px-6">
                    <h1 class="text-white lg:text-[36px] text-[28px] md:text-[32px] font-[700]">
                        {{ item.title }}
                    </h1>
                    <h2 class="tracking-wide text-white font-[600]">{{ item.location }}&nbsp;{{ item.year }}</h2>   
                </div>
            </RouterLink>                
            </div>
          
        </div>             
    </section>
</template>