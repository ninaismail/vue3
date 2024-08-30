<script setup>
import InnerHero from '../../components/InnerHero.vue'
import banner from '/images/innerhero/001.jpg'
import collaborations from '/images/backgrounds/suppliers.webp'
import Tabs from '../../components/Tabs.vue';
import { ref, onMounted } from 'vue';
import { getCollaborationProjects } from '../../utils/laravel_api_functions';

const projects = ref([]);
const uniqueCategories = ref([]);

const fetchData = async () => {
  projects.value = await getCollaborationProjects(); // Fetching projects
  if (projects.value.length > 0) {
    uniqueCategories.value = [...new Set(projects.value.map(project => project.category))];
  }
};
console.log(projects.value);
console.log(uniqueCategories.value);

onMounted(() => {
  fetchData();
});

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
  <!-- Conditional rendering to ensure data is loaded -->
  <div v-if="projects.length > 0 && uniqueCategories.length > 0">
    <Tabs :data="projects" :categories="uniqueCategories" :bg="collaborations" title="Where Vision Takes Form." description="We have collaborated with global talented craftsmen to breathe life into our designs." :limit="4" cat="collabs"/>
  </div>
</template>

