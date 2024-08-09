<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import BackgroundTitle from './BackgroundTitle.vue'

const props = defineProps({
    data: Array,
    title: String,
    subtitle: String,
    bg: String,
    uniqueTypes: Array
})
const isClicked = ref('All');
const filteredData = ref(props.data)
console.log('filteredData', filteredData.value)
console.log('selected type', isClicked.value)
const filterData = (type) => {
  isClicked.value = type;

  // If 'All' is selected, show all data, otherwise filter by the selected type
  if (type === 'All') {
    filteredData.value = props.data;
  } else {
    filteredData.value = props.data.filter(item => item.type === type);
  }
};
const isHover = ref(null)

</script>
<template>
    <section class="flex flex-col items-center justify-center w-full h-full py-20 sm:py-40">
        <BackgroundTitle :bg="bg" :title="title"/>
        <div class="w-11/12 mx-auto 2xl:w-8/12 lg:w-10/12 mb-[16px]">
            <nav class="items-center justify-center flex-wrap gap-8 min-h-[42px] mb-[16px] flex">
                <button
                :id="item + (isClicked === 'All' ? '-active' : '')" 
                :aria-label="'show all'" 
                @click="filterData('All')"
                :class="{'font-[700] before:h-[2px]' : isClicked === 'All'}"
                class="relative uppercase cursor-pointer font-[600] hover:font-[700] text-center py-2 flex flex-col justify-center items-center before:bg-gold before:transition-all before:duration-600 before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:w-12 before:h-[1px] hover:before:h-[2px]"
                >
                 All
                </button>
                <button role="tabs" v-for="(item, key) in props.uniqueTypes" :key="key"
                :id="item + (isClicked === item ? '-active' : '')" 
                :aria-label="'show ' + item"
                :activeClass="'font-[700] before:absolute before:bottom-0 before:left-1/2 before:w-12 before:h-[2px] before:bg-gold before:transform before:-translate-x-1/2'"
                :exactActiveClass="'font-[700] before:absolute before:bottom-0 before:left-1/2 before:w-12 before:h-[2px] before:bg-gold before:transform before:-translate-x-1/2'"
                class="relative uppercase cursor-pointer font-[600] hover:font-[700] text-center py-2 flex flex-col justify-center items-center before:bg-gold before:transition-all before:duration-600 before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:w-12 before:h-[1px] hover:before:h-[2px]"
                @click="filterData(item)"
                >
                    {{ item }}
                </button role="tabs">
            </nav>
            <div class="grid grid-cols-3 gap-6">
                <RouterLink v-for="(item, key) in filteredData" :key="key" 
                :id="item.title + (isClicked === item.type ? '-active' : '')" 
                :aria-label="'go to ' + item.title" :to="'portfolio/' + item.slug"
                class="relative col-span-3 duration-500 transform bg-center bg-cover lg:col-span-1 md:col-span-2 w-fit h-fit"
                @mouseenter="isHover = key" @mouseleave="isHover = false">
                    <img :src="item.thumbnail" :alt="item.title"  width="340" height="348" center cover responsive loading="lazy"/>
                    <div v-if="isHover === key" class="flex flex-col justify-center mx-auto gap-y-4 min-h-[20vh] absolute z-1 inset-0 w-full h-full z-1 bg-black/50 px-6">
                        <h1 class="text-white lg:text-[32px] text-[28px] font-[700]">
                            {{ item.title }}
                        </h1>
                        <h2 class="tracking-wide text-white font-[600]">{{ item.location }}&nbsp;{{ item.year }}</h2>   
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