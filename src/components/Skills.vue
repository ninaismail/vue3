<script setup>
import BackgroundTitle from './BackgroundTitle.vue';
defineProps({
    bg: String,
    title: String,
    subtitle: String,
})
</script>

<template>
    <section id="skills" class="relative flex flex-col items-center justify-center w-11/12 h-full min-h-screen gap-10 py-20 mx-auto 2xl:w-8/12 lg:w-10/12">
        <BackgroundTitle :bg="bg" :title="title" :subtitle="subtitle" />
        <div class="grid grid-cols-1 gap-6 mx-auto lg:grid-cols-3 md:grid-cols-2">
            <img src="/images/skills/skills1.webp" alt="Bissar Concepts" width="340" height="348" center cover responsive loading="lazy" class="mx-auto aspect-square rounded-[2px]"/>
            <div class="flex flex-col items-center justify-center gap-2 border-4 border-accent2 max-w-[340px] max-h-[348px] aspect-square rounded-[2px] mx-auto">
                <div class="flex flex-col items-center justify-center gap-3 px-6 mx-auto space-y-3">
                    <h1 class="lg:text-[24px] md:text-[20px] text-[18px] font-[700]">
                        Custom Designs
                    </h1>
                    <p class="tracking-wide hyphens font-[600] text-center">Our services uplift your home
                    with a touch of luxury and
                    sophistication.
                    </p>          
                </div>
            </div>
            <img src="/images/skills/skills2.webp" alt="Bissar Concepts" width="340" height="348" center cover responsive loading="lazy"  class="mx-auto aspect-square rounded-[2px]"/>

            <div class="flex flex-col items-center justify-center gap-2 border-4 border-accent2 max-w-[340px] max-h-[348px] aspect-square rounded-[2px] mx-auto">
                <div class="flex flex-col items-center justify-center gap-3 px-6 mx-auto space-y-3">
                    <h1 class="lg:text-[24px] md:text-[20px] text-[18px] font-[700]">
                        Exquisite Furniture
                    </h1>
                    <p class="tracking-wide hyphens font-[600] text-center">From the world to your home, our curated furniture selection elevates your space.</p>          
               </div>
            </div>
            <img src="/images/skills/skills3.webp" alt="Bissar Concepts" width="340" height="348" center cover responsive loading="lazy" class="mx-auto aspect-square rounded-[2px]"/>
            <div class="flex flex-col items-center justify-center gap-2 border-4 border-accent2 max-w-[340px] max-h-[348px] aspect-square rounded-[2px] mx-auto">
                <div class="flex flex-col items-center justify-center gap-3 px-6 mx-auto space-y-3 text-center">
                    <h1 class="lg:text-[24px] md:text-[20px] text-[18px] font-[700]">
                        Luxury Homes Contract
                    </h1>
                    <p class="tracking-wide hyphens font-[600] text-center">Adding the last touches to your home with an eye for detail and high-end finishing. </p>          
              </div>
            </div>
        </div>
    </section>
</template>