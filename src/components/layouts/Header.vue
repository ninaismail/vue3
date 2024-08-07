<script setup>
import logo from '/Bissar_Logo.webp'
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue';

const navlinks = [
  { id: 1, name: 'Home', to: '/' },
  { id: 2, name: 'Editorial', to: '/editorial' },
  { id: 3, name: 'Portfolio', to: '/portfolio' },
  { id: 4, name: 'Collaborations', to: '/collaborations' },
  { id: 6, name: 'Contact', to: '/contact' }
];

const isHidden = ref(false);
const isMouseOver = ref(false);
const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const showHeader = () => {
  if (window.scrollY > 10) {
    isHidden.value = true;
  } else {
    isHidden.value = false;
  }
};

const handleMouseOver = () => {
  isMouseOver.value = true;
};

const handleMouseLeave = () => {
  isMouseOver.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", showHeader);
});

onUnmounted(() => {
  window.removeEventListener("scroll", showHeader);
});
</script>

<template>
  <div @mouseover="handleMouseOver" @mouseleave="handleMouseLeave" class="fixed z-[10] inset-0 w-full h-[64px]">
    <header v-show="!isHidden || isMouseOver" role="header" class="items-center justify-between gap-3 p-6 mx-auto duration-500 bg-white shadow-md lg:flex"
      :class="{'h-fit' : isOpen}">
    <RouterLink id="Home" aria-label="go to home" to="/" class="lg:ps-[16.67%] ps-0">
      <img :src="logo" alt="Bissar Concepts logo" width="147" height="37" cover center responsive loading="eager"/>    
    </RouterLink>
    <!-- Descktop -->
    <nav class="items-center justify-center hidden w-8/12 h-full gap-2.5 lg:flex">
      <RouterLink v-for="(item, key) in navlinks" :key="key" :id="item.name + (isClicked === item.id ? '-active' : '')" :aria-label="'go to ' + item.name" :to="item.to" 
      class="uppercase cursor-pointer min-w-[193px] font-[700] hover:font-[700] text-center">
        {{ item.name }}
      </RouterLink>
    </nav>
    <div class="flex gap-2.5 items-center lg:pe-[16.67%] pe-0">
      <svg role="bottom" width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 cursor-pointer">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.353 22.896L22.646 23.603L16.993 17.95C15.401 19.375 13.305 20.25 11 20.25C6.029 20.25 2 16.219 2 11.249C2 6.27902 6.029 2.24902 11 2.24902C15.971 2.24902 20 6.27902 20 11.249C20 13.554 19.126 15.651 17.7 17.243L23.353 22.896Z" stroke="black"/>
      </svg>
    </div>
    <!-- Mobile -->
    <button :id="!isOpen ? 'open-menu' : 'close-menu'" :aria-label="!isOpen ? 'open menu' : 'close menu'" class="absolute flex items-center justify-center w-6 h-6 lg:hidden right-6 top-6" @click="toggleOpen">
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" fill="black" viewBox="0 0 50 50" stroke="black">
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
      </svg>   
      <Transition>
      <h1 v-if="isOpen" class="text-2xl">&#10005;</h1>
      </Transition>
    </button>
    <nav v-if="isOpen" class="flex flex-col w-full py-5 mt-5 space-y-4 lg:hidden">
      <RouterLink v-for="(item, key) in navlinks" :key="key" :id="item.name + (isClicked === item.id ? '-active' : '')" :aria-label="'go to ' + item.name" :to="item.to"
      class="cursor-pointer font-[700] hover:font-[700] hover:drop-shadow-md">
        {{ item.name }}
      </RouterLink>
    </nav>
  </header>  
  </div>
    
</template>