<script setup>
import RelatedProjects from '../../components/RelatedProjects.vue';
import InnerHero from '../../components/InnerHero.vue';
import ProjectDetails from '../../components/ProjectDetails.vue'
import ProjectsCarousel from '../../components/ProjectsCarousel.vue'
import { getCollabsProjects } from '../../utils/api_function'
import { useRoute } from 'vue-router'

const route = useRoute()

const projects = getCollabsProjects();
console.log(projects)
</script>
<template>
  <ProjectsCarousel :data="projects" :initialSlug="route.params.slug">
    <template #default="{ item }">
      <InnerHero :pagebanner="item.banner" :pagetitle="item.title" 
      :pagedescription="item.location + ' ' + item.year"/>
      <ProjectDetails :item="item" />
      <RelatedProjects :data="projects" :filter="item.location"/>
    </template>
  </ProjectsCarousel>
</template>