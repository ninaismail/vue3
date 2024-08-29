<script setup>
import InnerHero from '../../components/InnerHero.vue'
import banner from '/images/innerhero/100.jpg'
import works from '/images/backgrounds/works.webp'
import Tabs from '../../components/Tabs.vue';
import { ref, onMounted } from 'vue';
import { getProtfolioProjectss } from '../../utils/laravel_api_functions'; // Fixed function name

const projects = ref([]);
const uniqueTypes = ref([]);

const fetchData = async () => {
  projects.value = await getProtfolioProjectss(); // Fetching projects
  if (projects.value.length > 0) {
    uniqueTypes.value = [...new Set(projects.value.map(project => project.category))];
  }
};
console.log(projects.value);
console.log(uniqueTypes.value);

onMounted(() => {
  fetchData();
});

</script>
<template>
    <head>  
        <title>Bissar Consepts - Portfolio</title>
        <!-- Facebook Meta Tags -->
      <meta property="og:title" content="Bissar Consepts - Portfolio">

      <!-- Twitter Meta Tags -->
      <meta name="twitter:title" content="Bissar Consepts - Portfolio">
  
    </head>
    <InnerHero :pagebanner="banner" pagetitle="Your sanctuary. Your vision." 
    pagedescription="We design your dream house to your vision and design palette, ultimately creating a space that reflects your character."/>
    <Tabs :data="projects" :uniqueTypes="uniqueTypes" :bg="works" title="Your sanctuary, our vision." :limit="6" cat="portfolio" />
</template>

