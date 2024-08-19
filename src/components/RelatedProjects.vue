<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue';

const props = defineProps({
  data: Array,
  filter: String,
  cat: String,
});

const isHover = ref(false);

// Filter data based on the selected location
const filteredData = computed(() => {
  return props.data.filter(item => item.location === props.filter);
});
</script>

<template>
    <section class="w-11/12 mx-auto space-y-3 lg:w-10/12 2xl:w-8/12">
        <h1 class="lg:text-[36px] text-[28px] md:text-[32px] font-[700]">
            Related Projects
        </h1>
        <div class="grid w-full h-full grid-cols-1 gap-10 pb-10 lg:grid-cols-3 md:grid-cols-2">
            <div v-for="(item, key) in filteredData" :key="key">
            <RouterLink v-if="filter === item.location"
            :id="item.title + (isHover === key ? '-active' : '')" 
            :aria-label="'go to ' + item.title" :to="`/${item.category.toLowerCase()}/${item.slug}`"
            class="relative rounded-[2px]"
            @mouseenter="isHover = key" @mouseleave="isHover = false">
                <img :src="item.thumbnail" :alt="item.title"  width="340" height="348" center cover responsive loading="lazy" class="w-full h-full aspect-square"/>
                <div v-if="isHover === key && cat === 'portfolio'" class="flex flex-col justify-center mx-auto gap-y-4 min-h-[20vh] absolute z-1 inset-0 w-full h-full z-1 bg-[#53554A] bg-opacity-77 px-6">
                    <h1 class="relative text-white lg:text-[24px] font-[700] pb-2 before:absolute before:bottom-0 before:-left-6 before:w-full before:h-[4px] before:bg-gold">
                        {{ item.title }}
                    </h1>
                    <h2 class="tracking-wide text-white font-[600]">{{ item.location }}&nbsp;{{ item.year }}</h2>   
                </div>
                <div v-else-if="cat === 'collabs'" class="absolute flex flex-col justify-center w-3/4 text-center transform -translate-x-1/2 bg-white border -bottom-6 h-fit border-gold left-1/2">
                    <h1 class="lg:text-[20px] p-2 font-[700] border-b border-gold">
                        {{ item.title }}
                    </h1>
                    <h2 class="tracking-wide font-[600]">{{ item.location }}&nbsp;{{ item.year }}</h2>   
                </div>
            </RouterLink>                
            </div>
        </div>             
    </section>
</template>