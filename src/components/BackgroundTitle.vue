<script setup>
defineProps({
    bg: String,
    title: String,
    subtitle: String,
})
</script>
<template>
    <div class="relative w-full h-full mx-auto">
        <div class="space-y-3 absolute w-full -bottom-5 left-1/2 transform -translate-x-1/2 z-[2]">
            <h1 v-if="title" class="lg:text-[36px] text-center text-[28px] md:text-[32px] font-[700] mx-auto lg:w-2/3">
                {{ title }}
            </h1>
            <h2 v-if="subtitle" class="tracking-wide lg:text-[24px] md:text-[20px] text-[18px] font-[400] text-center mx-auto lg:w-2/3">{{ subtitle }}</h2>   
        </div>
    </div>
</template>