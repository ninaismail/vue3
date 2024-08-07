<script setup>
import { RouterLink } from 'vue-router'
import logo from '/Bissar_Logo.webp'
import Socials from '../Socials.vue'
const footerlinks = [
  { id: 1, 
    name: 'OUR SERVICES',
    to:'',
    submenu: [
    { id: 1, name: "Industrial Design", to:"/" },
    { id: 2, name: 'Commercial Interior Design', to: '/about' },
    { id: 3, name: 'Residencial Interior ', to: '/contact' },
    { id: 3, name: 'Industries ', to: '/industries' },
  ]
  },
  {
    id: 2, 
    submenu: [
      { id: 1, name: 'Design Detailed and Phased', to:'/' },
      { id: 2, name: 'Planning', to:'/' },
      { id: 3, name: 'Apartment Exterior Design', to:'/' }
    ]
  },
  {
    id: 3, 
    name: 'Contacts', 
    to: '/',
    submenu: [
      { id: 1, name: 'Email', to:'info@bissarconcepts.com' },
      { id: 2, name: 'Phone', to:'+966 55 372 7844' },
      { id: 3, name: 'Address', address:'King Fahd Road Al Olaya, Tower 1 Riyadh, Saudi Arabia' }
    ]
  }
]

</script>

<template>
    <footer class="relative flex flex-col items-center justify-center gap-10 pt-20 sm:pt-40 bg-bg3">
      <div class="flex flex-wrap justify-between 2xl:w-8/12 lg:w-10/12 w-11/12 gap-6 max-lg:px-6 lg:gap-0">
        <div class="flex flex-col w-full gap-2 mb-10 lg:w-4/12 lg:mb-0">
            <img :src="logo" alt="Bissar Concepts Logo" width="147" height="37" center cover responsive loading="lazy"/>
            <p class="tracking-wide font-[200] max-sm:text-[14px] text-justify">Authenticity, uniqueness and originality are at the core of our designs.
            No matter the projects, the scale or the style,  we always have the vision to create beautiful spaces that inspire, elevate and bring comfort.</p>
            <Socials small black/>
        </div>
        <ul role="list" class="flex flex-wrap justify-between w-full lg:w-7/12 gap-y-3 list-style-none">
            <li v-for="(item, key) in footerlinks" :key="key" class="w-full sm:w-1/2 md:w-1/3">
            <h1 class="text-lg font-[400] mb-3 uppercase">
              <span v-if="item.name" class="pb-2 border-b border-6 border-white">{{ item.name }}</span>
            </h1>
            <div v-for="(subitem, subkey) in item.submenu" :key="subkey" class="pb-3">
                <RouterLink :id="subitem.name" :aria-label="'go to ' + subitem.name" :to="{path: item.to, hash: subitem?.to}" 
                class="font-[200] hover:brightness-75 max-sm:text-[14px]">
                {{ subitem.name }}</RouterLink>
            </div>                
            </li>
        </ul>
      </div>
      <div class="text-center min-h-[50px] w-full flex gap-4 flex-wrap max-lg:px-6 items-center justify-center border-t py-3 border-white">
        <p class="tracking-wide text-[14px]">Copyright ©2023 BISSAR CONCEPTS by The Cabinet. All Rights Reserved.</p>
        <p class="tracking-wide text-[14px]">
        <RouterLink
        id="go-to-terms-of-us-page"
        aria-label="go to turem of us page"
        to="/terms-of-us"
        class="w-fit cursor-pointer px-4 py-3 font-[400] text-center rounded-[2px] hover:brightness-125"
        >Terms of use</RouterLink>|
        <RouterLink
        id="go-to-privacy-enviromental-policy-page"
        aria-label="go to portfolio page"
        to="/privacy-enviromental-policy"
        class="w-fit cursor-pointer px-4 py-3 font-[400] text-center rounded-[2px]hover:brightness-125"
        >Privacy Environmental Policy.</RouterLink>
        </p>
      </div>
    </footer>
</template>