<script setup>
defineProps({
    bg: String,
    title: String,
    subtitle: String,
})
</script>
<template>
    <div class="relative mb-[64px] mx-auto">
        <img :src="bg" :alt="'Bissar Concepts - ' + title" width="1214" height="152" center cover responsive loading="lazy" class="mx-auto"/>
        <h1 v-if="title" class="lg:text-[32px] text-[28px] font-[700] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]">
            {{ title }}
        </h1>
        <h2 v-if="subtitle" class="tracking-wide text-white font-[600] text-justify" style="text-align-last: center;">{{ subtitle }}</h2>   
    </div>
</template>