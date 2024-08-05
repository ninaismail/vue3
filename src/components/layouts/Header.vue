<script setup>
import logo from '/Bissar_Logo.webp'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
const navlinks = [
  { id: 1, name: 'Home', to: '/' },
  { id: 2, name: 'Editorial', to: '/editorial' },
  { id: 2, name: 'Portfolio', to: '/portfolio' },
  { id: 2, name: 'Collaborations', to: '/collaborations' },
  { id: 6, name: 'Contact', to: '/contact' }
]

const isOpen = ref(false)

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>
<template>
    <header class="w-full h-[64px] shadow-sm bg-bg1 mx-auto fixed z-1 top-0 left-0 p-6 flex justify-between items-center gap-3 px-6"
    :class="{'h-fit' : isOpen}">
        <RouterLink id="Home" aria-label="go to home" to="/">
        <img :src="logo" alt="Bissar Concepts logo" width="147" height="37" cover center responsive loading="eager"/>    
        </RouterLink>
        <!-- Descktop -->
        <nav class="items-center justify-center hidden w-8/12 h-full gap-2.5 lg:flex">
            <RouterLink v-for="(item, key) in navlinks" :key="key" :id="item.name + (openSubMenu === item.id ? '-active' : '')" :aria-label="'go to ' + item.name" :to="item.to" 
            :activeClass="'font-[700]'"
            :exactActiveClass="'font-[700]'"
            class="uppercase cursor-pointer text-lg min-w-[193px] font-[400] text-accent1 hover:font-[700] text-center">
            {{ item.name }}
            </RouterLink>
        </nav>
        <div class="flex gap-2.5 items-center">
            <svg role="bottom" width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.353 22.896L22.646 23.603L16.993 17.95C15.401 19.375 13.305 20.25 11 20.25C6.029 20.25 2 16.219 2 11.249C2 6.27902 6.029 2.24902 11 2.24902C15.971 2.24902 20 6.27902 20 11.249C20 13.554 19.126 15.651 17.7 17.243L23.353 22.896Z" stroke="black"/>
            </svg>
            <svg role="bottom" width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M33 24C30.239 24 28 21.762 28 19C28 16.239 30.239 14 33 14C35.761 14 38 16.239 38 19C38 21.762 35.761 24 33 24ZM33 11C30.239 11 28 8.762 28 6C28 3.239 30.239 1 33 1C35.761 1 38 3.239 38 6C38 8.762 35.761 11 33 11ZM19 37C16.239 37 14 34.761 14 32C14 29.239 16.239 27.001 19 27.001C21.761 27.001 24 29.239 24 32C24 34.761 21.761 37 19 37ZM19 24C16.239 24 14 21.762 14 19C14 16.239 16.239 14 19 14C21.761 14 24 16.239 24 19C24 21.762 21.761 24 19 24ZM19 11C16.239 11 14 8.762 14 6C14 3.239 16.239 1 19 1C21.761 1 24 3.239 24 6C24 8.762 21.761 11 19 11ZM6 37C3.238 37 1 34.761 1 32C1 29.239 3.238 27.001 6 27.001C8.761 27.001 11 29.239 11 32C11 34.761 8.761 37 6 37ZM6 24C3.238 24 1 21.762 1 19C1 16.239 3.238 14 6 14C8.761 14 11 16.239 11 19C11 21.762 8.761 24 6 24ZM6 11C3.238 11 1 8.762 1 6C1 3.239 3.238 1 6 1C8.761 1 11 3.239 11 6C11 8.762 8.761 11 6 11ZM33 27.001C35.761 27.001 38 29.239 38 32C38 34.761 35.761 37 33 37C30.239 37 28 34.761 28 32C28 29.239 30.239 27.001 33 27.001Z" stroke="black"/>
            </svg>
        </div>
    </header>
</template>