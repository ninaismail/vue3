<script setup>
import InnerHero from '../../components/InnerHero.vue'
import banner from '/images/innerhero/001.jpg'
import collaborations from '/images/backgrounds/suppliers.webp'
import Tabs from '../../components/Tabs.vue';
import { getCollabsProjects } from '../../utils/api_function';


const projects = getCollabsProjects();

// Extract the categories from the projects and then create a Set to get unique categories
let uniqueTypes = [...new Set(projects.map(project => project.type))];

console.log(uniqueTypes);
</script>
<template>
        <head>  
        <title>Bissar Consepts - Collaborations</title>
        <!-- Facebook Meta Tags -->
      <meta property="og:title" content="Bissar Consepts - Collaborations">

      <!-- Twitter Meta Tags -->
      <meta name="twitter:title" content="Bissar Consepts - Collaborations">
  
    </head>
    <InnerHero :pagebanner="banner" pagetitle="Bringing our vision to life" collabs
    pagedescription="We have collaborated with talented designers, merging our creative visions to design something truly exquisite."/>
    <Tabs :data="projects" :uniqueTypes="uniqueTypes" :bg="collaborations" title="Where Vision Takes Form." description="We have collaborated with global talented craftsmen to breathe life into our designs." :limit="4" cat="collabs"/>
</template>

