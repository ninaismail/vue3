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
const isClicked = ref(false);
let lastScrollY = window.scrollY;

const showHeader = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 10) {
    // Scrolling down
    if (currentScrollY > lastScrollY && !isMouseOver.value) {
      isHidden.value = true;
    } else {
      // Scrolling up or hovering over the header
      isHidden.value = false;
    }
  } else {
    isHidden.value = false;
  }

  // Update the last known scroll position
  lastScrollY = currentScrollY;
};

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const toggleClicked = () => {
  isClicked.value = !isClicked.value;
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
    <header v-show="!isHidden || isMouseOver" role="header" class="py-6 transition-all bg-white shadow-md duration-600 max-sm:px-6"
    :class="{'h-fit' : isOpen}">
    <div class="items-center justify-between w-11/12 mx-auto 2xl:w-8/12 lg:w-10/12 lg:flex">
      <RouterLink id="Home" aria-label="go to home" to="/" class="w-2/12">
        <img :src="logo" alt="Bissar Concepts logo" width="147" height="37" cover center responsive loading="eager"/>    
      </RouterLink>
      <!-- Descktop -->
      <nav class="items-center justify-center hidden mx-auto gap-8 w-7/12 min-h-[42px] h-full lg:flex">
      <RouterLink 
        v-for="(item, key) in navlinks" 
        :key="key" 
        :id="item.name + (isClicked === item.id ? '-active' : '')" 
        :aria-label="'go to ' + item.name" 
        :to="item.to" 
        :activeClass="'font-[700] before:absolute before:bottom-0 before:left-1/2 before:w-12 before:h-[2px] before:bg-gold before:transform before:-translate-x-1/2'"
        :exactActiveClass="'font-[700] before:absolute before:bottom-0 before:left-1/2 before:w-12 before:h-[2px] before:bg-gold before:transform before:-translate-x-1/2'"
        class="relative uppercase cursor-pointer font-[600] hover:font-[700] text-center py-2 flex flex-col justify-center items-center before:w-0 before:h-0 before:bg-gold before:transition-all before:duration-600 before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 hover:before:w-12 hover:before:h-[2px]"
      >
        {{ item.name }}
      </RouterLink>
      </nav>
      <form id="search-bar" class="relative hidden lg:flex items-center h-[42px] transition-all duration-600" :class="isClicked ? 'border border-offwhite ' : 'border-0'">
        <input type="search" 
        placeholder="Search..." 
        class="relative px-5 py-3 font-[200] rounded-[2px] h-full outline-none duration-600 transition-[width]"
        :class="isClicked ? 'w-52' : 'w-0'">
        <svg role="bottom" @click="toggleClicked" width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute w-6 h-6 cursor-pointer right-3 top-3">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.353 22.896L22.646 23.603L16.993 17.95C15.401 19.375 13.305 20.25 11 20.25C6.029 20.25 2 16.219 2 11.249C2 6.27902 6.029 2.24902 11 2.24902C15.971 2.24902 20 6.27902 20 11.249C20 13.554 19.126 15.651 17.7 17.243L23.353 22.896Z" stroke="black"/>
        </svg>
      </form>
      
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
        <RouterLink 
        v-for="(item, key) in navlinks" 
        :key="key" 
        :id="item.name + (isClicked === item.id ? '-active' : '')" 
        :aria-label="'go to ' + item.name" 
        :to="item.to" 
        :activeClass="'font-[700] before:absolute before:bottom-0 before:left-1/2 before:w-12 before:h-[2px] before:bg-gold before:transform before:-translate-x-1/2'"
        :exactActiveClass="'font-[700] before:absolute before:bottom-0 before:left-1/2 before:w-12 before:h-[2px] before:bg-gold before:transform before:-translate-x-1/2'"
        class="relative uppercase cursor-pointer font-[600] hover:font-[700] py-2 flex flex-col before:w-0 before:h-0 before:bg-gold before:transition-all before:duration-600 before:absolute before:bottom-0 before:left-10 before:transform before:-translate-x-10 hover:before:w-12 hover:before:h-[2px]"
      >
        {{ item.name }}
      </RouterLink>
      <form id="search-bar" class="relative flex items-center border border-offwhite h-[42px]">
        <input type="search" 
        placeholder="Search..." 
        class="relative px-5 py-3 font-[200] rounded-[2px] h-full outline-none"
        :class="isClicked ? 'w-52' : 'w-0'">
        <svg role="bottom" width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute w-6 h-6 cursor-pointer right-3 top-3">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.353 22.896L22.646 23.603L16.993 17.95C15.401 19.375 13.305 20.25 11 20.25C6.029 20.25 2 16.219 2 11.249C2 6.27902 6.029 2.24902 11 2.24902C15.971 2.24902 20 6.27902 20 11.249C20 13.554 19.126 15.651 17.7 17.243L23.353 22.896Z" stroke="black"/>
        </svg>
      </form>
      </nav>
    </div>
    </header>  
  </div>
    
</template>