<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  data: Array,
  filter: String,
  cat: String,
  currentId: String
});

const isHover = ref(false);

const filteredData = computed(() => {
  return props.data.filter(item => item.type === props.filter && item.id !== props.currentId);
});
</script>

<template>
  <section class="w-11/12 pb-20 mx-auto space-y-3 lg:w-10/12 2xl:w-8/12">
    <h1 class="lg:text-[36px] text-[28px] md:text-[32px] font-[700]">
      Related Projects
    </h1>
    <div v-if="filteredData.length > 0" class="grid w-full grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-3 sm:grid-cols-2">
      <RouterLink v-for="(item, key) in filteredData" :key="key"
          @mouseenter="isHover = key"
          @mouseleave="isHover = null"
            :id="item.title + (isHover === key ? '-active' : '')"
            :aria-label="'go to ' + item.title"
            :to="`/${item.category.toLowerCase()}/${item.slug}`"
            class="relative w-fit h-fit max-sm:mx-auto rounded-[2px]"
          >
            <img
              :src="item.thumbnail"
              :alt="item.title"
              width="340"
              height="348"
              class="aspect-0.98/1"
              loading="lazy"
            />
            <div v-if="cat === 'portfolio'" 
            class="flex flex-col justify-center mx-auto gap-y-4 h-[35%] absolute left-0 bottom-0 w-full z-1 bg-[#53554A] bg-opacity-77 px-6">
                <h1 class="relative flex flex-col justify-center text-white lg:text-[18px] min-h-[62px] font-[700] pb-2 before:absolute before:bottom-0 before:-left-6 before:w-full before:h-[4px] before:bg-gold">
                    {{ item.title }}
                </h1>
                <h2 class="tracking-wide text-white max-sm:text-[12px] font-[600]">{{ item.location }}&nbsp;{{ item.year }}</h2>   
              </div>
            <div v-else-if="cat === 'collabs'" class="absolute flex flex-col justify-center w-3/4 text-center transform -translate-x-1/2 bg-white border -bottom-6 h-fit border-gold left-1/2">
              <h1 class="lg:text-[18px] p-2 font-[700] border-b border-gold">
                {{ item.title }}
              </h1>
              <h2 class="tracking-wide max-sm:text-[12px] font-[600]">{{ item.location }}&nbsp;{{ item.year }}</h2>   
            </div>
      </RouterLink>
    </div>
    <h1 v-else class="lg:text-[20px] p-2 font-[700] border-b border-gold">
        No related projects...
      </h1>
  </section>
</template>