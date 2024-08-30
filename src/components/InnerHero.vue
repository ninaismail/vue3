<script setup>
defineProps({
    item:Array,
    isProject: Boolean,
    collabs: Boolean,
})
</script>

<template>
<section class="relative w-full h-full flex items-center justify-center lg:mt-[86px] mt-[74px] aspect-2.25/1" width="1440" height="639" loading="eager" decoding="async"
  :style="{ backgroundImage: isProject ? `url(${item.banner})` : `url(${item.image})`, backgroundSize:'cover', backgroundPosition: collabs ?  'bottom' : 'center', backgroundSize: 'cover', imageRendering: 'crisp-edges', imageResolution: '300dpi' }">
   <div class="w-full h-full absolute inset-0 bg-[#000000]/50 z-1"/>
  <div class="relative flex flex-col items-center justify-center w-11/12 h-full mx-auto space-y-3 text-center sm:space-y-3 2xl:w-8/12 lg:w-10/12">
      <h1 class="text-white uppercase lg:text-[48px] md:text-[32px] text-[12px] font-[700] leading-tight">
        {{ item.title }}
      </h1>
      <p v-if="isProject" class="tracking-wide text-white font-[600] max-sm:text-[10px] w-3/4 mx-auto 2xl:w-1/2">
        {{ item.location }}&nbsp;{{ item.year }}
      </p>
      <p v-else class="tracking-wide text-white font-[600] max-sm:text-[10px] w-3/4 mx-auto 2xl:w-1/2">
        {{ item.description }}
      </p>
    </div>
 </section>
</template>