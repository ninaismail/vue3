<script setup>
defineProps({
    pagebanner: String,
    pagetitle: String,
    pagedescription: String,
})
</script>
<template>
  <section class="relative flex flex-col items-center justify-center mt-[86px] lg:min-h-[70vh] sm:min-h-[40vh] min-h-full sm:mb-0 mb-28">
    <img :src="pagebanner" :alt="'Bissar Concepts - ' + pagetitle" width="1440" height="639" loading="eager" class="aspect-2.25/1 absolute inset-0 z-[-1] object-center object-cover 2xl:w-full 2xl:h-full"/>
    <div class="absolute w-11/12 mx-auto transform sm:space-y-3 2xl:w-8/12 lg:w-10/12 md:-translate-y-1/2 md:top-1/2 top-2/3 -translate-y-2/3">
      <h1 class="text-white uppercase lg:text-[48px] md:text-[32px] text-[14px] text-center font-[700] leading-tight">
        {{ pagetitle }}
      </h1>
      <p class="tracking-wide text-white font-[600] max-sm:text-[10px] text-center 2xl:w-1/2 w-3/4 mx-auto">{{ pagedescription }}</p>          
    </div>
 </section>
</template>