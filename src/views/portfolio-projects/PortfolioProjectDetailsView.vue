<script setup>
import InnerHero from '../../components/InnerHero.vue';
import banner from '/images/innerhero/projectdetails.webp'
import ProjectDetails from '../../components/ProjectDetails.vue'
import ProjectsCarousel from '../../components/ProjectsCarousel.vue'
import { getProtfolioProjects, getPortfolioProjectBySlug } from '../../utils/api_function'
import { useRoute } from 'vue-router'

const route = useRoute()

const projects = getProtfolioProjects();
const portfolioproject = getPortfolioProjectBySlug(route.params.slug);

</script>
<template>
    <InnerHero :pagebanner="banner" :pagetitle="portfolioproject.title" 
    :pagedescription="portfolioproject.location + ' ' + portfolioproject.year"/>
    <ProjectsCarousel :data="projects" :initialSlug="route.params.slug">
    <template #default="{ item }">
      <ProjectDetails :item="item" />
    </template>
  </ProjectsCarousel>
</template>