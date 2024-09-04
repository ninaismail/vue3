<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import BackgroundTitle from './BackgroundTitle.vue'

const props = defineProps({
    data: Array,
    title: String,
    subtitle: String,
    bg: String,
    categories: Array,
    limit: Number,
    cat: String
})

const isHover = ref(null)
const isClicked = ref('All');
const filteredData = ref([]);
const visibleData = ref(props.data);
const itemsToShow = ref(props.limit);

const filterData = (category) => {
  isClicked.value = category;

  // Check if visibleData.value is an array before filtering and slicing
  if (Array.isArray(visibleData.value)) {
    if (category === 'All') {
      filteredData.value = visibleData.value.slice(0, itemsToShow.value);
    } else {
      filteredData.value = visibleData.value.filter(item => item.category === category).slice(0, itemsToShow.value);
    }
  } else {
    // Handle case where visibleData.value is not an array
    filteredData.value = [];
    console.error('visibleData is not an array:', visibleData.value);
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
    <link  v-for="(item, index) in filteredData" rel="preload" :href="item.thumbnail" as="image"  type="image/jpg">
    <section class="relative flex flex-col items-center justify-center w-11/12 py-20 mx-auto 2xl:w-8/12 lg:w-10/12">
        <BackgroundTitle :bg="bg" :title="title"/>
        <div class="my-[32px] w-full mx-auto">
            <nav class="items-center justify-center flex-wrap md:gap-8 gap-x-3 min-h-[42px] mb-[32px] flex">
                <button
                :id="'All' + (isClicked === 'All' ? '-active' : '')" 
                :aria-label="'show all'" 
                @click="filterData('All')"
                :class="{'font-[700] before:absolute before:bottom-0 before:left-1/2 before:w-12 before:h-[2px] before:bg-gold before:transform before:-translate-x-1/2' : isClicked === 'All'}"
                class="relative text-center uppercase cursor-pointer font-[600] hover:font-[700] py-2 flex flex-col before:w-0 before:h-0 before:bg-gold before:transition-all before:duration-600 before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 hover:before:w-12 hover:before:h-[2px]"
                >
                 All
                </button>
                <button role="tab" v-for="(item, key) in props.categories" :key="key"
                :id="item + (isClicked === item ? '-active' : '')" 
                :aria-label="'show ' + item"
                :class="{'font-[700] before:absolute before:bottom-0 before:left-1/2 before:w-12 before:h-[2px] before:bg-gold before:transform before:-translate-x-1/2' : isClicked === item}"
                class="relative text-center uppercase cursor-pointer font-[600] hover:font-[700] py-2 flex flex-col before:w-0 before:h-0 before:bg-gold before:transition-all before:duration-600 before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 hover:before:w-12 hover:before:h-[2px]"
                @click="filterData(item)"
                >
                    {{ item }}
                </button>
            </nav>
            <div class="grid w-full h-full grid-cols-1 pb-10 gap-x-6 gap-y-10 lg:grid-cols-3 sm:grid-cols-2">
                <RouterLink v-for="(item, key) in filteredData" :key="key" 
                :id="item.title + (isClicked === item.category ? '-active' : '')" 
                :aria-label="'go to ' + item.title" :to="`${$route.path}/${item.slug}`"
                class="relative mx-auto duration-600 transform bg-center bg-cover w-fit h-fit rounded-[2px]"
                @mouseenter="isHover = key" @mouseleave="isHover = false">
                    <img :src="item.thumbnail" :alt="item.title"  width="340" height="348" center cover responsive loading="lazy" class="aspect-0.98/1"/>              
                    <div v-if="cat === 'portfolio'" 
                    class="flex flex-col justify-center mx-auto gap-y-4 h-[35%] absolute left-0 bottom-0 w-full z-1 bg-[#53554A] bg-opacity-77 px-6">
                        <h1 class="relative flex flex-col justify-center text-white min-h-[62px] lg:text-[18px] font-[600] pb-2 before:absolute before:bottom-0 before:-left-6 before:w-full before:h-[2px] before:bg-gold">
                            {{ item.title }}
                        </h1>
                        <h2 class="tracking-wide flex flex-col justify-center text-white max-sm:text-[12px] font-[500]">{{ item.location }}&nbsp;{{ item.year }}</h2>   
                    </div>
                    <div v-else-if="cat === 'collabs'" class="absolute flex flex-col justify-center w-3/4 text-center transform -translate-x-1/2 bg-white border -bottom-[25px] h-fit border-gold left-1/2">
                        <h1 class="lg:text-[18px] p-2 font-[700] border-b border-gold">
                            {{ item.title }}
                        </h1>
                        <h2 class="tracking-wide max-sm:text-[12px] font-[600]">{{ item.location }}&nbsp;{{ item.year }}</h2>   
                    </div>
                </RouterLink>
            </div>
        </div>
        <button
        v-show="filteredData.length > 6"
        @click="loadMore()"
        id="load-more-projects"
        aria-label="load more projects"
        class="w-fit cursor-pointer px-4 py-3 font-[400] text-center rounded-[2px] bg-gold hover:bg-olive transition-all duration-400  hover:text-white uppercase"
        >Load More</button>
    </section>
</template>
