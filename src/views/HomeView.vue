<script setup>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Styles from '../components/Styles.vue'
import Skills from '../components/Skills.vue'

import { ref, onMounted } from 'vue';
import { getHomePageBanner, getStyles } from '../utils/laravel_api_functions';

const banner = ref([]);
const styles = ref([]);

const fetchHero = async () => {
  banner.value = await getHomePageBanner();
  console.log(banner.value[0]);
};
const fetchData = async () => {
  styles.value = await getStyles();
};

onMounted(() => {
  fetchHero();
  fetchData();
});

</script>
<template>
  <head>  
      <title>Bissar Consepts</title>
    </head>
  <main>
    <div v-if="banner[0]">
    <Hero :item="banner[0]"/>
    </div>
    <About/>
    <div v-if="styles.length > 0">
      <Styles :data="styles"/>
    </div>
    <Skills :bg="bg" title="Share with us your own personal touch" subtitle="we’ll make a world of it!"/>
  </main>
</template>
