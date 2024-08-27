<script setup>
import InnerHero from '../../components/InnerHero.vue'
import banner from '/images/innerhero/100.jpg'
import works from '/images/backgrounds/works.webp'
import Tabs from '../../components/Tabs.vue';
import { getProtfolioProjects } from '../../utils/api_function';


const projects = getProtfolioProjects();

// Extract the categories from the projects and then create a Set to get unique categories
let uniqueTypes = [...new Set(projects.map(project => project.type))];

console.log(uniqueTypes);

</script>
<template>
    <InnerHero :pagebanner="banner" pagetitle="Your sanctuary. Your vision." 
    pagedescription="We design your dream house to your vision and design palette, ultimately creating a space that reflects your character."/>
    <Tabs :data="projects" :uniqueTypes="uniqueTypes" :bg="works" title="Your sanctuary, our vision." :limit="6" cat="portfolio" />
</template>

