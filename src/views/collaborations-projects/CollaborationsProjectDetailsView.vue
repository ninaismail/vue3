<script setup>
import ProjectDetails from '../../components/ProjectDetails.vue'
import { getCollabsProjectBySlug } from '../../utils/api_function'
import { useRoute } from 'vue-router'

const route = useRoute()

const portfolioproject = getCollabsProjectBySlug(route.params.slug)
</script>
<template>
    <ProjectDetails :item="portfolioproject"/>
</template>