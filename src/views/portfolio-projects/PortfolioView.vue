<script setup>
import InnerHero from '../../components/InnerHero.vue'
import banner from '/images_v1/innerhero/100.jpg'
import Tabs from '../../components/Tabs.vue';
import { ref, onMounted } from 'vue';
import { getProtfolioProjectss, getPortfolioPageBanner } from '../../utils/laravel_api_functions'; // Fixed function name

const banner = ref([]);

const projects = ref([]);
const uniqueCategories = ref([]);

const fetchHero = async () => {
  banner.value = await getPortfolioPageBanner(); // Fetching projects
  console.log(banner.value[0]);
};

const fetchData = async () => {
  projects.value = await getProtfolioProjectss(); // Fetching projects
  if (projects.value.length > 0) {
    uniqueCategories.value = [...new Set(projects.value.map(project => project.category))];
  }
};
console.log(projects.value);
console.log(uniqueCategories.value);

onMounted(() => {
  fetchHero();
  fetchData();
});

</script>
<template>
    <head>  
        <title>Bissar Consepts - Portfolio</title>
    </head>
    <div v-if="banner[0]">
    <InnerHero :item="banner[0]" :isProject="false"/>
    </div>

    
  <!-- Conditional rendering to ensure data is loaded -->
  <div v-if="projects.length > 0 && uniqueCategories.length > 0">
    <Tabs :data="projects" :categories="uniqueCategories" :bg="works" title="Your sanctuary, our vision." :limit="6" cat="portfolio" />
  </div>
</template>

