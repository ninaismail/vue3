<script setup>
import { RouterLink } from 'vue-router'

</script>
<template>
    <section class="relative flex flex-col items-center justify-center w-full h-full py-20 sm:py-40">
        <img src="/images/backgrounds/about.webp" alt="About Bissar Concepts" width="1214" height="152" center cover responsive loading="lazy" class="absolute top-14"/>
        <div class="flex flex-wrap items-center justify-between w-10/12 h-full gap-6 mx-auto 2xl:w-8/12 lg:gap-0">
            <div class="flex flex-col justify-between w-full lg:w-7/12">
                <div class="space-y-3 mb-[64px]">
                    <h1 class="lg:text-[36px] text-[28px] md:text-[32px] font-[700]">
                        Creating Bespoke Spaces that are Distinctive, Compelling and Timeless.
                    </h1>
                    <p class="tracking-wide font-[600] text-justify">With hundreds of projects spanning across the Gulf Cooperation council (GCC),
                        mainly KSA & UAE, Levant North Africa and Europe.</p>          
                </div>
                <RouterLink
                id="go-to-portfolio-page"
                aria-label="go to portfolio page"
                to="/portfolio"
                :activeClass="'text-white bg-olive'"
                :exactActiveClass="'text-white bg-olive'"
                class="w-fit cursor-pointer px-4 py-3 font-[400] text-center rounded-[2px] bg-gold hover:bg-olive hover:text-white uppercase"
                >discover more</RouterLink>
            </div>
            <div class="w-full lg:w-5/12">
                <img src="/images/about/self_portrait.webp" alt="Bissar Concepts" width="367" height="441" center cover responsive loading="lazy" class="relative mx-auto md:ms-auto md:me-0 z-1"/>
            </div>
        </div>
    </section>
</template>