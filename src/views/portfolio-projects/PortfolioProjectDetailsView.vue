<script setup>
import ProjectsCarousel from '../../components/ProjectsCarousel.vue'
import {  getProtfolioProjectss } from '../../utils/laravel_api_functions'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue';

const projects = ref([]);

const fetchData = async () => {
  projects.value = await getProtfolioProjectss(); // Fetching projects
};
console.log(projects.value);

onMounted(() => {
  fetchData();
});

const route = useRoute()
</script>
<template>
<div v-if="projects.length > 0">
  <ProjectsCarousel :route="route" :data="projects" :initialSlug="route.params.slug" cat="portfolio"/>
</div>
</template>