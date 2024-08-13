<script setup>
import ProjectsCarousel from '../../components/ProjectsCarousel.vue'
import {  getProtfolioProjects } from '../../utils/api_function'
import { useRoute } from 'vue-router'

const route = useRoute()

const projects = getProtfolioProjects();
console.log(projects)
</script>
<template>
  <ProjectsCarousel :data="projects" :initialSlug="route.params.slug" cat="portfolio"/>
</template>