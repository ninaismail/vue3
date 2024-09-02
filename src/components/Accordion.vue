<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';

const props = defineProps({
    pagetitle: String,
    data: Array
})
const isClicked = ref(0);
console.log('selected accordion', isClicked.value)
// const toggleClicked = (key) => {
//     isClicked.value = isClicked.value === key ? 1 : key;
// };
</script>
<template>
    <section id="beihind-the-brand" class="relative w-full h-full py-20 mx-auto lg:py-40">
        <div class="w-11/12 2xl:w-8/12 mx-auto lg:w-10/12 flex flex-wrap items-center justify-end gap-3 mb-[32px] h-full">
            <div class="w-full lg:left-0 lg:top-40 lg:absolute 2xl:w-6/12 lg:w-5/12">
                <img src="/images_v1/editorial/60 1.jpg" alt="Bissar Concepts" width="644" height="691" center cover responsive loading="lazy" class="aspect-0.93/1 max-lg:ms-auto max-lg:me-0"/>
            </div>
            <div class="w-full h-full space-y-3 2xl:w-7/12 lg:w-6/12 lg:min-h-[603px]">
                <h1 class="lg:text-[36px] text-[28px] md:text-[32px] font-[700]">
                    {{ props.pagetitle }}
                </h1>
                <div role="accordion" v-for="(item, key) in props.data" :key="key" class="px-2 py-3 space-y-3 border-t border-b border-black">
                    <button
                    :id="item.title + (isClicked === key ? '-active' : '')" 
                    :aria-label="'show ' + item.title"
                    class="uppercase w-full cursor-pointer font-[700] flex gap-2 justify-between items-center"
                    @click="isClicked = key">
                        <span>{{ item.title }}</span>
                        <span v-if="isClicked === key" class="text-3xl"> - </span>
                        <span v-else class="text-3xl"> + </span>
                    </button>
                    <p v-if="isClicked === key" class="w-full tracking-wide font-[600] duration-600 transition-all">{{ item.content }}</p>   
                </div>
            </div>
        </div>
    </section>
</template>