<script setup>
defineProps({
    pagebanner: String,
    pagetitle: String,
    pagedescription: String,
})
</script>

<template>
  <section class="relative flex items-center justify-center lg:mt-[86px] mt-[74px] min-h-[150px] xs:min-h-[300px] md:min-h-[500px] lg:min-h-[60vh] 2xl:min-h-[70vh]">
    <img 
      :src="pagebanner" 
      :alt="'Bissar Concepts - ' + pagetitle" 
      width="1440" 
      height="639" 
      loading="eager" 
      class="absolute inset-0 object-cover object-center z-[-1] h-full w-full aspect-2.25/1"
    />
    <div class="relative left-0 flex flex-col items-center justify-center w-11/12 h-full mx-auto space-y-3 text-center transform top-1/2 sm:space-y-3 2xl:w-8/12 lg:w-10/12">
      <h1 class="text-white uppercase lg:text-[48px] md:text-[32px] text-[12px] font-[700] leading-tight">
        {{ pagetitle }}
      </h1>
      <p class="tracking-wide text-white font-[600] max-sm:text-[10px] w-3/4 mx-auto 2xl:w-1/2">
        {{ pagedescription }}
      </p>
    </div>
 </section>
</template>