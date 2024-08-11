<script setup>
import InnerHero from '../../components/InnerHero.vue';
import banner from '/images/innerhero/projectdetails.webp'
import ProjectsCarousel from '../../components/ProjectsCarousel.vue';
import ProjectDetails from '../../components/ProjectDetails.vue'
import { getCollabsProjects, getCollabsProjectBySlug } from '../../utils/api_function'
import { useRoute } from 'vue-router'

const route = useRoute()

const projects = getCollabsProjects();
const collabproject = getCollabsProjectBySlug(route.params.slug);

</script>
<template>
    <InnerHero :pagebanner="banner" :pagetitle="collabproject.title" 
    :pagedescription="collabproject.location + ' ' + collabproject.year"/>
    <ProjectsCarousel :data="projects" :initialSlug="route.params.slug">
    <template #default="{ item }">
      <ProjectDetails :item="item" />
    </template>
  </ProjectsCarousel>
</template>