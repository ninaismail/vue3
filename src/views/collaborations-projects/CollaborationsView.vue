<script setup>
import InnerHero from '../../components/InnerHero.vue'
import banner from '/images/innerhero/collaborations.webp'
import collaborations from '/images/backgrounds/suppliers.webp'
import Tabs from '../../components/Tabs.vue';
import { getCollabsProjects } from '../../utils/api_function';


const projects = getCollabsProjects();

// Extract the categories from the projects and then create a Set to get unique categories
let uniqueTypes = [...new Set(projects.map(project => project.type))];

console.log(uniqueTypes);
</script>
<template>
    <InnerHero :pagebanner="banner" pagetitle="Collaborations" 
    pagedescription="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. inventore veritatis "/>
    <Tabs :data="projects" :uniqueTypes="uniqueTypes" :bg="collaborations" title="Where Vision Takes Form." description="We have collaborated with global talented craftsmen to breathe life into our designs."/>
</template>

