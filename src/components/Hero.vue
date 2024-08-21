<script setup>
import Socials from '../components/Socials.vue'

</script>
<template>
  <section class="relative flex flex-col justify-center w-full max-h-screen items-between mt-[90px] bg-cover bg-center aspect-2/1 bg-hero">
    <!-- <img src="/images/hero/hero.webp" alt="Bissar Concepts" loading="eager" class="aspect-[2/1] absolute inset-0 z-[-1] w-full h-full"/> -->
    <div class="flex flex-col w-11/12 h-full py-40 mx-auto 2xl:w-8/12 lg:w-10/12">
      <div class="space-y-3 mb-[64px]">
        <h1 class="text-white uppercase lg:text-[64px] md:text-[52px] text-[40px] font-[700] leading-tight">
          Home <br class="max-lg:hidden"/>of Luxury
        </h1>
        <p class="tracking-wide text-white font-[600] text-justify lg:w-1/2">Luxury is when it seems flawless, when you reach the right balance between all elements. Understated theatricality – that is what my luxury is all about.– Jean-Louis Deniot</p>          
      </div>
      <RouterLink
        id="go-to-portfolio-page"
        aria-label="go to portfolio page"
        to="/portfolio"
        :activeClass="'bg-olive text-white'"
        :exactActiveClass="'bg-olive text-white'"
        class="w-fit cursor-pointer px-4 py-3 font-[400] text-center rounded-[2px] bg-white hover:bg-olive hover:text-white uppercase"
        >View Projects</RouterLink>
    <Socials class="mt-auto mb-0"/>
    </div>
  <svg width="5" height="116" viewBox="0 0 5 116" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute mx-auto transform translate-x-1/2 top-[93%] left-1/2 z-[2]">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66675 0.85498H2.77786V114.86H1.66675V0.85498Z" fill="#CCBB99" stroke="#CCBB99"/>
  </svg> 
 </section>

</template>
  