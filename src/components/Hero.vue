<script setup>
import Socials from '../components/Socials.vue'

</script>
<template>
  <section class="relative flex flex-col justify-center w-full 2xl:min-h-screen h-full items-between mt-[86px] bg-cover bg-center aspect-2/1 bg-hero">
    <!-- <img src="/images/hero/hero.webp" alt="Bissar Concepts" loading="eager" class="aspect-[2/1] absolute inset-0 z-[-1] w-full h-full"/> -->
    <div class="flex flex-col w-11/12 h-full py-40 mx-auto lg:w-10/12">
      <div class="sm:space-y-3 2xl:mb-[64px] mb-[32px]">
        <h1 class="text-white uppercase lg:text-[48px] md:text-[32px] text-[14px] font-[700] leading-tight">
          Home <br class="max-lg:hidden"/>of Luxury
        </h1>
        <p class="tracking-wide text-white font-[600] max-sm:text-[10px] md:w-80 sm:w-1/2 w-3/4 italic">"Luxury is when it seems flawless, when you reach the right balance between all elements. Understated theatricality – that is what my luxury is all about."<br/> Jean-Louis Deniot</p>          
      </div>
      <RouterLink
        id="go-to-portfolio-page"
        aria-label="go to portfolio page"
        to="/portfolio"
        :activeClass="'bg-olive text-white'"
        :exactActiveClass="'bg-olive text-white'"
        class="w-fit cursor-pointer px-4 py-3 mb-2 font-[400] text-center rounded-[2px] bg-white hover:bg-olive hover:text-white uppercase"
        >View Projects</RouterLink>
    <Socials class="mt-auto mb-10"/>
    </div>
  <svg width="5" height="116" viewBox="0 0 5 116" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute mx-auto transform translate-x-1/2 top-[93%] left-1/2 z-[2]">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66675 0.85498H2.77786V114.86H1.66675V0.85498Z" fill="#CCBB99" stroke="#CCBB99"/>
  </svg> 
 </section>

</template>
  