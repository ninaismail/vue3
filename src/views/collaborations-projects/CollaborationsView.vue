<script setup>
import InnerHero from '../../components/InnerHero.vue'
import Tabs from '../../components/Tabs.vue';
import { ref, onMounted } from 'vue';
import { getCollaborationProjects, getCollaborationPageBanner } from '../../utils/laravel_api_functions';

const banner = ref([]);

const projects = ref([]);
const uniqueCategories = ref([]);

const fetchHero = async () => {
  banner.value = await getCollaborationPageBanner(); // Fetching projects
  console.log(banner.value[0]);
};

const fetchData = async () => {
  projects.value = await getCollaborationProjects(); // Fetching projects
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
        <title>Bissar Consepts - Collaborations</title>
    </head>
    <div v-if="banner[0]">
      <InnerHero :item="banner[0]" collabs :isProject="false"/>
    </div>
  <!-- Conditional rendering to ensure data is loaded -->
  <div v-if="projects.length > 0 && uniqueCategories.length > 0">
    <Tabs :data="projects" :categories="uniqueCategories" :bg="collaborations" title="Where Vision Takes Form." description="We have collaborated with global talented craftsmen to breathe life into our designs." :limit="4" cat="collabs"/>
  </div>
</template>

