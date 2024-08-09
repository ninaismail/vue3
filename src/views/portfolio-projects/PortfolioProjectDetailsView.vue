<script setup>
import ProjectDetails from '../../components/ProjectDetails.vue'
import { getPortfolioProjectBySlug } from '../../utils/api_function'
import { useRoute } from 'vue-router'

const route = useRoute()

const portfolioproject = getPortfolioProjectBySlug(route.params.slug)
</script>
<template>
    <ProjectDetails :item="portfolioproject"/>
</template>