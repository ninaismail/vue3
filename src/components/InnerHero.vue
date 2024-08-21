<script setup>
defineProps({
    pagebanner: String,
    pagetitle: String,
    pagedescription: String,
})
</script>
<template>
  <section class="relative flex flex-col items-center justify-center mt-[86px] min-h-[80vh]">
    <img :src="pagebanner" :alt="'Bissar Concepts - ' + pagetitle" width="1440" height="639" responsive loading="eager" class="aspect-2.25/1 absolute inset-0 z-[-1] object-center object-cover w-full h-full"/>
    <div class="absolute w-11/12 mx-auto space-y-3 2xl:w-8/12 lg:w-10/12 md:transform md:-translate-y-1/2 md:top-1/2 top-2/3 -translate-y-2/3">
      <h1 class="text-white lg:text-[64px] md:text-[52px] text-[40px] font-[700] text-center">
          {{ pagetitle }}
      </h1>
      <p class="tracking-wide text-white font-[600] text-center lg:w-1/2 mx-auto">{{ pagedescription }}</p>          
    </div>
 </section>
</template>