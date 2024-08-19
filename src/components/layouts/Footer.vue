<script setup>
import { RouterLink } from 'vue-router'
import logo from '/Bissar_Logo.webp'
import Socials from '../Socials.vue'
const footerlinks = [
  { id: 1, 
    name: 'Our Services',
    to:'/',
    submenu: [
    { id: 1, name: "Custom Designs", to:"#skills" },
    { id: 2, name: 'Exquisite Furniture', to: '#skills' },
    { id: 3, name: 'Luxury Homes Contract', to: '#skills' },
  ]
  },
  {
    id: 2, 
    name: 'Contacts', 
    to: '/',
    submenu: [
      { id: 1, name: 'Email', email:'info@bissarconcepts.com' },
      { id: 2, name: 'Phone', phone:'+966 55 372 7844' },
    ]
  }
]

</script>

<template>
    <footer class="relative flex flex-col items-center justify-center gap-10 pt-20 bg-[#E9E9E9]">
      <div class="flex flex-wrap justify-between w-11/12 gap-6 2xl:w-8/12 lg:w-10/12 lg:gap-0">
        <div class="flex flex-col w-full gap-3 mb-10 lg:w-5/12 lg:mb-0">
            <img :src="logo" alt="Bissar Concepts Logo" width="147" height="37" center cover responsive loading="lazy"/>
            <p class="tracking-wide font-[400] text-justify">Authenticity, uniqueness and originality are at the core of our designs.
            No matter the projects, the scale or the style,  we always have the vision to create beautiful spaces that inspire, elevate and bring comfort.</p>
            <Socials small black/>
        </div>
        <ul role="list" class="flex flex-wrap justify-between w-full gap-3 lg:w-6/12 list-style-none">
          <li v-for="(item, key) in footerlinks" :key="key" class="flex-1 w-full space-y-3">
          <h1 class="text-lg font-[700] mb-3">
            <span v-if="item.name" class="pb-2 border-b border-white border-6">{{ item.name }}</span>
          </h1>
          <div v-for="(subitem, subkey) in item.submenu" :key="subkey">
              <RouterLink v-if="item.id != 2" :id="subitem.name" :aria-label="'go to ' + subitem.name" :to="{path: item.to, hash: subitem?.to}" 
              class="font-[400] hover:brightness-75">
              {{ subitem.name }}</RouterLink>
              <a prefetch="false" v-show="subitem.email" :id="'email-' + subitem.name + 'location'" :aria-label="'Email' + subitem.title + 'Location'" :href="'mailto:'+ subitem.email" class="cursor-pointer font-[400] hover:brightness-75">
                {{ subitem.email }}
              </a>
              <a prefetch="false" v-show="subitem.phone" :id="'call-' + subitem.name + 'location'" :aria-label="'Call' + subitem.title + 'Location'" :href="'tel:'+ subitem.phone" class="cursor-pointer font-[400] hover:brightness-75">
                {{ subitem.phone }}
              </a>
          </div>                
          </li>
        </ul>
      </div>
      <div class="text-center min-h-[50px] w-full flex gap-3 flex-wrap items-center justify-center border-t py-3 border-white">
        <p class="tracking-wide text-[14px]">Copyright ©2024 BISSAR CONCEPTS by The Cabinet. All Rights Reserved.</p>
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