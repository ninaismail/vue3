<script setup>
import { RouterLink } from 'vue-router'

</script>
<template>
    <section class="relative flex flex-col items-center justify-center w-11/12 py-20 mx-auto 2xl:w-8/12 lg:w-10/12 sm:py-40">
        <div class="flex flex-wrap items-center justify-between w-full h-full gap-6 mx-auto lg:gap-0">
            <div class="flex flex-col justify-between w-full lg:w-7/12">
                <div class="space-y-3 2xl:mb-[64px] mb-[32px] ">
                    <h1 class="lg:text-[36px] text-[28px] md:text-[32px] font-[700] leading-tight">
                        Creating Bespoke Spaces that are Distinctive, Compelling and Timeless.
                    </h1>
                    <p class="tracking-wide font-[600] text-justify">
                        Armed with boundless creativity and an unwavering passion for interior design, Zaher Bissar embarked on a journey back in 2014, founding Bissar Concepts. His commitment to crafting spaces that echo an artistic vision and a relentless pursuit of beauty has captivated clients and admirers alike.
                    </p>          
                </div>
                <RouterLink
                id="go-to-editorial-page-beihind-the-brand"
                aria-label="go to editorial page behind the brand section"
                to="/editorial#beihind-the-brand"
                :activeClass="'text-white bg-olive'"
                :exactActiveClass="'text-white bg-olive'"
                class="w-fit cursor-pointer px-4 py-3 font-[400] text-center rounded-[2px] bg-gold hover:bg-olive transition-all duration-400  hover:text-white uppercase"
                >discover more</RouterLink>
            </div>
            <div class="w-full lg:w-5/12">
                <img src="/images/about/self_portrait.webp" alt="Bissar Concepts" width="367" height="441" center cover responsive loading="lazy" class="relative mx-auto md:ms-auto md:me-0 z-1"/>
            </div>
        </div>
    </section>
</template>