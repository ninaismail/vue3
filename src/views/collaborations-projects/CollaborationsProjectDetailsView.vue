<script setup>
import ProjectsCarousel from '../../components/ProjectsCarousel.vue'
import { getCollabsProjects } from '../../utils/api_function'
import { useRoute } from 'vue-router'

const route = useRoute()

const projects = getCollabsProjects();
console.log(projects)
</script>
<template>
  <ProjectsCarousel :data="projects" :initialSlug="route.params.slug"/>
</template>