<script setup>
import Socials from '../components/Socials.vue'

</script>
<template>
  <section class="flex flex-col justify-center w-full h-screen bg-center bg-cover items-between bg-hero">
    <div class="flex flex-col justify-between w-10/12 px-6 mx-auto gap-y-2">
      <div class="min-h-[20vh]">
      <h1 class="text-bg1 lg:text-[32px] text-[28px] font-[700]">
        Home of Luxery
      </h1>
      <p class="tracking-wide text-bg1 font-[600] text-justify">what's your style?</p>          
      </div>
      <RouterLink
        id="go-to-portfolio-page"
        aria-label="go to portfolio page"
        to="/portfolio"
        class="w-fit cursor-pointer px-4 py-3 font-[400] text-center rounded-[2px] text-accent1 bg-bg1 hover:brightness-125 uppercase"
        >View Projects</RouterLink>
    </div>
    <Socials class="mx-auto absolute top-[90%] left-[8.67%] transform translate-x-[8.67%]"/>
  </section>
  <svg width="5" height="116" viewBox="0 0 5 116" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute mx-auto transform translate-x-1/2 top-[93%] left-1/2 z-[2]">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66675 0.85498H2.77786V114.86H1.66675V0.85498Z" fill="#CCBB99" stroke="#CCBB99"/>
  </svg>
</template>
  