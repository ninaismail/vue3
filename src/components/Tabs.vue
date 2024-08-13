<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import BackgroundTitle from './BackgroundTitle.vue'

const props = defineProps({
    data: Array,
    title: String,
    subtitle: String,
    bg: String,
    uniqueTypes: Array,
    limit: Number
})

const isHover = ref(null)
const isClicked = ref('All');
const filteredData = ref([]);
const visibleData = ref(props.data);
const itemsToShow = ref(props.limit);

const filterData = (type) => {
  isClicked.value = type;
  
  // Update the filtered data based on the type and apply the initial slice
  if (type === 'All') {
    filteredData.value = visibleData.value.slice(0, itemsToShow.value);
  } else {
    filteredData.value = visibleData.value.filter(item => item.type === type).slice(0, itemsToShow.value);
  }
};

const loadMore = () => {
  itemsToShow.value += props.limit; 
  filterData(isClicked.value); 
};

// Initial filtering
filterData('All');
</script>

<template>
    <section class="flex flex-col items-center justify-center w-11/12 py-20 mx-auto 2xl:w-8/12 lg:w-10/12">
        <BackgroundTitle :bg="bg" :title="title"/>
        <div class="mb-[16px] w-full mx-auto">
            <nav class="items-center justify-center flex-wrap gap-8 min-h-[42px] mb-[16px] flex">
                <button
                :id="'All' + (isClicked === 'All' ? '-active' : '')" 
                :aria-label="'show all'" 
                @click="filterData('All')"
                :class="{'font-[700] before:absolute before:bottom-0 before:left-1/2 before:w-12 before:h-[2px] before:bg-gold before:transform before:-translate-x-1/2' : isClicked === 'All'}"
                class="relative text-center uppercase cursor-pointer font-[600] hover:font-[700] py-2 flex flex-col before:w-0 before:h-0 before:bg-gold before:transition-all before:duration-600 before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 hover:before:w-12 hover:before:h-[2px]"
                >
                 All
                </button>
                <button role="tab" v-for="(item, key) in props.uniqueTypes" :key="key"
                :id="item + (isClicked === item ? '-active' : '')" 
                :aria-label="'show ' + item"
                :class="{'font-[700] before:absolute before:bottom-0 before:left-1/2 before:w-12 before:h-[2px] before:bg-gold before:transform before:-translate-x-1/2' : isClicked === item}"
                class="relative text-center uppercase cursor-pointer font-[600] hover:font-[700] py-2 flex flex-col before:w-0 before:h-0 before:bg-gold before:transition-all before:duration-600 before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 hover:before:w-12 hover:before:h-[2px]"
                @click="filterData(item)"
                >
                    {{ item }}
                </button>
            </nav>
            <div class="grid grid-cols-3 gap-6">
                <RouterLink v-for="(item, key) in filteredData" :key="key" 
                :id="item.title + (isClicked === item.type ? '-active' : '')" 
                :aria-label="'go to ' + item.title" :to="`${$route.path}/${item.slug}`"
                class="relative mx-auto col-span-3 duration-500 transform bg-center bg-cover lg:col-span-1 md:col-span-2 w-fit h-fit rounded-[2px]"
                @mouseenter="isHover = key" @mouseleave="isHover = false">
                    <img :src="item.thumbnail" :alt="item.title"  width="340" height="348" center cover responsive loading="lazy"/>
                    <div v-if="isHover === key" class="flex flex-col justify-center mx-auto gap-y-4 min-h-[20vh] absolute z-1 inset-0 w-full h-full z-1 bg-black/50 px-6">
                        <h1 class="text-white lg:text-[36px] text-[28px] md:text-[32px] font-[700]">
                            {{ item.title }}
                        </h1>
                        <h2 class="tracking-wide text-white font-[600]">{{ item.location }}&nbsp;{{ item.year }}</h2>   
                    </div>
                </RouterLink>
            </div>
        </div>
        <button
        v-if="filteredData.length === props.limit && props.limit >=6"
        @click="loadMore()"
        id="load-more-projects"
        aria-label="load more projects"
        class="w-fit cursor-pointer px-4 py-3 font-[400] text-center rounded-[2px] bg-gold hover:bg-olive hover:text-white uppercase"
        >Load More</button>
    </section>
</template>
